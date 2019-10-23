import Ticket from './ticket.class';
import Car from './car.class';

class ParkingLot {
    capacity: number;

    constructor(capacity) {
        this.capacity = capacity;
    }

    park(car: Car) {
        return new Ticket();
    }
}

export default ParkingLot;