import express from 'express';
import { postPeopleHandler, getPeople, getPeopleById, editPeopleById, deletePeopleById } from '../controllers/handler.js';

const router = express.Router();

router.post('/', postPeopleHandler);

router.get('/', getPeople);

router.get('/:peopleId', getPeopleById);

router.put('/:peopleId', editPeopleById);

router.delete('/:peopleId', deletePeopleById);

export default router;
