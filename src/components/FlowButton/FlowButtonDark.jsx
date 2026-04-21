import { ArrowRight } from 'lucide-react';
import './FlowButtonDark.css'
export function FlowButtonDark({ text = "Modern Button" }) {
    return (
        <>


            <button className="flow-btn">
                <ArrowRight className="arr-left" />
                <span className="btn-text">{text}</span>
                <span className="circle"></span>
                <ArrowRight className="arr-right" />
            </button>
        </>
    );
}