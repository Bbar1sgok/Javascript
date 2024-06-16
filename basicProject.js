// 1-> Klavyeden kenarları girilen bir üçgenin çeşidini bulma

let side1 = parseFloat(prompt("Please enter the first side: "));
        let side2 = parseFloat(prompt("Please enter the second side: "));
        let side3 = parseFloat(prompt("Please enter the third side: "));

        if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
            alert("Please enter a valid number.");
        } else {
            if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)) {
                if (side1 === side2 && side1 === side3) {
                    alert("The lengths you entered belong to an equilateral triangle.");
                } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
                    alert("The lengths you entered belong to a scalene triangle.");
                } else {
                    alert("The lengths you entered belong to an isosceles triangle.");
                }
            } else {
                alert("The lengths you entered do not satisfy the triangle inequality.");
            }
        }