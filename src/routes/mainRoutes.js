const express = require('express');
const mainRouter= express.Router();
function router(nav){
    mainRouter.get('/',function(req,res){
        res.render("main",{
            nav,
            title:'Library',
            boxlink:[
                {link:'/books',img:'bookicon.jpg'},{link:'/authors',img:'authoricon.jpg'},{link:'/adminbooks',img:'addbokicon.jpg'},{link:'/adminauthor',img:'addauthoricon.jpg'}
            ]
        })
    })
    return mainRouter;
}
module.exports=router;