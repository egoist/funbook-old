# funbook

[![NPM version](https://img.shields.io/npm/v/funbook.svg?style=flat)](https://npmjs.com/package/funbook) [![NPM downloads](https://img.shields.io/npm/dm/funbook.svg?style=flat)](https://npmjs.com/package/funbook) [![CircleCI](https://circleci.com/gh/egoist/funbook/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/funbook/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add funbook
```

## Usage

### With Webpack

```js
import FunBook from 'funbook'

// Create a book
const book = new FunBook({
  title: 'My Awesome Book'
})

// Add a new chapter
book.chapter({
  title: 'Chapter 1',
  content: 'This is the first chapter of my book!',
  stories: [{
    title: 'Story 1',
    content: 'A chapter could contain multiple stories'
  }]
})

// Open the book at #root element
book.open('#root')
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**funbook** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/funbook/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
