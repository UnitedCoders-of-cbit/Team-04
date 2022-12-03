import React from 'react'
import Header from '../irrigation/fHeader'
import Note from '../irrigation/fcropCard'
import notes from './sDetails'

export default function Seeds() {
  return (
    <>
        
      <Header />
      <br/>
      <button className='btn btn-success'><a href='/individualfarmerhome/carousal'>back</a></button>
      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          imge={noteItem.imge}
          btnname={noteItem.btnname}
          redirect={noteItem.redirect}
        />  
      ))}
    </>
  )
}
