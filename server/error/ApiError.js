class ApiError extends Error{
    constructor (status, message){
        super();
        this.status = status
        this.message = message
    }

    static badRequest(message){
        return new AliError(404, message)
    }

    static internal(message){
        return new AliError(500, message)
    }

    static forbidden(message){
        return new AliError(403, message)
    }
}


module.exports = ApiError