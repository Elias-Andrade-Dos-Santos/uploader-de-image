import React, {useState} from 'react'
// import api from './Api/Api'
import axios from 'axios'

const App = () => {
  const [image, setImage] = useState('');
  const UploadImg = async (e) =>{
    e.preventDefault();
    console.log("Upload Image")
    const formData = new FormData();
    formData.append("image", image);

    const headers = {
      'headers':{
        'Content-Type': 'application/json'
      }
    }
    await axios.post("http://localhost:3001/upload-image", formData, headers)
    .then((response)=>{
      console.log(response)
    }).catch((error) => {
      if(error.response){
      console.log(error.response)
      }else{
        console.log("Erro: tente mais tarde")
      }
    })
  } 
  return (
    <div>
      <h1>upload</h1>
      <form onSubmit={UploadImg}>
        <label>image:</label>
        <input type="file" name="imagem" onChange={(e) => setImage(e.target.files[0])}/><br/><br/>
        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}

export default App