const router = require('express').Router();
const contactController = require('../controller/contactcontroller');
const regController = require('../controller/regcontroller');

// Contact routes
router.post('/insert', contactController.insert);
router.get('/fetch', contactController.fetchdata);
router.get('/singlefetch/:id', contactController.updatesinglefetch);
router.delete('/contactdelete/:id', contactController.contactdelete);
router.put('/contactupdate/:id', contactController.contactupdate);

// Registration and login routes
router.post('/register', regController.register);
router.post('/login', regController.login);
router.post('/admin', regController.adminpannel);
router.get('/fetch', regController.fetchdatas);
router.delete('/regdelete/:id', regController.regdelete);
router.put('/regupdate/:id', regController.regupdate);

// Uncomment and configure multer if you need file uploads
// const multer = require('multer');
// let storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./public/upload");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + file.originalname);
//   }
// });
// let upload = multer({
//   storage: storage,
//   limits: { fileSize: 1024 * 1024 * 4 }
// });

module.exports = router;
