import React, { FC, useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { LinearProgress, CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Radar } from "react-chartjs-2";

const ScoreBreakdown: FC = () => {
  const classes = useStyles();
  const [percent, setPercent] = useState(20);

  // const [progress, setProgress] = React.useState(0);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress(oldProgress => {
  //       if (oldProgress === 100) {
  //         return 0;
  //       }
  //       return Math.min(oldProgress + 15, 100);
  //     });
  //   }, 1000);

  // return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  interface PlaylistRating {
    energy: number;
    danceability: number;
    speechiness: number;
    mode: number;
    valence: number;
    loudness: number;
    [key: string]: number;
  }

  const mockData: PlaylistRating = {
    valence: 0.4,
    energy: 0.2,
    danceability: 0.9,
    speechiness: 0.1,
    mode: 0.2,
    loudness: 0.6,
  };

  const mockAverageData: PlaylistRating = {
    valence: 0.8,
    energy: 0.4,
    danceability: 0.5,
    speechiness: 0.6,
    mode: 0.8,
    loudness: 0.7,
  };

  const data = {
    labels: [
      "Valence",
      "Energy",
      "Danceability",
      "Speechiness",
      "Mode",
      "Loudness",
    ],
    datasets: [
      {
        label: "This Playlist",
        data: Object.values(mockData).map((el) => el * 100),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        lineTension: 0.4,
      },
      {
        label: "Average Score",
        data: Object.values(mockAverageData).map((el) => el * 100),
        backgroundColor: "rgba(35, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        lineTension: 0.4,
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true },
      pointLabels: {
        fontSize: 100,
        fontColor: "red",
      },
      gridLines: {
        circular: true,
      },
    },
  };

  // const options = {
  //   scale: {
  //     pointLabels: {
  //       fontSize: 20,
  //     },
  //   },
  // };

  return (
    <div>
      <Radar data={data} options={options} style={{ fontSize: "20px" }}></Radar>
    </div>
    // <Grid container component="main" className={classes.root}>
    //   <Typography className={classes.text}>Score Breakdown</Typography>

    //   <Grid spacing={2} container direction="column">
    //     {Object.keys(mockData).map((key: keyof PlaylistRating) => {
    //       return (
    //         <div>
    //           <Grid xs spacing={2}>
    //             <span>hello</span>
    //             <BorderLinearProgress
    //               value={mockData[key] * 100}
    //               variant="determinate"
    //               title="test"
    //             />
    //           </Grid>
    //         </div>
    //       );
    //     })}
    //   </Grid>

    //   {/* <Grid spacing={2} container>
    // 		<Grid xs item>
    // 				<BorderLinearProgress value={80} variant="determinate" title="test" />
    // 		</Grid>
    // 		</Grid>   */}
    // </Grid>
  );
};

export default ScoreBreakdown;

const useStyles = makeStyles({
  root: {
    height: "60vh",
    backgroundColor: "#191414",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: "70px",
  },
  progressBar: {
    color: "white",
  },
  barContainer: {
    display: "inline-block",
    width: "80%",
  },
});

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 30,
    borderRadius: 5,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "red",
  },
}))(LinearProgress);
