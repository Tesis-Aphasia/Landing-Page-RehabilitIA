import React from 'react';
import '../styles/Modal.css';

export default function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <span className="material-symbols-outlined">close</span>
                </button>
                <h2 className="modal-title gradient-text">{title}</h2>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
}
