function submitForm1() {

  const body = {
    order_num: document.getElementById("order_num").value,
    production_method: document.getElementById("production_method").value,
    receipt_order_date: document.getElementById("receipt_order_date").value,
    execution_order_date: document.getElementById("execution_order_date").value,
    software_version: document.getElementById("software_version").value,
    client: document.getElementById("client").value,
    quantities: document.getElementById("quantities").value,
    product_description: document.getElementById("product_description").value,
    item_code: document.getElementById("item_code").value,
    PCB_num: document.getElementById("PCB_num").value,
    QC_controller: document.getElementById("QC_controller").value,
    QC_manager: document.getElementById("QC_manager").value,
    warehouse_forward: document.getElementById("warehouse_forward").value,
    board_visual_inspection: document.getElementById("board_visual_inspection").value,
    consumption_check: document.getElementById("consumption_check").value,
    output_check: document.getElementById("output_check").value,
    indicator_check: document.getElementById("indicator_check").value,
    image_check: document.getElementById("image_check").value,
    button_check: document.getElementById("button_check").value,
    stimulation_level_check: document.getElementById("stimulation_level_check").value,
    brightness_check: document.getElementById("brightness_check").value,
    led_check: document.getElementById("led_check").value,
    CPU_frequency_check: document.getElementById("CPU_frequency_check").value,
    interface_clamps_completeness_check: document.getElementById("interface_clamps_completeness_check").value,
    circuit_functionality: document.getElementById("circuit_functionality").value,
    sensors: document.getElementById("sensors").value,
    final_product_completeness: document.getElementById("final_product_completeness").value,
    instructions: document.getElementById("instructions").value,
    attachments: document.getElementById("attachments").value,
    stickers: document.getElementById("stickers").value,
    packaging: document.getElementById("packaging").value,
    serial_number_books_check: document.getElementById("serial_number_books_check").value,
    ground_continuity_check: document.getElementById("ground_continuity_check").value,
    dielectric_strength_check: document.getElementById("dielectric_strength_check").value,
    certification_mark: document.getElementById("certification_mark").value,
    Schuster_check: document.getElementById("Schuster_check").value,
    MCP_activation_pressure_check: document.getElementById("MCP_activation_pressure_check").value,
    MCP_impact_control: document.getElementById("MCP_impact_control").value,
    sound_level_control: document.getElementById("sound_level_control").value,
  };

  console.log("body", body);

  fetch("submit-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error. Status: ${res.status}`);
    })
    .catch((err) => console.error(`Error submiting form: ${err}`));
}

function submitForm2() {
    console.log("submit Form 2");
}
