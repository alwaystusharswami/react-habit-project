import { TbXboxX } from "react-icons/tb";
import { FcCheckmark } from "react-icons/fc";
/* eslint-disable react/prop-types */
export default function WeeklyViewCard({ habit }) {
  const { habitName, days } = habit;
  // console.log(days)
  return (
    <>
      <div className=" w-full flex flex-col items-center justify-center my-4 p-2">
        <div className="w-4/5 flex justify-between items-center p-2 border-2 rounded-md">
          <h1 className="capitalize">{habitName} </h1>
          <div className=" w-5/6 flex justify-between">
            {days.map((day) => <div className="flex flex-col items-center" key={day.date}>
              <p >{day.label} </p>
              <p className="text-xl" >{day.checkbox ? <FcCheckmark /> : <TbXboxX className="text-red-700" />} </p>
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
