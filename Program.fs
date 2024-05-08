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
        route "/" >=> htmlString (IndexPage.page 1)
        route "/about" >=> htmlString AboutPage.page
        route "/contact" >=> htmlString ContactPage.page
        route "/api/contact-submit" >=> renderComponent ContactPage.submit
        routef "/api/get-photo/%d" (Data.getPhoto >> ImageCarousel.nodes >> renderComponent)
        routef "/%d" (fun (id : int64) -> IndexPage.page id |> htmlString) 
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
