import promisePool from '../utils/database.js';

const listAllEntries = async () => {
  const [rows] = await promisePool.query(
    'SELECT entry_id,user_id,entry_date,mood,weight,sleep_hours,notes FROM diaryentries',
  );
  console.log('selectAllUsers result', rows);
  return rows;
};
const findEntryById = async (userId) => {
  try {
    const [rows] = await promisePool.query(
      'SELECT entry_id,user_id,entry_date,mood,weight,sleep_hours,notes FROM diaryentries WHERE entry_id=?',
      [userId],
    );
    console.log(rows);
    // return only first item of the result array
    return rows[0];
  } catch (error) {
    console.error(error);
    throw new Error('database error');
  }
};

// Skeleton for inserting additional entries. Not finished.
const addEntry = async (entry) => {
    try {
        const [result] = await promisePool.query(
          'INSERT INTO diaryentries (user_id, entry_date) VALUES (?, ?, ?)',
          [entry.userId, entry.entry_date],
        );
        console.log('insertEntry', result);
        // return only first item of the result array
        return result.insertId;
      } catch (error) {
        console.error(error);
        throw new Error('database error');
      }
};

export {listAllEntries, findEntryById, addEntry};
