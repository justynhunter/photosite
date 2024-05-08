open Giraffe
open Giraffe.EndpointRouting
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Hosting
open Microsoft.Extensions.DependencyInjection
open Microsoft.Extensions.Hosting
open Microsoft.AspNetCore.Http

let renderComponent nodes : HttpHandler =
        noResponseCaching
        >=> fun _ ctx -> backgroundTask {
            return! ctx.WriteHtmlStringAsync (ViewEngine.RenderView.AsString.htmlNodes nodes)
        }

[<CLIMutable>]
type contactFormSubmission = {
    message : string
}

let contactFormHandler : HttpHandler =
    fun (next : HttpFunc) (ctx : HttpContext) ->
        task {
            let! submission = ctx.BindFormAsync<contactFormSubmission>();

            // TODO: save to db

            return! renderComponent ContactPage.submit next ctx
        }

let endpoints =
    [
        GET [
            route "/" (1L |> IndexPage.page |> htmlString)
            route "/about" (htmlString AboutPage.page)
            route "/contact" (htmlString ContactPage.page) 
            routef "/%d" (fun (id:int64) -> IndexPage.page id |> htmlString)
        ]
        POST [
            subRoute "/api" [
                route "/contact-submit" contactFormHandler
                routef "/get-photo/%d" (Data.getPhoto >> ImageCarousel.nodes >> renderComponent)
            ]
        ]
    ]

let configureApp (app : IApplicationBuilder) =
    app
        .UseStaticFiles() 
        .UseRouting()
        .UseEndpoints(fun e -> e.MapGiraffeEndpoints(endpoints))
    |> ignore

let configureServices (services : IServiceCollection) =
    services.AddGiraffe() |> ignore


[<EntryPoint>]
let main _ =
    Host.CreateDefaultBuilder()
        .ConfigureWebHostDefaults(
            fun webHostBuilder ->
                webHostBuilder
                    .Configure(configureApp)
                    .ConfigureServices(configureServices)
                    |> ignore)
        .Build()
        .Run()
    0
