import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeWidget } from "../store/slices/dashboardSlice";

export default function Widget({ widget, categoryId }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md relative gap-5">
      <button
        onClick={handleRemove}
        className="absolute top-2 right-2 text-red-500"
      >
        <FaTimes />
      </button>
      <div className="space-y-3">
        {" "}
        <div>
          <h3 className="font-bold">{widget.name}</h3>
          <p>{widget.text}</p>
        </div>
        {widget.image && (
          <img
            src={widget.image}
            alt={widget.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        )}
      </div>
    </div>
  );
}
