export default class TrainServices {
    constructor(map) {
        this.map = map;
    }

    shortestRouteLength(start, end) {
        return this.map.shortestRouteLength(start, end);
    }

    distance(points) {
        return this.map.distance(points);
    }

    routesWithMaximumDistance(start, end, maxStop) {
        return this.map.routesWithMaximumDistance(start, end, maxStop);
    }

    tripsBetweenItemsWithMaximumStops(start, end, maxStop) {
        return this.map.tripsBetweenItemsWithMaximumStops(start, end, maxStop);
    }

    tripsBetweenItemsWithExactStops(start, end, exactStops) {
        return this.map.tripsBetweenItemsWithExactStops(start, end, exactStops);
    }
}