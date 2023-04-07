const express=require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');

app.use(expressLayouts);

//setting the layout extract styles & scripts so that script & style tag will move to specific place
app.set('layout extractStyles', true);
app.set('layouts extractScripts', true);

app.use(express.static('./assets'))

app.set('view engine', 'ejs');
app.set('views', './views');



app.use('/', require('./routes'));





app.listen(port, function(err){
    if(err){
        console.log(`Error running the server: ${err} `);
    }
    console.log(`Server is running on port: ${port}`);

});
