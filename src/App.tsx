import React, { useEffect, useState } from 'react';
import './App.css';
import CarouselComponent, { CarouselInputType } from './components/carousel'
import Api from './utils/api';

const api = new Api();

function App() {

  const [intro, setIntro] = useState<CarouselInputType[]>();

  useEffect(() => {
    api.getIntroData().then(d => {
      setIntro(d);
    });
  }, []);
  return (
    <div>
      {intro ? <CarouselComponent data={intro} /> : null}
    </div>
  );
}

export default App;
