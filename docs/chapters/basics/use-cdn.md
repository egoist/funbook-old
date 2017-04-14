You can use the CDN version of FunBook, and it's probably the easiest to use FunBook as well, basically you only need to import the JS/CSS files into your HTML and it's done:

```html
<head>
  <link rel="stylesheet" href="https://unpkg.com/funbook/dist/funbook.css" />
</head>

<body>
  <div id="root"><!-- where the app is mounted --></div>
  <script src="https://unpkg.com/funbook/dist/funbook.js"></script>
  <script>
    const book = new FunBook.default({
      title: 'My First Book'
    })

    // By default we use history mode since mostly like you want to 
    // Generated static files or use with server-side rendering
    // But here we don't need that at all
    book.open('#root', { routerMode: 'hash' })
  </script>
</body>
```

So far, you first FunBook is created! However nothing would be present until you add the first chapter or page before `book.open()`:

```js
book.page({
  title: 'Home',
  path: '/',
  content: 'Home Page'
})
```
