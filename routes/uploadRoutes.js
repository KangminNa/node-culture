// routes/uploadRoutes.js

const path = require('path');
const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const multer  = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

router.post('/api/upload', upload.fields([{ name: 'recommendation' }, { name: 'portpolio' }, { name: 'resume' }]), uploadController.uploadFiles);

module.exports = router;
