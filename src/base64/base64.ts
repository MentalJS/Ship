export class base64 {
    public encode(data:string){
        return btoa(data)
    }
    public decode(data:string){
        return atob(data)
    }
}