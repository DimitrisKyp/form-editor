let formSelection = "";
let formFileName = "";

window.onload = function () {
  let year = new Date().getFullYear();
  let footerLink = document.querySelector(".footer-link");
  footerLink.innerHTML = `© ${year} Copyright <a href="https://olympia-electronics.gr/" target="_blank">olympia-electronics.gr</a>`;
};

function SelectForm() {
  formSelection = document.querySelector(".form-selection");
  formSelection.removeAttribute("hidden");
}

function loadForm(FileName) {
  let exportBtn = document.getElementById("export-btn");
  exportBtn.removeAttribute("disabled");
  let submitBtn = document.getElementById("submit-btn");
  submitBtn.removeAttribute("disabled");
  formFileName = FileName;

  // const inputElements = document.querySelectorAll("input");
  // inputElements.forEach((input) => {
  //   input.removeEventListener("input", saveToLocalStorage);
  // });

  // const storedData = localStorage.getItem("userInputs");
  // const parsedData = JSON.parse(storedData);

  fetch(`${FileName}.html`)
    .then((response) => response.text())
    .then((htmlContent) => {
      document.querySelector(".form-container").innerHTML = htmlContent;
      flatpickr("input[type=datetime-local]", { dateFormat: "d/m/Y" });

      // const inputElements = document.querySelectorAll("input");
      // inputElements.forEach((input) => {
      //   const inputId = input.getAttribute("id");
      //   if (parsedData && parsedData[inputId]) {
      //     input.value = parsedData[inputId];
      //   }

      //   input.addEventListener("input", saveToLocalStorage);
      // });
    })
    .catch((error) => console.error(error));
}

function submitForm() {
  if (formFileName === "form-1") {
    submitForm1();
  } else if (formFileName === "form-2") {
    submitForm2();
  }
}

// function saveToLocalStorage() {
//   const body = {
//     order_number: document.getElementById("order_number").value,
//     production_method: document.getElementById("production_method").value,
//     receipt_order_date: document.getElementById("receipt_order_date").value,
//     execution_order_date: document.getElementById("execution_order_date").value,
//     software_version_number: document.getElementById("software_version_number").value,
//     client: document.getElementById("client").value,
//     quantities: document.getElementById("quantities").value,
//     product_description: document.getElementById("product_description").value,
//     item_code: document.getElementById("item_code").value,
//     board_number: document.getElementById("board_number").value,
//   };

//   localStorage.setItem("userInputs", JSON.stringify(data));
// }

async function exportPdf() {
  if (formFileName === "form-1.html") {
    let options = {
      filename: "Form One.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    let form1 = document.getElementById("form-1");
    html2pdf().set(options).from(form1).save();
  } else if (formFileName === "form-2.html") {
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
