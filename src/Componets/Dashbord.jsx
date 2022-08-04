import "../App.css";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from "chart.js/auto";
export const Dashbord = () => {
  const labels = ["2014", "2016", "2018", "2020", "2022"];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 2000,
          callback: function (value) {
            var ranges = [
              { divider: 1e6, suffix: "M" },
              { divider: 1e3, suffix: "k" },
            ];
            function formatNumber(n) {
              for (var i = 0; i < ranges.length; i++) {
                if (n >= ranges[i].divider) {
                  return (n / ranges[i].divider).toString() + ranges[i].suffix;
                }
              }
              return n;
            }
            return formatNumber(value);
          },
        },
      },
    },
    tooltip: { visible: true },
  };
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: [2000, 4000, 6000, 8000, 10000],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <>
      <div className="bacground_img_div">
        <div className="first_left_chart">
          <span>10,356</span>
          <Line
            style={{
              //   border: "2px solid red",
              width: "100%",
              margin: "auto",
              height: "90%",
            }}
            options={options}
            data={data}
          />
        </div>
      </div>
    </>
  );
};
