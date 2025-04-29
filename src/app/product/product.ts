export interface Product {
    id:number;
    username:string;
    firstName:string;
    lastName:string;
    gender:string;
    email:string;
    role:string;
    university?:string;
    image?:string;
    age:string;
    address?:{
        city:string;
        state:string;
    }
}
