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
    console.log(message);
    return res.send("post crud");
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
};