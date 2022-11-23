import { log_c_type } from "./type.ts"

export class log_c implements log_c_type{
    public info(data:any){
        console.log("[INFO]: "+data)
    }
    public debug(data:any){
        console.log("[DEBUG]:"+data)
    }
    public error(data:any){
        console.log("[error]: "+data)
    }
    public warning(data:any){
        console.log("[warning]: "+ data)
    }
    public critical(data:any){
        console.log("[critical]: "+data)
    }
}
