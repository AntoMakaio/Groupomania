// const multer = require("multer");

// // const MIME_TYPES = {
// //   "image/jpg": "jpg",
// //   "image/jpeg": "jpg",
// //   "image/png": "png",
// // };

// const storage = multer.diskStorage({
//   destination: "img/uploads/",
//   filename: function (req, file, cb) {
//     cb(null, ajoutFileName(req, file));
//   },
// });

// function ajoutFileName(req, file) {
//   const fileName = `${Date.now()}_${file.originalname}`.replace(/\s/g, "_");
//   file.fileName = fileName;
//   // const extension = MIME_TYPES[file.mimetype];
//   return fileName;
// }

// const upload = multer({ storage: storage });

// module.exports = { upload };
