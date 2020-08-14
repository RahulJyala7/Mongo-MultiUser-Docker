//  db for collection service
db = db.getSiblingDB("bank-collection");
db.createUser({
  user: "collection",
  pwd: "collection",
  roles: [{ role: "readWrite", db: "bank-collection" }],
});

//  db for registration service
db = db.getSiblingDB("bank-registration");
db.createUser({
  user: "registration",
  pwd: "registration",
  roles: [{ role: "readWrite", db: "bank-registration" }],
});

//  db for scheduling service
db = db.getSiblingDB("bank-scheduling");
db.createUser({
  user: "scheduling",
  pwd: "scheduling",
  roles: [{ role: "readWrite", db: "bank-scheduling" }],
});

//  db for scheduling service
db = db.getSiblingDB("transaction-enrichment");
db.createUser({
  user: "scheduling",
  pwd: "scheduling",
  roles: [{ role: "readWrite", db: "transaction-enrichment" }],
});

// test db
db = db.getSiblingDB("test");
db.createUser({
  user: "test",
  pwd: "test",
  roles: [{ role: "readWrite", db: "test" }],
});
