import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { BsArrowLeftShort } from "react-icons/bs";
import "./rolette.css";
import img2 from "../img/audacia.png";
import img1 from "../img/blue-flower-png.parspng.com_.png";
import img3 from "../img/tordo1.png";
import img4 from "../img/tordo2.png";
import img5 from "../img/kisspng-mockingjay-catching-fire-katniss-everdeen-peeta-me-mockingjay-5b4c658542dd89.6159536415317333812739.png";
import img7 from "../img/rosa.png";
import img8 from "../img/dorama.png";
import img9 from "../img/fringe1.png";
import img10 from "../img/fringe2.png";
import img11 from "../img/fringe3.png";
import img12 from "../img/fringe4.png";
import img13 from "../img/fringe5.png";
import img14 from "../img/percy.png";
import img15 from "../img/zombie.png";
import { useNavigate } from "react-router-dom";
import ModalSucess from "./Modal/ModalSucess";
import { createItem } from "../services/prizeDraw";
import Loading from "./Loading";

function Rolette() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [optionSelect, setOptionSelect] = useState("");
  const data = [
    { option: "Açai" },
    { option: "Sorvetão" },
    { option: "Chocolate" },
    { option: "Cookies" },
    { option: "Bolo de potes" },
    { option: "Caixa de bombom" },
  ];
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  function goBack() {
    navigate(-1);
  }

  function roletteSucess() {
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <div className="w-full h-[100vh] justify-center flex flex-col items-center overflow-hidden relative">
      {loading && <Loading />}
      <ModalSucess
        modalIsOpen={openModal}
        closeModal={closeModal}
        option={optionSelect}
      />
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={[
          "#1b1e23",
          "#e02130",
          "#482344",
          "#812926",
          "#429867",
          "#fab243",
        ]}
        textColors={["#FFFFFF", "#D3D3D3 ", "#FFFFE0 ", "#FFFFE0 ", "#FFFFE0 "]}
        fontSize={17}
        outerBorderColor="#23385E"
        outerBorderWidth={12}
        innerBorderWidth={45}
        radiusLineWidth={0}
        fontFamily="Raleway"
        innerBorderColor="#23385E"
        onStopSpinning={() => {
          setMustSpin(false);
          setOptionSelect(data[prizeNumber].option);
          roletteSucess();
          createItem(data[prizeNumber].option);
        }}
      />
      <button
        className="border rounded-md mt-4 text-white font-semibold px-10 bg-purple-600 py-1 text-xl border-purple-800"
        onClick={handleSpinClick}
      >
        Girar a roletinha
      </button>
      <div
        className=" bg-slate-100 dark:bg-carddark top-4 left-4 absolute dark:hover:bg-green-100 hover:bg-green-100 ml-1 rounded-full cursor-pointer inline-block"
        onClick={goBack}
      >
        <BsArrowLeftShort className=" text-5xl text-green-900 " />
      </div>
      <div className="absolute imgAnimation w-[70px] h-[70px] top-20 right-20">
        <img src={img1} />
      </div>
      <div className="absolute imgAnimation w-[70px] h-[70px] top-60 left-20">
        <img src={img2} />
      </div>
      <div className="absolute imgAnimation w-[70px] h-[70px] bottom-52 left-64">
        <img src={img3} />
      </div>
      <div className="absolute imgAnimation w-[100px] h-[100px] bottom-20 right-[25%]">
        <img src={img4} />
      </div>
      <div className="absolute imgAnimation w-[70px] h-[70px] top-10 left-72">
        <img src={img5} />
      </div>

      <div className="absolute imgAnimation w-[50px] h-[50px] bottom-40 left-20">
        <img src={img7} />
      </div>
      <div className="absolute imgAnimation w-[40px] h-[40px] bottom-[50%] left-[25%]">
        <img src={img8} />
      </div>
      <div className="absolute imgAnimation w-[60px] h-[60px] bottom-[40%] right-[10%] ">
        <img src={img9} />
      </div>
      <div className="absolute imgAnimation w-[125px] h-[125px] -bottom-4 left-[30%]">
        <img src={img10} />
      </div>
      <div className="absolute imgAnimation w-[125px] h-[125px] -bottom-5 right-20">
        <img src={img11} />
      </div>
      <div className="absolute imgAnimation w-[70px] h-[70px] top-1 left-[32%]">
        <img src={img12} />
      </div>
      <div className="absolute imgAnimation w-[70px] h-[70px] top-10 right-[25%]">
        <img src={img13} />
      </div>
      <div className="absolute imgAnimation w-[70px] h-[70px] bottom-[55%] right-[20%]">
        <img src={img14} />
      </div>
      <div className="absolute imgAnimation w-[70px] h-[70px] top-20 left-20">
        <img src={img15} onLoad={handleImageLoad} />
      </div>
      <div className="phrase text-lg font-medium absolute right-2 bottom-2">
        <span>Angústia é fala entupida</span>
      </div>
    </div>
  );
}

export default Rolette;
