import Semaphore from "./Semaphore.js"

function main(semaphore){
    semaphore.execute()
}

const semaphore = new Semaphore()
semaphore.start()

setInterval(()=>{
    console.log(semaphore.getCurrentState().constructor.name)
},1000)
//setInterval(()=>main(semaphore), 500)
