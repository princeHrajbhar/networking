"use client"
import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement); // Register PointElement

const AnalyticsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Random static data for the line chart
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [500, 700, 800, 650, 900, 1050], // Random data
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 3,
        tension: 0.4,
      },
      {
        label: "Expenses",
        data: [200, 350, 400, 300, 500, 600], // Random data
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderWidth: 3,
        tension: 0.4,
      },
    ],
  };

  // IntersectionObserver to detect when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true); // Trigger animation when section is in view
      } else {
        setIsVisible(false); // Reset animation when out of view
      }
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    const currentRef = sectionRef.current; // Store current ref value

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
      {/* Left Side - Line Chart */}
      <div className="w-1/2 p-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Analytics Overview</h2>
        <Line data={lineChartData} options={{ responsive: true }} />
      </div>

      {/* Right Side - Gemini Animation (Custom Animated Text) */}
      <div className="w-1/2 flex justify-center items-center p-6">
        <div className="w-3/4">
          <div className={`gemini-animation ${isVisible ? "animate-visible" : ""}`}>
            <h3 className={`gemini-text ${isVisible ? "fadeIn" : ""}`}>Gemini Animation Example</h3>
            <p className={`gemini-text ${isVisible ? "fadeIn" : ""}`}>Explaining how this animation simulates a Gemini-style effect.</p>
            <p className={`gemini-text ${isVisible ? "fadeIn" : ""}`}>This text will continuously animate to mimic the effect.</p>
          </div>
        </div>
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
    align-items: center;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .gemini-animation.animate-visible {
    opacity: 1;
  }

  .gemini-text {
    font-size: 24px;
    font-weight: bold;
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
