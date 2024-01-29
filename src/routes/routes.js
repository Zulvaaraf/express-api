import express from 'express';
import { people } from '../data.js';

const router = express.Router();

router.post('/', (req, res) => {
  const { id, name } = req.body;

  const personId = { id, name };

  if (!personId) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal menambahkan data person',
    });
  }

  return res.status(200).json({
    status: 'success',
    data: {
      personId,
    },
  });
});

router.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    data: {
      people,
    },
  });
});

router.get('/:peopleId', (req, res) => {
  const { peopleId } = req.params;

  const peopleID = people.find((people) => people.id === Number(peopleId));

  if (!peopleID) {
    return res.status(404).json({
      status: 'fail',
      message: 'Gagal! id tidak ditemukan',
    });
  }

  return res.status(200).json({
    status: 'success',
    data: {
      peopleID,
    },
  });
});

router.put('/:peopleId', (req, res) => {
  const { peopleId } = req.params;
  const { name } = req.body;

  const findPeople = people.find((people) => people.id === Number(peopleId));

  if (!findPeople) {
    return res.status(404).json({
      status: 'fail',
      message: 'Gagal! id tidak ditemukan',
    });
  }

  const newPeople = people.map((people) => {
    if (people.id === Number(peopleId)) {
      people.name = name;
    }

    return people;
  });

  return res.status(200).json({
    status: 'fail',
    data: {
      newPeople,
    },
  });
});

router.delete('/:peopleId', (req, res) => {
  const { peopleId } = req.params;

  const findIndex = people.findIndex((people) => people.id === Number(peopleId));

  if (findIndex === -1) {
    return res.status(404).json({
      status: 'fail',
      message: 'Gagal! id tidak ditemukan',
    });
  } else {
    people.splice(findIndex, 1);

    return res.status(200).json({
      status: 'success',
      message: 'Berhasil dihapus',
    });
  }
});

export default router;
