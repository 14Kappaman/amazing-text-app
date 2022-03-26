import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const db=await openDB("jate", 1) 
  console.log(db)
  var transaction = db.transaction(["jate"], "readwrite");
  var objStore = transaction.objectStore("jate")
  objStore.add(content);


}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db=await openDB("jate", 1)
  console.log(db)
  var transaction = db.transaction(["jate"], "readwrite");
  var objStore = transaction.objectStore("jate")
  let data=await objStore.getAll()
  return data
}
console.log("hello")
initdb();
