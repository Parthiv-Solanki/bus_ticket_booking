import React, { useState, useEffect } from 'react';

const Modal: React.FC<ModalProps> = (props) => {
    const { isOpen = false, onClose, children } = props;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            {/* DEV BRANCH MODIFICATION */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl w-full max-w-lg p-6 shadow-xl relative">
                <button
                    className="absolute top-3 right-4 text-gray-400 hover:text-gray-600"
                    onClick={onClose}
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
