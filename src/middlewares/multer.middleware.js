// ye middlware likhe hai server pe file upload hone ka from the local place so that fir wo cloudinary pe daal sake

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/temp");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // cb(null, file.fieldname + "-" + uniqueSuffix);
    cb(null, file.originalname);
  },
});

// creating an instance of the Multer class
export const upload = multer({ storage: storage });

// is 'upload' ko hm fir controller k andr me use kr skte hai...routes likhne k time pe 'upload' se file upload hoga aur fir res.send k andar me response a jayega
