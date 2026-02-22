export default function Toast({ message, type = "success", onClose }) {
  const styles = {
    success: "bg-green-500",
    error: "bg-red-500",
  };

  return (
    <div className={`fixed top-5 right-5 text-white px-4 py-2 rounded-lg shadow-lg ${styles[type]}`}>
      <div className="flex justify-between gap-4 items-center">
        <span>{message}</span>
        <button onClick={onClose}>✕</button>
      </div>
    </div>
  );
}