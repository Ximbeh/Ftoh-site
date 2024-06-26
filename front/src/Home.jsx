import { useState } from 'react'
import viteLogo from '/vite.svg'
import { useQuery } from '@apollo/client';
import Header from './components/js/header/Header';
import NewsHome from './components/js/News/NewsHome';
import Video from './components/js/Video';
import { CarouselCustomNavigation } from './components/js/Carousel';
import CarouselSchedule from './components/js/CarouselSchedule';
import Tabela from './components/js/Tabela/Tabela'
import Footer from './components/js/Footer';
import { GET_DRIVERS } from './queries';

const App = () => {

  return (
    <>
      <div>
        <Header></Header>
        <NewsHome></NewsHome>
        <Video></Video>
        <CarouselCustomNavigation></CarouselCustomNavigation>
        <Video></Video>
        <CarouselSchedule></CarouselSchedule>
        <Tabela></Tabela>
        <Footer></Footer>

      </div>
    </>
  )
}

export default App
