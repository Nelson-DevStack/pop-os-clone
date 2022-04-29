import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import GlobalStyle from '../themes/GlobalStyle';
import Hero from '../components/Hero/index';
import Navbar from '../components/Navbar/index';
import Omnibar from '../components/Omnibar/index';
import CardGridOne from '../components/CardGridOne/index'
import CardsList from '../components/CardsList/index';
import SaleGrid from '../components/SaleGrid/index';
import CardGridImage from '../components/CardGridImage/index';
import IconsGrid from '../components/IconsGrid/index';
import CardGridTwo from '../components/CardGridTwo/index';
import ImagePresentation from '../components/ImagePresentation/index';
import End from '../components/End/index';
import Footer from '../components/Footer/index';

import { end, features, hardwareSale, intro, omnibar, raspberryOS, securitySection, softwareTools, toolkit, workflow } from '../Data/HomePage';

import light from '../themes/light';
import dark from '../themes/dark';

export default function Home() {
  const [isDark, setDark] = useState(Boolean);
  let stored;

  if(typeof window !== 'undefined'){
    stored = localStorage.getItem('dark');
  }

  useEffect(()=> {
    if(stored === 'true') setDark(true);
    else setDark(false);
  });

  const toggler = () => {
    setDark(!isDark);
    localStorage.setItem('dark', !isDark);
  }

  return (
    <>
      <Head>
        <title>Pop!_Os</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="author" content="Nelson Carvalho | Github: Nelson-DevStack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Omnibar {...omnibar} />
      <Navbar />

      <ThemeProvider theme={isDark ? dark : light}>
        <GlobalStyle />
          <main>
            <Hero {...intro} />
            <CardGridOne {...workflow}/>
            <CardsList {...toolkit} />
            <SaleGrid {...hardwareSale} />
            <CardGridImage {...securitySection} />
            <IconsGrid {...softwareTools} />
            <CardGridTwo {...features} toggler={toggler} />
            <ImagePresentation {...raspberryOS} />
            <End {...end} />
          </main>
          <Footer />
      </ThemeProvider>
      
    </>
  )
}
