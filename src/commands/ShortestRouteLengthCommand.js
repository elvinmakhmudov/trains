export default class ShortestRouteLengthCommand {
    constructor(services) {
        this.services = services;
    }

    setPoints(points) {
        this.start = points[1];
        this.end = points[2];
    }

    run() {
        return this.services.shortestRouteLength(this.start, this.end);
    }
}