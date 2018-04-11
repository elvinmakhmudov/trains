export default class TripsBetweenItemsWithExactStopsCommand {
    constructor(services) {
        this.services = services;
    }

    run() {
        return this.services.tripsBetweenItemsWithExactStops(this.start, this.end, this.stopCount);
    }
    
    setPoints(points) {
        this.start = points[1];
        this.end = points[2];
    }

    setStopCount(count) {
        this.stopCount = count;
    }
}