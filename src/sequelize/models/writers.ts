export default (sequelize: any, DataTypes: any) => {
  const writer = sequelize.define("writers", {
    name: {
      type: DataTypes.STRING
    },
    contactNo: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      require: true,
      unique: true,
    }
  });

  return writer;
};
