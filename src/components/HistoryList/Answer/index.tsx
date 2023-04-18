import { AnswerType } from '../../../@types/answer';
import styles from './styles.module.css';
import right from '../../../assets/right.svg';
import wrong from '../../../assets/wrong.svg';


interface AnswerProps {
    answer: AnswerType
}

export const Answer = ({ answer }: AnswerProps) => {
    return answer.rightAnswer !== answer.yourAnswer ?
        <div className={styles.history}>
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
            <img className={styles.icon} src={wrong}/>
            <h2>
                {answer.timeElapsed}s
            </h2>
        </div>
        :
        <div className={styles.history}>
            <div className={styles.cardRight}>
                <p>
                    {answer.yourAnswer}
                </p>
            </div>
            <img className={styles.icon} src={right}/>
            <h2>
                {answer.timeElapsed}s
            </h2>
        </div>

}