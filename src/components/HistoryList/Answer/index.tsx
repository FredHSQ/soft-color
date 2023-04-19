import styles from './styles.module.css';
import { AnswerType } from '../../../@types/answer';
import right from '../../../assets/right.svg';
import wrong from '../../../assets/wrong.svg';

interface AnswerProps {
    answer: AnswerType
}

export const Answer = ({ answer }: AnswerProps) => {
    
    return answer.rightAnswer !== answer.yourAnswer ?
        <div className={styles.history}>
            <div data-testid="answer-card" className={styles.card} style={{backgroundColor: answer.yourAnswer}}>
                <p>
                    {answer.yourAnswer}
                </p>
            </div>
            <div data-testid="answer-card"  className={styles.card} style={{backgroundColor: answer.rightAnswer}}>
                <p>
                    {answer.rightAnswer}
                </p>
            </div>
            <img className={styles.icon} src={wrong}/>
            <h2 data-testid="time">
                {answer.timeElapsed}s
            </h2>
        </div>
        :
        <div className={styles.history}>
            <div data-testid="answer-card" className={styles.cardRight} style={{backgroundColor: answer.yourAnswer}}>
                <p data-testid='rightAnswer'>
                    {answer.yourAnswer}
                </p>
            </div>
            <img className={styles.icon} src={right}/>
            <h2 data-testid="time">
                {answer.timeElapsed}s
            </h2>
        </div>

}