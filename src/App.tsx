import React, {useState, useCallback} from 'react';
import AvatarInput from './components/AvatarInput';
import GlobalStyles from './globalStyles';

import initialImg from './foto_Lucas_1.jpg';

const App: React.FC = () => {
  const [avatar, setAvatar] = useState(initialImg);

  const handleAvatarChange = useCallback(async (newAvatar: string) =>{
    console.log('Do something when a new cropped avatar is selected');
    
    // data64 string used at src property in img tag
    // usage example <img src={newAvatar} alt='avatar'>
    setAvatar(newAvatar);
  },[]);

  return (
    <>
    <GlobalStyles />
    <AvatarInput
      avatar={avatar}
      setNewAvatar={handleAvatarChange}
    />
    </>
  );

  
};

export default App;