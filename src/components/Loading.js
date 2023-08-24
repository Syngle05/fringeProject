import { useEffect } from "react";
import loadingsvg from "../img/loading.svg";

function Loading() {
  useEffect(() => {
    // Desativa a rolagem quando o componente é montado
    document.body.style.overflow = "hidden";

    // Reativa a rolagem quando o componente é desmontado
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="absolute inset-0 z-50 ">
      <div className="sticky w-full h-full inset-0 flex items-center justify-center bg-white dark:bg-bgdark">
        <img src={loadingsvg} alt="loading" className=" h-16 w-16" />
      </div>
    </div>
  );
}

export default Loading;
