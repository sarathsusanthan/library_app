const express = require('express');
const authorsRouter =express.Router();
function authorroute(nav){
    var authors=[
        {
            title:'Herman Melville',
            img:'Herman.jpg',
            about:'Herman Melville was an American novelist, short story writer, and poet of the American Renaissance period. Among his best-known works are Moby-Dick; Typee, a romanticized account of his experiences in Polynesia; and Billy Budd, Sailor, a posthumously published novella. Born: 1 August 1819, New York, New York, United States Died: 28 September 1891, New York, New York, United States'
        },
        {
            title:'Sir Arthur Conan Doyle',
            img:'arthur.jpg',
            about:'Sir Arthur Ignatius Conan Doyle KStJ DL was a British writer and physician. He created the character Sherlock Holmes in 1887 for A Study in Scarlet, the first of four novels and fifty-six short stories about Holmes and Dr. Watson. The Sherlock Holmes stories are milestones in the field of crime fiction Born: 22 May 1859, Edinburgh, United Kingdom Died: 7 July 1930, Crowborough, United Kingdom'
        },
        {
            title:' Daniel Defoe',
           
            img:'daniel.jpg',
            about:'Daniel Defoe (/dɪˈfoʊ/; born Daniel Foe; c. 1660 – 24 April 1731) was an English writer, trader, journalist, pamphleteer and spy. He is most famous for his novel Robinson Crusoe, published in 1719, which is claimed to be second only to the Bible in its number of translations.Born: Daniel Foe; c. 1660; London, England Occupation: Writer, journalist, merchant Died: 24 April 1731 (aged 70) London, England'
        }
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors
        })
    })
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('author',
        {
            nav,
            title:'Library',
            author:authors[id]
        }
        )
    })
    return authorsRouter;
}

module.exports=authorroute;