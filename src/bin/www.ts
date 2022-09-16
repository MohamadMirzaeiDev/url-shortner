import app from "../app";
import connect from "../database/connection";
import mainRouter from '../routes/index';
import { error, invalidUrl } from "../middlewares/error";
import config from 'config';

app.use('/api' , mainRouter);
app.all('*' , invalidUrl);
app.use(error);


const port = config.get('PORT') || 4001 ;

app.listen(port , ()=>{
    console.clear()
    console.log(process.version);
    connect((err , message)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(message)
        }
    })
    console.log('app is runing on port ' + port);
})
