import React, {Dispatch, SetStateAction, useMemo, useState, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';

import Modal from '../Modal';

import {Container, ButtonContainer} from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  setAvatar: Dispatch<SetStateAction<string>>;
  photoModalOpen: () => void;
}

interface IFacingMode {
  exact: string;
}

const CameraAvatarSelection: React.FC<IModalProps> = ({isOpen, setIsOpen, setAvatar, photoModalOpen}) => {
  const WIDTH = 420;
  const HEIGHT = 420;
  const webcam = React.createRef<HTMLVideoElement & Webcam>();
  const [facingMode, setFacingMode] = useState<string | IFacingMode>('');

  const videoConstraints = useMemo(()=>{
    return (
      {
        width: WIDTH,
        height: HEIGHT,
        facingMode: facingMode
      }
    );
  },[facingMode]);

  const setInputDevice = useCallback(async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const inputDevice = devices.filter(device => device.kind === 'videoinput')

      if (inputDevice.length < 2) {
        setFacingMode('user');
      } else {
        setFacingMode({exact: 'environment'});
      }
    } catch (err) {
      console.log(err);
    }
  },[]);

  useEffect(()=>{
    setInputDevice();
  },[setInputDevice]);

  const takePicture = useCallback(()=>{
    if(webcam.current) {
      const picture = webcam.current.getScreenshot()
      if (picture) {
        setAvatar(picture);
        photoModalOpen();
        setIsOpen();
      }
    }
  },[webcam, photoModalOpen, setAvatar, setIsOpen]);

  const handleCancel = useCallback(()=>{
    setIsOpen();
  },[setIsOpen]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <Webcam
          audio={false}
          width={WIDTH}
          height={HEIGHT}
          ref={webcam}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        <ButtonContainer>
          <button type="button" onClick={takePicture}>Take picture</button>
          <button className="cancel-button" type="button" onClick={handleCancel}>Cancel</button>
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

export default CameraAvatarSelection;