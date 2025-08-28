const querystring=require('querystring');
const index = (req, res) => {
    const query = querystring.stringify(req.query);

    fetch('https://fakestoreapi.com/products?' + query)
        .then(apiRes => apiRes.json())
        .then(productos => {
            res.render('productos', { productos });
        })
        .catch(err => console.error(err));
}

module.exports={
    index  
}