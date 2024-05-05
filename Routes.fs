module Routes

open Suave.Filters
open Suave.Operators
open Suave.Successful


let get = [
    path "/" >=> OK "hello"
]
