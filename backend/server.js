const io = require("socket.io")(5000, {
  cors: {
    origin: ["exp://192.168.1.199:8081"],
  },
});
io.on("connection", (socket) => {
  socket.on("send", (message, room) => {
    if (room === "") {
      socket.broadcast.emit("receive", message);
    } else {
      socket.to(room).emit("receive", message);
    }
  });
});
