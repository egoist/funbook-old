Use Vue component as chapter content:

```js
book.chapter({
  title: 'Hello',
  content: require('./hello.vue'),
  // Or lazy loading:
  // content: () => import('./hello.vue')
})
```

