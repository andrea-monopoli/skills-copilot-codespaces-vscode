// Create web server
// 1. Import express
const express = require('express');
// 2. Create an express instance
const app = express();
// 3. Create a port
const port = 3000;
// 4. Create a route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
// 5. Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// 6. Run the server
// node comments.js