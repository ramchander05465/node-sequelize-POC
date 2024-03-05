export default (sequelize: any, DataTypes: any) => {
    const comments = sequelize.define("comments", {
      contents: {
        type: DataTypes.TEXT
      },
      bookId:{
        type: DataTypes.INTEGER,
        require:true
      },
      userId:{
        type: DataTypes.INTEGER,
        require:true
      }
    });
  
    return comments;
  };
  