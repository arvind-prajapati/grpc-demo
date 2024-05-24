
module.exports.SuccessResponse = (req, res, message, response) => {
        return res.status(200).json({ success: true, message, response });
};
module.exports.cantainCreatd = (req, res, message, response) => {
    return res.status(201).json({ success: true, message, response });
};


module.exports.UnprocessableErrorResponse = (res, message) => {
    return res.status(422).json({ success: false, message });
};

module.exports.UnauthorizedResponse = (res, message) => {
    return res.status(401).json({ success: false, message });
};

module.exports.ForbiddenErrorResponse = (res, message) => {
    return res.status(403).json({ success: false, message });
};

module.exports.ServerErrorResponse = (res, message) => {
    return res.status(500).json({ success: false, message });
};

module.exports.ValidationErrorResponse = (res, message) => {
    return res.status(400).json({ success: false, message });
};
