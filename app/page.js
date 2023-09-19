"use client"
import Create from '@/Components/Create'
import Show from '@/Components/Show'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [status, setstatus] = useState("Due")
  const [tasks, settasks] = useState([])
  const [activetask, setactivetask] = useState(null)
  return (
    <div>
      <Create
        title = {title}
        settitle = {settitle}
        description = {description}
        setdescription = {setdescription}
        status = {status}
        setstatus = {setstatus}
        tasks = {tasks}
        settasks = {settasks}
        activetask = {activetask}
        setactivetask = {setactivetask}

      />
      <hr />
      <h2 className='ms-5'>Tasks</h2>
      <Show 
      tasks = {tasks}
      settasks = {settasks}
      setdescription = {setdescription}
      setstatus = {setstatus}
      setactivetask = {setactivetask}
      settitle = {settitle}
      activetask = {activetask}
      />
    </div>
  )
  
}

export default page