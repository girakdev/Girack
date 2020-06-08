const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

let port = 3000;

//一時的なメッセージのDB
const messages = ["Oh yeah"];

io.on("connect", socket => {
    console.log("--- USER CONNECTED ---");
    socket.emit("now", {
        message: "zeit"

    });

    socket.on("test", function (msg) {
        console.log(msg);

    });

    
    socket.on("msgS", function (msg) {　//サーバーがクライアントからメッセージを受け取る
        socket.emit("msgR", { //サーバーからクライアントに送信
            message: msg

        });
        console.log("received :" + msg);

    });

});


nextApp.prepare().then(() => {
    app.get('/messages', (req, res) => {
      res.json(messages)

    })
  
    app.get('*', (req, res) => {
      return nextHandler(req, res)

    })
  
    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')

    })
  })