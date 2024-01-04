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

let getAllUser = (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll();
            resolve(users);
        } catch (error) {
            reject(error)
        }
    });
}

let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({ 
                where: { id: userId } 
            });
            // console.log(user);
            if (user) {
                resolve(user);
            } else {
                resolve([]);
            }
        } catch (error) {
            reject(error)
        }
    });
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        // console.log("data fron service");
        // console.log(data);
        try {
            let user = await db.User.findOne({
                where: {id: data.id}
            });

            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                
                await user.save();

                let allUsers = await db.User.findAll();
                resolve(allUsers);
            } else {
                resolve()
            }
        } catch (error) {
            reject(error);
        }
    });
}

let deleteCRUD = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {id: userId}
            });

            if (user) {
                await user.destroy();
            }

            let allUsers = await db.User.findAll();
            resolve(allUsers);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
    deleteCRUD: deleteCRUD,
};