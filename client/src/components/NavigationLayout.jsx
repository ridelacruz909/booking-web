import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import {createContext, useContext,useRef} from 'react'

const NavigationContext = createContext();


const scrollToFeature = () => {
  featureRef.current?.scrollIntoView({ behavior: 'smooth' });
};


const NavigationLayout = () => {


  return (
    <NavigationContext.Provider value={{}}>
      <Navigation />
      <div>
        <Outlet />  
      </div>
      <Footer/>
    </NavigationContext.Provider>
  );
};

export default NavigationLayout;
