import { ArrowRight } from 'lucide-react';
import './FlowButton.css'
export function FlowButton({ text = "Modern Button" }) {
  return (
    <>
      

      <button className="flow-btn" style={{border : "1.5px solid #fff"}}>
        <ArrowRight className="arr-left" style={{stroke : "#fff"}} />
        <span className="btn-text" style={{color : "#fff"}}>{text}</span>
        <span className="circle" style={{background : "#D3A95B"}}></span>
        <ArrowRight className="arr-right" style={{stroke : "#fff"}} />
      </button>
    </>
  );
}