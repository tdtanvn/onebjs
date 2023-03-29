import { Request } from "./Request";
export interface ICommand {
  getRequest(): Request;
  getBinRequest(): Request;
}
