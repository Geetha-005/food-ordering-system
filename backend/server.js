
import express from 'express'


const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
