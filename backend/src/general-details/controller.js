const { makeLogger } = require("../common/logger.config");
const { respondSuccess } = require("../common/response.helper");
const { setGeneralDetails, getGeneralDetails } = require("./general-details.in-memory");
const { generalDetailsModel } = require("./general-details.model");

const Logger =  makeLogger('General-Details');

exports.updateGeneralDetails = async (req, res) => {
  const updates = {};
  if (req.body.email_1) updates.email_1 = req.body.email_1;
  else updates.email_1 = '';

  if (req.body.email_2) updates.email_2 = req.body.email_2;
  else updates.email_2 = '';

  if (req.body.phoneNo_1) updates.phoneNo_1 = req.body.phoneNo_1;
  else updates.phoneNo_1 = '';

  if (req.body.phoneNo_2) updates.phoneNo_2 = req.body.phoneNo_2;
  else updates.phoneNo_2 = '';

  await generalDetailsModel.findOneAndUpdate({}, updates);
  setGeneralDetails(updates);

  Logger.info('general-details updated');
  res.json(respondSuccess(updates));
}

exports.getGeneralDetails = async (req, res) => {
  const doc = getGeneralDetails();
  res.json(respondSuccess(doc));
}