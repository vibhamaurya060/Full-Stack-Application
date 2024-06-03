import express from 'express'
import { config } from 'dotenv'
import connectToDB from './config/db.js';
import cors from 'cors';
import bookRouter from './routes/bookRoutes.js';

config()
const app=express()
const port=process.env.PORT || 9090;
const db_uri=process.env.DB_URI || null;

app.use(cors());
app.use(express.json());


app.get('/', (req,res)=>{
    res.send("this is a home route")
})


app.use(express.static('public'));
app.use('/api/books', bookRouter);

app.listen(port, async()=>{
    try{
        await connectToDB(db_uri);
        console.log("we are successfully connected to database");
        console.log(`server is running at port ${port}`);
    }
    catch(err){
        console.log(err);
    }
});

