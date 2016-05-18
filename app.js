var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');

// 添加markdown语法支持
var MarkdownIt = require("markdown-it");
var md = new MarkdownIt({
  breaks: true,
  linkify: true
});

var routes = require('./routes/index');

var app = express();

app.set('port', process.env.PORT || 3000);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({ defaultLayout: 'mainlayout' }));
app.set('view engine', "handlebars");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res) {
    res.status(404);
    res.render('404')
});

// 定制500页面
app.use(function(req, res) {
    console.error(err.stack);
    res.status(500);
    res.render('error');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost');
    app.get('port') + '; press Ctrl-C to terminate.';
});
module.exports = app;
