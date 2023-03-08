import BigNumber from 'bignumber.js';

class MathCalculator {
    // 构造函数
    constructor() {
        // do something
    }

    // 通过以下方法对 BigNumber 进行对应的运算
    add(a, b) {
        return new BigNumber(a).plus(new BigNumber(b)).toString();
    }

    subtract(a, b) {
        return new BigNumber(a).minus(new BigNumber(b)).toString();
    }

    multiply(a, b) {
        return new BigNumber(a).multipliedBy(new BigNumber(b)).toString();
    }

    divide(a, b) {
        return new BigNumber(a).dividedBy(new BigNumber(b)).toString();
    }
}

export default MathCalculator;
