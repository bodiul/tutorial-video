import React from 'react'

function InputValue() {
    const handleChangeInput = (event) =>{
        console.log(event.target.value)
    }  
  return (
    <div>
        <input type="text" onChange={handleChangeInput} className='border-2 border-black rounded-lg' placeholder='Enter your full name' /><br />
        <input type="text" onChange={handleChangeInput} className='border-2 border-black rounded-lg' placeholder='Enter your full name' /><br />
        <select name="catagory" onChange={handleChangeInput}  className='border-2 border-black' id="catagory">
            <option value="select">Select</option>
            <option value="web developer">web developer</option>
            <option value="freelencer">freelencer</option>
            <option value="programing">programing</option>
        </select><br />
        <input type="date" className='border-2 border-black' onChange={handleChangeInput} /><br />
        <textarea className='border-2 border-black' onChange={handleChangeInput} name=""></textarea>
    </div>
  )
}

export default InputValue;