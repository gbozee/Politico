const models = require('./models');

const partyCreate = (req, res) => {
  const result = models.createParty(req.body);
  res.status(result.status).json(result);
};

const partyList = (req, res) => {
  const result = models.getAllParties();
  res.status(result.status).json(result);
};

const partyDetail = (req, res) => {
  const result = models.getPartyDetail(req.params.partyId);
  res.status(result.status).json(result);
};

const partyEdit = (req, res) => {
  const { partyId, name } = req.params;
  const result = models.editPartyDetail(partyId, name);
  res.status(result.status).json(result);
};

const partyDelete = (req, res) => {
  const result = models.deleteParty(req.params.partyId);
  res.status(result.status).json(result);
};

const officeCreate = (req, res) => {
  const result = models.createOffice(req.body);
  res.status(result.status).json(result);
};
const officeList = (req, res) => {
  const result = models.getAllOffices();
  res.status(result.status).json(result);
};

const officeDetail = (req, res) => {
  const result = models.getOfficeDetail(req.params.officeId);
  res.status(result.status).json(result);
};
module.exports = {
  partyCreate,
  partyList,
  partyDetail,
  partyEdit,
  partyDelete,
  officeCreate,
  officeList,
  officeDetail,
};
