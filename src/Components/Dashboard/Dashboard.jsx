import React from 'react'
import DataForm from '../DataForm/DataForm'
import { auth, db } from "../../Firebase";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import moment from 'moment';
import Card from '../Card/Card';
import { useState, useEffect } from 'react';
import CreateNoteBtn from '../CreateNoteBtn/CreateNoteBtn';
const Dashboard = () => {

  const [user] = useAuthState(auth);
  const [notes , setNotes] = useState([])
  const [dataFormVisible, setDataFormVisible] = useState(false)

  const onfinish = (formData)=>{

         console.log(formData);
        const newNote = {
          note:formData.note,
          tag:formData.tag,
          date:moment().format("DD/MM/YYYY"),
        }
        console.log(newNote);
        
        addNoteToFirebase(newNote)
        
  }

  const addNoteToFirebase = async(note)=>{
    console.log(note);
    
      try{
        const docRef = await addDoc(
          collection(db, `users/${user.uid}/note`),
          note
        );
        console.log("Document written with ID: ", docRef.id);
      toast.success("Note Added!");
      }

     catch (e) {
      console.error("Error adding document", e);
      toast.error("Couldn't Add Transaction");
    }
  }


//  const  fetchNotes = async()=> {
//     if (user) {
//       const q = query(collection(db, `users/${user.uid}/note`));
//       const querySnapshot = await getDocs(q);

//       let notesArray = [];
//       querySnapshot.forEach((doc) => {
//         //doc/data() is never undefined for query doc snapshots
//         notesArray.push(doc.data());
//       });

//       setNotes(notesArray);
//       console.log("notes Array ", notesArray);
//       toast.success("note Fetched!");
//     }
//   }
  
//   useEffect(() => {
//     //get all docs from collection
//     fetchNotes();
//   }, [user]);

  return (

    
    <div className="w-full h-[90vh] flex relative">
    <CreateNoteBtn onClickFunc={()=>setDataFormVisible(true)}/>
     {/* <button className='absolute'
     onClick={()=>setDataFormVisible(true)}
     >createnote </button> */}

    {
      dataFormVisible===true&&
        <DataForm onfinish={onfinish} setDataFormVisible={setDataFormVisible} />
      
    }
    
   {
      notes.length>0&&notes.map((note,index)=>{
       return <Card key={index} note={note}/>
      })
    } 

    
    </div>
   
  )
}

export default Dashboard