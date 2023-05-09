import React, { useState } from "react"
import s from "./ModalWindow.module.css"


const ContainerComp = () => {
    const [modalIsActive, setModalIsActive] = useState(false);
    const [textVal, setTextVal] = useState("here is outer state");

    return (
            <div className={s.body}>
                <div>this is a modal window example  when you open the modal - everything
                    else appears behind the modal div, so you can interact only with the modal</div>
                <button className={s.but} onClick={() => { setModalIsActive(!modalIsActive) }} >open modal</button>

                {modalIsActive &&
                    <ModalWindow modalIsActive={modalIsActive} setModalIsActive={setModalIsActive}>
                        <div>I am a child #1</div>
                        <div>and I am a child #2</div>
                        <div>this component is reusable - you can pas different children and the component will render them</div>
                        <button onClick={() => { alert(textVal) }}> Say hello</button>
                    </ModalWindow>
                }
            </div>
    )
}


const ModalWindow = ({ modalIsActive, setModalIsActive, children }) => {

    return (
        <div className={modalIsActive ? `${s.modalWrapper} ${s.active}` : s.modalWrapper} onClick={() => { setModalIsActive(false) }}>
            <div className={modalIsActive ? `${s.modal} ${s.active}` : s.modal} onClick={(e) => { e.stopPropagation() }}>
                <span>
                important notice about the modal: you have the modal container (which is a gray area and closes the modal on click)
    to prevent all your nested elements to propagate up closing the modal - you can just specify stopPropagation only for the main nested child
    this way the clicks will propagate all the way up to that child and will stop on it, not going further.  Passing the callbacks to the modal
    we can execute some methods.
                </span>
                {children}
            </div>
        </div>
    )
}








export default ContainerComp