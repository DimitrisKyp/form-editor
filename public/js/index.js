let formFileName = "";

window.onload = function () {
  console.log("hello");
  footer();
};

function EditForm() {
  const modalContainer = document.querySelector(".modal-container");
  const closeModalBtn = document.getElementById("cancel-modal-btn");

  modalContainer.classList.add("active");

  function closeModalClick(e) {
    if (!e.target.closest(".modal-content") || e.target === closeModalBtn) {
      closeModal();
    }
  }

  function closeModalEsc(e) {
    if (e.key === "Escape") {
      closeModal();
    }
  }

  function closeModal() {
    modalContainer.classList.remove("active");
    closeModalBtn.removeEventListener("click", closeModal);
    modalContainer.removeEventListener("click", closeModalClick);
    document.removeEventListener("keyup", closeModalEsc);
  }

  closeModalBtn.addEventListener("click", closeModal);
  modalContainer.addEventListener("click", closeModalClick);
  document.addEventListener("keyup", closeModalEsc);
}

function loadForm(FileName) {
  let exportBtn = document.getElementById("export-btn");
  exportBtn.removeAttribute("disabled");
  let submitBtn = document.getElementById("submit-btn");
  submitBtn.removeAttribute("disabled");
  formFileName = FileName;

  fetch(`${FileName}.html`)
    .then((response) => response.text())
    .then((htmlContent) => {
      document.querySelector(".form-container").innerHTML = htmlContent;
      flatpickr("input[type=datetime-local]", { dateFormat: "d/m/Y" });
    })
    .catch((error) => console.error(error));
}

function SubmitForm() {
  if (formFileName === "form_1") {
    submitForm1();
  } else if (formFileName === "form_2") {
    submitForm2();
  }
}

async function ExportPdf() {
  if (formFileName === "form_1") {
    let options = {
      filename: "Form One.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    let form1 = document.getElementById("form-1");
    html2pdf().set(options).from(form1).save();
  } else if (formFileName === "form_2") {
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
