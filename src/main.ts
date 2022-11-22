import {chocolateType} from './types.ts'

// deno-lint-ignore prefer-const
let LogLevel = [
    "[ERROR]",
    "[WARN]",
    "[INFO]",
    "[DEBUG]",
]

class chocolate implements chocolateType  {
    public exit(){
        Deno.exit(1)
    }
    public pid(){
        return Deno.pid
    }
    public ppid(){
        return Deno.ppid
    }
    public kill(inp:number){
        Deno.kill(inp)
    }
    // deno-lint-ignore no-explicit-any
    public log(data:any,level:number){    
        console.log(`${LogLevel[level]} ${data}`)
    } 
}
await Deno.permissions.request({ name:"run" })
const Chocolate = new chocolate()
Chocolate.log("data",0)
Chocolate.log("data", 1)
Chocolate.log("data", 2)
Chocolate.log("data", 3)
Chocolate.log(Chocolate.pid(),3)
Deno.run({
    cmd: ["curl", "https://example.com"],
});