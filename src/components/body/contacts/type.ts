import { BaseEntity } from "../../../utils/types";  

export interface ContactI extends BaseEntity {
  name: string;
  lastName: string;
  phone: string;  
  id: string;
}

export interface ContactItemPropsI {  
  contact: ContactI;
  cb: (id: string, type: "delete") => void;
}

