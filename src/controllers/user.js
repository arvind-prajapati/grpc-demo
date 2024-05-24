const userService = require("@GrpcClients/user");
const response = require("@utility/response.js");

module.exports = {
    users: (req, res) => {
        userService.userService.users({}, (err, result) => {
            console.log(result);
            if (err) {
                console.log(err)
                return response.ServerErrorResponse(res, "server error");
            } else if (result && result.data) {
                return response.SuccessResponse(req, res, "success", { data: result.data });
            } else {
                return response.UnprocessableErrorResponse(res, "not found");
            }
        });
    },
    createUser: (req, res) => {
        const payload = req.body;
        userService.userService.createUser(payload, (err, result) => {
            if (err) {
                console.log(err)
                return response.ServerErrorResponse(res, "server error");
            } else if (result) {
                return response.cantainCreatd(req, res, "success", { });
            } else {
                return response.UnprocessableErrorResponse(res, "not found");
            }
        });
    }
};
