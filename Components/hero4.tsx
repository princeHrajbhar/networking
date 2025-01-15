"use client"
import React, { useState, useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale } from "chart.js";
import { FaChartPie } from "react-icons/fa"; // Add icon

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale); // Register necessary elements for Pie chart

const AnalyticsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Random static data for the Pie chart
  const pieChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        data: [300, 150, 100, 50, 75], // Random data for the pie chart
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // IntersectionObserver to detect when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when section is in view
        } else {
          setIsVisible(false); // Reset animation when out of view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const currentRef = sectionRef.current; // Copy to a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="flex items-center justify-between min-h-screen px-8 bg-gray-100">
      {/* Right Side - Text Section with Icon */}
      <div className="w-1/2 flex flex-col justify-center items-start p-6 space-y-6">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Analytics Overview</h2>
        <div className="flex items-center space-x-3">
          <FaChartPie className="text-blue-600 text-4xl" /> {/* Using className to style the icon */}
          <h3 className="text-xl font-semibold text-gray-700">Pie Chart Analysis</h3>
        </div>
        <div className={`gemini-animation ${isVisible ? "animate-visible" : ""}`}>
          <p className={`gemini-text ${isVisible ? "fadeIn" : ""}`}>
            This chart represents a pie chart breakdown of various categories.
          </p>
          <ul className={`gemini-text ${isVisible ? "fadeIn" : ""}`}>
            <li><strong>Red</strong>: Represents category 1 with 300 units.</li>
            <li><strong>Blue</strong>: Represents category 2 with 150 units.</li>
            <li><strong>Yellow</strong>: Represents category 3 with 100 units.</li>
            <li><strong>Green</strong>: Represents category 4 with 50 units.</li>
            <li><strong>Purple</strong>: Represents category 5 with 75 units.</li>
          </ul>
          <p className={`gemini-text ${isVisible ? "fadeIn" : ""}`}>
            The colors help in identifying the different proportions of each category in the dataset.
          </p>
        </div>
      </div>

      {/* Left Side - Pie Chart */}
      <div className="w-1/2 p-6">
        <Pie data={pieChartData} options={{ responsive: true, maintainAspectRatio: false }} height={300} width={300} /> {/* Adjusted chart size */}
      </div>
    </section>
  );
};

export default AnalyticsSection;

// CSS styles for Gemini-style animation
const styles = ` 
  .gemini-animation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .gemini-animation.animate-visible {
    opacity: 1;
  }

  .gemini-text {
    font-size: 18px;
    color: #4b5d67;
    margin: 10px 0;
    transform: translateY(50px);
    opacity: 0;
    animation: fadeIn 2s forwards, slideIn 5s forwards;
  }

  .gemini-text:nth-child(odd) {
    animation-delay: 1s;
  }

  .gemini-text:nth-child(even) {
    animation-delay: 2s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    0% {
      transform: translateY(50px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const GlobalStyle = () => (
  <style type="text/css">
    {styles}
  </style>
);
