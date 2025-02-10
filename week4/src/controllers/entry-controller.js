import {addEntry, findEntryById, listAllEntries} from '../models/entry-model.js';


const getEntries = (req, res) => {
    res.json(listAllEntries());
};

const getEntryById = (req, res) => {
    const entry = findEntryById(req.params.id);
    if (entry) {
        res.json(entry);
    }else {
        res.sendStatus(404);
    }
};
const postEntry = (req, res) => {
    const {user_id, entry_date, mood, weight, sleep_hours, notes} = req.body;
    if (entry_date && (weight || mood || sleep_hours || notes) && user_id) {
        addEntry(req.body);
        res.status(201);
        res.json({message: 'New entry added'});
    } else {
        res.sendStatus(400);
    }
};
const putEntry = (req, res) => {
    res.sendStatus(200);
}
const deleteEntry = (req, res) => {
    res.sendStatus(200);
};

export {getEntries, getEntryById, postEntry, putEntry, deleteEntry};