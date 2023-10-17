
function submitForm2(formId) {
    console.log("submit Form 2");
    const body = {
        ID: formId,
        type_2: document.getElementById("type_2").value,
        mold_number_2: document.getElementById("mold_number_2").value,
        date_2: document.getElementById("date_2").value,
        machine_2: document.getElementById("machine_2").value,
        batch_2: document.getElementById("batch_2").value,
        product_accounting_code_2: document.getElementById("product_accounting_code_2").value,
        qc_controller_2: document.getElementById("qc_controller_2").value,
        qc_manager_2: document.getElementById("qc_manager_2").value, 
        visual_inspection_2: document.getElementById("visual_inspection_2").value,
        PCB_support_points_check_2: document.getElementById("PCB_support_points_check_2").value,
        scratch_check_2: document.getElementById("scratch_check_2").value,
        reflector_socket_check_2: document.getElementById("reflector_socket_check_2").value,
        battery_support_base_check_2: document.getElementById("battery_support_base_check_2").value,
        socket_base_check_2: document.getElementById("socket_base_check_2").value,
        plastic_tire_button_check_2: document.getElementById("plastic_tire_button_check_2").value,
        placement_2: document.getElementById("placement_2").value,
        cable_passage_hole_2: document.getElementById("cable_passage_hole_2").value,
        uniformity_injection_2: document.getElementById("uniformity_injection_2").value,
        supply_point_problems_2: document.getElementById("supply_point_problems_2").value,
        clasps_2: document.getElementById("clasps_2").value,
        screw_holders_2: document.getElementById("screw_holders_2").value,
        light_transmission_check_2: document.getElementById("light_transmission_check_2").value,
        production_date_clock_2: document.getElementById("production_date_clock_2").value,
        application_2: document.getElementById("application_2").value,
        other_2: document.getElementById("other_2").value
      };
      console.log(body);
      fetch("submit-form-2", {
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

function fetchForm2(rowdata) {
  document.getElementById("type_2").value = rowdata.Type_2;
  document.getElementById("mold_number_2").value = rowdata.Mold_number_2;
  document.getElementById("date_2").value = rowdata.Date_2;
  document.getElementById("machine_2").value = rowdata.Machine_2;
  document.getElementById("batch_2").value = rowdata.Batch_2;
  document.getElementById("product_accounting_code_2").value = rowdata.Product_accounting_code_2;
  document.getElementById("qc_controller_2").value = rowdata.QC_controller_2;
  document.getElementById("qc_manager_2").value = rowdata.QC_manager_2;
  document.getElementById("visual_inspection_2").value = rowdata.Visual_inspection_2;
  document.getElementById("PCB_support_points_check_2").value = rowdata.PCB_support_points_check_2;
  document.getElementById("scratch_check_2").value = rowdata.Scratch_check_2;
  document.getElementById("reflector_socket_check_2").value = rowdata.Reflector_socket_check_2;
  document.getElementById("battery_support_base_check_2").value = rowdata.Battery_support_base_check_2;
  document.getElementById("socket_base_check_2").value = rowdata.Socket_base_check_2;
  document.getElementById("plastic_tire_button_check_2").value = rowdata.Plastic_tire_button_check_2;
  document.getElementById("placement_2").value = rowdata.Placement_2;
  document.getElementById("cable_passage_hole_2").value = rowdata.Cable_passage_hole_2;
  document.getElementById("uniformity_injection_2").value = rowdata.Uniformity_injection_2;
  document.getElementById("supply_point_problems_2").value = rowdata.Supply_point_problems_2;
  document.getElementById("clasps_2").value = rowdata.Clasps_2;
  document.getElementById("screw_holders_2").value = rowdata.Screw_holders_2;
  document.getElementById("light_transmission_check_2").value = rowdata.Light_transmission_check_2;
  document.getElementById("production_date_clock_2").value = rowdata.Production_date_clock_2;
  document.getElementById("application_2").value = rowdata.Application_2;
  document.getElementById("other_2").value = rowdata.Other_2;
}