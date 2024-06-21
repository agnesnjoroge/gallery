
import React, {useState,useEffect} from 'react'
import ImageCard from "./components/ImageCard.jsx"
import ImageSearch from "./components/ImageSearch.jsx"

function App() {
  const [images,setImages] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [term,setTerm] = useState('')
  
  {/*useEffect (()=>{
    fetch("https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true")
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  },[])*/}
  
  
  useEffect (()=>{
    fetch("https://pixabay.com/api/?key=44460475-08e489d92004ba1e2e82d0d2a&q=${term}&image_type=photo&pretty=true")
    .then(res=>res.json())
    .then(data=>{
      setImages(data.hits)
      setIsLoading(false)
    })
    .catch(err=>console.log(err))
  },[term])

  return (
       
       <div className="container mx-auto">
         <ImageSearch searchText ={(text)=>setTerm(text)}/>
         
         {isLoading && images.length ===0 && <h1 className="text-6xl text-center mx-auto mt-32 ">No images found</h1> }
         
         {isLoading? <h1 className="text-6xl text-center mx-auto mt-32 ">Loading</h1> : <div className="grid grid-cols-3 gap-4">
           {images.map(image=>{
             return(
             <ImageCard key={image.id} image={image}/>
           )})}
           
         </div>}
       </div>
  )
}

export default App
