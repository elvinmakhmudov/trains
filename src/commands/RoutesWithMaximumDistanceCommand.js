import Node from './../components/Node';

export default class RoutesWithMaximumDistanceCommand {
    constructor(services) {
        this.services = services;
    }

    run() {
        return this.services.routesWithMaximumDistance(this.start, this.end, this.distance);
    }

    setPoints(start, end) {
        this.start = start;
        this.end = end;
    }

    setDistance(dis) {
        this.distance =dis;
    }
}