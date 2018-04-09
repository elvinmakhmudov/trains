export default class TrainServices {
    constructor(map) {
        this.map = map;
    }

    shortestPath(start, end) {
        return this.map.shortestPath(start, end);
    }

    distance(points) {
        return this.map.distance(points);
    }

}