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
  console.log('Adding to database');
  const db=await openDB("jate", 1) 
  var transaction = db.transaction("jate", "readwrite");
  var objStore = transaction.objectStore("jate") 
  objStore.add(content); 
  return;
}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db=await openDB("jate", 1)
  console.log(db) 
  console.log("test")
  var transaction = db.transaction("jate", "readonly");
  var objStore = transaction.objectStore("jate")
  let data=await (await objStore.getAll()).join(" ")
  console.log(data)
  return data
}
console.log("hello")
initdb();
