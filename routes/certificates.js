const express = require('express');
const router = express.Router();
const { getAllCertificateList, getCertificateDetails, createCertificate, deleteCertificate } = require('../controllers/certificatesController');

router.get('/list', getAllCertificateList);
router.get('/details/:id', getCertificateDetails);
router.post('/add-new', createCertificate);
router.delete('/delete/:id', deleteCertificate);

module.exports = router;