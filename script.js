//Name: David Chinedu

//Upskill profile Object

const upskillprofile = {
    name: 'David Chinedu',
    age: 19,
    hobbies: ['Eating', 'Watching Movies', 'Coding' ],

   Introduction() {
        console.log(`Hi, my name is ${this.name}, and my three hobbies are ${this.hobbies.join(', ')}
    `);
    }   
};

upskillprofile.Introduction(); 
//Second hobby
console.log('My second best hobby is', upskillprofile.hobbies[1]);

//Bruce callback

function CTA (callback) {
    console.log('Hi you are specially welcome, am Bruce and i will be your program Coordinator for the upskill program.')
    callback();
}

function Booster() {
    console.log('So are you ready to embark on this journey, if yes give me a JIGGY!!!!!!');
}

CTA(Booster);