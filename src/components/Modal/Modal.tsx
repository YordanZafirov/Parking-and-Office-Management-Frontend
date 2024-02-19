import { ModalType } from './Modal.static';
import { ModalBox, ModalOverlay } from './Modal.style';

export default function Modal(props: ModalType) {
    return (
        <>
            {props.isOpen && (
                <ModalOverlay onClick={props.toggle}>
                    <ModalBox onClick={(e) => e.stopPropagation()}>{props.children}</ModalBox>
                </ModalOverlay>
            )}
        </>
    );
}
