import ModalButton from '../../ui/modal-button/button'
import style from '../Modal.module.sass';
import { FC } from 'react';
import Input from '../../ui/input/input';

interface Props{
    title: string,
    first_label : string;
    modalActive: any;
    onClose: () => void;
}


const ModalInputOrRegistration:FC<Props> = ({title, first_label, modalActive, onClose}) => {
    return (modalActive &&
        <div className={style.modal} onClick={()=> onClose()}>
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
                        <Input placeholder='Код' />
                    </div>
                    <div className={style.button_wrapper}>
                        <div className={style.button_wrapper_content}>
                            <ModalButton text='Отправить' color='white' background='#07C88E' width='100%'/>
                        </div>
                        <div className={style.link_text_wrapper}>
                            <div>
                                <a href=''>{first_label}</a>
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
export default ModalInputOrRegistration;
