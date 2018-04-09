import PlanPoint from './PlanPoint';

export default class Plan {
    constructor() {
        this.plan = {};
    }

    addPoint(point) {
        //if plan does not contain point, add new PlanPoint
        if (!this.plan[point.name]) {
            this.plan[point.name] = new PlanPoint(point);
        }
    }

    addCorner(start, end, dis) {
        //add distance between start and end points
        this.plan[start].near[end] = dis;
    }

    removeCorner(start, end) {
        delete this.plan[start].near[end];
    }
}