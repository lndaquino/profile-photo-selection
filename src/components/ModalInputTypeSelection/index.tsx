import React, { useCallback, Dispatch, SetStateAction } from 'react';
import Modal from '../Modal';

import {Container, Label, Button} from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  setAvatar: Dispatch<SetStateAction<string>>;
  photoModalOpen: () => void;
  cameraModalOpen: () => void;
}

const ModalInputTypeSelection: React.FC<IModalProps> = ({
  isOpen, setIsOpen, setAvatar, photoModalOpen, cameraModalOpen
}) => {
  

  const handlePhotoAvatarChange = useCallback((event)=>{
    setAvatar(URL.createObjectURL(event.target.files[0]));
    photoModalOpen();
    setIsOpen();
  },[setIsOpen, photoModalOpen, setAvatar]);

  const handleCameraAvatarChange = useCallback(()=>{
    cameraModalOpen();
    setIsOpen();
  },[setIsOpen, cameraModalOpen]);

  

  return (
    <>
    
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} closeOnOverlayClick={true}>
      <Container>
        <Label htmlFor="photo-avatar">
          <span>Select photo on computer</span>
          <input type="file" id="photo-avatar" onChange={handlePhotoAvatarChange} accept='.jpg, .jpeg, .png' />
        </Label>
        <Button type="button" onClick={handleCameraAvatarChange}>Take photo with camera</Button>
      </Container>
    </Modal>
    </>
  );
  
};

export default ModalInputTypeSelection;