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

Simply test all problems

```
npm test
```

or test single problem

```
mocha __test__/`problem-name`.test.js
```

### LICENSE

The MIT License (MIT)

Copyright (c) 2016 lavende <gilesliu12@gmail.com> (lavende.github.io)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
