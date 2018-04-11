import PlanNode from './PlanNode';
import messages from './../../messages'
import depthFirstSearch from './dfs';
import Node from './../Node'
import PlanRoute from './PlanRoute';
import dijkstra from './dijkstra';

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
        let node = new Node(end.name);
        node.distance = dis;
        this.plan[start].near[end.name] = node;
    }
    
    removeCorner(start, end) {
        delete this.plan[start].near[end];
    }
    
    distanceBetweenCorners(start, end) {
        end = end.trim()
        if (this.plan[start].near.hasOwnProperty(end)) {
            return parseInt(this.plan[start].near[end].distance);
        }
        throw new Error(messages.noSuchCorner);
    }
    
    distance(points) {
        let distance = 0;
        
        try {
            for (let i = 1; i < points.length; i++) {
                let start = points[i - 1];
                let end = points[i];
                distance += this.distanceBetweenCorners(start, end);
            }
            console.log('DISTANCE IS', distance);
        } catch(e) {
            console.log(e.message);
        }
        return distance;
    }
    
    tripsBetweenItemsWithMaximumStops(start, end, maxStops) {
        let routeCount = 0;
        let dfs = new depthFirstSearch(this.plan);
        let obj = this.plan[start].near;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                let route = new PlanRoute();
                route.add(this.plan[start].node, 0);
                route.add(obj[key], obj[key].distance);
                routeCount += dfs.search(key, (route) => end == route.last(), (route) => route.stops() > maxStops, route);
            }
        }
        console.log('TOTAL ROUTES ARE', routeCount);
        return routeCount;
    }
    
    tripsBetweenItemsWithExactStops(start, end, exactStops) {
        let routeCount = 0;
        let dfs = new depthFirstSearch(this.plan);
        let obj = this.plan[start].near;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                let route = new PlanRoute();
                route.add(this.plan[start].node, 0);
                route.add(obj[key], obj[key].distance);
                routeCount += dfs.search(key, (route) => (end == route.last() && route.stops() == exactStops), (route) => route.stops() > exactStops, route);
            }
        }
        console.log('TOTAL ROUTES ARE', routeCount);
        return routeCount;
    }
    
    shortestRouteLength(start, end) {
        let dij = new dijkstra(this.plan);
        let startN = this.plan[start];
        let endN = this.plan[end];
        let result = dij.search(startN, endN);
        console.log('SHORTEST ROUTE LENGTH IS', result);
        let endNode = this.plan[end];
    }
    
    routesWithMaximumDistance(start, end, maxDistance) {
        let routeCount = 0;
        let dfs = new depthFirstSearch(this.plan);
        let obj = this.plan[start].near;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                let route = new PlanRoute();
                route.add(this.plan[start].node, 0);
                route.add(obj[key], obj[key].distance);
                routeCount += dfs.search(key, (route) => (end == route.last()) && (route.distance < maxDistance), (route) => route.distance > maxDistance, route);
            }
        }
        console.log('TOTAL ROUTES ARE', routeCount);
        return routeCount;
    }
}