import React from "react";
import { Line } from "react-chartjs-2";
import dataByDate from "./data_by_day.json";
const Home = () => {
  const data = {
    labels: dataByDate?.map((v) => {
      return new Date(v?.reportedDate).toLocaleDateString("en-US");
    }),
    datasets: [
      {
        label: "Đã tiêm",
        data: dataByDate?.map((v) => {
          return v?.totalInjected;
        }),
        fill: false,
        backgroundColor: "#FF0000",
        borderColor: "rgba(255, 99, 132, 0.8)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    tension: 0.25,
  };
  return (
    <div className="container py-4 mx-auto space-y-4">
      <div className="p-3 space-y-3 rounded-lg shadow">
        <div className="font-semibold">Dữ liệu tiêm theo ngày</div>
        <div className="">(Từ ngày 29/07/2021 đến ngày 05/08/2021)</div>
        <Line
          className="w-full h-full"
          // width="100%"
          // height="100%"
          data={data}
          options={{
            borderWidth: 5,
            plugins: {
              legend: {
                labels: {
                  // This more specific font property overrides the global property
                  font: {
                    size: 16,
                    weight: 500,
                  },
                },
              },
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    display: false,
                  },
                },
              ],
            },

            tension: 0.25,
          }}
        />
      </div>

      <div className="grid grid-cols-2 gap-x-4">
        <div className="p-3 shadow">
          <iframe
            title="Tỷ lệ đã tiêm ít nhất 1 mũi / dân số (&amp;gt;=18t) "
            aria-label="Map"
            id="datawrapper-chart-8UkRu"
            src="https://datawrapper.dwcdn.net/8UkRu/3/"
            scrolling="no"
            frameborder="0"
            style={{
              width: "100%",
              minWidth: "100% !important",
              border: "none",
            }}
            height="720"
          ></iframe>
        </div>
        <div className="p-3 shadow">
          <iframe
            title="Tỷ lệ vaccine đã phân bổ / dân số (&amp;gt;=18t)"
            aria-label="Map"
            id="datawrapper-chart-UiCj1"
            src="https://datawrapper.dwcdn.net/UiCj1/2/"
            scrolling="no"
            frameborder="0"
            style={{
              width: "100%",
              minWidth: "100% !important",
              border: "none",
            }}
            height="742"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
