export default class RoutesWithMaximumDistanceCommand {
    constructor(services) {
        this.services = services;
    }

    run() {
        return this.services.routesWithMaximumDistance(this.start, this.end, this.distance);
    }

    setPoints(points) {
        this.start = points[1];
        this.end = points[2];
    }

    setDistance(distance) {
        this.distance = distance;
    }
}