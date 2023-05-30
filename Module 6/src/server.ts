// const express = require("express");
// const mongoose = require("mongoose");

import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;
// database connection
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/test");
        console.log("Database Connected");
    } catch (e) {
        console.log("Failed to connect Database", e);
    }
}
main();

app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}/`);
});
