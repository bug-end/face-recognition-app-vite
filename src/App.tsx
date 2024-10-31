import { useState } from 'react';

import { Navigation } from '@components/Navigation/Navigation';
import { FaceRecognition } from '@components/FaceRecognition/FaceRecognition';
import { ImageLinkForm } from '@components/ImageLinkForm/ImageLinkForm';
import { Rank } from '@components/Rank/Rank';
import { Signin } from '@components/Signin/Signin';
import { Register } from '@components/Register/Register';
import { PageRow } from '@components/PageRow/PageRow';

import { detectFace, updateEntries } from '@api/requests';

import styles from './App.module.scss';
import { User } from '@utils/types/user';

export const App = () => {
  const [imageUrlResponse, setImageUrlResponse] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const [box, setBox] = useState([]);
  const [route, setRoute] = useState<string>('signin');
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  });

  const resetState = () => {
    setImageUrlResponse('');
    setInput('');
    setBox([]);
    setRoute('signin');
    setIsSignedIn(false);
    setUser({
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: '',
    });
  };

  const handleLoadUser = (data: User) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    });
  };

  const calculateFaceLocation = (data: any) => {
    const clarifaiBoundingBoxes = data.outputs[0].data.regions.map((region: any) => {
      return region.region_info.bounding_box;
    });

    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    const boundingBoxes = [];

    clarifaiBoundingBoxes.forEach((boundingBox: any) => {
      boundingBoxes.push({
        leftCol: boundingBox.left_col * width,
        topRow: boundingBox.top_row * height,
        rightCol: width - boundingBox.right_col * width,
        bottomRow: height - boundingBox.bottom_row * height,
      });
    });
    return boundingBoxes;
  };

  const displayFace = (boundingBox: any) => {
    setBox(boundingBox);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleOnPictureSubmit = () => {
    setImageUrlResponse(input);
    if (input.length > 0) {
      detectFace(input)
        .then((data) => {
          setInput('');
          if (data) {
            updateEntries(user.id)
              .then((count) => {
                setUser({ ...user, entries: count });
                displayFace(calculateFaceLocation(data));
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleOnRouteChange = (route: string) => {
    if (route === 'signout') {
      resetState();
    } else if (route === 'home') {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

  return (
    <div className={styles.fadeIn}>
      <Navigation isSignedIn={isSignedIn} onRouteChange={handleOnRouteChange} />
      <main>
        <PageRow>
          {route === 'home' ? (
            <>
              <div className={styles.headingWrapper}>
                <Rank name={user.name} entries={user.entries} />
              </div>
              <ImageLinkForm
                onInputChange={handleInputChange}
                onButtonSubmit={handleOnPictureSubmit}
                inputValue={input}
              />
              <FaceRecognition boxes={box} imageUrl={imageUrlResponse} />
            </>
          ) : route === 'signin' ? (
            <Signin loadUser={handleLoadUser} onRouteChange={handleOnRouteChange} />
          ) : (
            <Register loadUser={handleLoadUser} onRouteChange={handleOnRouteChange} />
          )}
        </PageRow>
      </main>
    </div>
  );
};
