import Users from '../models/users.js'
import UserSession from '../models/userSession.js';

const createSession = async(userObject) => {
    const newUSerSession = new UserSession()
    newUSerSession.userId = userObject._id
    newUSerSession.isDeleted = false
    const sessionRes = await newUSerSession.save()
    return sessionRes
}

export const userSignUp = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS"  ); 

    res.json('Hey there');
    // const userData = req.body;
    // // console.log('userData', userData)
    // const existingUser = await Users.find({email: userData.email})
    // // console.log("existingUser " + JSON.stringify(existingUser))
    // if(existingUser.length == 0){
    //     const newUser = new Users(userData)
    //     try {
    //         await newUser.save()
    //         await createSession(newUser)
    //         res.status(201).json(newUser)
            
    //     } catch {
    //         res.status(404).json({message : error.message});
    //     }
    // } else {
    //     res.status(404).json({message : "Username already exists"});
    // }
}


export const userSignIn = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    try {
        const reqData = req.body
        const users = await Users.find({_id: reqData.userId})
        if(users.length != 1) {
            res.status(404).json({message : "Invalid User"})
        } else {
            const user = users[0]
            const newUSerSession = new UserSession()
            newUSerSession.userId = user._id
            newUSerSession.isDeleted = false
            const sessionRes = await newUSerSession.save()
            res.status(200).json({token : sessionRes._id});
        }
       
    } catch {
        res.status(404).json({message : error.message});
    }
}

export const verifySession = async (req, res) => {
    try {
        const reqData = req.body
        console.log(reqData)
        const users = await UserSession.find({_id: reqData.token, 'isDeleted' : false})
        const user = users[0]
        if(users.length == 1){
            res.status(200).json(user)
        }else {
            res.status(404).json({"error" : "Session Invalid"});
        }
        
    } catch {
        res.status(404).json({message : error.message});
    }
}