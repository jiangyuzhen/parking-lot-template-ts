import ParkingLot from '../src/parkingLot.class';
import Car from '../src/car.class';
import Ticket from '../src/ticket.class';

test('should get ticket when parking 1 car in available parking lot', () => {
    const parkingLot: ParkingLot = new ParkingLot(1);
    const car: Car = new Car("川AE0000");
    const ticket: Ticket = parkingLot.park(car);
    expect(ticket).not.toBeNull();
});

