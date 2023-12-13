const express = require('express');
const knex = require('../config/sqliteConfig');
const {sendApiResult } = require('../controllers/helperController');
const { body, validationResult, withMessage, notEmpty} = require('express-validator');

let Certificates = function() {}

Certificates.getCertificatesList = function(req) {
    return new Promise(async (resolve, reject) => {
        try {
            const list = await knex("certificates").select("id", "name", "category", "issuer", "issued_to", "issued_on", "expiration_date").orderBy("id", "DESC");
            if (list.length != 0) {
                resolve(sendApiResult(true, "Certificate List Fetched Successfully", list));
            } else {
                resolve(sendApiResult(true, "No Data Found"));
            }
        } catch (error) {
            console.error(error.message);
            reject(sendApiResult(false, error.message));
        }
    });
}

Certificates.getCertificateDetails = function(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const list = await knex("certificates").select("id", "name", "category", "issuer", "issued_to", "issued_on", "expiration_date").where("id", id);
            if (list.length != 0) {
                resolve(sendApiResult(true, "Certificate Details Fetched Successfully", list));
            } else {
                resolve(sendApiResult(true, "No Data Found"));
            }
        } catch (error) {
            console.error(error.message);
            reject(sendApiResult(false, error.message));
        }
    });
}

Certificates.createCertificate = function(req) {
    
    return new Promise(async (resolve, reject) => {
        try {
            const insert = await knex("certificates")
                .insert({
                    name: req.name,
                    category: req.category,
                    issuer: req.issuer,
                    issued_to: req.issued_to,
                    issued_on: req.issued_on,
                    expiration_date: req.expiration_date
                });
            if (insert[0] != 0) {
                resolve(sendApiResult(true, "New Certificate Created Successfully", req));
            } else {
                reject(sendApiResult(false, "Data Could not be Submitted"));
            }
        } catch (error) {
            console.error(error.message);
            reject(sendApiResult(false, error.message));
        }
    })
}

Certificates.deleteCertificate = function(id) {
    return new Promise(async (resolve, reject) => {
        try {
            if(id == null){
                resolve(sendApiResult(true, "Certificate ID Missing"));
            }
            const deleteCertificate = await knex("certificates").where("id", id).delete();
            if (deleteCertificate) {
                resolve(sendApiResult(true, "Certificate Deleted Successfully", id));
            } else {
                resolve(sendApiResult(true, "No Data Found"));
            }
        } catch (error) {
            console.error(error.message);
            reject(sendApiResult(false, error.message));
        }
    });
}

module.exports = Certificates;