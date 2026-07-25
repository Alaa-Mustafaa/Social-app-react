import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { decrement, increment, reset } from "../../../app/reducer";

export default function Home() {
  const { counter } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  console.log(counter, "dd");

  function incrementCounter() {
    let x = dispatch(increment());
    console.log(x, "dispatch");
  }
  function decCounter() {
    let x = dispatch(decrement());
    console.log(x, "dispatch");
  }
  function resetCounter() {
    let x = dispatch(reset());
    console.log(x, "dispatch");
  }

  return (
    <div>
      <h1>ALAAAAAAAAAAAAAAZZZZZZZZZZ</h1>
      <h2>Counter : {counter}</h2>

      <div className="d-flex gap-3  my-4">
        <button
          className="btn bg-primary text-white"
          onClick={() => {
            incrementCounter();
          }}
        >
          Increase
        </button>
        <button
          className="btn bg-secondary text-white"
          onClick={() => {
            decCounter();
          }}
        >
          Decrease
        </button>
        <button
          className="btn bg-danger text-white"
          onClick={() => {
            resetCounter();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
