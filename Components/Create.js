"use client"
import React from 'react'

const Create = (props) => {
    const  {
        title,
        settitle,
        description,
        setdescription,
        status,
        setstatus,
        tasks,
        settasks,
        activetask,
        setactivetask
        
    } = props
    const submithandler = (e)=>{
        e.preventDefault()
        const newtask = {
            date: new Date().toLocaleDateString(),
            title,
            description,
            status
        }
        settasks([...tasks,newtask])
        settitle("")
        setdescription("")
        setstatus("due")
    }
    const updatetask = (e)=>{
        e.preventDefault()
        const copytask = [...tasks]
        copytask[activetask] = {
            ...copytask[activetask],
            title,description,status
        }
        settasks(copytask)
        setactivetask(null)
        settitle("")
        setdescription("")
        setstatus("due")
        }
  return (
    <div className='container mt-5'>
        <h1>Crate Your Task</h1>
        <form onSubmit={submithandler} className='form w-50 '>
            <input 
                value={title}
                onChange={(event)=>{settitle(event.target.value)}}
                className='form-control mb-3'
                type="text"
                placeholder='Title' 
            />
            <textarea
                value={description}
                onChange={(event)=>{setdescription(event.target.value)}}
                className='form-control mb-3'
                type="text"
                placeholder='Description'
            />      
            <select value={status} onChange={(event)=>{setstatus(event.target.value)}} className='form-control mb-3'>
                <option value="Due">Due</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>
            {
                activetask === null ?(
                    <button onClick={submithandler} className='btn btn-primary w-25 '>Create Task</button>                    
                ):(
                    <button onClick={updatetask} className='btn btn-primary w-25 '>Update Task</button>                    
                )
            }
        </form>
    </div>
  )
}

export default Create