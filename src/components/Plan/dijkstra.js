import PriorityQueue from './FibonacciHeap';

export default class dijkstra {
    constructor(plan) {
        this.plan = plan;
    }
    
    search(start, end) {
        var verticesToCheck = new PriorityQueue();
        var hasBeenQueued = {};
        var processVertex = function (vertex, distance) {
            var edges = vertex.near;
            for (var key in edges) {
                if (edges.hasOwnProperty(key)) {
                    let newVert = edges[key].name;
                    let newDist = distance + edges[key].distance;
                    if (hasBeenQueued[newVert]) {
                        try { // try block needed in case newVert was removed
                            verticesToCheck.decreaseKey(newVert, newDist);
                        } catch (e) { }
                    }
                    else {
                        verticesToCheck.add(newDist, newVert);
                        hasBeenQueued[newVert] = true;
                    }
                }
            }
        }
        
        processVertex(start, 0);
        
        var queueElem;
        while ((queueElem = verticesToCheck.extractMin()) != null) {
            var distance = queueElem.key;
            var vertex = queueElem.value;
            if (vertex == end.node.name) {
                return distance;
            } else {
                processVertex(this.plan[vertex], distance);
            }
        }
        return null;
    };
}