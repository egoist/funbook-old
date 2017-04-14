Vue supports server-side rendering seamlessly and FunBook uses Vue under the hood, so it couldn't be easier to use Vue SSR to serve your book or generate static web pages.

The simplest solution to use Vue SSR so far is using [Ream](https://github.com/ream/ream), basically you  only need to export a vue-router instance in your entry file and it's all set:

```js
import router from './my-vue-router'

export default { router }
```

Similarly, when you're using Ream with FunBook, just export `book.open()`, FunBook will automatically return `router` and other necessary data in this method:

```js
// src/index.js
import FunBook from 'funbook'
import 'funbook/dist/funbook.css'

const book = new Book({})

// ...add chapters
// ...add pages

export default book.open()
```

Then run `ream dev` in your project.
