/* eslint-disable react/prop-types */
import { TbXboxX } from "react-icons/tb";

import { deleteHabit, checkHabit } from "../slices/habit.js";
import { useDispatch } from "react-redux";
export default function HabitCard({ habit }) {
  const dispatch = useDispatch();
  const deleteTask = (id) => {
    dispatch(deleteHabit(id));
  };
  const checkTask = (id) => {
    dispatch(checkHabit(id));
  };
  return (
    <div className="my-5 w-1/2 border-2 border-purple-300 p-2 rounded-md flex justify-between">
      <h1>{habit.days[6].date}</h1>
      <h1 className="capitalize">{habit.habitName} </h1>
      <p>
        <input
          type="checkbox"
          className="p-2 mx-2"
          checked={habit.days[6].checkbox}
          onChange={() => checkTask(habit.id)}
        />
        <button
          className="text-red-600 text-xl"
          onClick={() => deleteTask(habit.id)}
        >
          <TbXboxX/>
        </button>
      </p>
    </div>
  );
}
