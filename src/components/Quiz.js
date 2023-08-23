import { useNavigate } from "react-router-dom";
import img2 from "../img/kisspng-cockatiel-line-art-drawing-cockatoo-clip-art-5af2c4132f1ff1.940837301525859347193.png";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "./transition.css";
import ModalQuiz from "./Modal/ModalQuiz";
function Quiz() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);
  function navigateTo() {
    setShow(false);
    setTimeout(() => navigate("/main"), 200);
  }

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <CSSTransition in={show} timeout={200} classNames="fade">
      {() => (
        <div className="relative overflow-hidden flex justify-center h-[100vh] w-full ">
          <ModalQuiz modalIsOpen={openModal} closeModal={closeModal} />
          <img
            src={img2}
            alt="img2"
            className="w-[100px] opacity-50 h-[100px] mx-auto absolute -left-5 -bottom-3"
          />

          <div className=" my-auto text-center">
            <h1 className="text-2xl text-[#1d1d1f] ">
              Para prosseguir responda o formulário a baixo
            </h1>
            <div className="my-4">
              <span className=" text-lg font-normal text-[#242427]">
                Você é Isadora Maggi?
              </span>
            </div>

            <div className="flex w-full  justify-between px-5">
              <button
                onClick={navigateTo}
                className="text-xl hover:border-green-300 hover:text-green-800 transition-all duration-200 hover:bg-green-200 rounded-md border px-8 border-[#7a7a7a]"
              >
                sim
              </button>
              <button
                onClick={() => setOpenModal(true)}
                className="text-xl hover:border-red-300 hover:text-red-800 hover:bg-red-200 transition-all duration-300 rounded-md border px-8 border-[#7a7a7a]"
              >
                não
              </button>
            </div>
          </div>
        </div>
      )}
    </CSSTransition>
  );
}

export default Quiz;
