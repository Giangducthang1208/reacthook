import React from 'react'

export default function UseRefDemo(props) {
    const handleChange = (e) => {

    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
    }

  return (
    <form className='container' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className='form-group'>
            <p>username</p>
            <input className='form-control' id='username' onInput={handleChange} />
        </div>
        <div className='form-group'>
            <p>password</p>
            <input className='form-control' id='password' type='password' onInput={handleChange}/>
        </div>
        <div className='form-group'>
            <button className='btn btn-success'type='submit'> Login</button>
        </div>
    </form>
  )
}
