/* Observers are methods */

class Observable {
    observers = [];

    attach = (observer) => {this.observers.push(observer)}
    
    detach = (observer) => {
        this.observers = this.observers.filter(obs => obs instanceof observer !== true);
    }

    notify = () => {
        for (const observer of this.observers) {
            observer.update();
        }
    }
    
}

class Observer {

    constructor(tag){
        this.tag = tag;
    }
    update = ()=>{ console.log(`Updating: ${this.tag}`);}
}


class YoutubeChannel extends Observable {

    totalVideos = 0;

    addVideo = (videoName) => {
        this.totalVideos++;
        this.notify()

        console.log(`New Video: ${videoName}`);
        console.log(`total videos: ${this.totalVideos}`);
    }
}

//Create a Youtube Channel (Observable)
const youtubeChannel = new YoutubeChannel();

//create some observers:
const observer1 = new Observer("Observer_1");
const observer2 = new Observer("Observer_2");

// Subscribe those observers to the Subject
youtubeChannel.attach(observer1);
youtubeChannel.attach(observer2);

// Call the observers from the Subject
youtubeChannel.addVideo("Tutorial");