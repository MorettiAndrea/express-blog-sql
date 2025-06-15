// import

const { response } = require("express");
const connection = require ("../data/db")














const posts = require("../data/posts");

const index = (req, res) => {
 

  const sql = `SELECT * 
  FROM posts`;

  connection.query(sql, (err, results) => {
    if (err || !req) return res.status(500).json({ error: "query request failed" });
    
   
    res.json({
      data: results,
      status: 200,
    }); console.log(results);
  });
};

const show = (req, res) => {

  const postsId  = parseInt(req.params.id)

  if ((!postsId) || isNaN(postsId)) {
    return res.status(400).json({ error: "Invalid Id" });
  }

 const sqlShow = 
 `SELECT *
  FROM posts
  WHERE id = ?`

  connection.query(sqlShow,[postsId],(err,results) =>{
    if(err)return res.status(500).json({error:"query request failed"})
      if (results.length === 0)
        return res.status(404).json( {error :"required post not found"})

    const post = results[0]
    res.json(post)
  })
};

const store = (req, res) => {
  // // acquisizione chiavi

  // const { titolo, contenuto, immagine, tags } = req.body;

  // // trovo l'id più grande
  // let lastId = 0;

  // for (eachPost of posts) {
  //   if (lastId < eachPost.id) {
  //     lastId = eachPost.id;
  //   }
  // }
  // const newPostId = lastId + 1;

  // // controllo correttezza dati

  // const wrongElements = [];
  // if (!titolo || typeof titolo !== "string" || titolo.length < 1) {
  //   wrongElements.push("controlla i dati immessi su titolo");
  // }
  // if (!contenuto || typeof contenuto !== "string" || contenuto.length < 1) {
  //   wrongElements.push("controlla i dati immessi su contenuto");
  // }
  // if (typeof immagine !== "string") {
  //   wrongElements.push("controlla i dati immessi su immagine");
  // }
  // if (!Array.isArray(tags)) {
  //   wrongElements.push("controlla i dati immessi nei tags");
  // }

  // if (wrongElements.length > 0) {
  //   res.status(400).json({
  //     error: "400 bad request",
  //     message: "errore nei dati immessi",
  //     wrongElements,
  //   });
  //   return;
  // }

  // // creazione nuovo elemento
  // const newPost = { id: newPostId, titolo, contenuto, immagine, tags };
  // posts.push(newPost);
  // res.status(201).json(newPost);
};

const update = (req, res) => {
  // // acquisizione chiavi

  // const { titolo, contenuto, immagine, tags } = req.body;

  // // controllo se esiste la pizza

  // const targetPostId = parseInt(req.params.id);
  // const currentPost = posts.find((post) => post.id === targetPostId);

  // // gestione messaggio di errore

  // if (!currentPost) {
  //   res.status(404).json({ message: "post not found", error: "404 not found" });
  //   return;
  // }

  // // controllo correttezza dati

  // const wrongElements = [];
  // if (!titolo || typeof titolo !== "string" || titolo.length < 1) {
  //   wrongElements.push("controlla i dati immessi su titolo");
  // }
  // if (!contenuto || typeof contenuto !== "string" || contenuto.length < 1) {
  //   wrongElements.push("controlla i dati immessi su contenuto");
  // }
  // if (typeof immagine !== "string") {
  //   wrongElements.push("controlla i dati immessi su immagine");
  // }
  // if (!Array.isArray(tags)) {
  //   wrongElements.push("controlla i dati immessi nei tags");
  // }

  // if (wrongElements.length > 0) {
  //   res.status(400).json({
  //     error: "400 bad request",
  //     message: "errore nei dati immessi",
  //     wrongElements,
  //   });
  //   return;
  // }

  // // logica di sostituzione

  // const newPost = { id: targetPostId, titolo, contenuto, immagine, tags };
  // const postIndex = posts.indexOf(currentPost);
  // posts.splice(postIndex, 1, newPost);

  // res.status(200).json(newPost);
};

const modify = (req, res) => {
  // // acquisizione chiavi

  // const { titolo, contenuto, immagine, tags } = req.body;

  // // trovo il post

  // const targetPostId = parseInt(req.params.id);
  // const currentPost = posts.find((post) => post.id === targetPostId);

  // // gestione messaggio di errore

  // if (!currentPost) {
  //   res.status(404).json({ message: "post not found", error: "404 not found" });
  //   return;
  // }

  // // controllo correttezza dati

  // const wrongElements = [];
  // if (typeof immagine !== "string") {
  //   wrongElements.push("controlla i dati immessi su immagine");
  // }
  // if (!Array.isArray(tags)) {
  //   wrongElements.push("controlla i dati immessi nei tags");
  // }

  // if (wrongElements.length > 0) {
  //   res.status(400).json({
  //     error: "400 bad request",
  //     message: "errore nei dati immessi",
  //     wrongElements,
  //   });
  //   return;
  // }

  // // creo nuovo post e post con dati originali per comparazione

  // const originalPost = currentPost;

  // let newPost = [
  //   {
  //     id: targetPostId,
  //     titolo: titolo ? titolo : originalPost.titolo,
  //     contenuto: contenuto ? contenuto : originalPost.contenuto,
  //     immagine: immagine ? immagine : originalPost.immagine,
  //     tags: tags ? tags : originalPost.tags,
  //   },
  // ];

  // // logica di sostituzione

  // const postIndex = posts.indexOf(currentPost);
  // console.log(postIndex);

  // posts.splice(postIndex, 1, newPost);

  // res.status(200).json(newPost);
};

const destroy = (req, res) => {
  
  const postsId = parseInt(req.params.id);

  if ((!postsId) || isNaN(postsId)) {
    return res.status(400).json({ error: "Invalid Id" });
  }

  const sqlDelete = 
  `DELETE 
  FROM posts 
  WHERE id = ?`;

  connection.query(sqlDelete, [postsId], (err, results) => {

    if(err)return res.status(500).json({error:"query request failed"})
      if (results.length === 0)
        return res.status(404).json( {error :"required post not found"})


    res.status(204)
  });
};




module.exports = { index, show, store, update, modify, destroy };
