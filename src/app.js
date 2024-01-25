import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send({
    message: 'haloo',
  });
});

app.listen(PORT, () => {
  console.log(`express server running on http://localhost:${PORT}`);
});
