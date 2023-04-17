import { useState } from 'react'
import styles from './styles.module.css'
import { TotalTimer } from '../../components/TotalTimer';
import { Scorer } from '../../components/Scorer';
import { Starter } from '../../components/Starter';
import { Game } from '../../components/Game';
import { AnswerType } from '../../@Types/answer';

function App() {

  const [currentScore, setCurrentScore] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);

  const [answerArray, setAnswerArray] = useState<AnswerType[]>([]);

  return (
    <div className={styles.App}>
      <div className={styles.historyList}>
        <h1>
          Current Game
        </h1>
        {answerArray.map((answer) => {
          return <div className={styles.history}>
            <div className={styles.card}>
              <p>
                {answer.yourAnswer}
              </p>
            </div>
            <div className={styles.card}>
              <p>
                {answer.rightAnswer}
              </p>
            </div>
            <h2>
              {answer.timeElapsed}s
            </h2>
          </div>
        })}
      </div>
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
    </div >
  )
}

export default App
