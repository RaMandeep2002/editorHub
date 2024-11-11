"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ message: "Somthing went wrong!!" });
};
exports.errorHandler = errorHandler;
