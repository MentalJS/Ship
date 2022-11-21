interface chocolateDenoLoction {
    DenoLoction():any
}
interface chocolateType{
    Denoloction():void
    logString(data:string):void
    logNum(data:number):void
}

enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
}
class chocolate implements chocolateType {
    public DenoLoction():chocolateDenoLoction{
            return Deno.execPath()
    } 
    public logString(data:string),loglevel{    
        console.log(data)
    }    
}
const Chocolate = new chocolate()
Chocolate.logNum()