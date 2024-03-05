import { Router, Request, Response } from "express";
import { saveData, updateData, deleteData } from "../sequelize";

const tableName: string = "comments";
const comment = Router();
comment
  .route("/")
  /**
   * method for reading the writer information.
   
  .get((req: Request, res: Response) => {
    const condition:any = {
      attributes: ["contents", "bookId", "userId"],
    }
    
    if(req.query.id){
      condition.where = {
        id: req.query.id
      }
      condition.include=[
        {model:db.book, attributes:["name", "years"]}
      ]
    }
    getData(tableName, condition).then((data) => res.status(200).json({ status: "writer ok", data }));
  })  */
  /**
   * method for saving writer information.
   */
  .post((req: Request, res: Response) => {
    const content = {
      contents: req.body.contents,
      bookId: req.body.bookId,
      userId: req.body.userId,
    };
    saveData(tableName, content).then((data) =>
      res.status(200).json({ status: "ok", data })
    );
  })
  /**
   * method for updating the writer information;
   */
  .put((req: Request, res: Response) => {
    const content = {
      contents: req.body.contents,
      bookId: req.body.bookId,
      userId: req.body.userId,
    };
    updateData(tableName, content, { where: { id: req.body.id } }).then(
      (data) => res.status(200).json({ status: "ok", data })
    );
  })
  /**
   * method for deleting the writer intormation.
   */
  .delete((req: Request, res: Response) => {
    deleteData(tableName, { where: { id: req.body.id } }).then((data) =>
      res.status(200).json({ status: "ok", data })
    );
  });

export default comment;
