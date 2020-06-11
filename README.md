## Profile photo selection from file or taking photo with dinamic crop editing function

This project provides an typescript component to update the profile photo with cropping editing. It can choose a file
in the computer or a picture taken with the camera.

It starts showing a default profile photo:
![profile-photo](https://github.com/lndaquino/profile-photo-selection/blob/master/src/profile-photo.png?raw=true)

Clicking in the small orange camera icon, it opens a modal to select the photo source:
![modal-input-selection](https://github.com/lndaquino/profile-photo-selection/blob/master/src/modal-input-type-selection.png?raw=true)

If you choose a file from the computer, it opens the dinamic crop modal with preview:
![modal-input-selection](https://github.com/lndaquino/profile-photo-selection/blob/master/src/adjusting-photo.png?raw=true)

If you choose to take a picture, it opens the modal that use the camera to take a picture:
![modal-input-selection](https://github.com/lndaquino/profile-photo-selection/blob/master/src/taking-picture.png?raw=true)

After taking the picture it opens the dinamic crop modal with preview:
![modal-input-selection](https://github.com/lndaquino/profile-photo-selection/blob/master/src/adjusting-photo.png?raw=true)

Finally, it updates the profile photo with the cropped image:
![modal-input-selection](https://github.com/lndaquino/profile-photo-selection/blob/master/src/updated-profile-with-camera-photo.png?raw=true)


## Challenges

There are still some challenges with this component.

The first is how to use the data64 string of the updated profile and convert it to a file that can be send to backend.

It also wasn´t tested in several enviroments, browsers or mobile.

Any contribution is welcome!