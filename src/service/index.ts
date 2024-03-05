import { Router } from "express";

import writers from "./writers";
import books from "./books";
import comment from "./comments";

export default Router()
    .use("/writer", writers)
    .use("/book", books)
    .use("/comment", comment);
