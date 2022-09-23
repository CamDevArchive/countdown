import Timer from './Timer';
import Header from './Header';
import Confetti from './Confetti';
import "./styles/main.css";



export default function App() {

  const messageStyles = {
    fontSize: "1.5rem",
    fontfamily: "arial",
    textAlign: "center",
    marginTop: "2rem",
};

const green = {
  color: "#28d766",
  
};

const purple = {
  color: "#6b3db8",
};


  return (
    <>
      <Header />
      <ul className='timerList'>
        <Timer title="Graduation Day 🎉🙌🥂🍾" date={"9/23/"} time="12:00:00"/>
      </ul>
      <p style={messageStyles}>WE MADE IT, words can’t really describe how proud I am of each and every one of us. You all deserve to be here. Many of you may say that I have been a big help to you guys, but truthfully you guys helped me much more than I initially anticipated. I thought I’d come in, get the job and get out, that's it. However, you all gave me something I didn't even know I wanted. A community and a group of people I can belong to. To tell you the truth I can’t really say I’ve felt that before. So thank you all for being there, even if we didn't really talk much, I really appreciate it. It was truly an honor to stand among you all.  C104L  </p>
      <p style={messageStyles}> -Cameron Twiggs, <span style={green}>The</span> <span style={purple}>King</span> <span style={green}>Nerd</span></p>
      <Confetti />
    </>
  );
}
