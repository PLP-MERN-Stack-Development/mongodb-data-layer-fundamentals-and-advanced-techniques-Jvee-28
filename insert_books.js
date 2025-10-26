use plp_bookstore

db.books.insertMany([
  { title: "Atomic Habits", author: "James Clear", genre: "Self-help", published_year: 2018, price: 1200, in_stock: true, pages: 320, publisher: "Penguin" },
  { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", published_year: 1988, price: 900, in_stock: true, pages: 208, publisher: "HarperCollins" },
  { title: "Clean Code", author: "Robert C. Martin", genre: "Programming", published_year: 2008, price: 2500, in_stock: true, pages: 464, publisher: "Prentice Hall" },
  { title: "Deep Work", author: "Cal Newport", genre: "Productivity", published_year: 2016, price: 1500, in_stock: false, pages: 296, publisher: "Grand Central" },
  { title: "The Power of Now", author: "Eckhart Tolle", genre: "Spiritual", published_year: 1997, price: 1100, in_stock: true, pages: 236, publisher: "New World Library" },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", genre: "Programming", published_year: 1999, price: 2700, in_stock: true, pages: 352, publisher: "Addison-Wesley" },
  { title: "The Lean Startup", author: "Eric Ries", genre: "Business", published_year: 2011, price: 1800, in_stock: true, pages: 336, publisher: "Crown" },
  { title: "Becoming", author: "Michelle Obama", genre: "Biography", published_year: 2018, price: 2000, in_stock: false, pages: 448, publisher: "Crown" },
  { title: "You Don’t Know JS", author: "Kyle Simpson", genre: "Programming", published_year: 2015, price: 2100, in_stock: true, pages: 278, publisher: "O'Reilly" },
  { title: "Think and Grow Rich", author: "Napoleon Hill", genre: "Self-help", published_year: 1937, price: 1000, in_stock: true, pages: 238, publisher: "The Ralston Society" }
])
