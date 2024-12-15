'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import Link from 'next/link';
import { screens } from './screens';

const pageVariants = {
  initial: { 
    opacity: 0,
    y: 20,
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
};

const buttonVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
};

export default function ClientHome() {
  const [screen, setScreen] = useState('home');

  // For isitfucked
  const [totalTime, setTotalTime] = useState('');
  const [friendshipLevel, setFriendshipLevel] = useState('');
  const [timeSinceBreakup, setTimeSinceBreakup] = useState('');
  const [result, setResult] = useState('');
  
  const handleCalculate = () => {
    const time = parseFloat(totalTime);
    const friendship = parseFloat(friendshipLevel);
    const breakupTime = parseFloat(timeSinceBreakup);
    
    if (breakupTime < 2) {
      setResult("Result: Don't fucking think about it. Do not do it. Do not ask your crush out.");
      setScreen('resultmath');
      return;
    }
    
    const score = (time * friendship) / breakupTime;
    
    let resultText = '';
    if (score > breakupTime) {
      resultText = "Result: Your in the danger zone. Wait it out.";
      setResult(resultText);
      setScreen('resultmath');
    } else {
      setScreen('stillhavefeelings');
    }

  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      bgcolor: '#2e3440', 
      color: '#d8dee9',
      padding: { xs: '1rem', sm: '2rem', md: '10rem' },
    }}>
      <AnimatePresence mode="wait">
        {screen === 'isitfucked' ? (
          <motion.div
            key={screen}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ 
              width: '100%', 
              textAlign: 'center',
            }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 300,
                marginBottom: 6,
                letterSpacing: '0.1em',
                color: '#e5e9f0', 
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }, 
              }}
            >
              Is it f***ed up for you to ask out your friend's ex?
            </Typography>
            
            <Box sx={{ my: 3, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', width: '100%', maxWidth: '300px', mx: 'auto'}}>
            <TextField
              label="Total time they dated (months)"
              type="number"
              value={totalTime}
              onChange={(e) => setTotalTime(e.target.value)}
              sx={{ 
                width: '300px', 
                input: { color: '#e5e9f0' },
                '& .MuiInputLabel-root': { color: '#e5e9f0' }
              }}
            />
            <TextField
              label="Friendship level (1-10)"
              type="number"
              value={friendshipLevel}
              onChange={(e) => setFriendshipLevel(e.target.value)}
              sx={{ 
                width: '300px', 
                input: { color: '#e5e9f0' },
                '& .MuiInputLabel-root': { color: '#e5e9f0' }
              }}
              inputProps={{ min: 1, max: 10 }}
            />
            <TextField
              label="Time since breakup (months)"
              type="number"
              value={timeSinceBreakup}
              onChange={(e) => setTimeSinceBreakup(e.target.value)}
              sx={{ 
                width: '300px', 
                input: { color: '#e5e9f0' },
                '& .MuiInputLabel-root': { color: '#e5e9f0' }
              }}
            />
          </Box>

  
            <Box sx={{ 
              display: 'flex', 
              gap: { xs: 2, sm: 3 },
              justifyContent: 'center', 
              flexWrap: 'wrap',
              mt: 3
            }}>
              <Button
                variant="outlined"
                onClick={handleCalculate}
                sx={{
                  borderRadius: '4px',
                  padding: '10px 24px',
                  color: '#e5e9f0', 
                  borderColor: '#4c566a', 
                  ffontSize: { xs: '0.8rem', sm: '0.9rem' },
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#3b4252',
                    borderColor: '#81a1c1', 
                  }
                }}
              >
                Calculate
              </Button>
              <Button
                variant="outlined"
                onClick={() => setScreen('home')}
                sx={{
                  borderRadius: '4px',
                  padding: '10px 24px',
                  color: '#e5e9f0', 
                  borderColor: '#4c566a', 
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#3b4252',
                    borderColor: '#81a1c1', 
                  }
                }}
              >
                Go back to Home
              </Button>
            </Box>
          </motion.div>
      ) : screen === 'resultmath' ? (
        <motion.div
          key={screen}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ 
            width: '100%', 
            textAlign: 'center',
          }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 300,
              marginBottom: 6,
              letterSpacing: '0.1em',
              color: '#e5e9f0', 
            }}
          >
            {screens[screen].text} {result}
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            gap: 3, 
            justifyContent: 'center', 
            flexWrap: 'wrap'
          }}>
            {screens[screen].buttons.map((button, index) => (
              <motion.div
                key={index}
                variants={buttonVariants}
              >
                <Button
                  variant="outlined"
                  onClick={() => setScreen(button.nextScreen)}
                  sx={{
                    borderRadius: '4px',
                    padding: '10px 24px',
                    color: '#e5e9f0', 
                    borderColor: '#4c566a', 
                    fontSize: '0.9rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#3b4252',
                      borderColor: '#81a1c1', 
                    }
                  }}
                >
                  {button.label}
                </Button>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      ) : (
          <motion.div
            key={screen}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ 
              width: '100%', 
              textAlign: 'center',
            }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 300,
                marginBottom: 6,
                letterSpacing: '0.1em',
                color: '#e5e9f0', 
              }}
            >
              {screens[screen].text}
            </Typography>
  
            <Typography variant="h6" component="h2" gutterBottom sx={{ 
              fontSize: '1.1rem',
              color: '#e5e9f0',
              marginTop: '-2.5rem',
              marginBottom: '2.5rem',
              whiteSpace: 'pre-line'
            }}>
              {screens[screen].subheading}
            </Typography>
  
            <Box sx={{ 
              display: 'flex', 
              gap: 3, 
              justifyContent: 'center', 
              flexWrap: 'wrap'
            }}>
              {screens[screen].buttons.map((button, index) => (
                <motion.div
                  key={index}
                  variants={buttonVariants}
                >
                  <Button
                    variant="outlined"
                    onClick={() => setScreen(button.nextScreen)}
                    sx={{
                      borderRadius: '4px',
                      padding: '10px 24px',
                      color: '#e5e9f0', 
                      borderColor: '#4c566a', 
                      fontSize: '0.9rem',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#3b4252',
                        borderColor: '#81a1c1', 
                      }
                    }}
                  >
                    {button.label}
                  </Button>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}  