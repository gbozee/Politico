const express = require('express');
const controllers = require('./controllers');

const router = express.Router();


router.post('/parties', controllers.partyCreate);

router.get('/parties', controllers.partyList);

router.get('/parties/:partyId', controllers.partyDetail);

router.patch('/parties/:partyId/:name', controllers.partyEdit);

router.delete('/parties/:partyId', controllers.partyDelete);

router.post('/offices', controllers.officeCreate);

router.get('/offices', controllers.officeList);

router.get('/offices/:officeId', controllers.officeDetail);

module.exports = router;
