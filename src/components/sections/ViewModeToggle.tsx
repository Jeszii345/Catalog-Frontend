
type Props = {
  viewMode: "webpage" | "modal";
  setViewMode: (mode: "webpage" | "modal") => void;
};

const ViewModeToggle = ({ viewMode, setViewMode }: Props) => (
  <div className="flex justify-center mb-6 gap-4">
    <button
      className={`px-4 py-2 rounded ${viewMode === "webpage" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
      onClick={() => setViewMode("webpage")}
    >
      Webpage
    </button>
    <button
      className={`px-4 py-2 rounded ${viewMode === "modal" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
      onClick={() => setViewMode("modal")}
    >
      Modal
    </button>
  </div>
);

export default ViewModeToggle;
