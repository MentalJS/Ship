

let fs ={
    async  rename_folder(oldpath:string,newpath:string){
        await Deno.rename(oldpath, newpath);
    },
    //this create emty file
    async create_file(dir:string){
        await Deno.create(dir);
    },
    // DELETE FILE RECSLY
    async delete_r(dir_file:string){
        await Deno.remove(dir_file, { recursive: true });
    }
}
fs.