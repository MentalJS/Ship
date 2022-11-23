export class runtime_env_c {
    cwd(){
        return Deno.cwd()
    }
    uid(){
        return Deno.uid()
    }
    gid(){
        return Deno.gid()
    }
    pid(){
        return Deno.pid
    }
    ppid(){
        return Deno.ppid
    }
    verion(){
        return Deno.version
    }
    hostname(){
        return Deno.hostname()
    }
    exit(){
        Deno.exit(1)
    }
    execpath(){
        return Deno.execPath()
    }
    memoryUsage(){
        return Deno.memoryUsage()
    }
    osRelease(){
        return Deno.osRelease()
    }
    chdir(directory: string){
        Deno.chdir(directory)
    }
    mainModule(){
        return Deno.mainModule
    }
    args(){
        return Deno.args
    }
    build(){
        return Deno.build
    }
}