const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the CI/CD demo!' });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;