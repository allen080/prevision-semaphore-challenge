import State from "./State.js"

export default class YellowState extends State {
    constructor(lightMsg, durationInSeconds=2){
        super(lightMsg, durationInSeconds)
    }
}
