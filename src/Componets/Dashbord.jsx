import "../App.css";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from "chart.js/auto";
export const Dashbord = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        left: 0,
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
  const optionstwo = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        left: 0,
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
          stepSize: 10,
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
    labels: ["2014", "2016", "2018", "2020", "2022"],
    datasets: [
      {
        fill: true,
        data: [2000, 4000, 6000, 8000, 10000],
        borderColor: "#97e2e7",
        backgroundColor: "#e3f2f3",
      },
    ],
  };
  const datatwo = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        fill: true,
        data: [33, 48, 56, 40, 45, 60],
        borderColor: "#97e2e7",
        backgroundColor: "#e3f2f3",
      },
    ],
  };

  return (
    <>
      <div className="bacground_img_div">
        <div className="first_left_chart">
          <span>10,857</span>
          <Line
            style={{
              //   border: "2px solid red",
              width: "90%",
              height: "91%",
              margin: "auto",
            }}
            options={options}
            data={data}
          />
        </div>
        {/*middle div with graph*/}
        <div className="middle_graph_div">
          <span className="first_span_tag">45 Days</span>
          <p className="first_p_tag">Avg Time to Adopt by Age Bucket</p>
          <div className="first_samll_graph">
            {/*first 30days */}
            <div>
              <span className="span_style_class">0-1 Puppy</span>
              <div className="firts_div"></div>{" "}
              <span className="span_style_class">30days</span>
            </div>
            {/*second 80days */}
            <div>
              <span className="span_style_class">2-6 Adult</span>
              <div className="second_div"></div>{" "}
              <span className="span_style_class">80 days</span>
            </div>
            {/*third 103days */}
            <div>
              <span className="span_style_class">7+ Senior</span>
              <div className="third_div"></div>{" "}
              <span className="span_style_class">103 days</span>
            </div>
          </div>
          <p className="second_p_tag">Note: Starts at Date of Transport</p>
          <span className="second_span_tag">Avg Time to Adopt over Time</span>
          <div>
            <Line
              style={{
                //   border: "2px solid red",
                width: "90%",
                height: "91%",
                margin: "auto",
              }}
              options={optionstwo}
              data={datatwo}
            />
          </div>
        </div>
        {/*last div graph */}
      </div>
    </>
  );
};
