import { createSlice, nanoid } from "@reduxjs/toolkit";
function getDays() {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    days.unshift({
      date: date.toISOString().split('T')[0],
      label: i === 0 ? 'Today' : i === 1 ? 'Yesterday' : date.toLocaleDateString('en-US', { weekday: 'long' }),
      checkbox: false
    });
  }
  return days;
}
const habitSlice = createSlice({
  name: "habit",
  initialState: [
    { habitName: "gym", id: nanoid(), days: getDays() },
    { habitName: "music", id: nanoid(), days: getDays() },
    { habitName: "running", id: nanoid(), days: getDays() },

  ],
  reducers: {
    addHabit: (state, action) => {
      state.push({ habitName: action.payload, id: nanoid(), days: getDays() });
    },
    deleteHabit: (state, action) => {
      return state.filter((st) => st.id !== action.payload);
    },
    checkHabit: (state, action) => {
      console.log(state)
      return state.map((st) =>
        st.id === action.payload ? { ...st, days: st.days.map((day) => day.label === "Today" ? { ...day, checkbox: !day.checkbox } : day) } : st
      );
    },
  },
});

export const { addHabit, deleteHabit, checkHabit } = habitSlice.actions;
export default habitSlice.reducer;
