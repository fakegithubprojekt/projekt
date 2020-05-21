import express from 'express';
import cors from 'cors';
import connect from './db.js';
import mongo from 'mongodb';
import auth from './auth';

const app = express(); // instanciranje aplikacije
const port = 3000; // port na kojem će web server slušati

app.use(cors());
app.use(express.json()); // automatski dekodiraj JSON poruke


app.get('/posts', async (req, res) => {
    let db = await connect();
    let query = req.query;

    // let selekcija = {};
    // let filter={};
    
    // if (query._any) {
    //     let pretraga = query._any;
    //     let terms = pretraga.split(' ');

    //     let atributi = ['email', 'poslodavac'];

    //     selekcija = {
    //         $and: [],
    //     };

    //     terms.forEach((term) => {
    //         let or = {
    //             $or: [],
    //         }

    //         atributi.forEach((atribut) => {
    //             or.$or.push({ [atribut]: new RegExp(term) });
    //         });

    //         selekcija.$and.push(or);
    //     });
    // }
    let cursor = await db.collection('projekt').find({});
    let results = await cursor.toArray();

    res.json(results);
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
