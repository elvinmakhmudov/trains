import messages from '../../messages'
export default class DeepFirstSearch {
    constructor(plan) {
        this.plan = plan;
    }
    search(currentNode, filter, stopCallback, route) {
        let total = 0;

        if (filter(route)) {
            total++;
        }

        let obj = this.plan[currentNode].near;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                route.add(obj[key], obj[key].distance);
                if(stopCallback(route)) {
                    route.removeLast(obj[key].distance);
                    continue;
                } else {
                    total += this.search(key, filter, stopCallback, route);
                }
                route.removeLast(obj[key].distance);
            }
        }
        return total;
    }

}