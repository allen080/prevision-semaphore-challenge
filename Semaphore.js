import GreenState from "./States/GreenState.js"
import RedState from "./States/RedState.js"
import YellowState from "./States/YellowState.js"

export default class Semaphore {
    constructor(){
        const red = new RedState("ESPERE AÍ", 10)
        const green = new GreenState("SIMBORA!", 5)
        const yellow = new YellowState("FICA ESPERTO, QUERIDO", 1)

        red.setNextState(green)
        green.setNextState(yellow)
        yellow.setNextState(red)

        this.initialState = red // initial state
    }

    getInitialState(){
        return this.initialState
    }

    getNextState(){
        return this.initialState.getNextState()
    }

    start(){
        this.initialState.handle()
    }

    getMessage(){
        return this.initialState.getMessage()
    }
}
