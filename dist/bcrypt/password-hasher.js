"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = exports.hashPassword = void 0;
const bcrypt_1 = require("bcrypt");
const hashPassword = (password) => (0, bcrypt_1.hashSync)(password, (0, bcrypt_1.genSaltSync)(10));
exports.hashPassword = hashPassword;
const validatePassword = (password, hashedPassword) => (0, bcrypt_1.compareSync)(password, hashedPassword);
exports.validatePassword = validatePassword;
//# sourceMappingURL=password-hasher.js.map