import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { Container, Typography } from "@mui/material";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";
import HabitStats from "./components/Habit-state";

function App() {
  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h2" align="center">
        Habit tracker
      </Typography>
      <AddHabitForm />
      <HabitList />
      <HabitStats />
    </Container>
  );
}

export default App;
