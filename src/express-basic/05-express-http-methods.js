import express from 'express';
import { people } from '../data.js';

const app = express();

app.use(express.static('../02-browser-app'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// POST METHOD
app.post('/api/people', (req, res) => {
  const { id, name } = req.body;

  const personId = { id, name };

  if (!personId) {
    return res.status(400).send({
      status: 'fail',
      message: 'Gagal menambahkan people',
    });
  }

  return res.status(201).send({
    status: 'success',
    data: {
      personId,
    },
  });
});

// GET METHOD
app.get('/api/people', (req, res) => {
  res.status(200).send({
    status: 'success',
    data: people,
  });
});

// GET METHOD with ID
app.get('/api/people/:peopleId', (req, res) => {
  const { peopleId } = req.params;

  const peopleID = people.find((people) => people.id === Number(peopleId));

  if (!peopleID) {
    return res.status(404).send({
      status: 'fail',
      message: 'Gagal! peopleId tidak ditemukan',
    });
  }

  return res.status(200).send({
    status: 'success',
    data: {
      peopleID,
    },
  });
});

// PUT METHOD
app.put('/api/people/:peopleId', (req, res) => {
  const { peopleId } = req.params;
  const { name } = req.body;

  const searchPeople = people.find((person) => person.id === Number(peopleId));

  if (!searchPeople) {
    return res.status(404).json({
      status: 'fail',
      message: 'Gagal! people tidak ditemukan',
    });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(peopleId)) {
      person.name = name;
    }

    return person;
  });

  return res.status(200).json({
    status: 'success',
    data: {
      newPeople,
    },
  });
});

app.delete('/api/people/:peopleId', (req, res) => {
  const { peopleID } = req.params;
  const index = people.find((person) => person.id === Number(peopleID));

  if (index === -1) {
    return res.status(404).json({
      status: 'fail',
      message: 'Gagal! Id tidak ditemukan',
    });
  } else {
    people.splice(index, 1);
    return res.status(200).json({
      status: 'success',
      message: 'Berhasil dihapuss',
      data: {
        people,
      },
    });
  }
});

app.listen(5000, () => {
  console.log(`express server running on http://localhost:5000`);
});
