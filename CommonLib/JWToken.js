const jwt = require("jsonwebtoken");
require('dotenv').config();


const SECRET_KEY = process.env.SECRET_KEY;

const generateJWToken = (payload) => {
    let token = jwt.sign(payload, SECRET_KEY);
    return token;
};

const verifyJWToken = (token) => {
    let data = jwt.verify(token, SECRET_KEY);
    return data;
};

module.exports = {
    generateJWToken,
    verifyJWToken,
};
