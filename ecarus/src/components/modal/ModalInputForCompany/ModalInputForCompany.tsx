import ModalButton from '../../ui/modal-button/button';
import style from '../Modal.module.sass';
import { FC } from 'react';
import Input from '../../ui/input/input';

interface Props{
    title: string,
    first_label : string;
    second_label : string;
    modalActive: any;
    onClose: () => void;
}


const ModalInputForCompany:FC<Props> = ({title, first_label, second_label, modalActive, onClose}) => {
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
                        <Input placeholder='Email' />
                        <Input placeholder='Пароль' />
                    </div>
                    <div className={style.button_wrapper}>
                        <div className={style.button_wrapper_content}>
                            <ModalButton text='Войти' color='white' background='#07C88E' width='100%' />
                        </div>
                        <div className={style.link_text_wrapper}>
                            <div>
                                <a href='input_for_companies_with_code'>{first_label}</a>
                            </div>
                            <div>
                                <a href=''>{second_label}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalInputForCompany;
