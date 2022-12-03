import React from 'react'
import Header from './fHeader'
import Note from './fcropCard'
import notes from './fDetails'

export default function irrigationhome() {
  return (
    <div>

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
    </div>
  )
}