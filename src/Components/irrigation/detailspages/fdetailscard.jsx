import React from 'react'

export default function fdetailscard(props) {
  return (
    <div className="fdnote my-3">
      <h2 className="my-4">{props.title}</h2>
      <p className="my-4"><strong>Description : </strong> {props.describe}</p>
      <p className="my-4"><strong>Solution : </strong> {props.solution} </p>
    </div>
  )
}