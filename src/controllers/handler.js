import { people } from '../data/data.js';

const postPeopleHandler = (req, res) => {
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
};

const getPeople = (req, res) => {
  return res.status(200).json({
    status: 'success',
    data: {
      people,
    },
  });
};

const getPeopleById = (req, res) => {
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
};

const editPeopleById = (req, res) => {
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
    status: 'success',
    data: {
      newPeople,
    },
  });
};

const deletePeopleById = (req, res) => {
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
};

export { postPeopleHandler, getPeople, getPeopleById, editPeopleById, deletePeopleById };
