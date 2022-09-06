import Timer from './Timer';
import Header from './Header';
import "./styles/main.css";

export default function App() {
  return (
    <>
      <Header />
      <ul className='timerList'>
        <Timer title="Graduation Day" date={"9/23/"} />
        <Timer title="Restarant Project" date={"9/14/"} />
        <Timer title="Volunteering Hours" date={"9/16/"} />
      </ul>
      <p>You're a nerd. :D </p>
    </>
  );
}
