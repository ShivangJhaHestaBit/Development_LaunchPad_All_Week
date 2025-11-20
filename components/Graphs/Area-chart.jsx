"use client";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);
function Areachart() {
  return (
    <Line
        data={{
            labels: ["Mar 1","Mar 3","Mar 5","Mar 7","Mar 9","Mar 11","Mar 13"],
            datasets: [
            {
                data: [10000, 30000, 20000, 28000, 33000, 26000, 39000],
                fill: true,
                backgroundColor: "rgba(0, 123, 255, 0.2)",
                borderColor: "blue",
                pointBackgroundColor: "blue",
                tension: 0.4,
            },
            ],
        }}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
            y: { beginAtZero: true, max: 40000 },
            },
        }}
    />

  );
}
export default Areachart;
