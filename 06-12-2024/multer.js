var express = require("express");
var multer = require("multer");
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var storagedata = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + "/images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "dummy.json");
    },

});

var upload = multer({ storage: storagedata });

app.post("/products", upload.single("file"), (req, res) => {
    console.log("Body:", req.body);
    console.log("File:", req.file);

    res.send({
        file: req.file,
        data: req.body,
    });
});

var port = 3008;
app.listen(port, () => {
    console.log("Server has been started successfully");
});
