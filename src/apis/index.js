const express = require('express');
const { listEssay } = require('./listEssays');
const { createEssay } = require('./createEssay');
const { deleteEssay } = require('./deleteEssay');
const { updateEssay } = require('./updateEssay'); 
const router = express.Router();
router.get('/list', (req, res) => listEssay(req, res));
router.post('/create', (req, res) => createEssay(req, res));
router.delete('/delete', (req, res) => deleteEssay(req, res));
router.put('/update', (req, res) => updateEssay(req, res));

module.exports = router;