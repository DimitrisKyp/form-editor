let newFormName = "";
let editFormName = "form_1";
let dataTable = null;
let flatpickrInstance = null;
let rowdata = "";

window.onload = function () {
  footer();
  EditForm(editFormName);
  document.getElementById("registered-forms").addEventListener("change", function () {
      editFormName = this.value;
      EditForm(editFormName);
    });

  document.getElementById("create-forms").addEventListener("change", function () {
      newFormName = this.value;
      fetchClearHtml(); 
    });

  document.addEventListener("click", function (e) {
    if (!e.target.closest("#formModal .modal-content")) {
      $("#formModal").modal("hide");
    }
  });

  document.addEventListener("keyup", function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
      $("#formModal").modal("hide");
    }
  });
};

//edit forms
function EditForm(formName) {
  fetch(`load-form-data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formName }),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error. Status: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      let columns = [];

      for (let key in data[0]) {
        columns.push({ data: key, title: key });
      }

      if (dataTable) {
        $("#datatable").DataTable().destroy();
        $("#datatable").empty();
      }

      dataTable = $("#datatable").DataTable({
        data: data,
        columns: columns,
        scrollX: true,
        lengthMenu: [5, 10, 20, 50, 100],
      });

      $("#datatable tbody").on("dblclick", "tr", async function () {
        rowdata = await dataTable.row(this).data();
        $("#formModal").modal("show");
      });

      $("#formModal").on("show.bs.modal", function () {
        document.getElementById("create-forms").selectedIndex = 0;
        document.querySelector(".form-container").innerHTML = "";
        fetchHtml();
      });

    })
    .catch((err) => console.error(`Error submitting form: ${err}`));
}

function fetchHtml() {
  fetch(`${editFormName}.html`)
    .then((response) => response.text())
    .then((htmlContent) => {
      document.querySelector(".modal-form-container").innerHTML = htmlContent;
      flatpickr("input[type=datetime-local]", { dateFormat: "d/m/Y" });
      fetchFormData();
    })
    .catch((error) => console.error(error));
}

function fetchFormData() {
  if (editFormName === "form_1") {
    fetchForm1(rowdata);
  } else if (editFormName === "form_2") {
    fetchForm2(rowdata);
  }
}

function updateForm() {
  if (editFormName === "form_1") {
    submitForm1(rowdata.Id);
  } else if (editFormName === "form_2") {
    submitForm2(rowdata.Id);
  }
  $("#formModal").modal("hide");

}

//create new forms
function fetchClearHtml() {
  let exportBtn = document.getElementById("export-btn");
  let submitBtn = document.getElementById("submit-btn");
  exportBtn.removeAttribute("disabled");
  submitBtn.removeAttribute("disabled");
  if (newFormName === "") {
    document.querySelector(".form-container").innerHTML = "";
  } else {
    fetch(`${newFormName}.html`)
      .then((response) => response.text())
      .then((htmlContent) => {
        document.querySelector(".form-container").innerHTML = htmlContent;
        flatpickr("input[type=datetime-local]", { dateFormat: "d/m/Y" });
      })
      .catch((error) => console.error(error));
  }
}

function submitForm() {
  if (newFormName === "form_1") {
    submitForm1("");
  } else if (newFormName === "form_2") {
    submitForm2("");
  }
}

async function exportPdf() {
  if (newFormName === "form_1") {
    let options = {
      filename: "Form One.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    let form1 = document.getElementById("form-1");
    html2pdf().set(options).from(form1).save();
  } else if (newFormName === "form_2") {
    let options = {
      filename: "Form Two.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    let form2 = document.getElementById("form-2");
    html2pdf().set(options).from(form2).save();
  }
}