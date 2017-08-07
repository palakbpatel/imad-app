var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articletwo={
    title:'Article Two | Palak Patel',
    heading:'Article Two',
    date:'Aug 9,2017',
    content:`
    <p>
                This is Article two. Welcome.This is Article two. Welcome.This is Article two. Welcome.This is Article two. Welcome
            </p>

             <p>
                 This is Article two. Welcome.This is Article two. Welcome.This is Article two. Welcome.This is Article two. Welcome
            </p>
            
             <p>
                 This is Article two. Welcome.This is Article two. Welcome.This is Article two. Welcome.This is Article two. Welcome
            </p>`
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

app.get('/article-two', function (req, res) {
 res.send(createtemplate(articletwo));
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

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
