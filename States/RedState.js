import State from "./State.js"

export default class RedState extends State {
    constructor(lightMsg, durationInSeconds=2){
        super(lightMsg, durationInSeconds)
    }
}