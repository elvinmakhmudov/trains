export default class PlanRoute {
    constructor() {
        this.nodes =[];
        this.distance = 0;
    }
    
    removeLast(distance) {
        if(this.nodes.length !== 0) {
            this.distance -=distance;
            this.nodes.splice(-1,1);
            return true;
        } else {
            return false;
        }
    }

    add(node, distance) {
        this.distance +=distance;
        this.nodes.push(node);
    }

    stops() {
        return (this.nodes.length-1);
    }

    last() {
        return this.nodes[this.nodes.length -1];
    }
}