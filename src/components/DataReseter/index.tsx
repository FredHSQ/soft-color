
import styles from './styles.module.css'
import { DataReseterFunctions } from './functions'

export const DataReseter = () => {

    const { resetData } = DataReseterFunctions()

    return <button onClick={resetData} className={styles.resetData}>
        Reset All data
    </button>
}