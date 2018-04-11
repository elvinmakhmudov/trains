import Plan from "./Plan/Plan";
import fs from 'fs';
import messages from '../messages';
import Node from "./Node";

export default class Map {
    constructor() {
        this.plan = new Plan();
        this.map = {};
    }

    initialize(planPath) {
        //read the plan and validate each line
        fs.readFileSync(planPath, 'utf-8')
            .split('\n').
            filter((line) => this.validateAndParse(line));
    }

    validateAndParse(line) {
        let items = line.split(" ").map(Function.prototype.call, String.prototype.trim).filter((x) => !!x ? x : null);
        //if there are 1 point throw an error
        if (line.length < 2) {
            throw new Error(messages.notEnoughPoints);
        } else {
            //initialize start and end points
            let startP = new Node(items[0]);
            let endP = new Node(items[1]);
            //get the distance between points
            let distance = Number(items[2]);
            //add start and end points
            this.plan.addNode(startP);
            this.plan.addNode(endP);

            //add corner
            this.plan.addCorner(startP,endP,distance);
        }
    }

    distance(points) {
        return this.plan.distance(points);
    }

    routesWithMaximumDistance(start, end, maxStop) {
        return this.plan.routesWithMaximumDistance(start, end, maxStop);
    }

    tripsBetweenItemsWithMaximumStops(start, end, maxStop) {
        return this.plan.tripsBetweenItemsWithMaximumStops(start, end, maxStop);
    }

    tripsBetweenItemsWithExactStops(start, end, exactStop) {
        return this.plan.tripsBetweenItemsWithExactStops(start, end, exactStop);
    }

    shortestRouteLength(start, end) {
        return this.plan.shortestRouteLength(start, end);
    }
}