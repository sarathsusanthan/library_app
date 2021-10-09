const express = require('express');
const booksRouter =express.Router();
function routes(nav){
    var books=[
        {
            title:'Moby Dick',
            author:'Herman Melville',
            genre:' Novel, ‎adventure fiction‎',
            img:'mob.jpg'
        },
        {
            title:'Sherlock Holmes',
            author:'Sir Arthur Conan Doyle',
            genre:'Detective fiction stories‎',
            img:'sherlok.jpg'
        },
        {
            title:'Robinson Crusoe ',
            author:' Daniel Defoe',
            genre:' Novel, ‎adventure fiction‎',
            img:'rob.jpg'
        }
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
        })
    })
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('book',
        {
            nav,
            title:'Library',
            book:books[id]
        }
        )
    })
    return booksRouter;
}

module.exports=routes;