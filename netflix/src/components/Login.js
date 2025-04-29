import React, {useState} from 'react';
import Header from './Header';
import axios from 'axios';  
import { API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading,setUser } from '../redux/userSlice';



function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(store=>store.app.isLoading);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  }

  const getInputData = async (e) =>{
    e.preventDefault();
    dispatch(setLoading(true));
    if(isLogin){
      const user = {email,password};
      try{
        const res = await axios.post(`${API_END_POINT}/login`,user,{
          headers:{
            'Content-Type':'application/json'
          },
          withCredentials:true
        });

        if(res.data.success){
          toast.success(res.data.message);
        }
        console.log("Login user object:", res.data.user);

        if (res.data.user) {
            dispatch(setUser(res.data.user));
         } else {
             console.error("User object missing in login response!");
        }

        navigate("/browse");
      }catch(error){
        toast.error(error.response.data.message);
        console.log(error);
      }finally{
        dispatch(setLoading(false));
      }
    }else{
      dispatch(setLoading(true));
      const user= {fullName,email,password};
      try{
        const res = await axios.post(`${API_END_POINT}/register`,user,{
          headers:{
            'Content-Type':'application/json'
          },  
          withCredentials:true
        });
       
        if(res.data.success){
          toast.success(res.data.message);
        }
        setIsLogin(true);
      }catch(error){
        toast.error(error.response.data.message);
        console.log(error);
      }finally{
        dispatch(setLoading(false));
      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://uhdmax.net/wp-content/uploads/slider/cache/2211158e78fdfa32d40866a0b59bf253/d2edb29f3f970c36aadecbb01ed0bb79.jpg" alt="banner"/>
      </div>
      <form onSubmit={getInputData} className='flex flex-col w-3/12 my-36 p-12 left-0 right-0 mx-auto items-center justify-center absolute rounded-md bg-black opacity-85'>
        <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
        <div className='flex flex-col'>
          {
            !isLogin && <input value={fullName} onChange={(e)=>setFullName(e.target.value)}  type="text" placeholder='Full Name' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
          }
          <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
          <input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
          <button type='submit' className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{`${isLoading ? "loading...":(isLogin? "Login":"Signup")}`}</button>
          <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"}<span onClick={loginHandler}  className='ml-1 text-blue-500 font-medium cursor-pointer'>{isLogin? "Signup":"Login"}</span></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
