"use client";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement);
function Bargraph() {
  return (
        <Bar
        data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
            {
                data: [4000, 5200, 6300, 7800, 9900, 15000],
                backgroundColor: "blue",
            },
            ],
        }}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, max: 15000 } },
        }}
        />
  );
}
export default Bargraph;