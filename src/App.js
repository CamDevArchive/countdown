import Timer from './Timer';
export default function App() {
  return (
    <>
      <h1>Countdown</h1>
      <ul>
        <Timer title="Graduation Day" date={"9/23/"} />
        <Timer title="Redesign Project Day" date={"8/12/"} />
        <Timer title="Portfolio Project" date={"8/31/"} />
      </ul>
      <p>You keep checking in Im going to mess with the css. or maybe ask for help :D </p>
    </>
  );
}
