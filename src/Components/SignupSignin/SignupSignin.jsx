import React, { useState } from 'react'
import Input from '../Input/Input';
import "./SignupSignin.css"
import Button from "../Button/Button"
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import {auth , db} from "../../Firebase"
import { toast } from 'react-toastify';
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';


const SignupSignin = () => {

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')
  const [signupFlag , setSignupFlag] = useState(true)
  const navigate = useNavigate()

  const signupUsingEmail = (e)=>{
    e.preventDefault();
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    console.log("Signup button fired");
      console.log(name , email, password , confirmPassword);

      if(name!="" && email!="" && password!="" && confirmPassword!=""){

          if(password===confirmPassword){

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                toast.success("User created")
                navigate('/dashboard')
                createDoc(user)
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
                // ..
              });
          }else{
            toast.error("Password and Conform Password not matched")
          }

      }else{
        toast.error("All Input Fields are Mendatory")
      }

    }

    const signinUsingEmail = (e)=>{
          e.preventDefault();

          
          if(email!="" && password!=""){
            setEmail('')
          setPassword('')
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                toast.success("User Login Successfully")
                navigate('/dashboard')
                
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
              });
          }else{
            toast.error("All Fields are Mendetory")
          }
    }

    async function createDoc(user){
      // cfreate doc
        // setLoading(true)
      if(!user) return;

      const useRef = doc(db, "users" , user.uid)
      const userData = await getDoc(useRef);

      if(!userData.exists()){
        try{
          await setDoc(doc(db, "users", user.uid), {name:user.displayName ? user.displayName : name ,
            email:user.email,
            photoUrl: user.photoUrl ? user.photoUrl:"",
            createdAt: new Date(),
          });
          toast.success("Doc created")
          // setLoading(false)
        } catch (e){
          toast.error(e.message)
        }
        }else{
          toast.error("Doc Already exist")
          // setLoading(false)
        }

      }

  return (

        
          signupFlag === true ?
          <div className='w-full h-[85vh] flex items-center justify-center'>
                <div className='signup-wrapper'>

<h2 className='title'>Signup on <span style={{color:"var(--theme-color)"}}>Contact-App</span> </h2>
  <form className='form-box'>
  <Input label={"Full Name"} 
      state={name} 
      setState={setName} 
      placeholder={"John Doe"} 
      type={"text"}              
      />
  <Input label={"Email"} 
      state={email} 
      setState={setEmail} 
      placeholder={"Johndoe123@gmail.com"}    
      type={"email"}           
      />
  <Input label={"Password"} 
      state={password} 
      setState={setPassword} 
      placeholder={"Password"} 
      type={"password"}              
      />
  <Input label={"Confirm Password"} 
      state={confirmPassword} 
      setState={setConfirmPassword} 
      placeholder={"Confirm Password"}
      type={"password"}               
      />


     <Button 
      text="Signup using Email and Password"
      onClickFunc={signupUsingEmail}
      /> 

  </form>

  <p style={{fontSize:"20px", marginTop:"1rem", color:"white"}}>or</p>
  <p style={{marginTop:"1rem", color:"white"}}>Already Have An Account <span className='clickHere' onClick={()=>setSignupFlag(!signupFlag)}>Click Here</span></p>

</div>
          </div>
          
    
    
    :
    <div className='w-full h-[85vh] flex items-center justify-center'>
          <div className='signup-wrapper'>

<h2 className='title'>Signin on <span style={{color:"var(--theme-color)"}}>Contact-App</span> </h2>
  <form className='form-box'>

  <Input label={"Email"} 
      state={email} 
      setState={setEmail} 
      placeholder={"Johndoe123@gmail.com"}    
      type={"email"}           
      />
  <Input label={"Password"} 
      state={password} 
      setState={setPassword} 
      placeholder={"Password"} 
      type={"password"}              
      />

     <Button 
     style={{color:"white"}}
      text="Signin using Email and Password"
      onClickFunc={signinUsingEmail}
      /> 

  </form>

  <p style={{fontSize:"20px", marginTop:"1rem"}}>or</p>
  <p style={{marginTop:"1rem", color:"white"}}>Don't Have An Account <span className='clickHere' onClick={()=>setSignupFlag(!signupFlag)}>Click Here</span></p>

</div>
    </div>
    
        

    
  )
}

export default SignupSignin