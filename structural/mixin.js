const myMixins = {
 
    moveUp: function(){
      console.log( "move up" );
    },
   
    moveDown: function(){
      console.log( "move down" );
    },
   
    stop: function(){
      console.log( "stop! in the name of love!" );
    }
   
  };

  class CarAnimator {
    constructor(){}
    
    moveLeft(){
      console.log( "move left" );
    };
  }

  //extend the prototype:
Object.assign(CarAnimator.prototype, myMixins); // Here its the point!

const car = new CarAnimator();
car.moveDown();
