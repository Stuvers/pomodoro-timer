import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/banner";
import TimerDisplay from "./components/timerDisplay";

export default function Home() {
  return (
    <main>
      <Banner> Pomodoro Timer </Banner>
      <div className="body">
        <TimerDisplay />
      </div>
    </main>
  );
}
