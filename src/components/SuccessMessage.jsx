const SuccessMessage = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full text-center">
        <p className="text-green-600">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
