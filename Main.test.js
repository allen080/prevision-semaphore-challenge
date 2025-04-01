import Semaphore from "./Semaphore.js"
import GreenState from "./States/GreenState.js";
import RedState from "./States/RedState.js";
import State from "./States/State.js";
import YellowState from "./States/YellowState.js";

describe("Testing semaphore", ()=>{
    test("if semaphore initiates with red light", ()=>{    
        const semaphore = new Semaphore()

        expect(semaphore.getInitialState()).toBeInstanceOf(RedState)
    })

    test("if semaphore second state is green", () => {
        const semaphore = new Semaphore()

        expect(semaphore.getNextState()).toBeInstanceOf(GreenState)
    })

    test("if state is setting a next state", () => {
        const s1 = new State("state 1", 2)
        const s2 = new State("state 2", 2)

        s1.setNextState(s2)
        expect(s1.getNextState()).toBe(s2)
    });

    test("if state red has the correct message and duration", () => {
        const red = new RedState("ESPERE AÍ", 10)

        expect(red.getMessage()).toBe("ESPERE AÍ")
        expect(red.getStateDuration()).toBe(10)
    });

    test("if state green has the correct message and duration", () => {
        const green = new GreenState("SIMBORA!", 5)

        expect(green.getMessage()).toBe("SIMBORA!")
        expect(green.getStateDuration()).toBe(5)
    });

    test("if state yellow has the correct message and duration", () => {
        const yellow = new YellowState("FICA ESPERTO, QUERIDO", 1)

        expect(yellow.getMessage()).toBe("FICA ESPERTO, QUERIDO")
        expect(yellow.getStateDuration()).toBe(1)
    });
})