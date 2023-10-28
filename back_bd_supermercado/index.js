import express from "express"
import 'dotenv/config'
import cors from "cors"
import { dbConnection } from "./database/db.js"
import { userRouter } from "./routes/user.routes.js"
import { articleRouter } from "./routes/article.routes.js"
import { employeeRouter } from "./routes/employee.routes.js"
import { ticketRouter } from "./routes/ticket.routes.js"
import { saleRouter } from "./routes/sale.routes.js"
import { errorHandler } from "./middleware/errorHandler.js"
import { unknownEndpoint } from "./middleware/unknownEndpoint.js"
import { calculateRouter } from "./routes/calculate-total.routes.js"

const server = express()
const PORT = process.env.APP_PORT

server.use(express.json())
server.use(cors())
server.use('/api/v1/users', userRouter)
server.use('/api/v1/articles', articleRouter)
server.use('/api/v1/employees', employeeRouter)
server.use('/api/v1/tickets', ticketRouter)
server.use('/api/v1/sales', saleRouter)
server.use('/api/v1/calculate-total', calculateRouter)

server.use(unknownEndpoint);
server.use(errorHandler);

async function main(){
    try {
        await dbConnection()
        server.listen(PORT, () => {
            console.log(`Server app is run in http://localhost:${PORT}`);
        }) 
    } catch (error) {
        console.log(error.message);   
    }
}
main()
    

