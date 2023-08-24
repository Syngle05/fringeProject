import { useRef, useState } from "react";
import isadora from "../img/drisadora.png";
import grafico from "../img/Dia 14.png";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
function Main() {
  console.log("hi");
  const myRef = useRef(null);
  const totalImages = 2; // substitua pelo número total de suas imagens
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  console.log(imagesLoaded);
  const handleImageLoad = () => {
    setImagesLoaded((prevState) => {
      const newState = prevState + 1;
      if (newState === totalImages) {
        setLoading(false);
      }
      return newState;
    });
  };

  const handleClick = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();
  return (
    <div className="w-full ">
      {loading && <Loading />}
      <div className=" flex items-center justify-center">
        <div className="flex justify-between items-center w-[85%] h-[100vh] mt-4">
          <div className="max-w-[54%]  font-semibold text-[#202020]">
            <h1 className="text-7xl text-[#212529]">Sua Felicidade é</h1>
            <span className="text-[#FF3A1F] text-7xl">Importante</span>
            <div className="pl-2 pr-6 mt-2">
              <p className="text-[14px] text-[#212529bf]">
                <span className="ml-1.5">
                  A TPM, que ocorre antes do período menstrual e se estende
                  durante a menstruação, é caracterizada por uma queda acentuada
                  nos níveis de estrógeno. Isso pode fazer com que a mulher se
                  sinta mais para baixo, com desconforto físico e também
                  psicológico. Durante esse período, também pode ocorrer a
                  cólica menstrual. Poderia muito bem não ocorrer esse
                  desconforto se houvesse proteína de canal na região afetada,
                  então o fluxo poderia sair mais tranquilamente, quando um
                  hormônio se ligasse àquela região e a proteína se abrisse,
                  fazendo com que se reduzisse o desconforto, mas infelizmente
                  tem que ser na raça. Essa combinação de fatores pode levar a
                  mulher a se sentir ainda mais deprimida.
                </span>{" "}
                <br />{" "}
                <span className="ml-1.5">
                  É importante que se manter positiva e buscar atividades que
                  lhe tragam felicidade e bem-estar, e temos a atividade certa
                  para voce, a roleta
                </span>
                .
              </p>
            </div>

            <button
              onClick={handleClick}
              className="bg-green-700 rounded-3xl mt-4 text-white text-base px-4 py-1"
            >
              Saiba mais!
            </button>
          </div>
          <div className="w-[46%] h-[46%]">
            <img src={isadora} alt="Isadora Maggi" onLoad={handleImageLoad} />
          </div>
        </div>
      </div>

      <div ref={myRef} className=" h-[100vh]">
        <div className="flex justify-center">
          <div className=" text-center w-[45%]">
            <h1 className="text-[22px] mb-1 font-medium ">
              O seu estrogênio está abaixo do normal?
            </h1>
            <span className=" text-[15px] text-[#212529] font-normal">
              Você está com falta de estrogênio? A queda colossal desse hormonio
              não deve <br /> ser apenas um abalo na sua vida. A nossa roleta
              pode aumentar o <br />
              nivel do seu estrogênio e amenizar o abalo.{" "}
            </span>
            <button
              onClick={() => navigate("/roulette")}
              className="w-[65%] hover:scale-[1.02] transition-all duration-100 hover:bg-purple-50 py-1.5 mt-8 text-[17px] rounded-lg border border-purple-600 text-purple-600"
            >
              Rolar a roleta desse mês
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex gap-2 w-[80%] ">
            <div className="w-[50%]  relative">
              <img src={grafico} alt="grafico" onLoad={handleImageLoad} />
              <div className="w-full text-center">
                <span className="text-[#212529] text-sm">
                  Fonte: Gráfico de Isadora Maggi no zap
                </span>
              </div>
            </div>
            <div className="text-center w-[50%] flex items-center">
              <span className="text-[15px] text-[#212529]">
                Se sua vida está igual ao dia 28 desse gráfico, então é a hora
                de rolar a roleta. Todo mês no inicio do seu ciclo você terá uma
                oportunidade única de rodar a roleta, que traz benefícios para
                seus hormônios que estão capenga, trazendo felicidade e animo
                durante esse período de baixo estrogênio (TPM).{" "}
                <p className="mt-3">
                  As regras da roleta são simples. Ela poderá ser rodada 1 vez
                  por mês, apenas no seu período de menstruação na fase
                  folicular. O que cair na roleta não poderá ser alterado.
                  <p className="mt-5">
                    Lembre-se a roleta é apenas para sua felicidade :)
                  </p>
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center pt-16">
          <div className="border-t w-[90%] text-center border-t-[#dee2e6]">
            <div className="py-4">
              <span className="text-[#212529bf] ">
                © FPMI - Todos os direitos reservados.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
