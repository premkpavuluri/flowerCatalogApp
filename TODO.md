# Flower Catalog App

- **TODO:**
  - [ ] Consider comments entity.
  - [ ] Think about name of the handlers(consider router)
  - [ ] Update the contract of Api handlers to async.
    - [ ] loadapidata
    - [ ] api

- **DONE:**
  - [x] Change the method of logcomment handler(GET->POST).
  - [x] Parse the payload upfront.
  - [x] Update the contract of handlers according to async.
    - [x] filehandler
    - [x] guestbook
    - [x] loadcomments
  - [x] Attach httpServerModule through npm.
  - [x] Implemente handler for loading api data.
  - [x] Implement api's for app
    - [x] about app
    - [x] about various flower catalogs
    - [x] for comments.
  - [x] Make handlers for independent tasks.
    - [x] parse the query.
    - [x] log the requests.
    - [x] add the time stamp for each request.
    - [x] ~~add dependencies before actual handler.~~
    - [x] handler for parsing searchParams.
  - [x] persist the comments
  - [x] load the comments before serving the guestBook.
  - [x] Implment guestBook handler
    - [x] implement handler for add comment
    - [x] implement handler for serving the guest book
  - [x] Change the handlers according to http moudle.
    - [x] fileHandler
    - [x] ~~flowerCatalogHandler~~
    - [x] guestBook handler
  - [x] Change the http server to built-in module.
  - [x] Separate the server and app code.
  - [x] Change the directory structure.
  - [x] implement parser for query params.
  - [x] Implement guestBookHandler.
  - [x] implement not found handler.
  - [x] Implement html pages.
    - [x] home page.
    - [x] flower pages
    - [x] guest book page
  - [x] Connect guestBook in home page.
  - [x] Implement serverFileContentHandler.
  - [x] Implement flowerCatalogHomePage
  - [x] Implement flowerCatalogHandler.
    - [x] handler for home page.
    - [x] handler for flower catalogs.
  - [x] Implement the server for flower catalog app.
    - [x] Implement parser.
    - [x] Implement response entity.