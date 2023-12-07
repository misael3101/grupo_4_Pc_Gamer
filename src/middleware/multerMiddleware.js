const path = require('path')
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/avatar'); // Puedes especificar la carpeta de destino aquí
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
        cb(null, fileName); 
    }
});

const uploadFile = multer({ storage });

module.exports = uploadFile;