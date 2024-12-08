import React from 'react';
import { ModalProps } from '../../../utils';

const Modal: React.FC<ModalProps> = (props) => {
    const { isOpen = false, onClose, children } = props;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#f2f2f2] rounded-lg w-full max-w-md p-4 shadow-lg relative">
                <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
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
