'use strict';

/* Success Response */
exports.success = (res, value) => {
  const result = {    
    code: 200,
    message: 'success',
    results: value,
  };
  res.status(200).json(result);
  res.end();
};

exports.upsert = (res, data, message) => {
  const result = {
    code: 201,
    message: `data successfully ${message}`,
    data: data
  };
  res.status(201).json(result);
  res.end();
};

/* Error Response */

exports.notFound = (res, message = 'No entry found') => {
  const result = {
    code: 404,
    message: message
  };
  res.status(404).json(result);
  res.end();
};

exports.falseRequirement = (res, field, message = undefined) => {
  const result = {
    code: 500,
    message: message ? message : `invalid-${field}`
  };
  res.status(500).json({ ...result });
  res.end();
};