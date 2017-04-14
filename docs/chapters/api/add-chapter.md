## book.chapter(chapter)

### chapter

#### title

Type: `string`<br>
Required: `true`

Chapter title

#### id

Type: `string`<br>
Default: Generated from `title`

eg: for title `Hello World` the id is `hello-world`

#### content

Type: `string` `object` `function`

Chapter content.

#### stories

Type: `Array<Chapter>`

An array which contains multiple stories (sub-chapter).
