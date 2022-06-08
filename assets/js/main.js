console.log("Level_1_1_!");

class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType;
    }
}
let ball1 = new Ball();
let ball2 = new Ball('super');
console.log(ball1.ballType);
console.log(ball2.ballType);

console.log("Level_1_2_! und Level_1_3_!");
let result = document.querySelector('#result');
let examCheck = document.querySelector('#examCheck');
let button = document.querySelector('#button');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    Info() {
        console.log(`Diese Person heißt ${this.name} und ist ${this.age} Jahre alt.`)
    }
    write() {
        if (examCheck.checked) {
            result.innerHTML += `<p>${this.name}, ${this.age} years old.</p>`;
            console.log("passed");
        } else if (!examCheck.checked) {
            let notPassed = `<p style="color:red">${this.name}, ${this.age} years old.</p>`;
            result.innerHTML += notPassed;
            console.log("didnt pass");
        }
    }
}

button.addEventListener('click', () => {
    let nameIn = document.querySelector('#name').value;
    let ageIn = document.querySelector('#age').value;
    let person1 = new Person(nameIn, ageIn);
    person1.write();
})


