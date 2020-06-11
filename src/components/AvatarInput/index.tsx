import React, { useState, useCallback } from 'react';
import {FiCamera} from 'react-icons/fi';
import {Container} from './styles';

import ModalInputTypeSelection from '../ModalInputTypeSelection';
import PhotoAvatarSelectionModal from '../PhotoAvatarSelection';
import CameraAvatarSelectionModal from '../CameraAvatarSelection';

interface IAvatarInputProps {
  avatar: string;
  setNewAvatar: (param :string) => void;
}


const AvatarInput: React.FC<IAvatarInputProps> = ({avatar, setNewAvatar}) => {
  const [tempAvatar, setTempAvatar] = useState('');
  const [inputTypeSelectionOpen, setInputTypeSelectionOpen] = useState(false);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [cameraModalOpen, setCameraModalOpen] = useState(false);

  const openInputTypeSelectionModal = useCallback(()=>{
    setInputTypeSelectionOpen(true);
  },[]);

  const toogleModal = useCallback(()=>{
    setInputTypeSelectionOpen(!inputTypeSelectionOpen);
  },[inputTypeSelectionOpen]);

  const tooglePhotoModal = useCallback(()=>{
    setPhotoModalOpen(!photoModalOpen);
  },[photoModalOpen]);

  const toogleCameraModal = useCallback(()=>{
    setCameraModalOpen(!cameraModalOpen);
  },[cameraModalOpen])

  return (
    <>
    <ModalInputTypeSelection
      isOpen={inputTypeSelectionOpen}
      setIsOpen={toogleModal}
      setAvatar={setTempAvatar}
      photoModalOpen={tooglePhotoModal}
      cameraModalOpen={toogleCameraModal}
    />
    <PhotoAvatarSelectionModal 
      isOpen={photoModalOpen} 
      setIsOpen={tooglePhotoModal} 
      avatar={tempAvatar}
      setAvatar={setNewAvatar}
    />
    <CameraAvatarSelectionModal 
      isOpen={cameraModalOpen} 
      setIsOpen={toogleCameraModal} 
      setAvatar={setTempAvatar}
      photoModalOpen={tooglePhotoModal}
    />
    <Container>
      <img src={avatar} alt='Avatar' />
      <button type="button" onClick={openInputTypeSelectionModal}>
        <FiCamera />
       </button>
    </Container>
    </>
  );
};

export default AvatarInput;