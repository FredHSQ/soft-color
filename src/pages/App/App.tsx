import { useState } from 'react'
import styles from './styles.module.css'
import { TotalTimer } from '../../components/TotalTimer';
import { Scorer } from '../../components/Scorer';
import { Starter } from '../../components/Starter';
import { Game } from '../../components/Game';
import { AnswerType } from '../../@Types/answer';
import { HistoryList } from '../../components/HistoryList';
import { DataReseter } from '../../components/DataReseter';

function App() {

  const [currentScore, setCurrentScore] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);
  const [answerArray, setAnswerArray] = useState<AnswerType[]>([]);

  return (
    <div className={styles.App}>
      <HistoryList setAnswerArray={setAnswerArray} start={start} answerArray={answerArray} />
      <div className={styles.GamePage}>
        <h1>
          Guess the color
        </h1>
        <div className={styles.header}>
          <TotalTimer setStart={setStart} start={start} />
          <Starter setStart={setStart} start={start} />
          <Scorer setCurrentScore={setCurrentScore} start={start} currentScore={currentScore} />
        </div>
        {start &&
          <Game currentScore={currentScore} setAnswerArray={setAnswerArray} setCurrentScore={setCurrentScore} start={start} />
        }
      </div>
      <DataReseter />
    </div >
  )
}

export default App
