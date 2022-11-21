interface chocolateDenoLoction {
    DenoLoction():any
}
enum chocolateLoggerTypes {
    log = "log",
    error = "error",
    warn = "warn",
    dir = "dir",
}

class chocolate {
    public DenoLoction():chocolateDenoLoction{
            return Deno.execPath()
    } 
    public logger(e :chocolateLoggerTypes,data){    
        switch(e){
            case "log":
                console.log(data)
                break
            case "error":
                console.error(data)
                break
            case "warn":
                console.warn(data)
                break
            default:
                if (e == undefined){
                    throw 'No log type:Try use log'
                }   
        }
    }
}
let Chocolate = new chocolate()
Chocolate.logger(LoggerTypes.log,"FUCK YOU")
Chocolate.logger(chocolateLoggerTypes)