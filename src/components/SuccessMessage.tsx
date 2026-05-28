interface SuccessMessageProps {
  message: string;
  onClose: () => void;
}

const SuccessMessage = ({ message, onClose }: SuccessMessageProps) => {
  return (
    <div className="fixed inset-0 z-[300] bg-black/50 flex justify-center items-center px-4">
      <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-gray-800 font-medium mb-1">Success!</p>
        <p className="text-gray-500 text-sm mb-5">{message}</p>
        <button
          onClick={onClose}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;

