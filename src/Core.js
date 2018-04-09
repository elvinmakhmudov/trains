import fs from 'fs';
export default class Core {
    constructor(container) {
        this.container = container;
    }

    run(path) {
        let commandArr = [];
        fs.readFileSync(path, 'utf-8')
            .split('\n').
            filter((command) => commandArr.push(this.container.add(command)));
        for(let i=0;i<commandArr.length;i++) {
            commandArr[i].run();
        }
    }
}