import React from 'react'
import { deleteFirebase } from '../../actions/authenticated'

export default function Delete(props) {
  
  function submit(){
      try{
        props.dispatch(deleteFirebase( props.history))
      }catch (e) {
      console.log(e)
      console.message(e)
      return "Failed to delete"
     }
  }

  return (
    <div>
      <h1>Are you sure you want to delete your profile</h1>
      <button onClick={() => submit()}>Delete</button>
      <button onClick={() => props.setDelete(false)}>Cancel</button>
    </div>
  )
}
