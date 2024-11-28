Attempt to eject the [source code of `vike-react`](https://github.com/vikejs/vike-react/tree/main/packages/vike-react).

Blocker:
 - https://github.com/brillout/playground_eject-vike-react/commit/2062471439d02d772eb9b1616266ebaff10dfc91

Difficulty:
 - https://github.com/brillout/playground_eject-vike-react/commit/2021b3461f9122186d52c3c287836639f8d3d675

Everything else seems to work by applying this eject config:

```js
node_modules/vike-react/eject.config.js

export const config = {
  files: 'src/*',
  operations: [
    'mv src/* .',
    'mv integration renderer',
    'mv config.ts renderer/+config.ts',
    'mv renderer/onRenderHtml.tsx renderer/+onRenderHtml.tsx',
    'mv renderer/onRenderClient.tsx renderer/+onRenderClient.tsx',
    'mv renderer/Loading.tsx renderer/+Loading.tsx',
    'rm index.ts',
  ],
}
```

And by using `// @eject-remove` comments.

See commit history.
