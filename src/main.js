import Map from './components/Map';
import messages from './messages.json';
import TrainServices from './TrainServices';
import CommandContainer from './commands/CommandContainer';
import Core from './Core';

let args = process.argv;
if (args.length != 4) {
    console.log(messages.usage);
} else {
    try {
        //get the arguments
        let command = args[2];
        let plan = args[3];
        //initialize map
        let map = new Map();
        map.initialize(plan);
        //initialize new train services
        let services = new TrainServices(map);
        let commandContainer = new CommandContainer(services);
        let core = new Core(commandContainer);

        core.run(command);
    } catch (e) {
        console.log(e);
    }

}