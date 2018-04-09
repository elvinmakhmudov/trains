import Plan from "./Plan/Plan";
import fs from 'fs';
import messages from '../messages';
import Point from "./Point";

export default class Map {
    constructor() {
        this.plan = new Plan();
        this.map = {};
    }

    initialize(planPath) {
        //read the plan and validate each line
        let lines = fs.readFileSync(planPath, 'utf-8')
            .split('\n').
            filter((line) => this.validateAndParse(line));
    }

    validateAndParse(line) {
        //if there are 1 point throw an error
        if (line.length < 2) {
            throw new Error(messages.notEnoughPoints);
        } else {
            //initialize start and end points
            let startP = new Point(line.charAt(0));
            let endP = new Point(line.charAt(1));
            //get the distance between points
            let distance = Number(line.substring(2));
            console.log(line);
            //add start and end points
            this.plan.addPoint(startP);
            this.plan.addPoint(endP);

            //add corner
            this.plan.addCorner(startP,endP,distance);
        }
    }

    distance(points) {

    }
}