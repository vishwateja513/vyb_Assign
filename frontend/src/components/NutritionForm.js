// import React, { useState } from 'react';
// import axios from 'axios';

// const NutritionForm = () => {
//   const [dish, setDish] = useState('');
//   const [nutrition, setNutrition] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
    
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/nutrition`, {
//         dish: dish,
//       });
//       setNutrition(response.data.nutrition);
//     } catch (error) {
//       setError('Error fetching nutritional information. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Nutrition Estimator</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Dish Name:
//           <input
//             type="text"
//             value={dish}
//             onChange={(e) => setDish(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit" disabled={loading}>
//           {loading ? 'Loading...' : 'Get Nutrition Info'}
//         </button>
//       </form>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {nutrition && (
//         <div>
//           <h3>Nutrition Information for {dish}:</h3>
//           <pre>{nutrition}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NutritionForm;

// frontend/src/components/NutritionForm.js
import React, { useState } from "react";
import axios from "axios";

const NutritionForm = () => {
  const [dish, setDish] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult("");

    try {
      const response = await axios.post("http://localhost:5000/api/nutrition", { dish });
      const data = response.data;

      // If it's structured like { nutrition: "..." }
      if (data.nutrition) {
        setResult(data.nutrition);
      } else if (data.choices) {
        setResult(data.choices[0].message.content);
      } else {
        setResult("No data found.");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching nutritional information. Please try again later.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Indian Dish Nutrition Estimator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={dish}
          onChange={(e) => setDish(e.target.value)}
          placeholder="Enter dish name"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <button type="submit">Get Nutrition Info</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && (
        <pre style={{ background: "#f4f4f4", padding: "10px", whiteSpace: "pre-wrap" }}>
          {result}
        </pre>
      )}
    </div>
  );
};

export default NutritionForm;





