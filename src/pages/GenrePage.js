import Toolbar from '../components/Toolbar';
import SbookFeed from '../components/SbookFeed';
import Footer from '../components/Footer';
import React from 'react';
import { Books } from "../dummy";
export default function Homepage() {



    return (
     
      <div>

        

        <Toolbar />
        <SbookFeed books={Books }/>
        <Footer/>
            
    </div>
  );
}