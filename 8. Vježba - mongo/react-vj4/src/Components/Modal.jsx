import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export default function Modal({ message, onClose }) {
  return ReactDOM.createPortal(
    <div style={modalStyles}>
      <div style={modalContentStyles}>
        <p>{message}</p>
        <Link to="/kosarica">
          <button onClick={()=>{onClose();}}>Pogledaj košaricu</button>
        </Link>
        <button onClick={() => {console.log("zatvori"); onClose();}}>Zatvori</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

const modalStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000
};

const modalContentStyles = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "5px",
  textAlign: "center",
};