const { DataTypes } = require("sequelize");

function form2Model(seq) {
  const Form2 = seq.define("Form2", {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Type_2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    Mold_number_2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    Date_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Machine_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Batch_2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    Product_accounting_code_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    QC_controller_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    QC_manager_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Visual_inspection_2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    PCB_support_points_check_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Scratch_check_2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    Reflector_socket_check_2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    Battery_support_base_check_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Socket_base_check_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Plastic_tire_button_check_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Placement_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Cable_passage_hole_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Uniformity_injection_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Supply_point_problems_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Clasps_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Screw_holders_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Light_transmission_check_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Production_date_clock_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Application_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Other_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
  });

  return Form2;
}

module.exports = { form2Model };
