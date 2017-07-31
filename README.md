## Starting the dev server

Make sure you have Node.js installed.
1. Start the dev server using `npm start`
2. Open [http://localhost:8080](http://localhost:8080)

## Available Commands

- `npm start` - start the dev server
- `npm clean` - delete the dist folder
- `npm run production` - create a production ready build in `dist` folder
- `npm run lint` - execute an eslint check
- `npm test` - run all tests

## Vendor Exporting

You can export specific vendors in separate files and load them. All vendors should be included in `app/vendors` and will be exported in a `vendors` folder under `dist`. The main idea is to serve independent JavaScript and CSS libraries, though currently all file formats are supported.

! Don"t forget to add the vendors in `app/index.html`.

## Production code

Run `npm run production`. The production-ready code will be located under `dist` folder.

## Licence

_react-webpack-boilerplate_ is available under MIT.
