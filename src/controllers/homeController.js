import db from "../models/index";
import CRUDService from "../services/CRUDServie";

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }
}

let getCRUD = (req, res) => {
    return res.render("crud.ejs");
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        // console.log(userData);
        return res.render("editCRUD", {
            user: userData
        });
    } else {
        return res.send("User not found!")
    }
}

let displayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser({
        raw: true
    });
    // console.log(data);
    // return res.send("display get CRUD");
    return res.render("displayCRUD.ejs", {
        dataTable: data
    });
}

let postCRUD = async (req, res) => {
    // console.log(req.body);
    let message = await CRUDService.createNewUser(req.body);
    // console.log(message);
    return res.send("post crud");
}

let putCRUD = async(req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render("displayCRUD.ejs", {
        dataTable: allUsers
    });
}

let deleteCRUD = async (req, res) => {
    let allUsers = await CRUDService.deleteCRUD(req.query.id);
    return res.render("displayCRUD.ejs", {
        dataTable: allUsers
    });
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs')
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
};