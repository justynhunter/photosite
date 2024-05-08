module AboutPage

open Giraffe.ViewEngine

let page =
    [
        div [ _id "cv" ] [
            p [] [
                str "Justyn Hunter (b. 1980) lives in Nashville, TN and documents the south"
            ]
            h2 [] [ str "cv" ]
            ul [] [
                li [] [
                    str "Photo selected for inclusion in Investigations in Infrastructure"
                ]
                li [] [
                    str "Photo selected for inclusion in Everything is Narrative"
                ]
                li [] [
                    str "Juried into Slow Exposures 2023 show"
                ]
            ]
        ]
    ]
    |> Layout.main "about"
