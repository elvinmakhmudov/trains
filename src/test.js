export default class Test extends Error {
    constructor(...args) {
        super(...args)
        Error.captureStackTrace(this, Test)
    }
}