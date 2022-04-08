import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import "./App.css";
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Paper elevation={7} style={{
        width: 400,
        margin: '0 auto',
        textAlign: "center",
        padding: 15,
      }}>
        <h1>Login</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': {
              m: 1,
              width: '95%',
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="email-input" label="Enter Email" variant="standard" />
          <TextField id="password-input" label="Enter Password" variant="standard" />
          <Button variant="contained">Login</Button>
        </Box>
      </Paper>
    </>
  )
}

export default App;