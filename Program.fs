open Giraffe
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Hosting
open Microsoft.Extensions.DependencyInjection
open Microsoft.Extensions.Hosting

let renderComponent nodes : HttpHandler =
        noResponseCaching
        >=> fun _ ctx -> backgroundTask {
            return! ctx.WriteHtmlStringAsync (ViewEngine.RenderView.AsString.htmlNodes nodes)
        }

let webApp =
    choose [
        route "/" >=> htmlString IndexPage.htmlString
        route "/contact" >=> htmlString ContactPage.htmlString
        routef "/api/get-photo/%d" (IndexPage.nodes >> renderComponent)
    ]

let configureApp (app : IApplicationBuilder) =
    app
        .UseStaticFiles() 
        .UseGiraffe(webApp)

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
