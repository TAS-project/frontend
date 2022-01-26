import React, { useState } from 'react'
import axios from 'axios';
 
function FileUpload() {
 
      const [file, setFile] = useState(null);
 
      const onInputChange = (e) => {
        setFile(e.target.files[0]);
       
      };
 
      const onFormSubmit = async (e) => {
          e.preventDefault();
        const formData = new FormData();
        formData.append("photo", file);
      
        
      const config = {
        headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
      };
      const url = 'http://localhost:3001/User/Upload_Image'
      axios.post(url,formData,config).then((res)=>{alert('uploaded')
    }).catch((err)=>{
        console.log('err',err);
    })
       
      };
      
   
      return (
        <div className="App">
            <form onSubmit={onFormSubmit}>
          <input type="file" name="photo" onChange={onInputChange} />
          <button type='submit ' >Upload</button>
          </form>
        </div>
      );
    
}
 
export default FileUpload;