export interface chocolateType{
    exit():void
    pid():void
    ppid():void
    kill(inp:number):void
    log(data:any,level:number):void

}