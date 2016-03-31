# Leet.js
> Leetcode solution in javascript. Test each problem using mocha.

### About

I use es6 syntax to write all test cases with mocha. Also, for fast building test cases of data structures such as linked list and binary tree, I wrote some utility classes for help.

**Directory Explaination**

```sh
leet.js
  ├── __test__ # mocha test case files
  ├── lib      # utilities
  └── src      # problem solutions
```

### Test

```
npm test
```

or

```
mocha --compilers js:babel-core/register __test__/`problem-name`.test.js
```

### LICENSE

[MIT](LICENSE) © [lavende](http://lavende.github.io)
