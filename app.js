class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep."
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor(a, b, c) {
        super(a, b, c);
    }

    numWheels = 4;
}

class Motorcycle extends Vehicle {
    constructor(a, b, c) {
        super(a, b, c);
    }

    numWheels = 2;

    revEngine() {
        return "VROOM!!!"
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
    }
    vehicles = [];
    add(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!"
        } else if (this.vehicles.length === this.capacity) {
            return "Sorry, we're full."
        } else {
            this.vehicles.push(vehicle)
            return `Your ${vehicle.model} was added to the garage!`
        }
    }
}