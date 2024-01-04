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
};