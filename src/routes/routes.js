import express from 'express';
import { people } from '../data.js';

const router = express.Router();

router.post('/', (req, res) => {
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

router.get('/', (req, res) => {
  res.status(200).send({
    status: 'success',
    data: people,
  });
});

router.get('/:peopleId', (req, res) => {
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

router.put('/:peopleId', (req, res) => {
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

router.delete('/:peopleId', (req, res) => {
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

export default router;
