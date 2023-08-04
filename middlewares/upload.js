const multer = require('multer');
const path = require('path');
const tmpDir = path.join(__dirname, '../', 'tmp');

const multerCongig = multer.diskStorage({
  destination: tmpDir,
  filename: (req, file, cd) => {
    cd(null, Math.random() + '-' + file.originalname);
  },
});

const upload = multer({
  storage: multerCongig,
});

module.exports = upload;
