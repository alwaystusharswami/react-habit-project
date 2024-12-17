import { useDispatch } from "react-redux";
import { addHabit } from "../slices/habit.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddHabit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addHabit(input));
    setInput("")
    navigate('/')

  };
  return (
    <>
      <div className="flex flex-col justify-center items-center my-5">
        <h1 className="my-10 font-bold text-2xl text-purple-800">
          ADD YOUR HABIT HERE...
        </h1>

        <form onSubmit={submitForm}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add Habit ..."
            className="border-2 border-purple-300 rounded-s-md p-2 placeholder:font-semibold"
          />
          <button
            className="bg-purple-300 p-2 rounded-e-md border-2 border-purple-300"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}
