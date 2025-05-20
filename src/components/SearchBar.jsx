import { useDispatch } from "react-redux";
import { setSearchTerm } from "../store/slices/dashboardSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      placeholder="Search any widget"
      className="w-1/4 p-2 mb-4 border rounded"
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    />
  );
}
