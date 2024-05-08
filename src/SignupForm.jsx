import React,{useState}from 'react';
import axios from 'axios';

import './signupForm.css';

const SignupForm = () => {

    const [formData ,setFormData] = useState({

        name:'',
        username:'',
        password:'',
        confirmPassword:'',
        email:''

    })

    const handlechange =(e)=>{
        const {name,value} =e.target;
        setFormData({...formData,[name]:value})
    }

     const handleSubmit = async (e)=>{
        e.preventDefault();

        //call to backend

        try{  const response = await axios.post('https://newsapp-server-r9w1.onrender.com/users' ,formData)
        console.log(response.data)

        }catch(error){
                 console.log(error)
        }
     }

  return (
    <div className='container-signup'>
        <h2 className="title-sign">Signup</h2>
        <form onSubmit={handleSubmit} className='form'>
            <div className="title">Welcome </div>
            <div className="subtitle">Let's create your account!</div>
            <div className='form'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' value={formData.name} onChange={handlechange}/>
            </div>
            <div className='form'>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' name='username' value={formData.username} onChange={handlechange}/>
            </div>
            <div className='form'>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' value={formData.password} onChange={handlechange}/>
            </div>
            <div className='form'>
            <label htmlFor='confirmPassword'>Confirm Password:</label>
            <input type='password' id='confirmPassword' name='confirmPassword' value={formData.confirmPassword} onChange={handlechange}/>
            </div>
            <div className='form'>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' value={formData.email} onChange={handlechange}/>
            </div>
             <div className="signup-button">
            <button type='submit'>Sign Up</button>
            </div>

        </form>
    </div>
  )

}

export default SignupForm