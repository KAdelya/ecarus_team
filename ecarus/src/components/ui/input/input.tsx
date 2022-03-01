import { FC } from "react";
import style from './input.module.sass';

interface Props {
    placeholder: string;
}
const Input: FC<Props> = ({ placeholder }) => {
    return (
        <div className={style.input_wrapper}>
            <input placeholder={placeholder} />
        </div>
    )
}

export default Input;