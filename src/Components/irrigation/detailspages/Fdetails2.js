import React from 'react'
import Note from "./fdetailscard.jsx";
import notes from './fdDetails.js'

export default function FDetails2() {
  return (
    <div>
    
    {notes[1].map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          describe={noteItem.describe}
          solution={noteItem.solution}
        />  
      ))}
    </div>
  )
}