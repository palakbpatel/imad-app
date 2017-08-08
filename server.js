var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
 'article-two':{title:'Article Two | Palak Patel',
    heading:'Article One',
    date:'Aug 8,2017',
    content:`
    <p>
            This is Article Two. Welcome.
            </p>`
},
 'article-one':{title:'Article One | Palak Patel',
    heading:'Article One',
    date:'Aug 8,2017',
    content:`
    <p>
            This is Article One. Welcome.
            </p>`
},
 'article-three':{title:'Article Three | Palak Patel',
    heading:'Article Three',
    date:'Aug 9,2017',
    content:`
    <p>
                This is Article three. Welcome.
       
            </p>`
}
};
function createtemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmltype=`   <html>
    <head>
    <title>
      ${title}
    </title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    </head>
    <body>
        <div> <a href="/"> Home </a></div>
        <hr/>
        <hr3>
            ${heading}
        </hr3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
    </body>
</html>
 `;
 return htmltype;
}
app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});


var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});


app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
 res.send(createtemplate(articles[articleName]));
});

app.get('/article-three', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
