import { ArrowRight } from 'lucide-react';
import './FlowButtonDark.css'
import { useModal } from '../../context/ModalContext';

export function FlowButtonDark({ text , onClick }) {
    const { openBookingModal } = useModal();

    const handleClick = (e) => {
        if (onClick) {
            window.location.href = onClick;
        } else {
            openBookingModal();
        }
    };

    return (
        <>


            <button className="flow-btn" onClick={handleClick}>
                <ArrowRight className="arr-left" />
                <span className="btn-text">{text}</span>
                <span className="circle"></span>
                <ArrowRight className="arr-right" />
            </button>
        </>
    );
}