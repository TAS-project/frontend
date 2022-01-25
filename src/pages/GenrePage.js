import Toolbar from '../components/Toolbar';
import SbookFeed from '../components/SbookFeed';
import Footer from '../components/Footer';
import React from 'react';
import { Books } from "../dummy";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [books, setbooks] = useState([]);
  const [fetched, setfetched] = useState(false);
useEffect(() => {
   const g_id= window.location.href.split('/')[4];
  console.log("g id  :" + g_id);
  /*
  fetch('http://localhost:3001/User/Search', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
    body: JSON.stringify({
        "Search_Text":g_id
      })
    }).then(res => {
      const status = res.status;
      if (status === 400) { // error coming back from server
        console.log('Error in fecthing');
      } else if (status === 401) { // error coming back from server
        console.log('401');
      } 
      return (res.json());

    }).then((response) => {
      console.log('response:  ' + JSON.stringify(response));
      setbooks(response.Books);
      setfetched(true)
      }) 
      */
  }, []);

    return (
     
      <div>
        <Toolbar />
        <SbookFeed books={Books }/>
        <Footer/>
            
    </div>
  );
}