/* Observers are functions */

class Subject {
    observers = [];

    subscribe = (observer) => {this.observers.push(observer)}

    //to do unsubscribe = (observer) => {...}

    fire = () => {
        for (const observer of this.observers) {
            observer.call();
        }
    }
}

//Create a subject
const subject = new Subject();

//create some observers:
const obs1 = () => {
    console.log("I am the observer 1");
}
const obs2 = () => {
    console.log("I am the observer 2");
}

// Subscribe those observers to the Subject
subject.subscribe(obs1);
subject.subscribe(obs2);

// Call the observers from the Subject

subject.fire();