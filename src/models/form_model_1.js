const { DataTypes } = require("sequelize");

function form1Model(seq) {
  const Form1 = seq.define("Form1", {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Order_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    Production_method: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Receipt_order_date: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Execution_order_date: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Software_version: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    Client: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Quantities: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    Product_description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Item_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    PCB_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    QC_controller: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    QC_manager: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Warehouse_forward: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    //checks
    Board_visual_inspection: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Consumption_check: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Output_check: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Indicator_check: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Image_check: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Button_check: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Stimulation_level_check: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Brightness_check: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Led_check: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    CPU_frequency_check: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Interface_clamps_completeness_check: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Circuit_functionality: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Sensors: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Final_product_completeness: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Instructions: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Attachments: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Stickers: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Packaging: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Serial_number_books_check: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Ground_continuity_check: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Dielectric_strength_check: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Certification_mark: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Schuster_check: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    MCP_activation_pressure_check: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    MCP_impact_control: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Sound_level_control: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
  });

  return Form1;
}

module.exports = { form1Model };
