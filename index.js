import express from 'express';

const app = express()

app.use('/api/register', (req,res) => {
  console.log('Sample register endpoint')
  res.send('Sample API endpoint')
})


app.listen(3000, () => {
    console.log('Server running on port 3000.')
})
