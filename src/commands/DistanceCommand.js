export default class DistanceCommand {
    constructor(services) {
        this.services = services;
    }

    run() {
        return this.services.distance(this.points);
    }

    setPoints(points) {
        this.points = points;
    }
}