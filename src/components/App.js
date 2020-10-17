import React from 'react';
import NavBar from '../components/NavBar';
import HeroSection from './HeroSection';
import AppSection from './AppSection';
import CardSection from './CardSection';
import Footer from './Footer';
import CardReusable from './CardReusable';
// <CardReusable title="Buy Now"></CardReusable>
const App=()=>
{
    return(
        <div>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <AppSection></AppSection>
        <CardSection></CardSection>
       
        <Footer></Footer>
        </div>);
}
export default App;