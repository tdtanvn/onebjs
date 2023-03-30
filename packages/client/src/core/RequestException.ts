export type IRequestException = {
  statusCode?: number;
  message?: string;
  error?: string;
};
export class RequestException {
  statusCode?: number;
  message?: string;
  error?: string;
  constructor(error: IRequestException) {
    this.message = error.message;
    this.statusCode = error.statusCode;
    this.error = error.error;
  }
}
