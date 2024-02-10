import "./Model.css";
import { X } from "lucide-react";
const Model = ({ sport, onClose }) => {
  return (
    <div className="Main">
      <div className="pop_up" id="pop_up">
        <div className="btn33">
          <button className="x" onClick={onClose}>
            <X />
          </button>
        </div>
        <h2>{sport.name}</h2>
        <h3>{sport.boys}</h3>
        <h3>{sport.girls}</h3>
        
        <p className="descriiii">{sport.descri}
        </p>
      
        <h3 className="contact_title">Contact</h3>
        <p className="contact">{sport.contact1}</p>
        <p className="contact">{sport.contact2}</p>
        {/* <button className="Reg">Register</button> */}
        <a className="regbutton">Register</a>
      </div>
    </div>
  );
};

export default Model;
