// deno-lint-ignore-file no-explicit-any
export interface log_c_type {
    info(data:any):void
    debug(data:any):void
    error(data:any):void
    warning(data:any):void
    critical(data:any):void
}