module ContactPage

open Giraffe.ViewEngine

let htmlString =
    form [] [
        label [ _for "#text" ] [
            str "enter your message below"
        ]
        textarea [ _id "text" ] []
        input [
            _type "submit"
            _value "send"
        ]
    ]
    |> Layout.main "contact"

