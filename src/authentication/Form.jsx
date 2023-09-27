
import { useNavigate } from "react-router-dom";

export default function Form({ children }) {
  const navigate = useNavigate();
  return (
    <form>
      <div className="min-h-screen bg-[#0F162B] flex flex-col items-center">
        <div className="w-full h-[10vh] text-white px-16 py-10 ">
          <div
            className="text-[20px] text-gray-400 cursor-pointer"
            // onClick={() => {
            //   navigate("/");
            // }}
          >
            <i className="fa-solid fa-arrow-left-long pr-2"></i>Trở về trang chủ
          </div>
        </div>
        
        {children}
      </div>
    </form>
  );
}
