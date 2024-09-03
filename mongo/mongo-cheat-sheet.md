# MongoDB Cheat Sheet

## Basic Commands

| Command             | Description                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `mongosh`           | Open a connection to your local MongoDB instance. All other commands will be run within this `mongosh` connection. |
| `show dbs`          | Show all databases in the current MongoDB instance.                                                                |
| `use <dbname>`      | Switch to the database provided by `dbname`.                                                                       |
| `use myDatabase`    | Switch to `myDatabase`.                                                                                            |
| `db`                | Show current database name.                                                                                        |
| `cls`               | Clear the terminal screen.                                                                                         |
| `show collections`  | Show all collections in the current database.                                                                      |
| `db.dropDatabase()` | Delete the current database.                                                                                       |
| `exit`              | Exit the `mongosh` session.                                                                                        |

---

---

## Create

Each of these commands is run on a specific collection
`db.<collectionName>.<command>`

| Command                                                                 | Description                                                                                                                               |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **insertOne** <br /> `db.users.insertOne({ name: "Hossam" })`           | Create a new document inside the specified collection. Add a new document with the name of Hossam into the `users` collection.            |
| **insertMany** <br /> `db.users.insertMany([{ age: 26 }, { age: 20 }])` | Create multiple new documents inside a specific collection. Add two new documents with the ages of 26 and 20 into the `users` collection. |

---

---

### Read

Each of these commands is run on a specific collection <br />
`db.<collectionName>.<command>`

| Command                                                                                                                                             | Description                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                     |
| **find** <br /> `db.users.find()`                                                                                                                   | Get all documents. Get all users.                                                                                                                                                                                                             |
| **find(\<filterObject\>)** <br /> `db.users.find({ name: "Hossam" })` <br /> `db.users.find({ "address.street": "123 Main St" })`                   | Find all documents that match the filter object. Get all users with the name Hossam. Get all users whose address field has a street field with the value "123 Main St".                                                                       |
| **find(\<filterObject\>, \<selectObject\>)** <br /> `db.users.find({ name: "Hossam" }, { name: 1, age: 1 })` <br /> `db.users.find({}, { age: 0 })` | Find all documents that match the filter object but only return the fields specified in the select object. Get all users with the name Hossam but only return their name, age, and \_id. Get all users and return all columns except for age. |
| **findOne** <br /> `db.users.findOne({ name: "Hossam" })`                                                                                           | The same as `find`, but only return the first document that matches the filter object. Get the first user with the name Hossam.                                                                                                               |
| **countDocuments** <br /> `db.users.countDocuments({ name: "Hossam" })`                                                                             | Return the count of the documents that match the filter object passed to it. Get the number of users with the name Hossam.                                                                                                                    |

---

---

### Update

Each of these commands is run on a specific collection <br />
`db.<collectionName>.<command>`

| Command                                                                        | Description                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **updateOne** <br /> `db.users.updateOne({ age: 20 }, { $set: { age: 21 } })`  | Update the first document that matches the filter object with the data passed into the second parameter, which is the update object. Update the first user with an age of 20 to the age of 21.                                                                                                            |
| **updateMany** <br /> `db.users.updateMany({ age: 12 }, { $inc: { age: 3 } })` | Update all documents that match the filter object with the data passed into the second parameter, which is the update object. Update all users with an age of 12 by adding 3 to their age.                                                                                                                |
| **replaceOne** <br /> `db.users.replaceOne({ age: 12 }, { age: 13 })`          | Replace the first document that matches the filter object with the exact object passed as the second parameter. This will completely overwrite the entire object and not just update individual fields. Replace the first user with an age of 12 with an object that has the age of 13 as its only field. |

---

---

### Delete

Each of these commands is run on a specific collection <br />
`db.<collectionName>.<command>`

| Command                                                  | Description                                                                                        |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **deleteOne** <br /> `db.users.deleteOne({ age: 20 })`   | Delete the first document that matches the filter object. Delete the first user with an age of 20. |
| **deleteMany** <br /> `db.users.deleteMany({ age: 12 })` | Delete all documents that match the filter object. Delete all users with an age of 12.             |

---

---

## Complex Filter Object

Any combination of the below can be use inside a filter object to make complex queries.

