import styles from './button.module.sass';
import { FC } from 'react';

interface Props {
    text: string | number;
    color: string | number;
    background: string | number;
    width: number | string
}

const ModalButton: FC<Props> = ({ text, color, background, width }) => {
    return (
        <div className={styles.button}>
            <div className={styles.button_wrapper}>
                <button
                    style={{
                        width: `${width}`,
                        color: `${color}`,
                        background: `${background}`
                    }}>{text}</button>
            </div>
        </div>
    );
}

export default ModalButton;