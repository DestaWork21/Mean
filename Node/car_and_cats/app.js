
var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){
    
    console.log('client request URL: ', request.url);
   
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        })
      }
      else if(request.url === '/cars'){
        // notice we won't include the utf8 encoding
        fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        })
      }

      else if(request.url === '/cars/new'){
        // notice we won't include the utf8 encoding
        fs.readFile('./views/newcar.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        })
      }

      else if(request.url === '/cats'){
        // notice we won't include the utf8 encoding
        fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/cat1.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }

      else if(request.url === '/images/car1.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }

      else if(request.url === '/images/car2.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }

      else if(request.url === '/images/car3.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }

      else if(request.url === '/images/car4.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car4.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window

console.log("Running in localhost at port 7077");