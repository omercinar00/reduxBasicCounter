import { useDispatch, useSelector } from "react-redux";
import { arttır, azalt, sifirla } from "../../redux/action/Action";
import "./Counter.css";

const Counter = () => {
  const dispatch =useDispatch()
  const {counter} = useSelector((state)=>state)
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter}</h1>
      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatch(arttır())}
        >
          increase
        </button>
        <button
          className="counter-button zero"
          onClick={() => dispatch(sifirla())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => counter > 0 ? dispatch(azalt()) : false}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
