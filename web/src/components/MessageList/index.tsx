import styles from "./styles.module.scss";
import logoImg from "../../assets/logo.svg"

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="Dowhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent} >
                    Não vejo a hora de começar a hdusahudsao
                    hdahjfpdhji dsadsad
                    pdsdahjidhsjaphusaiohdsahdsa
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/ThalysSilva.png" alt="Thalys Silva" />
                        </div>
                        <span>Thalys Silva</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent} >
                    Não vejo a hora de começar a hdusahudsao
                    hdahjfpdhji dsadsad
                    pdsdahjidhsjaphusaiohdsahdsa
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/ThalysSilva.png" alt="Thalys Silva" />
                        </div>
                        <span>Thalys Silva</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent} >
                    Não vejo a hora de começar a hdusahudsao
                    hdahjfpdhji dsadsad
                    pdsdahjidhsjaphusaiohdsahdsa
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/ThalysSilva.png" alt="Thalys Silva" />
                        </div>
                        <span>Thalys Silva</span>
                    </div>
                </li>
            </ul>

        </div>
    )
}