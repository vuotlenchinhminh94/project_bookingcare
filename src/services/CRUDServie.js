import bcrypt from "bcrypt";
import db from "../models/index";

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBycrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBycrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.role,
            });
            resolve("Created a new user successed");
        } catch (error) {
            reject(error);
        }
    });
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const saltRounds = 10;
            // const myPlaintextPassword = 's0/\/\P4$$w0rD';
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashPassword = await bcrypt.hashSync(password, salt);
            // console.log(hashPassword);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    createNewUser: createNewUser
};