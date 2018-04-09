export default class PlanPoint{
    constructor(node) {
        this.node = node;
        this.near = {};
    }

    set distance(dis) {
        this.distance = dis;
    }

    get distance() {
        return this.distance;
    }
}