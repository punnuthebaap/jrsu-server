function errorHandler(err, req, res, next) {
    if(typeof err === "string") {
        return res.status(400).json({error:1, message: err});
    }

    if(typeof err === "ValidationError") {
        return res.status(400).json({error:1, message: err.message});
    }

    if(typeof err === "UnauthorizedError") {
        return res.status(401).json({error:1, message: err.message});
    }

        return res.status(500).json({error:1, message: err.message});
}

module.exports = {
    errorHandler
}