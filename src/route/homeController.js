

let getHomePage = (req, res) => {
    return res.send("Hi Home controller!")
}

module.exports = {
    getHomePage: getHomePage
};