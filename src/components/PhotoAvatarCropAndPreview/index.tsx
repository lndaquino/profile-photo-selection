import React, {Dispatch, SetStateAction, useState, useEffect, useCallback} from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import {Container, ImageContainer, PreviewContainer, ButtonContainer} from './styles';

interface IProps {
  setIsOpen: () => void;
  avatar: string;
  setAvatar: (param :string) => void;
  tooglePhoto?: Dispatch<SetStateAction<boolean>>;
}

const PhotoAvatarCropAndPreview: React.FC<IProps> = ({setIsOpen, avatar, setAvatar, tooglePhoto}) => {
  const INITIAL_STATE = {
    unit: "%",
    x: 10,
    y: 10,
    width: 50,
    aspect: 1/1
  } as ReactCrop.Crop;

  const [crop, setCrop] = useState<ReactCrop.Crop>(INITIAL_STATE);
  const [croppedAvatar, setCroppedAvatar] = useState<HTMLImageElement>();
  const [imageRef, setImageRef] = useState<HTMLImageElement>();

  const getCroppedImage = useCallback((image: HTMLImageElement, crop: ReactCrop.Crop)=>{
    if(crop.width && crop.height && crop.x && crop.y){
      const canvas = document.createElement('canvas');
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const context = canvas.getContext('2d');

      if(context){
        context?.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );

        const newImage = new Image();
        newImage.src = canvas.toDataURL();
        setCroppedAvatar(newImage);
      }
    }
  },[]);

  useEffect(()=>{
    if(imageRef) getCroppedImage(imageRef, crop);
  },[crop, getCroppedImage, imageRef]);

  const onImageLoaded = useCallback((image: HTMLImageElement)=>{
    setCroppedAvatar(image);
    setImageRef(image);
  },[]);

  const handleAvatarChange = useCallback((crop)=>{
    setCrop(crop);
  },[]);

  const onCropComplete = useCallback((crop: ReactCrop.Crop)=>{
    if (imageRef && crop.width && crop.height) {
      getCroppedImage(imageRef, crop);
    }
  },[getCroppedImage, imageRef]);

  const handleClick = useCallback(()=>{
    if(croppedAvatar) {
      setAvatar(croppedAvatar.src);
    } 

    setCrop(INITIAL_STATE);
    if (tooglePhoto) tooglePhoto(false);
    setIsOpen();
  },[setAvatar, croppedAvatar, setIsOpen, tooglePhoto, INITIAL_STATE]);

  const handleCancel = useCallback(()=>{
    if (tooglePhoto) tooglePhoto(false);
    setIsOpen();
  },[setIsOpen, tooglePhoto]);

  return (
    <Container>
      <h1>Adjust photo to your profile:</h1>
      <ImageContainer>
        <ReactCrop 
          src={avatar} 
          crop={crop} 
          onChange={handleAvatarChange}
          onImageLoaded={onImageLoaded}
          onComplete={onCropComplete}
        />
        <PreviewContainer>
          {croppedAvatar ? <img className='avatarPreview' src={croppedAvatar.src} alt='Avatar' /> : <img className='avatarPreview' src={avatar} alt='Avatar' /> }
          <span>Preview</span>
        </PreviewContainer>
        
      </ImageContainer>
      <ButtonContainer>
        <button type="button" onClick={handleClick}>Update profile</button>
        <button className="cancel-button" type="button" onClick={handleCancel}>Cancel</button>
      </ButtonContainer>
    </Container>
  );
};

export default PhotoAvatarCropAndPreview;