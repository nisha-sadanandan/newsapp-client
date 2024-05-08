import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Blogs = () => {
        
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        const fetchData =async (req,res)=>{
            try{

                const posts = await axios.get('https://newsapp-server-r9w1.onrender.com/posts')
                setPosts(posts.data)

            }catch(error){
                console.log(error)
            }
        }
        fetchData()
    },[])

  return (
    <div className='gridContainer'>
     {posts.map((post,index)=>(
        <div>
           <img className='blogImage'
            key={index} src={`https://newsapp-server-r9w1.onrender.com/${post.image}`}/>
            <p>{post.title}</p>
            <p>{post.subtitle}</p>
            <p>{post.desc}</p>
        </div>
     ))}
     
    </div>
  )
}

export default Blogs