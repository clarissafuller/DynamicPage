import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function SkillsChart() {
  const data = {
    labels: [
      "JavaScript",
      "React",
      "SQL",
      "Python",
      "CSS",
      "Git",
      "R",
      "HTML",
      "Node.js",
      "Material UI",
      "Django",
      "Pandas",
      "PowerBI",
      "Vite",
      "Webpack",
      "RESTful APIs",
      "GraphQL",
      "Figma",
      "Supabase",
      "Expo",
    ],
    datasets: [
      {
        data: [
          6.44, // JavaScript
          6.1, // React
          5.76, // SQL
          5.42, // Python
          5.42, // CSS
          5.76, // Git
          4.75, // R
          5.76, // HTML
          5.08, // Node.js
          5.08, // Material UI
          4.75, // Django
          5.08, // Pandas
          4.41, // PowerBI
          4.75, // Vite
          4.07, // Webpack
          5.76, // RESTful APIs
          4.07, // GraphQL
          3.39, // Figma
          4.07, // Supabase
          4.07, // Expo
        ],
        backgroundColor: [
          "#006400", // JavaScript - Green
          "#0047ab", // React - Blue
          "#003366", // SQL - Blue
          "#1e90ff", // Python - Blue
          "#008080", // CSS - Blue
          "#3399ff", // Git - Blue
          "#f1c40f", // R - Yellow
          "#3498db", // HTML - Blue
          "#2980b9", // Node.js - Blue
          "#6a5acd", // Material UI - Blue
          "#8e44ad", // Django - Purple
          "#1abc9c", // Pandas - Blue
          "#e67e22", // PowerBI - Orange
          "#e74c3c", // Vite - Red
          "#bdc3c7", // Webpack - Gray
          "#16a085", // RESTful APIs - Green
          "#f39c12", // GraphQL - Yellow
          "#2ecc71", // Figma - Green
          "#9b59b6", // Supabase - Purple
          "#ff6347", // Expo - Red
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>My Skills</h2>
      <Pie data={data} />
    </div>
  );
}
