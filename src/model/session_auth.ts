import { DateTime } from "ionic-angular";
import { User } from "./user";

export class SessionAuth {
    public id: number;
    public user_id: number;
    public token_auth: string;
    public user :User;

    // constructor(id: number, user_id: number, token: string, user: User){
      // this.id = id;
      // this.user_id = user_id;
      // this.token = token;
      // this.user  = user;            
    // }
}