import React from 'react';

import Modal from '../Modal';
import PhotoAvatarCropAndPreview from '../PhotoAvatarCropAndPreview';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  avatar: string;
  setAvatar: (param :string) => void;
}

const PhotoAvatarSelection: React.FC<IModalProps> = ({isOpen, setIsOpen, avatar, setAvatar}) => {
  

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <PhotoAvatarCropAndPreview
        setIsOpen={setIsOpen}
        avatar={avatar}
        setAvatar={setAvatar}
      />
    </Modal>
  );
};

export default PhotoAvatarSelection;