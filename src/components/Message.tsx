import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import ToastHeader from "react-bootstrap/ToastHeader";
import React, { useState } from "react";

export function Message(): JSX.Element{
    const [show, setShow] = useState(false);
    return(
        <div className="message">
            <ToastContainer position="top-end" className="p-3">
                <Toast show={!show} onClose={()=>setShow(!show)} bg="light">
                    <ToastHeader>
                        <strong className="me-auto">Welcome!</strong>
                    </ToastHeader>
                    <Toast.Body>
                        HII
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}


