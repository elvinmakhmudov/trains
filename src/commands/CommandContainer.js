import messages from './../messages';
import DistanceCommand from './DistanceCommand';
import ShortestRouteLengthCommand from './ShortestRouteLengthCommand';
import TripsBetweenItemsWithMaximumStopsCommand from './TripsBetweenItemsWithMaximumStopsCommand';
import RoutesWithMaximumDistanceCommand from './RoutesWithMaximumDistanceCommand';

//switch cases
const DISTANCE_OF_ROUTE = 'Distance_of_the_route_between';
const SHORTEST_ROUTE_LENGTH = 'Shortest_route_between_items';
const ROUTES_WITH_MAXIMUM_DISTANCE = 'The_number_of_routes_with_maximum_distance_of';
const TRIPS_BETWEEN_ITEMS_WITH_MAXIMUM_STOPS = 'Trips_with_maximum_stops_of';
const TRIPS_BETWEEN_ITEMS_WITH_EXACT_STOPS = 'Trips_with_exact_stops_of';

export default class CommandContainer {
    constructor(services) {
        this.services = services;
    }

    add(commandLine) {
        //divide the line into items
        let items = commandLine.split(" ");

        let methodName = items[0];
        switch(methodName) {
            case DISTANCE_OF_ROUTE:
                return this.distanceOfRoute(items);
                break;
            case SHORTEST_ROUTE_LENGTH:
                return this.shortestRouteLength(items);
                break;
            case TRIPS_BETWEEN_ITEMS_WITH_MAXIMUM_STOPS:
                return this.tripsBetweenItemsWithMaximumStops(items);
                break;
            case TRIPS_BETWEEN_ITEMS_WITH_EXACT_STOPS:
                return this.tripsBetweenItemsWithExactStops(items);
                break;
            case ROUTES_WITH_MAXIMUM_DISTANCE:
                return this.routesWithMaximumDistance(items);
                break;
            default:
                throw new Error(messages.wrongFormat);
                break;

        }


        console.log(this.method);
    }

    distanceOfRoute(items) {
        if(items.length < 2) {
            throw new Error(messages.wrongFormat);
        } 
        let command = new DistanceCommand(this.services);
        command.setPoints(items.slice(1))
        return command;
    }

    shortestRouteLength(items) {
        if(items.length !== 3) {
            throw new Error(messages.wrongFormat);
        } 
        let command = new ShortestRouteLengthCommand(this.services);
        command.setPoints(items);

        return command;
    }

    tripsBetweenItemsWithMaximumStops(items) {
        if(items.length !== 4) {
            throw new Error(messages.wrongFormat);
        } 
        let command = new TripsBetweenItemsWithMaximumStopsCommand(this.services);
        command.setPoints(items);
        command.setStopCount(items[3]);
        return command;
    }

    tripsBetweenItemsWithExactStops(items) {
        if(items.length !== 4) {
            throw new Error(messages.wrongFormat);
        } 
        let command = new TripsBetweenItemsWithExactStopsCommand(this.services);
        command.setPoints(items);
        command.setStopCount(items[3]);
        return command;
    }

    routesWithMaximumDistance(items) {
        if(items.length !== 4) {
            throw new Error(messages.wrongFormat);
        } 
        let command = new RoutesWithMaximumDistanceCommand(this.services);
        command.setPoints(items);
        command.setDistance(items[3]);
        return command;
    }


}