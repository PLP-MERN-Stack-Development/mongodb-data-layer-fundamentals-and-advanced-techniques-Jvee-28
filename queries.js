// Basic Queries
db.books.find({ genre: "Programming" })
db.books.find({ published_year: { $gt: 2010 } })
db.books.find({ author: "James Clear" })
db.books.updateOne({ title: "The Alchemist" }, { $set: { price: 950 } })
db.books.deleteOne({ title: "Becoming" })

// Advanced Queries
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })
db.books.find().sort({ price: 1 })
db.books.find().sort({ price: -1 })
db.books.find().skip(0).limit(5)
db.books.find().skip(5).limit(5)

// Aggregation Pipelines
db.books.aggregate([{ $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }])
db.books.aggregate([{ $group: { _id: "$author", totalBooks: { $sum: 1 } } }, { $sort: { totalBooks: -1 } }, { $limit: 1 }])
db.books.aggregate([{ $project: { decade: { $concat: [ { $substr: [ "$published_year", 0, 3 ] }, "0s" ] } } }, { $group: { _id: "$decade", count: { $sum: 1 } } }])

// Indexing
db.books.createIndex({ title: 1 })
db.books.createIndex({ author: 1, published_year: -1 })
db.books.find({ title: "Atomic Habits" }).explain("executionStats")
