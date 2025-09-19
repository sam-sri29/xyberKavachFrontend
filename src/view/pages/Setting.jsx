import { TbLogout2 } from "react-icons/tb";

export default function Setting({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Sliding Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[25%] bg-gray-800 text-white shadow-lg 
          transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-xl font-semibold">Settings</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✖
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center space-x-4 p-4 hover:bg-gray-700 rounded cursor-pointer">
            <TbLogout2 className="text-2xl"/><span>Logout</span>
          </div>
          <hr className="text-sm my-2"/>
          <div className="flex items-center space-x-4 p-4 hover:bg-gray-700 rounded cursor-pointer">
            <TbLogout2 className="text-2xl"/><span>Logout</span>
          </div>
          <hr className="text-sm my-2"/>
          <div className="flex items-center space-x-4 p-4 hover:bg-gray-700 rounded cursor-pointer">
            <TbLogout2 className="text-2xl"/><span>Logout</span>
          </div>
          <hr className="text-sm my-2"/>
          <div className="flex items-center space-x-4 p-4 hover:bg-gray-700 rounded cursor-pointer">
            <TbLogout2 className="text-2xl"/><span>Logout</span>
          </div>
          <hr className="text-sm my-2"/>
        </div>
      </div>
    </>
  );
}
