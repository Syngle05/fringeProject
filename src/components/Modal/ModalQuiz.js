import Modal from "react-modal";

function ModalQuiz({ modalIsOpen, closeModal }) {
  Modal.setAppElement("#root");

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
          height: "60%",
          margin: "auto",
          background: "white",
          border: "none",
        },
      }}
    >
      <div className="text-center h-full w-full">
        <div className="bg-[#E85E6C] inline-block w-full pb-8">
          <h1 className=" text-9xl text-white">:(</h1>
        </div>
        <h2 className="font-semibold text-[#333] mt-4 text-4xl">Desculpe!</h2>
        <p className="text-lg text-[#333] mt-4">
          Infelizmente você não pode prosseguir, apenas Isadora Maggi tem
          acesso.
        </p>
        <button
          onClick={closeModal}
          className="bg-yellow-500 rounded-3xl mt-10 text-white text-lg px-12 py-1"
        >
          Voltar
        </button>
      </div>
    </Modal>
  );
}

export default ModalQuiz;
