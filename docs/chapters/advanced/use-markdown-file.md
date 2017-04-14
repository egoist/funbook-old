When you're using FunBook with Webpack, you can benifit from the module system and using external markdown file as chapter content:

```js
// webpack.config.js
// yarn add post-loader --dev
module.exports = {
  module: {
    rules: [{
      test: /\.md$/,
      loader: 'post-loader',
      options: {} // options for markdown-it
    }]
  }
}
```

Then in your FunBook app:

```js
// ... code

book.chapter({
  title: 'Intro',
  content: require('./intro.md')
})
```

Bascially this loader transform markdown string to `{ content: 'html string..' }` shape.

And async loading works too:

```js
book.chapter({
  title: 'Intro',
  content: () => import('./intro.md')
})
```
