import { ArrowRight } from 'lucide-react';
import './FlowButton.css'
import { useModal } from '../../context/ModalContext';

export function FlowButton({ text = "Modern Button", onClick }) {
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
      

      <button className="flow-btn" style={{border : "1.5px solid #fff"}} onClick={handleClick}>
        <ArrowRight className="arr-left" style={{stroke : "#fff"}} />
        <span className="btn-text" style={{color : "#fff"}}>{text}</span>
        <span className="circle" style={{background : "#D3A95B"}}></span>
        <ArrowRight className="arr-right" style={{stroke : "#fff"}} />
      </button>
    </>
  );
}