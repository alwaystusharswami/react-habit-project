import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import AddHabit from "./components/AddHabit.jsx";
import WeeklyView from "./pages/WeeklyView.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="add_habit" element={<AddHabit />} />
      <Route path="weekly_view" element={<WeeklyView />} />
    </Route>
  )
);
