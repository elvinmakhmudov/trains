export default class TripsBetweenItemsWithMaximumStopsCommand {
    constructor(services) {
        this.services = services;
    }

    run() {
        return this.services.tripsBetweenItemsWithMaximumStops(this.start, this.end, this.stopCount);
    }
    
    setPoints(points) {
        this.start = points[1];
        this.end = points[2];
    }

    setStopCount(count) {
        this.stopCount = count;
    }
}