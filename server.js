
const io = require('socket.io')(3001, {
    cors: {
        origin: 'http://localhost:3000/',
        methods: ['GET', 'POST']
    },
})

// cors - cross origin request support

io.on("connection", socket => {
    socket.on('send-changes', delta => {
        socket.broadcast.emit('receive-changes', delta);
    })
   
})