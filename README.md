# Spanify

This is just a helper for CoreMedia to turn anchor tags into spans.

In CoreMedia put 3 spaces before the text you want to wrap in a span tag. Then select the middle space with your mouse cursor then insert a link (right-click or format menu) then in the title field type the class name you want the span to have. Do the same after the text you want to wrap, highlighting the middle space character and link it with "end" in the title field.

*Usage:*

```bash
npm install spanify
```
```js
import { spanify } from "spanify";
spanify();
```

This scans the page for these anchor tags and replace them with spans.

Essentially this script scans the DOM for `<a title="whatever"> </a> some text <a title="end"> </a>` and converts to `<span class="whatever">some text</span>`

You can also specify a default class that will be added to the span in addition to any classes specified in CoreMedia by passing an object to the function like this:

```js 
spanify({ defaultClass: "default" })
```

## Hashify

Sometimes in CoreMedia we use #hashtag links. If you put a #hastag on its own line it turns into `<a name="hashtag"> </a>`. This is fine until you want to append content to this element. Any text inside this anchor tag will have link styles applied to it.

To workaround this we can use this: 

```js
import { hashify } from "spanify";
hashify();
```

This will scan the page for these anchor tags and replace them with `<div class="whatever"></div>`

You can also specify a default class that will be added to the div in addition to any classes specified in CoreMedia by passing an object to the function like this:

```js
hashify({ defaultClass: "default" });
```

To hashify only certain #hashtag links pass something like this:

```js
hashify({ hashList: ["addressinput", "incomeinput"] });
```
