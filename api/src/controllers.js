
let parties = [];
const offices = [];
const partyRequiredFields = ['name'];
const officesRequiredFields = ['name', 'type'];

const partyCreate = (req, res) => {
  const { body } = req;
  let isValid = true;
  const keys = Object.keys(body);
  partyRequiredFields.forEach((field) => {
    isValid = isValid && keys.includes(field);
  });
  if (isValid) {
    const id = parties.length + 1;
    const data = {
      id,
      name: body.name,
      hqAddress: body.hqAddress,
      logoUrl: body.logoUrl,
    };
    parties.push(data);
    const status = 201;
    res.status(status).json({
      status,
      data,
    });
  } else {
    const missingKeys = partyRequiredFields.filter(
      key => !Object.keys(body).includes(key),
    );
    res.status(400).json({
      status: 400,
      error: `The ${missingKeys[0]} of the party is missing`,
    });
  }
};

const partyList = (req, res) => {
  res.status(200).json({ status: 200, data: parties });
};

const partyDetail = (req, res) => {
  const foundParty = parties.find(
    party => party.id === parseInt(req.params.partyId, 10),
  );
  if (foundParty) {
    res.status(200).json({ status: 200, data: foundParty });
  } else {
    res.status(404).json({ status: 404, error: 'Party not found' });
  }
};

const partyEdit = (req, res) => {
  const { partyId, name } = req.params;
  const foundParty = parties.find(party => party.id === parseInt(partyId, 10));
  if (foundParty) {
    foundParty.name = name;
    parties = parties.map(party => (party.id === parseInt(partyId, 10) ? foundParty : party));
    res.status(200).json({
      status: 200,
      data: foundParty,
    });
  } else {
    res.status(404).json({ status: 404, error: 'Party not found' });
  }
};

const partyDelete = (req, res) => {
  const partyId = parseInt(req.params.partyId, 10);
  const foundParty = parties.find(party => party.id === partyId);
  if (foundParty) {
    parties = parties.filter(party => party.id !== partyId);
    res.status(202).json({
      status: 202,
      data: {
        message: 'Party successfully deleted',
      },
    });
  } else {
    res.status(404).json({
      status: 404,
      error: 'Party not found',
    });
  }
};

const officeCreate = (req, res) => {
  const { body } = req;
  let isValid = true;
  const keys = Object.keys(body);
  officesRequiredFields.forEach((field) => {
    isValid = isValid && keys.includes(field);
  });
  if (isValid) {
    const id = offices.length + 1;
    const data = {
      id,
      name: body.name,
      type: body.type,
    };
    offices.push(data);
    const status = 201;
    res.status(status).json({
      status,
      data,
    });
  } else {
    const missingKeys = officesRequiredFields.filter(
      key => !Object.keys(body).includes(key),
    );
    res.status(400).json({
      status: 400,
      error: `The ${missingKeys[0]} of the office is missing`,
    });
  }
};
const officeList = (req, res) => {
  res.status(200).json({ status: 200, data: offices });
};

const officeDetail = (req, res) => {
  const foundOffice = offices.find(
    office => office.id === parseInt(req.params.officeId, 10),
  );
  if (foundOffice) {
    res.status(200).json({ status: 200, data: foundOffice });
  } else {
    res.status(404).json({ status: 404, error: 'Office not found' });
  }
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
