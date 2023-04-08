import React from 'react'

export default function JobsCard(props) {
  return (
    <>
    <div className='jobscard'>
        Position: {props.props.job } <br/>
        Company Name: {props.props.companyName}<br/>
        Location: {props.props.location} <br/>
        Salary : {props.props.salary}
    </div>
    </>
  )
}
