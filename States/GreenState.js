import State from "./State.js"

export default class GreenState extends State {
    constructor(lightMsg, durationInSeconds=2){
        super(lightMsg, durationInSeconds)
    }
}