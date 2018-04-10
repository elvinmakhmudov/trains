export default class depthFirstSearch {
    constructor() {
        this.stack = [];
    }
    search(rootNode) {
        this.stack.push(rootNode);
        rootNode.visited = true;

        while (this.stack.length !== 0) {
            let currentNode = this.stack.pop();
            console.log(currentNode)

            for(let i=0;i<currentNode.near;i++) {
                if(currentNode.near[i].)
            }
        }
    }
}
