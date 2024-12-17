import { NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <div className="bg-purple-400 h-10 flex justify-end items-center">
        <NavLink
          to={`/`}
          style={({ isActive }) => ({ color: isActive ? "purple" : "white" })}
          className="hover:border-b-2 px-5 p-1 border-white font-bold text-white "
        >
          Home
        </NavLink>
        <NavLink
          to={`weekly_view`}
          style={({ isActive }) => ({ color: isActive ? "purple" : "white" })}
          className="hover:border-b-2 px-5 p-1 border-white font-bold text-white "
        >
          Weekly View
        </NavLink>
        <NavLink
          to={`/add_habit`}
          style={({ isActive }) => ({ color: isActive ? "purple" : "white" })}
          className=" px-5 hover:border-b-2 p-1 border-white font-bold text-white "
        >
          Add Habit
        </NavLink>
      </div>
    </>
  );
}
