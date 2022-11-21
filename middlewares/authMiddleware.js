const jwt = require("jsonwebtoken");

module.exports =async(req, res, next) =>{
    
    try {
        const token = req.headers["authorization"].split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET,(err,decoded) => { 
   
           if(err)
           {
               return res.status(401).send({
                   message:"Auth failed",           //token is expired 
                   success: false
               });
           }else{
               req.body.userId = decoded.id;       //token is success then it will go to next
               next();
           }
   
        })
        
    } catch (error) {
        return res.status(401).send({
            message:"Auth failed",
            success: false
        });

        
    }

}