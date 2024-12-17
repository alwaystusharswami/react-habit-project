import WeeklyViewCard from "../components/WeeklyViewCard";
import { useSelector } from "react-redux";
export default function WeeklyView() {
    const habits = useSelector((state) => state.habit);
    console.log(habits)

  return (
      <div className="flex flex-col items-center my-4 font-bold">
          <h1 className="text-purple-400 text-3xl">Weekly Habits Progress : </h1>

          {habits.map((habit)=><WeeklyViewCard habit={habit} key={habit.id} />)}
    </div>
  )
}
