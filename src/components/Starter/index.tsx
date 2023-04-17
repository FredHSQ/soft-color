import styles from "./styles.module.css"

interface StarterProps {
    start: boolean;
    setStart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Starter = ({setStart, start}:StarterProps) => {

    return <button onClick={() => { setStart(!start) }} className={styles.starterContainer}>
        <h1>
            {start ? "Restart" : "Start"}
        </h1>
    </button>
}