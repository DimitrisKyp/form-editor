let newFormName = "";
let editFormName = "";
let dataTable = null;

window.onload = function () {
  footer();
};

function EditForm(formName) {
  SelectedFormLoaded = formName;

  fetch(`load-form-data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ SelectedFormLoaded }),
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
        lengthMenu: [10, 15, 20, 50, 100]
      });
    })
    .catch((err) => console.error(`Error submitting form: ${err}`));
}

function NewForm(formName) {
  let exportBtn = document.getElementById("export-btn");
  exportBtn.removeAttribute("disabled");
  let submitBtn = document.getElementById("submit-btn");
  submitBtn.removeAttribute("disabled");
  newFormName = formName;

  fetch(`${formName}.html`)
    .then((response) => response.text())
    .then((htmlContent) => {
      document.querySelector(".form-container").innerHTML = htmlContent;
      flatpickr("input[type=datetime-local]", { dateFormat: "d/m/Y" });
    })
    .catch((error) => console.error(error));
}

function SubmitForm() {
  if (newFormName === "form_1") {
    submitForm1();
  } else if (newFormName === "form_2") {
    submitForm2();
  }
}

async function ExportPdf() {
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

// function EditForm() {
//   const modalContainer = document.querySelector(".modal-container");
//   const closeModalBtn = document.getElementById("cancel-modal-btn");

//   modalContainer.classList.add("active");

//   function closeModalClick(e) {
//     if (!e.target.closest(".modal-content") || e.target === closeModalBtn) {
//       closeModal();
//     }
//   }

//   function closeModalEsc(e) {
//     if (e.key === "Escape") {
//       closeModal();
//     }
//   }

//   function closeModal() {
//     modalContainer.classList.remove("active");
//     closeModalBtn.removeEventListener("click", closeModal);
//     modalContainer.removeEventListener("click", closeModalClick);
//     document.removeEventListener("keyup", closeModalEsc);
//   }

//   closeModalBtn.addEventListener("click", closeModal);
//   modalContainer.addEventListener("click", closeModalClick);
//   document.addEventListener("keyup", closeModalEsc);
// }
