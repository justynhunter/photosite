open Suave
open Suave.Operators
open Suave.Successful
open Suave.Filters
open System.IO

let app =
    GET
    >=> choose [
        path "/" >=> OK IndexPage.body 
        path "/contact" >=> OK ContactPage.body
        Files.browseHome
    ]

let homeDirectory =
    Path.Combine(Directory.GetCurrentDirectory(), "public")

startWebServer {defaultConfig with homeFolder = Some(homeDirectory)} app
