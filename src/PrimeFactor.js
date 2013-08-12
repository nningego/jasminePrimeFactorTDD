function PrimeFactor() {

    factor = function (number) {
        var factors = [];


        var divisor = 2;
        for (var index = divisor; index <= number; index++) {
            while (number % index == 0) {
                factors.push(index);
                number = number / index
            }
        }
        return factors

    }

    return {
        factor: factor
    }

}