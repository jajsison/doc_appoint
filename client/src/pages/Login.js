import React from 'react'
import {Button, Form, Input} from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";
import toast from 'react-hot-toast';


function Login() {
  const navigate = useNavigate();
  const onFinish =async(values) =>{
    console.log("Recieve values of form", values)

    try {
      const response = await axios.post('/api/user/register', values);
      if(response.data.success){
        toast.success(response.data.message);
        toast("Redirecting to homepage");
        localStorage.setItem (
          "token",
          response.data.token
        );

        navigate("/");
      }else{
        toast.error(response.data.message);

      }
      } catch (error) {
        toast.error("Something went wrong");
      }

  }
  return (
    <div className='authentication'>
      <div className ='authentication-form card p-2'>
        <h1 className='card-title'> Welcome Back</h1>
        <Form layout='vertical' onFinish={onFinish}>

            <Form.Item label='Email' name ='email'>
              <Input placeholder ='Email' />
            </Form.Item>
            <Form.Item label='Password' name ='password' >
              <Input placeholder ='Password' type ='password' />
            </Form.Item>

            <Button className='primary-button my-3' htmlType='submit'>Login</Button>

            <Link to='/register' className='anchor mt-2'>Click HERE TO REGISTER </Link>

        </Form>
      </div>
     
   </div>
  )
}

export default Login;