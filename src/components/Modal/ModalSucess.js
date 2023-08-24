import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

function ModalSucess({ modalIsOpen, closeModal, option }) {
  Modal.setAppElement("#root");
  const navigate = useNavigate();
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Quiz Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0 ,0, 0.8)",
          zIndex: "100",
        },
        content: {
          backgroundColor: "white",
          borderRadius: "5px",
          padding: 0,
          overflow: "hidden",
          width: "50%",
          height: "70%",
          margin: "auto",
          background: "white",
          border: "none",
        },
      }}
    >
      <div className="text-center h-full w-full">
        <div className="bg-[#5ee85e] inline-block w-full pb-8">
          <h1 className=" text-9xl text-white">:)</h1>
        </div>
        <div className="pt-8 px-2">
          <h2 className="font-semibold text-[#333] mt-4 text-4xl">
            Uiaa parabéns!
          </h2>
          <p className="text-lg text-[#333] mt-4">
            Você ganhou um {option} brabíssimo, que trará uma oportunidade única
            de aumento do seu estrogênio, te dando felicidade e ânimo!
            <br /> Esperamos que goste e que te faça bem. {"<3"}.
          </p>
          <button
            onClick={() => {
              closeModal();
              navigate(-1);
            }}
            className="bg-yellow-400 hover:bg-yellow-500 rounded-3xl mt-10 text-white text-lg px-12 py-1"
          >
            Resgatar!
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalSucess;
