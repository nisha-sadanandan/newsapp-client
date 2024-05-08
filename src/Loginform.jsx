import React,{useState}from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import './signupForm.css';

const Loginform = () => {
    
    const navigate = useNavigate()
    const [formData ,setFormData] = useState({

       
        password:'',
        email:''

    })

    const handlechange =(e)=>{
        const {name,value} =e.target;
        setFormData({...formData,[name]:value})
    }

     const handleSubmit = async (e)=>{
        e.preventDefault();

        //call to backend

        try{  const response = await axios.post('https://newsapp-server-r9w1.onrender.com/users/login' ,formData)
        sessionStorage.setItem('userToken',response.data.token)
        navigate('/')

        }catch(error){
                 console.log(error)
        }
     }

  return (
    <div className='container-signup'>
        <h2 className="title-sign">Login</h2>
        <form onSubmit={handleSubmit} className='form'>
            <div className='form'>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' value={formData.email} onChange={handlechange}/>
            </div>

            <div className='form'>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' value={formData.password} onChange={handlechange}/>
            </div>
        
             <div className="signup-button">
            <button type='submit'>Login</button>
            </div>

        </form>
    </div>
  )

}

export default Loginform