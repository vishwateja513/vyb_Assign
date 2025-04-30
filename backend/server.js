// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const nutritionRoutes = require('./routes/nutrition');

// dotenv.config(); // Load environment variables

// const app = express();
// const port = 5000;

// app.use(cors()); // Enable Cross-Origin Resource Sharing
// app.use(express.json()); // Parse incoming JSON requests

// // Nutrition route
// app.use('/api/nutrition', nutritionRoutes);

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const nutritionRoutes = require('./routes/nutrition');

// dotenv.config(); // Load environment variables

// const app = express();
// const port = 5000;

// app.use(cors()); // Enable Cross-Origin Resource Sharing
// app.use(express.json()); // Parse incoming JSON requests

// // Nutrition route
// app.use('/api/nutrition', nutritionRoutes);

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


const express = require('express');
const cors = require('cors');
require('dotenv').config();  // To load the .env variables
const nutritionRoutes = require('./routes/nutrition');  // Make sure the path is correct

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());  // For parsing application/json

// Routes
app.use('/api', nutritionRoutes);  // Access nutrition API at /api/nutrition

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

