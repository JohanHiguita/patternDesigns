
class CarManager {

    commands = {
        // request information
        requestInfo: function (model, id) {
            return "The information for " + model + " with ID " + id + " is foobar";
        },

        // purchase the car
        buyVehicle: function (model, id) {
            return "You have successfully purchased Item " + id + ", a " + model;
        },

        // arrange a viewing
        arrangeViewing: function (model, id) {
            return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
        }
    }

    execute(command, ...args) {
        
        if(!this.commands[command]){
            return`Command "${command}" does not exist`;
        }
        const [model, id] = args;
        return this.commands[command](model, id)
    }
}

const cm = new CarManager();

const msg = cm.execute("buyVehicle", "Ford Escort", "453543");

console.log(msg);
