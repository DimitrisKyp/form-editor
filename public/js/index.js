let newFormName = "";
let editFormName = "form_1";
let dataTable = null;
let rowdata = "";

window.onload = function () {
  footer();
  EditForm(editFormName);
  setupEventListeners();
};

function setupEventListeners() {
  document
    .getElementById("registered-forms")
    .addEventListener("change", handleFormChange);
  document
    .getElementById("new-forms")
    .addEventListener("change", handleNewFormChange);

  // document.addEventListener("click", closeModalOnOutsideClick);
  document.addEventListener("keyup", closeModalOnEscape);
}

function handleFormChange() {
  editFormName = this.value;
  EditForm(editFormName);
}

function handleNewFormChange() {
  newFormName = this.value;
  fetchClearHtml();
}

// function closeModalOnOutsideClick(e) {
//     if (!e.target.closest("#editFormModal .modal-content")) {
//       $("#editFormModal").modal("hide");
//     } 
// }

function closeModalOnEscape(e) {
  if (e.key === "Escape" || e.key === "Esc") {
    $("#editFormModal").modal("hide");
    $("#newFormModal").modal("hide");
  }
}
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
      renderDataTable(data);
    })
    .catch((err) => console.error(`Error submitting form: ${err}`));
}

function renderDataTable(data) {
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
    $("#editFormModal").modal("show");
    fetchHtml();
  });
}

function fetchHtml() {
  fetch(`${editFormName}.html`)
    .then((response) => response.text())
    .then((htmlContent) => {
      document.querySelector(".edit-form-container").innerHTML = htmlContent;
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
  $("#editFormModal").modal("hide");
}

//create new forms
function fetchClearHtml() {
  $("#newFormModal").modal("show");

  if (newFormName === "") {
    return;
  } else {
    fetch(`${newFormName}.html`)
      .then((response) => response.text())
      .then((htmlContent) => {
        document.querySelector(".new-form-container").innerHTML = htmlContent;
        flatpickr("input[type=datetime-local]", { dateFormat: "d/m/Y" });
      })
      .catch((error) => console.error(error));

    $("#newFormModal").on("hidden.bs.modal", function () {
      document.getElementById("new-forms").selectedIndex = 0;
      document.querySelector(".new-form-container").innerHTML = "";
    });
  }
}

function submitForm() {
  if (newFormName === "form_1") {
    submitForm1("");
  } else if (newFormName === "form_2") {
    submitForm2("");
  }
  $("#newFormModal").modal("hide");
}

function generatePdf(formName, filename) {
  let options = {
    filename: filename,
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 4 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  let form = document.getElementById(formName);
  html2pdf().set(options).from(form).save();
}

function NewFormPdf() {
  if (newFormName === "form_1") {
    generatePdf("form-1", "Form One.pdf");
  } else if (newFormName === "form_2") {
    generatePdf("form-2", "Form Two.pdf");
  }
}

function EditFormPdf() {
  if (editFormName === "form_1") {
    generatePdf("form-1", "Form One.pdf");
  } else if (editFormName === "form_2") {
    generatePdf("form-2", "Form Two.pdf");
  }
}
