export enum RequestVerb {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
export class Request {
  query!: string;
  param: string = "";
  service!: string;
  verb: RequestVerb = RequestVerb.GET;
  body!: string | Uint8Array;
}
