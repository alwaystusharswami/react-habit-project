import { useSelector } from "react-redux";
import HabitCard from "../components/HabitCard";

export default function Home() {
  const habits = useSelector((state) => state.habit);
  // console.log(habits)

  return (
    <>
      <div className="flex flex-col items-center font-semibold">
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </>
  );
}
