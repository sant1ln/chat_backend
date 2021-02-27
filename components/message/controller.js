const store = require('./store')

const addMessage = (user,message) =>{
    return new Promise((resolve,reject)=>{
        if(!user || !message){
            console.log('[MessageController] Usuario o Mensaje vacio');
            reject('Datos faltantes')
        }
        const fullMessage = {
            user,
            message,
            date: new Date().toLocaleString()
        }
        
        console.log(user,message);
        store.add(fullMessage)
        resolve(fullMessage)
    })
    
}

const getMessages = () =>{
    return new Promise((resolve,reject)=>{
        const messages = store.list()
        resolve(messages)
    })
} 

module.exports = {
    addMessage,
    getMessages,
};