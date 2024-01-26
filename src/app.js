import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';

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

// static file
app.use(express.static('../02-browser-app'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
// Router
app.use('/api/people', router);

app.get('/', (req, res) => {
  res.send('halooo');
});

app.listen(PORT, () => {
  console.log(`express server running on http://localhost:${PORT}`);
});
