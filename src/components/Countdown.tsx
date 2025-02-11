import { useState, useEffect } from 'react';
import { Button, Typography, Box, TextField, LinearProgress } from '@mui/material';

function CountdownTimer() {
  const [minutes, setMinutes] = useState<string>('0');
  const [seconds, setSeconds] = useState<string>('0');
  const [time, setTime] = useState<number>(0); // Время в секундах
  const [initialTime, setInitialTime] = useState<number>(0); // Начальное время
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);


  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinutes(value);
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSeconds(value);
  };


  useEffect(() => {
    const totalTime = Number(minutes) * 60 + Number(seconds);
    setTime(totalTime);
    setInitialTime(totalTime);
  }, [minutes, seconds]);

 
  const toggleTimer = () => {
    if (isRunning) {
      if (intervalId) {
        clearInterval(intervalId);
      }
      setIsRunning(false);
    } else {
      const id = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(id);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  
  const resetTimer = () => {
    setMinutes('0');
    setSeconds('0');
    setTime(0);
    setInitialTime(0);
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIsRunning(false);
  };

 
  const formatTime = (totalTime: number) => {
    const mins = Math.floor(totalTime / 60);
    const secs = totalTime % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', gap: 2, backgroundColor: "#ffe6f0" }}>
       <Typography 
  variant="h1" 
  sx={{ 
    color: "#000000", 
    fontSize: "3rem", 
    fontWeight: "bold", 
    textAlign: "center" 
  }}
>
✈️ Countdown 👩🏻‍💻
</Typography>
<Typography
  sx={{
    fontSize: "8rem",
    position: "absolute", 
    top: "100%", 
    left: "19%", 
  }}
>
🧚 
</Typography>

<Typography
        sx={{
          fontSize: "8rem",
          position: "absolute", 
          top: "100%", 
          right: "19%", 
        }}
      >
        🍏  
      </Typography>

<Typography
  sx={{
    fontSize: "8rem",
    position: "absolute", 
    top: "145%", 
    left: "73%", 
  }}
>
🌼
</Typography>

<Typography
  sx={{
    fontSize: "8rem",
    position: "absolute", 
    top: "150%", 
    left: "19%", 
  }}
>
📗 
</Typography>

    
      <Box sx={{ display: 'flex', gap: 2 }}>
  <TextField
    label="Minutes"
    value={minutes}
    onChange={handleMinutesChange}
    variant="outlined"
    type="number"
    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
    sx={{
      '& label.Mui-focused': { color: '#ff4081' }, 
      '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: '#ff80ab' }, 
        '&:hover fieldset': { borderColor: '#ff4081' }, 
        '&.Mui-focused fieldset': { borderColor: '#ff4081' }, 
      },
      '& .MuiInputBase-input': {
        color: '#ff4081', 
      },
    }}
  />
  <TextField
    label="Seconds"
    value={seconds}
    onChange={handleSecondsChange}
    variant="outlined"
    type="number"
    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
    sx={{
      '& label.Mui-focused': { color: '#ff4081' },
      '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: '#ff80ab' },
        '&:hover fieldset': { borderColor: '#ff4081' },
        '&.Mui-focused fieldset': { borderColor: '#ff4081' },
      },
      '& .MuiInputBase-input': {
        color: '#ff4081',
      },
    }}
  />
</Box>

 
      <Typography variant="h6">{formatTime(time)}</Typography>

      
      <Box position="relative" display="flex" alignItems="center">
  <LinearProgress
    variant="determinate"
    value={initialTime > 0 ? ((initialTime - time) / initialTime) * 100 : 0}
    sx={{
      width: '400px',
      height: 25,
      borderRadius: 5,
      backgroundColor: "#ff4075",
      '& .MuiLinearProgress-bar': {
        backgroundColor: "#ffb6c1",
      },
    }}
  />
  <Box
    position="absolute"
    width="100%"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Typography variant="body2" color="white" fontWeight="bold">
      {Math.round((initialTime > 0 ? ((initialTime - time) / initialTime) * 100 : 0))}%
    </Typography>
  </Box>
</Box>



      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button 
          variant="contained" 
          sx={{
            color: "#ffffff", 
            backgroundColor: isRunning ? "#f06292" : "#e91e63",
            '&:hover': { backgroundColor: isRunning ? "#e91e63" : "#c2185b" }
          }}
          onClick={toggleTimer}
        >
          {isRunning ? 'Пауза' : 'Старт'}
        </Button>
        <Button
  variant="outlined"
  onClick={resetTimer}
  disabled={isRunning}
  sx={{
    color: '#e91e63', 
    borderColor: '#e91e63', 
    '&:hover': {
      backgroundColor: '#ff80ab', 
      borderColor: '#e91e63',
      boxShadow: '0px 4px 10px rgba(233, 30, 99, 0.5)', 
    },
    '&:disabled': {
      color: '#f8bbd0', 
      borderColor: '#f8bbd0',
    },
  }}
>
  Сброс
</Button>

      </Box>
    </Box>
  );
}

export default CountdownTimer;

