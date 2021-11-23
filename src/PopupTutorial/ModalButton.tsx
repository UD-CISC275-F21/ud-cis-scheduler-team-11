import React, { useState } from "react";
import Modal from "./Modal";

function ModalButton() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {showModal && (
                <Modal
                    onCloseButtonClick={() => {
                        setShowModal(false);
                    }}
                />
            )}
            <button style={styles.button}
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Show Modal
            </button>
        </>
    );
}

export default ModalButton;




const styles = {
    button: {
        padding: "8px",
        fontSize: "18",
    },
} as const;