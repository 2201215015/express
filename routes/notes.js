var express = require('express');
var router = express.Router();

// 接続情報を設定
const{MongoClient} = require("mongodb");
const uri= "mongodb+srv://cu2201215015:shisui01_@cluster0.jn7zo.mongodb.net/?retryWrites=true&w=majority";
const client= new MongoClient(uri);

router.get('/', async(req, res) => {
// データベース、コレクションを指定
const database= client.db('notes');
const notes= database.collection('notes');

// idが2のドキュメントを取得
const query= {id:1};
const note= await notes.findOne(query);

res.json(note);
})

module.exports= router;