const express = require("express")

class App {
    express: any
    constructor(){
        this.express = express()
    }
    public routes(): void{
        this.express.use('./routes')
    }
    public middleware(): void{
        this.express.use(this.express.json())
    }
}

module.exports = new App()