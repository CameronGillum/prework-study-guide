const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

<<<<<<< HEAD
function listTopics() {
    for (let x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
}

function selectTopic() {
    if (topics === 'HTML') {
    console.log("Let's study HTML!");
    } else if (topics === 'CSS') {
    console.log("Let's study CSS!");
    } else if (topics === 'Git') {
    console.log("Let's study Git!");
    } else if (topics === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }

}
=======
for (let x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}

/*
if (topic === 'HTML') {
 console.log("Let's study HTML!");
} else if (topic === 'CSS') {
 console.log("Let's study CSS!");
} else if (topic === 'Git') {
 console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
*/

function helloWorld() {
    console.log("Hello, world, I am a function!")
   }
>>>>>>> 7ef9ca701fa0d5d6840e3f4452c7147b21f122d0
