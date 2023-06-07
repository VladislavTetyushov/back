class Response {
    status;
    data;
    constructor(data) {
        this.status = Boolean(data);
        this.data = data;
    }
}
module.exports.Response = Response;
