import './App.css';
import Button from './components/Button.js';
import ProfilePicture from './components/ProfilePicture.js';
import pfp from './assets/circlec.png';
import { aboutMe } from './data.js';

import cat1 from './assets/cat1c.jpg';
import cat2 from './assets/cat2c.jpg';
import cat3 from './assets/cat3c.jpg';
import cat4 from './assets/cat4c.jpg';
import cat5 from './assets/cat5c.jpg';
import ImageCarousel from './components/ImageCarousel.js';

function App() {
  const cats = [cat1, cat2, cat3, cat4, cat5];

  return (
    <div className="h-screen bg-teal-950">
      <div className="m-auto flex max-w-[60%] justify-between py-3">
        <Button text="home" />
        <Button text="cv" />
        <Button text="projects" />
      </div>

      <hr className="border-1 border-white" />

      <div className="flex h-[90%] w-full justify-center pt-12">
        <div className="flex h-[75%] flex-[1] flex-col">
          <div className="flex size-full">
            <ProfilePicture
              img={pfp}
              alt="Picture of a cat looking like it is taking a selfie"
            />
          </div>
          <div className="flex w-full flex-col items-center">
            <h1 className="text-4xl text-white">{aboutMe.title}</h1>
            <ul className="text-white">
              {aboutMe.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <Button text="github" />
            <Button text="discord" />
            <Button text="spotify" />
            <Button text="twitter" />
          </div>
        </div>

        <div className="flex-[2]">
          <ImageCarousel images={cats} />
        </div>
      </div>
    </div>
  );
}

export default App;
