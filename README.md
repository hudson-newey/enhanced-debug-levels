 # Enhanced Debug Levels

"Enhanced debug levels for JavaScript"

When creating libraries, there is a difference between console warnings/errors
that you want to be shown to library consumers, and console warnings/errors
that you want to see as a library author.

Typically, you would use a `console.debug` statement, and get your bundler to
remove debug statements during build.

However, using the default "debug" level sometimes does not provide you with
information on if your console messages are fatal, a warning, or just a noraml
log.

This library fixes this issue by providing you with more debug levels so that
you can have console warnings that will only show during development, and can
be removed during a production build.

## Usage

```ts
import "enhanced-debug-levels";

console.debug.warn("A warning message that is emitted at the 'debug' level");
console.debug.error("An error message that is emitted at the 'debug' level");
console.debug.info("An info message that is emitted at the 'debug' level");
```
