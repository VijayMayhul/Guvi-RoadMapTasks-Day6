/*
Question -4 : Write a class to calculate the uber price.
*/

class UberPrice{
    constructor(distance, bookFee = 10, driverFee = 10){
        this.bookFee = bookFee;
        this.driverFee = driverFee;
        this.distance = distance;
    }
    getCalculatedUberPrice(){
        let feePerKM = 3;
        let fullDistanceFee = this.distance * feePerKM;
        let totalPrice = this.bookFee + this.driverFee + fullDistanceFee;
        return `Your total trip charge is : ${totalPrice}`;
    }
}

let fee = new UberPrice(5);
console.log(fee.getCalculatedUberPrice());