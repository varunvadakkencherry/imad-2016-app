var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles ={
'article-one' : {
    title : 'Article One |Varun K R',
    heading: 'Article One',
    date: 'October 8 2016',
    content:`
    <P>
        This is the content for my first article.
        This is the content for my first article.
        This is the content for my first article.
    </p>
    <P>
        This is the content for my first article.
        This is the content for my first article.
        This is the content for my first article.
    </P>
    <P>
        This is the content for my first article.
        This is the content for my first article.
        This is the content for my first article.
    </P>`
  
},
'article-two' : {
    title : 'Article Two |Varun K R',
    heading: 'Article Two',
    date: 'October 8 2016',
    content:`
    <P>
        This is the content for my Second article.
        This is the content for my Second article.
    </p>`
},
'article-three' : {
    title : 'Article Three |Varun K R',
    heading: 'Article Three',
    date: 'October 8 2016',
    content:`
    <P>
        This is the content for my Third article.
        This is the content for my Third article.
        This is the content for my Third article.
    </p>`
}
};
function createtemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmltemplate =`
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name ='viewport' content = "width-device-width, initial-scale=one" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class = "container">
                    <div>
                        <a href = "/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                       ${date}
                    </div>
                    <div>
                       ${content}
                    </div>
                </div>
            </body>
        </html>
        `;
    return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req, res){
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/:articleName', function(req, res){
    var articleName = req.params.articleName;
    res.send(createtemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var names = [];
app.get('/submit-name/:name', function(req, res){
    var name = req.params.name;
    names.push(name);
    res.send(JSON.stringify(names));
};

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
