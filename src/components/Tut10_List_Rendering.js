import React from 'react'

function Tut10_List_Rendering() { 

  const names = ['Bruce', 'Clark', 'Diana',"Clark",'Bruce']
  //  use index as key value 
  const nameList = names.map((name,index) => <h2 key={index}> {index} - {name} </h2>)

  

  // const persons = [
  //   {
  //     id: 1,
  //     name: "Bruce",
  //     age: 30,
  //     skill: 'React'
  //   },
  //   {
  //     id: 2,
  //     name: "clark",
  //     age: 70,
  //     skill: "Angular"
  //   },
  //   {
  //     id: 3,
  //     name: "Bruce",
  //     age: 25,
  //     skill: "Node.js"
  //   }
  // ]

  // const personList = persons.map(person => <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>)

  return (
    <div className='container'>
      {
        nameList
      }
    </div>
  )
}

export default Tut10_List_Rendering
