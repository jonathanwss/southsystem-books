# SouthSystem Books

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

**SouthSystem Books** is a mobile app that permits you to search for your favorite books using google books API.
*Features includeds*
  - Search  by term for books
  - Mark book as favorite to se it later
  - Read the description of searched books

![Alt Text](https://media.giphy.com/media/iDaVIMJ7JyXYiq01jO/giphy.gif)

# This project uses the following technologies

  - React native (https://reactnative.dev/)
  - Javascript (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - Typescript (https://github.com/microsoft/TypeScript)
  - Jest (https://jestjs.io/)
  - Enzyme (https://github.com/enzymejs/enzyme)
  - Realm (https://realm.io/docs/javascript/latest/)


More technical infomations:
  - We use *useContext* from **react** to build our *Provider*
  - We use *realm* to persist informations in *local database*
  - We use *jest and enzyme* to run our tests


### Project structure
We use redux folder structure pattern as base to our project structure:
```
project
│   README.md
│   App.tsx    
│
└───src
│   │
│   └───Actions - (All actions)
│   │
│   └───Components - (All components)
│   │
│   └───Reducer - (Reducers structure)
│	│
│   └───Repository - (Realm repositories)
│	│
│   └───Schema - (Realm schemas)
│	│
│   └───Services - (Service e realm Service)
│	│
│   └───Store - (Provider structure)
│	│
│   └───View - (All Views)
```

### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**
