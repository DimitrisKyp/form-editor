function submitForm1(formId) {

  const body = {
    Id: formId,
    Order_num: document.getElementById("order_num").value,
    Production_method: document.getElementById("production_method").value,
    Receipt_order_date: document.getElementById("receipt_order_date").value,
    Execution_order_date: document.getElementById("execution_order_date").value,
    Software_version: document.getElementById("software_version").value,
    Client: document.getElementById("client").value,
    Quantities: document.getElementById("quantities").value,
    Product_description: document.getElementById("product_description").value,
    Item_code: document.getElementById("item_code").value,
    PCB_num: document.getElementById("PCB_num").value,
    QC_controller: document.getElementById("QC_controller").value,
    QC_manager: document.getElementById("QC_manager").value,
    Warehouse_forward: document.getElementById("warehouse_forward").value,
    Board_visual_inspection: document.getElementById("board_visual_inspection").value,
    Consumption_check: document.getElementById("consumption_check").value,
    Output_check: document.getElementById("output_check").value,
    Indicator_check: document.getElementById("indicator_check").value,
    Image_check: document.getElementById("image_check").value,
    Button_check: document.getElementById("button_check").value,
    Stimulation_level_check: document.getElementById("stimulation_level_check").value,
    Brightness_check: document.getElementById("brightness_check").value,
    Led_check: document.getElementById("led_check").value,
    CPU_frequency_check: document.getElementById("CPU_frequency_check").value,
    Interface_clamps_completeness_check: document.getElementById("interface_clamps_completeness_check").value,
    Circuit_functionality: document.getElementById("circuit_functionality").value,
    Sensors: document.getElementById("sensors").value,
    Final_product_completeness: document.getElementById("final_product_completeness").value,
    Instructions: document.getElementById("instructions").value,
    Attachments: document.getElementById("attachments").value,
    Stickers: document.getElementById("stickers").value,
    Packaging: document.getElementById("packaging").value,
    Serial_number_books_check: document.getElementById("serial_number_books_check").value,
    Ground_continuity_check: document.getElementById("ground_continuity_check").value,
    Dielectric_strength_check: document.getElementById("dielectric_strength_check").value,
    Certification_mark: document.getElementById("certification_mark").value,
    Schuster_check: document.getElementById("Schuster_check").value,
    MCP_activation_pressure_check: document.getElementById("MCP_activation_pressure_check").value,
    MCP_impact_control: document.getElementById("MCP_impact_control").value,
    Sound_level_control: document.getElementById("sound_level_control").value,
  };

  fetch("submit-form-1", {
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

function fetchForm1(rowdata) {
  document.getElementById("order_num").value = rowdata.Order_num;
  document.getElementById("production_method").value = rowdata.Production_method; 
  document.getElementById("receipt_order_date").value = rowdata.Receipt_order_date; 
  document.getElementById("execution_order_date").value = rowdata.Execution_order_date; 
  document.getElementById("software_version").value = rowdata.Software_version; 
  document.getElementById("client").value = rowdata.Client; 
  document.getElementById("quantities").value = rowdata.Quantities; 
  document.getElementById("product_description").value = rowdata.Product_description; 
  document.getElementById("item_code").value = rowdata.Item_code; 
  document.getElementById("PCB_num").value = rowdata.PCB_num; 
  document.getElementById("QC_controller").value = rowdata.QC_controller; 
  document.getElementById("QC_manager").value = rowdata.QC_manager; 
  document.getElementById("warehouse_forward").value = rowdata.Warehouse_forward; 
  document.getElementById("board_visual_inspection").value = rowdata.Board_visual_inspection; 
  document.getElementById("consumption_check").value = rowdata.Consumption_check; 
  document.getElementById("output_check").value = rowdata.Output_check; 
  document.getElementById("indicator_check").value = rowdata.Indicator_check; 
  document.getElementById("image_check").value = rowdata.Image_check; 
  document.getElementById("button_check").value = rowdata.Button_check; 
  document.getElementById("stimulation_level_check").value = rowdata.Stimulation_level_check; 
  document.getElementById("brightness_check").value = rowdata.Brightness_check; 
  document.getElementById("led_check").value = rowdata.Led_check; 
  document.getElementById("CPU_frequency_check").value = rowdata.CPU_frequency_check; 
  document.getElementById("interface_clamps_completeness_check").value = rowdata.Interface_clamps_completeness_check; 
  document.getElementById("circuit_functionality").value = rowdata.Circuit_functionality; 
  document.getElementById("sensors").value = rowdata.Sensors; 
  document.getElementById("final_product_completeness").value = rowdata.Final_product_completeness; 
  document.getElementById("instructions").value = rowdata.Instructions; 
  document.getElementById("attachments").value = rowdata.Attachments; 
  document.getElementById("stickers").value = rowdata.Stickers; 
  document.getElementById("packaging").value = rowdata.Packaging; 
  document.getElementById("serial_number_books_check").value = rowdata.Serial_number_books_check; 
  document.getElementById("ground_continuity_check").value = rowdata.Ground_continuity_check; 
  document.getElementById("dielectric_strength_check").value = rowdata.Dielectric_strength_check; 
  document.getElementById("certification_mark").value = rowdata.Certification_mark; 
  document.getElementById("Schuster_check").value = rowdata.Schuster_check; 
  document.getElementById("MCP_activation_pressure_check").value = rowdata.MCP_activation_pressure_check; 
  document.getElementById("MCP_impact_control").value = rowdata.MCP_impact_control; 
  document.getElementById("sound_level_control").value = rowdata.Sound_level_control; 
}
