// user service
const userModel = require("../models/user")
module.exports.userServices = {
    users: userModel.getUsers,
    createUser: userModel.createUser
};
