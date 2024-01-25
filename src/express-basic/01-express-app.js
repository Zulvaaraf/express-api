import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static('../browser-app'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../browser-app/index.html'));
});

app.listen(5000, () => {
  console.log(`express server running on http://localhost:5000`);
});
