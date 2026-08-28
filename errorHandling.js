const express = require('express')
const app = express()

// A simple route that throws an error
app.get('/', (req, res) => {
  throw new Error('Something went wrong!')
})

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Logs the error stack
  res.status(500).send('Something went wrong!')
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})