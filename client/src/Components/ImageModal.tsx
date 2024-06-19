import React from 'react';
type ImageModalProps = {
    imageUrl: string,
    onClose: () => void
}
const ImageModal: React.FC<ImageModalProps> = ({imageUrl,onClose}) => {
    return (
        <div className="image-modal-overlay" onClick={onClose}>
            <div className="image-modal-content">
                <img src={imageUrl} alt="Full size"/>
            </div>
        </div>
    );
};

export default ImageModal;