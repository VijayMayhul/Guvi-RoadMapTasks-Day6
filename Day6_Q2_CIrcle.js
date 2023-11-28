/*
Question -2 : https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
*/

class Circle{
    constructor(radius, colour){
        this.radius = radius;
        this.colour = colour;
    }

    getRadius(){
        return `The Radius of the circle is ${this.radius.toFixed(2)}`;
    }

    set circleRadius(modifiedRadius){
        this.radius = modifiedRadius;
        console.log(`The changed Radius of the circle is ${this.radius.toFixed(2)}`);
    }

    getColour(){
        return `The Colour of the circle is ${this.colour}`;
    }

    set circleColour(modifiedColour){
        this.colour = modifiedColour;
        console.log(`The Changed colour of the circle is ${this.colour}`);
    }

    circletoString(...strings){
        let str = strings.toString();
        return `The stringified values are ${str}`;
    }

    circleArea(){
        let area = (22/7)*((this.radius)**2);
        // console.log(this.radius);
        console.log(`The area of a circle is : ${area.toFixed(2)}`);
    }

    circleCircumference(){
        let circum = 2*(22/7)*(this.radius);
        console.log(`The Circumference of a circle is : ${circum.toFixed(2)}`);
    }
}

let obj1 = new Circle(3.0, "blue");
console.log(obj1.getRadius());
obj1.circleRadius = 9;
console.log(obj1.getColour());
obj1.circleColour = "Red";
console.log(obj1.circletoString([2.34, "yellow"]));
obj1.circleArea();
obj1.circleCircumference();