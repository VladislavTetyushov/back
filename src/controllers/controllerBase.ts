export class ResponseJson {
    status;
    message;
    data;
    constructor({
        status,
        message,
        data,
    }: {
        status?: boolean;
        message?: string;
        data?: any;
    }) {
        if (typeof status === "boolean") {
            this.status = status;
        } else {
            this.status = Boolean(data);
        }
        this.data = data;
        this.message = message;
    }
}
