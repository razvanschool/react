import React, { useContext } from "react";
import { HomeContainer, HomeImageBackground, HomeText } from "./Home.style";
import {
  contorMinus,
  contorPlus,
  returnToDefault,
} from "./../../store/actions";
import { ContorContext } from "../../store/context";

function Home() {
  // const [contor, setContor] = useState(0);
  // const contorContextValue = useContext(ContorContext);
  const { stateGlobalContor, dispatchContor } = useContext(ContorContext);

  const handlePlus = () => {
    const actionPlus = contorPlus(1);
    dispatchContor(actionPlus); // ispatchContor(contorPlus());
    console.log("plus");
  };
  const handleMinus = () => {
    const actionMinus = contorMinus(1);
    dispatchContor(actionMinus);
    console.log("minus");
  };

  const handleReset = () => {
    const actionDefault = returnToDefault();
    dispatchContor(actionDefault);
    console.log("DEfault");
  };

  const { contorValue } = stateGlobalContor; // const  contorValue  = stateGlobalContor.contorValue;

  return (
    <HomeContainer>
      {/* <Afis numar={contor} />
      <Change contor={contor} setContor={setContor} /> */}
      <HomeImageBackground
        src={
          "https://static01.nyt.com/images/2020/09/14/business/14movie-tenet/merlin_176507883_99c30ad7-2cc1-4071-8cc2-52866fb7b05c-superJumbo.jpg"
        }
      />
      <HomeText>Bun venit pe pagina mea de Movies</HomeText>
      <div style={{ background: "#5d0303", color: "#fff", padding: "50px" }}>
        <div onClick={handleMinus}>-</div>
        {"  "} Produse adaugate in cos: {contorValue}
        {"  "}
        <div onClick={handlePlus}>+</div>
        <div onClick={handleReset}>Revino la default</div>
      </div>
    </HomeContainer>
  );
}

export default Home;
