"use strict";

exports.sendApiResult = function (success, message, data = {}) {
  var data = {
    success: success,
    message: message,
    data: data,
  };
  return data;
};