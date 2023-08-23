import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { BsArrowLeftShort } from "react-icons/bs";
import "./rolette.css";
import img2 from "../img/audacia.png";
import img1 from "../img/blue-flower-png.parspng.com_.png";
import img3 from "../img/tordo1.png";
import img4 from "../img/tordo2.png";
import img5 from "../img/kisspng-mockingjay-catching-fire-katniss-everdeen-peeta-me-mockingjay-5b4c658542dd89.6159536415317333812739.png";
import img6 from "../img/ring.png";

function Rolette() {
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

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div className="w-full h-[100vh] justify-center flex flex-col items-center overflow-hidden relative">
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
          alert(`O resultado é ${data[prizeNumber].option}`);
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
        // onClick={goBack}
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
      <div className="absolute imgAnimation w-[70px] h-[70px] bottom-20 right-20">
        <img src={img6} />
      </div>
    </div>
  );
}

export default Rolette;
