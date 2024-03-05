export default (sequelize: any, DataTypes: any) => {
    const book = sequelize.define("books", {
      name: {
        type: DataTypes.STRING
      },
      publisher: {
        type: DataTypes.STRING
      },
      years:{
        type: DataTypes.INTEGER
      },
      writerId:{
        type: DataTypes.INTEGER
      }
    });
  
    return book;
  };
  