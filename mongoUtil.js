const { MongoClient } = require("mongodb");

let dbConnection;

const connectToDb = async (dbName,cb) => {
 try {  
    const url=`mongodb+srv://sapo:sapo@cluster0.h7uuyll.mongodb.net/${dbName}?retryWrites=true&w=majority`
    const client=await MongoClient.connect(url)
    dbConnection=client.db();
    return cb()
  } catch (error) {
    console.log(error)
    return cb(error)
  }
}

const getDb = () => {
  return dbConnection
}

const createNewCollection=(collectionName,schema)=>{
  db.listCollections({ name: collectionName }).next((err,colInfo)=>{ 
    if(colInfo==null){
      db.createCollection(collectionName,schema)
    }
    else return
  })
}

module.exports = { connectToDb, getDb, createNewCollection }


