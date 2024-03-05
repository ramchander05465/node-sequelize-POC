import { Router, Request, Response } from "express";
import db, { getData, saveData, updateData, deleteData } from "../sequelize";

const tableName: string = "book";
const books = Router();

books
  .route("/")
  /**
   * method for reading the book information.
   */
  .get((req: Request, res: Response) => {
    const include: any = [
      { model: db.writer, attributes: ["name", "contactNo", "email"] },
    ];
    if (req.query.isComments) {
      include.push({
        model: db.comments,
        attributes: ["contents"],
        include: [
          { model: db.writer, attributes: ["name", "id"], as: "commetedBy" },
        ],
      });
    }
    const condition: any = {
      include,
      attributes: ["name", "publisher", "years"],
    };

    if (req.query.id) {
      condition.where = {
        id: req.query.id,
      };
    }
    getData(tableName, condition).then((data) =>
      res.status(200).json({ status: "book ok", data })
    );
  })
  /**
   * method for saving book information.
   */
  .post((req: Request, res: Response) => {
    const content = {
      name: req.body.name,
      publisher: req.body.publisher,
      years: req.body.years,
      writerId: req.body.writerId,
    };
    saveData(tableName, content).then((data) =>
      res.status(200).json({ status: "ok", data })
    );
  })
  /**
   * method for updating the book information;
   */
  .put((req: Request, res: Response) => {
    const content = {
      name: req.body.name,
      publisher: req.body.publisher,
      years: req.body.years,
      writerId: req.body.writerId,
    };
    updateData(tableName, content, { where: { id: req.body.id } }).then(
      (data) => res.status(200).json({ status: "ok", data })
    );
  })
  /**
   * method for deleting the book intormation.
   */
  .delete((req: Request, res: Response) => {
    deleteData(tableName, { where: { id: req.body.id } }).then((data) =>
      res.status(200).json({ status: "ok", data })
    );
  });

export default books;
