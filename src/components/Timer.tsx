import { useState, useEffect, useCallback, memo } from "react";
import { Button, Typography, Container } from "@mui/material";

const Timer = memo(() => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  const getMinutes = useCallback(() => Math.floor(count / 60), [count]);
  const getSeconds = useCallback(() => count % 60, [count]);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [start]);

  return (
    <Container 
      maxWidth={false}
      sx={{ 
        width: "100%", 
        height: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        textAlign: "center",
        backgroundColor: "#ffe6f0", 
        padding: "20px",
        position: "relative",
      }}
    >
      <Typography 
        variant="h1" 
        sx={{ 
          color: "#000000", 
          fontSize: "3rem", 
          fontWeight: "bold", 
          textAlign: "center" 
        }}
      >
        🦋 Timer 👩🏻‍💻
      </Typography>

      <Typography variant="h3" sx={{ color: "#e91e63", fontWeight: "bold" }}>
        {String(getMinutes()).padStart(2, "0")}:{String(getSeconds()).padStart(2, "0")}
      </Typography>

      <Typography
        sx={{
          fontSize: "8rem",
          position: "absolute", 
          top: "20%", 
          right: "19%", 
        }}
      >
        ✨ 
      </Typography>
      <Typography
        sx={{
          fontSize: "8rem",
          position: "absolute", 
          top: "50%", 
          left: "19%", 
        }}
      >
        ✨ 
      </Typography>
      <Typography
        sx={{
          fontSize: "8rem",
          position: "absolute", 
          top: "14%", 
          left: "17%", 
        }}
      >
        🌸
      </Typography>
      <Typography
        sx={{
          fontSize: "8rem",
          position: "absolute", 
          top: "55%", 
          right: "22%", 
        }}
      >
        🌻
      </Typography>

      <Button 
        variant="contained" 
        sx={{ 
          width: "80%", 
          maxWidth: "400px",
          color: "#ffffff",
          backgroundColor: start ? "#f06292" : "#e91e63", 
          "&:hover": { backgroundColor: start ? "#e91e63" : "#c2185b" },
          marginTop: 2
        }} 
        onClick={() => setStart((prev) => !prev)}
      >
        {start ? "PAUSE" : "START"}
      </Button>
      <Button 
        variant="outlined" 
        sx={{ 
          width: "80%",
          maxWidth: "400px",
          color: "#e91e63", 
          borderColor: "#ff4081", 
          "&:hover": { borderColor: "#f50057", color: "#000000" },
          marginTop: 2
        }} 
        onClick={() => {
          setStart(false);
          setCount(0);
        }} 
        disabled={start}
      >
        RESET
      </Button>
    </Container>
  );
});

export default Timer;


