import { base64 } from "./base64/base64.ts";
class log{
    info(data:any){
        console.log("[INFO]"+data)
    }
    debug(data:any){
        console.log("[DEBUG]:"+data)
    }
    error(data:any){
        console.log("[error]"+data)
    }
    warning(data:any){
        console.log()
    }
}