# FmtNum
[js] Format number.

### Install
```
npm install kc-fmtnum
```

### Use
```js
var num = 42;
var decm = 2;   // decimal places (default: 2)
var tsep = '.'; // thousands separator (default: '')
var dsep = '.'; // decimals separator (default: '.')
num = fmtNum(num, decm, tsep, dsep);
console.log(num);
```
