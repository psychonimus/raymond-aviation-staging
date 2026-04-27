import { ArrowRight } from 'lucide-react';
import './FlowButtonDark.css'
import { useModal } from '../../context/ModalContext';

export function FlowButtonDark({ text = "Modern Button", onClick }) {
    const { openBookingModal } = useModal();

    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
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