| Command                                                                                                                          | Description                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **$eq** <br /> `db.users.find({ name: { $eq: "Hossam" } })`                                                                      | Check for equality. Get all users with the name Hossam.                                                                                                                                    |
| **$ne** <br /> `db.users.find({ name: { $ne: "Hossam" } })`                                                                      | Check for not equal. Get all users with a name other than Hossam.                                                                                                                          |
| **$gt / $gte** <br /> `db.users.find({ age: { $gt: 12 } })` <br /> `db.users.find({ age: { $gte: 15 } })`                        | Check for greater than and greater than or equal to. Get all users with an age greater than 12. Get all users with an age greater than or equal to 15.                                     |
| **$lt / $lte** <br /> `db.users.find({ age: { $lt: 12 } })` <br /> `db.users.find({ age: { $lte: 15 } })`                        | Check for less than and less than or equal to. Get all users with an age less than 12. Get all users with an age less than or equal to 15.                                                 |
| **$in** <br /> `db.users.find({ name: { $in: ["Hossam", "Sara"] } })`                                                            | Check if a value is one of many values. Get all users with a name of Hossam or Sara.                                                                                                       |
| **$nin** <br /> `db.users.find({ name: { $nin: ["Hossam", "Sara"] } })`                                                          | Check if a value is none of many values. Get all users that do not have the name Hossam or Sara.                                                                                           |
| **$and** <br /> `db.users.find({ $and: [{ age: 12 }, { name: "Hossam" }] })` <br /> `db.users.find({ age: 12, name: "Hossam" })` | Check that multiple conditions are all true. Get all users that have an age of 12 and the name Hossam. This is an alternative way to do the same thing. Generally, you do not need `$and`. |
| **$or** <br /> `db.users.find({ $or: [{ age: 12 }, { name: "Hossam" }] })`                                                       | Check that one of multiple conditions is true. Get all users with a name of Hossam or an age of 12.                                                                                        |
| **$not** <br /> `db.users.find({ name: { $not: { $eq: "Hossam" } } })`                                                           | Negate the filter inside of `$not`. Get all users with a name other than Hossam.                                                                                                           |
| **$exists** <br /> `db.users.find({ name: { $exists: true } })`                                                                  | Check if a field exists. Get all users that have a name field.                                                                                                                             |
| **$expr** <br /> `db.users.find({ $expr: { $gt: ["$balance", "$debt"] } })`                                                      | Do comparisons between different fields. Get all users that have a balance that is greater than their debt.                                                                                |

---

---

## Complex Update Object

Any combination of the below can be use inside an update object to make complex updates.

| Command                                                                      | Description                                                                                                                                                          |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **$set** <br /> `db.users.updateOne({ age: 12 }, { $set: { name: "Hi" } })`  | Update only the fields passed to `$set`. This will not affect any fields not passed to `$set`. Update the name of the first user with the age of 12 to the value Hi. |
| **$inc** <br /> `db.users.updateOne({ age: 12 }, { $inc: { age: 2 } })`      | Increment the value of the field by the amount given. Add 2 to the age of the first user with the age of 12.                                                         |
| **$rename** <br /> `db.users.updateMany({}, { $rename: { age: "years" } })`  | Rename a field. Rename the field `age` to `years` for all users.                                                                                                     |
| **$unset** <br /> `db.users.updateOne({ age: 12 }, { $unset: { age: "" } })` | Remove a field. Remove the `age` field from the first user with an age of 12.                                                                                        |
| **$push** <br /> `db.users.updateMany({}, { $push: { friends: "John" } })`   | Add a value to an array field. Add John to the `friends` array for all users.                                                                                        |
| **$pull** <br /> `db.users.updateMany({}, { $pull: { friends: "Sara" } })`   | Remove a value from an array field. Remove Sara from the `friends` array for all users.                                                                              |

---

---

## Read Modifiers

Any combination of the below can be added to the end of any read operation

| Command                                                                      | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **$set** <br /> `db.users.updateOne({ age: 12 }, { $set: { name: "Hi" } })`  | Update only the fields passed to `$set`. This will not affect any fields not passed to `$set`. Update the name of the first user with the age of 12 to the value Hi.   |
| **$inc** <br /> `db.users.updateOne({ age: 12 }, { $inc: { age: 2 } })`      | Increment the value of the field by the amount given. Add 2 to the age of the first user with the age of 12.                                                           |
| **$rename** <br /> `db.users.updateMany({}, { $rename: { age: "years" } })`  | Rename a field. Rename the field `age` to `years` for all users.                                                                                                       |
| **$unset** <br /> `db.users.updateOne({ age: 12 }, { $unset: { age: "" } })` | Remove a field. Remove the `age` field from the first user with an age of 12.                                                                                          |
| **$push** <br /> `db.users.updateMany({}, { $push: { friends: "John" } })`   | Add a value to an array field. Add John to the `friends` array for all users.                                                                                          |
| **$pull** <br /> `db.users.updateMany({}, { $pull: { friends: "Sara" } })`   | Remove a value from an array field. Remove Sara from the `friends` array for all users.                                                                                |
| **sort** <br /> `db.users.find().sort({ name: 1, age: -1 })`                 | Sort the results of a `find` by the given fields. Get all users sorted by name in alphabetical order and then if any names are the same, sort by age in reverse order. |
| **limit** <br /> `db.users.find().limit(2)`                                  | Only return a set number of documents. Only return the first 2 users.                                                                                                  |
| **skip** <br /> `db.users.find().skip(4)`                                    | Skip a set number of documents from the beginning. Skip the first 4 users when returning results. This is great for pagination when combined with `limit`.             |
