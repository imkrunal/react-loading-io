<h1 align="center">React Spiners using Loading.io</h1>

<p align="center">
  <a href="https://circleci.com/gh/imkrunal/react-loading-io">
    <img
      src="https://circleci.com/gh/imkrunal/react-loading-io.svg?style=svg&circle-token=6e459838eadd0d02dedb05352df7d2f3e0590168"
      alt="CircleCI"
    />
  </a>
  <a href='https://coveralls.io/github/imkrunal/react-loading-io?branch=master'>
    <img
      src='https://coveralls.io/repos/github/imkrunal/react-loading-io/badge.svg?branch=master'
      alt='Coverage Status'
    />
  </a>
  <a href='https://www.npmjs.com/package/react-loading-io'>
    <img
      src='https://img.shields.io/npm/dt/react-loading-io.svg'
      alt='Downloads'
    />
  </a>
  <a href='https://www.npmjs.com/package/react-loading-io'>
    <img
      src='https://img.shields.io/bundlephobia/minzip/react-loading-io.svg'
      alt='Bundle Size'
    />
  </a>
  <a href='https://github.com/imkrunal/react-loading-io/blob/master/LICENSE'>
    <img
      src='https://img.shields.io/github/license/imkrunal/react-loading-io.svg'
      alt='Licence'
    />
  </a>
</p>

<p align="center">CSS-only spinners of loading.io for React</p>

# Installation

Using npm:

```shell
npm install react-loading-io --save
```

Using yarn:

```shell
yarn add react-loading-io
```

# Usage

```javascript
// Import Package
import { Eclipse } from 'react-loading-io';

// Use Component
const Index = () => {
  return <Eclipse size={64} />;
};
```

# Spinners

- [x] Spinner
- [x] Eclipse
- [x] Rolling
- [x] Dual Ring
- [x] Ball
- [ ] Ripple
- [ ] Reload
- [ ] Gear
- [ ] Facebook
- [ ] Cube
- [ ] Blocks

| Loader                                                                                  | size:int | thickness:int | speed:int | color: str |
| --------------------------------------------------------------------------------------- | -------- | ------------- | --------- | ---------- |
| [Eclipse](https://imkrunal.github.io/react-loading-io/?path=/story/spinners--eclipse)   | 200      | 2             | 1         | #f08d43    |
| [Rolling](https://imkrunal.github.io/react-loading-io/?path=/story/spinners--rolling)   | 200      | 20            | 1         | #f08d43    |
| [DualRing](https://imkrunal.github.io/react-loading-io/?path=/story/spinners--dualring) | 200      | 4             | 1         | #f08d43    |
| [Ball](https://imkrunal.github.io/react-loading-io/?path=/story/spinners--ball)         | 200      | 4             | 1         | #f08d43    |
