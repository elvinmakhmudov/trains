export default class PlanNode{
    constructor(node) {
        this.node = node;
        console.log(this.node);
        this.near = {};
    }

    set distance(dis) {
        this.distance = dis;
    }

    get distance() {
        return this.distance;
    }
}