/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.values = []
    this.mins = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.values.push(x)
    if (this.mins.length) {
        if (x <= this.mins[this.mins.length - 1]) this.mins.push(x)
    } else {
        this.mins.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.mins[this.mins.length - 1] === this.values[this.values.length - 1])
        this.mins.pop()
    this.values.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.values[this.values.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.mins[this.mins.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
