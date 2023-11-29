A simple SSR engine built with Bun

I figured the best way to understand how SSR actually works under the hood would be to try and build my own crappy SSR framework

It is meant to mimic the core functionalities of NextJS as closely as possible
    This does not do any fancy caching
    There is no clear line between what runs on the server or client
        - There is no 'use client' or 'use server' type of directives

Also contains some very simple user auth that should NOT be used in production 
    - When a user signs in they are a given a cookie that expires in 24 hrs, with a randomly generated sessionToken
    - To verify a request we just check and make sure the cookie exists in the sessions table of the DB and that it has not expired yet

Includes custom input validators as well
    - Automatically populate HTML elements with the proper validators (i.e. required, minLength, etc...)
        - Requires use of the NewInput component
    - Runs on server and on client, using the same validation logic so you only have to write validators once
    - Implements custom error messages using native HTML validation dialogs

DONT FORGET TO DELETE THE BUILD FOLDER FROM GIT HISTORY
