import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';


import "../App.css";

function Label() {
  return (
    <div className="circle">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
      >
        <CircularProgress
          variant="determinate"
          value={75}
          color="secondary"
          size="170px"
          thickness={0.3}
        />
        <Typography position="absolute" color="white">
          <div>
            <img src="/Like.png" alt="" />
          </div>
          <div className="number"> {0} </div>
          <div className="Label">Label</div>
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
      >
        <CircularProgress
          variant="determinate"
          value={100}
          color="inherit"
          size="170px"
          thickness={0.1}
        />
        <Typography position="absolute" color="white">
          <div>
            <img src="/Calendar.png" alt="" />
          </div>
          <div className="number"> {0} </div>
          <div className="Label">Label</div>
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
      >
        <CircularProgress
          variant="determinate"
          value={100}
          color="inherit"
          size="170px"
          thickness={0.1}
        />
        <Typography position="absolute" color="white">
          <div>
            <img src="/Calendar.png" alt="" />
          </div>
          <div className="number"> {0} </div>
          <div className="Label">Label</div>
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
      >
        <CircularProgress
          variant="determinate"
          value={100}
          color="inherit"
          size="170px"
          thickness={0.1}
        />
        <Typography position="absolute" color="white">
          <div>
            <img src="/Calendar.png" alt="" />
          </div>
          <div className="number"> {0} </div>
          <div className="Label">Label</div>
        </Typography>
      </Box>
    </div>
  );
}

export default Label