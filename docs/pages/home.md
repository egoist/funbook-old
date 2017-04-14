FunBook is a framework helping you build websites really fast. 

Briefly speaking, it gives you the UI, you fill it with the contents.

Let's learn by example:

```js
// In webpack you can 
// import FunBook from 'funbook'
// and `new FunBook()` directly
const book = new FunBook.default({
  title: 'My Awesome Book',
  nav: [{
    title: 'Home',
    path: '/'
  }]
})

// Add homepage
book.page({
  title: 'Home',
  path: '/',
  content: 'Home Page'
})

// Add a chapter
book.chapter({
  title: 'Intro',
  content: '<strong>My first chapter</strong>'
})

// Open book at `#root` element as a single page app (hash router)
book.open('#root', {
  routerMode: 'hash'
})
```

Try it on [JSFiddle](http://jsfiddle.net/aprilorange/h6m5bxqv/10).

Which is worth noting, the `content` property supports following types of values:

- string: Treated as HTML
- object
  - has `render` or `template` property: Vue component
  - has `content` property: HTML string
- Function: return a Promise which resolves an object
