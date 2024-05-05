open Suave
open Suave.Operators
open Suave.Successful
open Suave.Filters

let app =
    GET
    >=> choose [
        path "/" >=> OK "hello\n"
    ]

startWebServer defaultConfig app
