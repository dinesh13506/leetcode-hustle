function divide(dividend, divisor) {
    let count = 0, sign = 1;

    if (dividend === 0) {
        return 0;
    }

    if (dividend < 0 && divisor < 0) {
        sign = 1;
        dividend = Math.abs(dividend);
        divisor = Math.abs(divisor);
    } else if (dividend < 0) {
        sign = -1;
        dividend = Math.abs(dividend);
    } else if (divisor < 0) {
        sign = -1;
        divisor = Math.abs(divisor);
    } else {
        sign = 1;
    }

    if (divisor === 1) {
        count = dividend;
    } else {
        while (dividend >= divisor) {
            dividend -= divisor;
            count++;
        }
    }

    if (count * sign < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    } else if (count * sign > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    } else {
        return count * sign;
    }
}
