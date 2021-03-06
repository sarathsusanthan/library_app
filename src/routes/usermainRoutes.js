const express = require('express');
const usermainRouter= express.Router();
usermainRouter.get('/',function(req,res){
    res.render("usermain",{
        nav :[
            {link:'/userbooks',name:'Books'},
            {link:'/userauthors',name:'Authors'},
            {link:'/login',name:'Logout'}
        ],
        title:'Library',
        boxlink:[
            {link:'/userbooks',img:'bookicon.jpg'},{link:'/userauthors',img:'authoricon.jpg'}
        ]
    })
})
module.exports=usermainRouter;