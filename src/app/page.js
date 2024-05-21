import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/banner";
import TimerControls from "./components/timerControls";

export default function Home() {
  return (
    <main>
      <Banner> Pomodoro Timer </Banner>
      <div className="body">
        <TimerControls />
      </div>
    </main>
  );
}
