import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import ToastHeader from "react-bootstrap/ToastHeader";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export function WelcomePopup(): JSX.Element{
    const [show, setShow] = useState(false);
    return(
        <div style={styles.popup}>
            <ToastContainer position="top-end" className="m-3">
                <Toast show={!show} onClose={()=>setShow(!show)}>
                    <ToastHeader>
                        <strong className="me-auto">Welcome to the UD CIS Scheduler!</strong>
                    </ToastHeader>
                    <Toast.Body> 
                    Please select a major to get started.
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}
const styles = {
    popup: {
        //background: "black",
        color: "purple",
        fontWeight: 600,
    },
} as const;
