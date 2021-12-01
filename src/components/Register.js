import React,{useState} from 'react'

function Register() {

    const [name,setName] = useState('');
    const [city,setCity] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function registerUser(event){
    event.preventDefault()
        // console.log(name);
		const response = await fetch('http://localhost:4500/p/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({name,city,email,password}),
		})

		const data = await response.json();
        console.log("new user data :- ",data);
        window.location.href='/login';
    }

    return (
        <div>
            inside register
            <form onSubmit = {registerUser}>
                <input type='text' value ={name} onChange= {(e) =>{setName(e.target.value)}} placeholder = 'Enter your name'/><br />
                <input type='text' value ={city} onChange= {(e) =>{setCity(e.target.value)}} placeholder = 'Enter your City'/> <br />
                <input type='text' value ={email} onChange= {(e) =>{setEmail(e.target.value)}} placeholder = 'Enter your email here'/> <br />
                <input type='text' value ={password} onChange= {(e) =>{setPassword(e.target.value)}} placeholder = 'Enter your Password'/><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;
