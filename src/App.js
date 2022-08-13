import Timer from './Timer';
export default function App() {
  return (
    <>
      <h1>Countdown</h1>
      <ul>
        <Timer title="Graduation Day" date={"9/23/"} />
        <Timer title="Portfolio Project" date={"8/31/"} />
        <Timer title="Volunteering Hours" date={"9/16/"} />
      </ul>
      <p>You keep checking in Im going to mess with the css. or maybe ask for help :D </p>
    </>
  );
}
