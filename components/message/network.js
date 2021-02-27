const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')


router.get('/',(req,res)=>{
   controller.getMessages()
        .then(messages=>{
            response.success(req,res,200,messages)
        })
        .catch(()=>{
            response.error(req,res,500,'Unexpected Error')
        })
})

router.post('/',(req,res)=>{
    const {body:{user,message}} = req
    controller.addMessage(user, message)
        .then((fullMessage)=>{
            response.success(req,res,200,fullMessage)
        })
        .catch(()=>{
            response.error(req,res,400,'Error')
        })
})



module.exports = router