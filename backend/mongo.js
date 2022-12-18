async function main() {
  const MongoClient = require('mongodb').MongoClient;
  const uri =
    'mongodb+srv://Dvering:D0vahk!!n1@cluster0.vuxyzbh.mongodb.net/?retryWrites=true&w=majority';
  MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
}
main().catch(console.error);