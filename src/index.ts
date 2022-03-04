import express from "express";

const app = express();
const port = 3000;

app.get("/", (_, res) => {
    res.send("hello from typescript node server :)");
});

app.listen(port, () => {
    console.log(`typescript node server started on port ${port}!`);
});
