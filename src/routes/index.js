var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController');
const kendaraanController = require('../controllers/kendaraanController');
const pembelianKreditController = require('../controllers/pembelianKreditController');

const auth = require('../mddleware/auth');

router.post('/api/login', userController.login);

router.get('/api/getUsers', auth,userController.getAllUsers);
router.get('/api/getUserById',auth, userController.getUserById);
router.post('/api/addUser', userController.addUser);
router.post('/api/update',auth, userController.updateUser);
router.post('/api/hapus',auth, userController.deleteUser);

router.get('/api/getRoles', auth,roleController.getAllRoles);
router.get('/api/getRoleById', auth,roleController.getRolesById);
router.post('/api/addRole',auth, roleController.addRole);
router.post('/api/updateRole',auth, roleController.updateRole);
router.post('/api/hapusRole',auth, roleController.deleteRole);

router.get('/api/getKendaraan', auth,kendaraanController.getAllKendaraan);
router.get('/api/getKendaraanById', auth,kendaraanController.getKendaraanById);
router.post('/api/addKendaraan', auth,kendaraanController.addKendaraan);
router.post('/api/updateKendaraan', auth,kendaraanController.updateKendaraan);
router.post('/api/deleteKendaran', auth,kendaraanController.deleteKendaran);

router.post('/api/addPembelian', auth,pembelianKreditController.addPembelian);


module.exports = router;
