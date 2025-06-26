const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : function(req, file, callback){
        callback(null, 'public/images/products')
    },
    filename : (req,file, callback) => {
        callback(null,`${Date.now()}_products${path.extname(file.originalname)}`)
    }
});

const upload = multer({
    storage:storage
});

module.exports = upload