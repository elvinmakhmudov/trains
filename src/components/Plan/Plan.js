import PlanNode from './PlanNode';
import messages from './../../messages'
import depthFirstSearch from './dfs';
import Node from './../Node'

export default class Plan {
    constructor() {
        this.plan = {};
    }

    addNode(node) {
        //if plan does not contain point, add new PlanNode
        if (!this.plan[node.name]) {
            this.plan[node.name] = new PlanNode(node);
        }
    }

    addCorner(start, end, dis) {
        //add distance between start and end points
        let node = new Node(end);
        node.distance = dis;
        this.plan[start].near[end] = node;
    }

    removeCorner(start, end) {
        delete this.plan[start].near[end];
    }

    distanceBetweenCorners(start, end) {
        console.log("getting distance between items: ", start, end);
        if (this.plan[start].near.hasOwnProperty(end.trim())) {
            // console.log(this.plan[start].near);
            console.log('end', end);
            console.log('near is ', this.plan[start].near);
            console.log('near ob is ', this.plan[start].near[end]);
            return parseInt(this.plan[start].near[end].distance);
        }
        throw new Error(messages.noSuchCorner);
    }

    distance(points) {
        let distance=0;

        for (let i = 1; i < points.length; i++) {
            let start = points[i-1];
            let end = points[i];
            distance += this.distanceBetweenCorners(start, end);
        }
        console.log(distance);
        return distance;
    }

    routesWithMaximumDistance(start, end, maxStop) {
        let dfs = new depthFirstSearch();
        console.log('result', result);
    }
}