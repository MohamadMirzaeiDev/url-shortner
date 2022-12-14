import app from "../app";
import connect from "../database/connection";

const port = process.env.PORT || 4001 ;

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
