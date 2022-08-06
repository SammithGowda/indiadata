import "../App.css";
import { Line, Bar } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
export const Dashbord = () => {
  const [arrone, setArrone] = useState([2000, 4000, 6000, 8000, 10000]);
  useEffect(() => {}, []);
  const dummyarr = () => {
    let firstarry = [1, 2, 3, 4, 5];

    let copy = firstarry.map((el) => Math.floor(Math.random() * 10000) + 1000);
    setArrone(copy);
  };
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
          borderColor: "#d7d7d7",
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
    tooltip: { visible: false },
  };
  const data = {
    labels: ["2014", "2016", "2018", "2020", "2022"],
    datasets: [
      {
        fill: true,
        data: arrone,
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
  const datathree = {
    labels: [
      "Get Along with Dogs",
      "Get Along with Cat",
      "Get Along with Kids",
      "Are Housebroken",
    ],
    datasets: [
      {
        axis: "y",
        backgroundColor: "#97e2e7",
        hoverBackgroundColor: "#e3f2f3",
        data: [90, 80, 30, 41],
      },
    ],
  };
  const optionsthree = {
    indexAxis: "y",
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      title: {
        display: false,
        font: { size: 50, family: "rubik" },
      },
      legend: { display: false, position: "right" },
      labels: {
        render: "percentage",
        precision: 2,
      },
    },
    // maintainAspectRatio: false,
  };
  const datafour = {
    labels: [
      "Labrador",
      "Pit",
      "Hound",
      "Shepered",
      "Terrier",
      "American",
      "Catahoula",
      "Hounds",
      "Australian",
      "Mountain",
    ],
    datasets: [
      {
        axis: "y",
        backgroundColor: "#97e2e7",
        hoverBackgroundColor: "#e3f2f3",
        data: [8, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      },
    ],
  };
  const optionsfour = {
    indexAxis: "y",
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      title: {
        display: false,
        font: { size: 50, family: "rubik" },
      },
      legend: { display: false, position: "right" },
      labels: {
        render: "percentage",
        precision: 2,
      },
    },
    // maintainAspectRatio: false,
  };
  return (
    <>
      <div className="bacground_img_div">
        <div className="first_left_chart">
          <span>{Math.floor(Math.random() * 10000) + 1000}</span>
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
          <span className="first_span_tag">45 days</span>
          <p className="first_p_tag">Avg Time to Adopt by Age Bucket</p>
          <div className="first_samll_graph">
            {/*first 30days */}
            <div>
              <span className="span_style_class">0-1 Puppy</span>
              <div onClick={() => dummyarr()} className="firts_div"></div>{" "}
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
                // border: "2px solid red",
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
        <div className="last_graph_div">
          <span className="last_graph_div_first_span">
            Propostion of Dogs that...
          </span>
          <div className="proportio_chart_div">
            <Bar
              className="bar"
              // style={{ height: "50px", border: "2px solid red" }}
              data={datathree}
              options={optionsthree}
            />
          </div>
          <div className="dose_first_div"></div>
          <span className="dose_span_tag">Dose/Are</span>
          <div className="dose_Second_div"></div>
          <span className="dose_span_tag">Dose Not/Are Not</span>
          <div className="dose_third_div"></div>
          <span className="dose_span_tag">Not Sure</span>
          {/* last each dog breed */}
          <p className="text_p_tag">Top 10 Primary Breeds(Including Mixes)</p>
          <div className="last_breeds_div">
            <Bar
              // style={{ height: "200px" }}
              data={datafour}
              options={optionsfour}
            />
          </div>
        </div>
      </div>
    </>
  );
};
