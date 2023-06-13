import { Card, CardContent, Fab, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    const counter = count + 1;
    if (counter > 999) {
      return;
    }
    setCount(counter);
  };
  const handleDecrement = () => {
    const counter = count - 1;
    if (counter < 0) {
      return;
    }
    setCount(counter);
  };
  const parseCounter = () => {
    if (count < 10) {
      return `00${count}`;
    }
    if (count < 100) {
      return `0${count}`;
    }
    return count;
  };
  return (
    <div>
      <h2>Counter: </h2>
      <div style={{ width: 550, margin: "auto" }}>
        <Grid container spacing={1}>
          {parseCounter()
            .split(" ")
            .map((digit, index) => (
              <Grid xs={4} key={index} style={{ padding: 5 }}>
                <Card>
                  <CardContent>
                    <Typography variant="h5">{digit}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </div>
      <Fab variant="circular" onClick={handleIncrement}>
        +
      </Fab>
      <Fab variant="circular" onClick={handleDecrement}>
        -
      </Fab>
    </div>
  );
};

export default Counter;
