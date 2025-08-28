import { int } from "zod";

export interface IUserType {
    name: string ,
    email:string,
    password:string,
    rePassword:string,
    phone:string
}