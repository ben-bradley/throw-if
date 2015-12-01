# throw-if

A small module to prevent re-writing the same error handling code again and again.

## Example

### Before ("old 'n busted")

```javascript
foo((err) => {
  if (err)
    throw new Error(err);

  // ...
});
```

### After ("new hottness")

```javascript
import throwIf from 'throw-if';

foo((err) => {
  throwIf(err);

  // ...
});
```

## Install

```
npm install --save throw-if
```

## Versions

- 0.0.1 - Initial commit
