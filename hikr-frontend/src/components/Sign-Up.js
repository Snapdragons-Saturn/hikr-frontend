import { useEffect, useState } from "react";

function SignUp () {
	const initialSignUp = {
		username: '',
		password: '',
		passwordConfirm: '',
		valid: '',
	}
    const [signUp, setSignUp] = useState(initialSignUp)

	const handleSubmit = (event) => {
		event.preventDefault()
		if(signUp.password === setSignUp.passwordConfirm){
			console.log('valid')
			setSignUp({...setSignUp, valid:true})

		} else{
			setSignUp({...setSignUp, valid:false})
			console.log('invalid')
		}
		console.log(setSignUp)
		
		}
//Add a methods for handling each input's onChange event and set the value of each input to be what's currently stored in state.
	const handleChange = (event) => {
		setSignUp({...setSignUp, [event.target.id]: event.target.value})
		
	
	}

	console.log(signUp)
	



    return(
        <div className='Sign-up-form'>
			<h1 className="titleLogin">Sign Up</h1>
			<form>
			<label htmlFor='username'>Username</label>
				<input 
				type='text' 
				placeholder='Username'
				id='username' 
				onChange={handleChange} 
				value={signUp.username}/> 
	
				<br></br>
				<label htmlFor='password'>Password</label>
				<input 
				type='password' 
				placeholder='Password' id='password'
				onChange={handleChange} 
				value={signUp.password} />
				<br></br>
				<label htmlFor='passwordConfirm'>Confirm password </label>
				<input
				type='password'
				placeholder='Confirm password'
				id='passwordConfirm'
				onChange={handleChange}
				value={signUp.passwordConfirm}
				/>
				<br></br>
				<br></br>
				<button type='submit' onClick={handleSubmit} >Sign Up</button>
				<p className={signUp.valid ? 'valid' : 'invalid'}>Passwords must match.</p>
			</form>
		</div>
    )
}

export default SignUp