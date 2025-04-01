export default class State {
    constructor(lightMsg, stateDuration){
        this.lightMsg = lightMsg
        this.stateDuration = stateDuration;
        this.nextState = null
    }

    handle() {
        console.log(this.getMessage())
        
        const msgExecutesInterval = setInterval(() => {
            if(this.getStateDuration() > 1) // check if need to execute more than one time
                console.log(this.getMessage())
        }, 1000)

        setTimeout(() => { // stops message and change to next
            clearInterval(msgExecutesInterval)

            if(this.nextState) {
                this.nextState.handle()
            }
        }, this.getStateDuration() * 1000) 
      }

    getStateDuration(){
        return this.stateDuration
    }

    setNextState(nextState){
        this.nextState = nextState
    }

    getNextState(){
        return this.nextState
    }

    getMessage(){
        return this.lightMsg
    }
}
