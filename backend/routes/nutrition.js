// const express = require('express');
// const OpenAI = require('openai');  // Make sure you are using openai version 4.x
// const router = express.Router();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// router.post('/nutrition', async (req, res) => {
//   const { dish } = req.body;

//   try {
//     const prompt = `Estimate nutritional values for the Indian dish "${dish}". Include energy (kcal), carbs (g), protein (g), fat (g), fibre (g), vitamins, and minerals. Return as plain text.`;

//     const response = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [{ role: 'user', content: prompt }],
//     });

//     const nutritionInfo = response.choices[0].message.content;
//     res.json({ nutrition: nutritionInfo });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to get nutritional data' });
//   }
// });

// module.exports = router;


// const express = require('express');
// const axios = require('axios');
// const router = express.Router();

// // OpenAI API key
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// // Function to query OpenAI API with ingredients and quantities
// async function getNutritionData(dish) {
//   const prompt = `Provide the nutritional details for the dish "${dish}", including estimated nutrition per 200ml katori. Include calories, protein, carbs, and fat. And, Pleaseprovide a list of ingredients with their quantities required to prepare the dish. Format the response clearly with ingredients listed and their quantities.`;

//   const response = await axios.post('https://api.openai.com/v1/completions', {
//     model: 'text-davinci-003',  // Or another GPT model of your choice
//     prompt: prompt,
//     max_tokens: 700,
//     temperature: 0.7
//   }, {
//     headers: {
//       'Authorization': `Bearer ${OPENAI_API_KEY}`,
//       'Content-Type': 'application/json'
//     }
//   });

//   return response.data.choices[0].text.trim();  // Returning the response text
// }

// // POST route to get nutrition info with ingredients and quantities
// router.post('/', async (req, res) => {
//   const { dish } = req.body;

//   if (!dish) {
//     return res.status(400).send({ error: 'Dish name is required' });
//   }

//   try {
//     const nutritionData = await getNutritionData(dish);
//     res.json({ nutrition: nutritionData });
//   } catch (error) {
//     res.status(500).send({ error: 'Error fetching nutrition data' });
//   }
// });

// module.exports = router;
// const express = require('express');
// const axios = require('axios');
// const router = express.Router();

// // OpenAI API key
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// // Function to query OpenAI API
// async function getNutritionData(dish) {
//   const prompt = `Provide the nutrition details for the dish "${dish}" along with the ingredients and their quantities.`;

//   const response = await axios.post('https://api.openai.com/v1/completions', {
//     model: 'text-davinci-003',  // Choose the correct model
//     prompt: prompt,
//     max_tokens: 200,
//     temperature: 0.7
//   }, {
//     headers: {
//       'Authorization': `Bearer ${OPENAI_API_KEY}`,
//       'Content-Type': 'application/json'
//     }
//   });

//   return response.data.choices[0].text.trim();  // Returning the response text
// }

// // POST route to get nutrition info
// router.post('/', async (req, res) => {
//   const { dish } = req.body;

//   if (!dish) {
//     return res.status(400).send({ error: 'Dish name is required' });
//   }

//   try {
//     const nutritionData = await getNutritionData(dish);
//     res.json({ nutrition: nutritionData });
//   } catch (error) {
//     res.status(500).send({ error: 'Error fetching nutrition data' });
//   }
// });

// module.exports = router;



const express = require('express');
const OpenAI = require('openai');  // Make sure you are using openai version 4.x
const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/nutrition', async (req, res) => {
  const { dish } = req.body;

  try {
    const prompt = `Estimate nutritional values for the Indian dish "${dish}". Include energy (kcal), carbs (g), protein (g), fat (g), fibre (g), vitamins, and minerals. Return as plain text.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const nutritionInfo = response.choices[0].message.content;
    res.json({ nutrition: nutritionInfo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get nutritional data' });
  }
});

module.exports = router;
