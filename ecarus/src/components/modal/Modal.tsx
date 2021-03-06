import ModalButton from '../ui/modal-button/button'
import style from './Modal.module.sass';
import { FC } from 'react';
import Input from '../ui/input/input'

interface Props{
    title: string,
    first_label : string;
    second_label : string;
}


const Modal:FC<Props> = ({title, first_label, second_label}) => {
    return (
        <div className={style.modal}>
            <div className={style.modal_wrapper}>
                <div className={style.wrapper_title}>
                    <div className={style.modal_title}>
                        <h3>{title}</h3>
                    </div>
                    <div className={style.wrapper_exit_button}>
                        {/* тут крестик */}
                    </div>
                </div>
                <div className={style.content_wrapper}>
                    <div className={style.input_wrapper}>
                        <Input placeholder='Телефон' />
                        <Input placeholder='Пароль' />
                    </div>
                    <div className={style.button_wrapper}>
                        <div className={style.button_wrapper_content}>
                            <ModalButton text='Войти' color='white' background='#07C88E' width='100%' />
                        </div>
                        <div className={style.link_text_wrapper}>
                            <div>
                                <a href=''>{first_label}</a>
                            </div>
                            <div>
                                <a href=''>{second_label}</a>
                            </div>
                        </div>
                        <div className={style.button_wrapper_content}>
                            <ModalButton text='Вход для партнёров' color='black' background='rgba(62, 80, 114, 0.08)' width='100%' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;

