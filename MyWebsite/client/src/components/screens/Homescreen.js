import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Homescreen = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name : '',
        email : '',
        password : ''
    })

    const { name, email, password } = user;

    const onChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log('Registered', user);

        const newUser = {
            name : user.name,
            email : user.email,
            password : user.password
        }

        try {

            const res = await axios.post('register', newUser, {
                headers: {
                    'Content-Type' : 'application/json'
                }
            });

            // setNewUser(res.data);
            console.log(res.data);
        } catch (error) {
            console.error(error.message);
        }
        

        setUser({
            name : '',
            email : '',
            password : ''
        })

        navigate('users');
    }


    return (
        <div className='homeScreen'>
            <div className="form-container">
                    <h1>
                        <span style={{color: '#2F80ED'}}>
                            Register
                        </span>
                    </h1>
                    
                    <form action="" onSubmit={onSubmit}>
                        <div className="form-group">
                            <span className="fas fa-user fa-lg"></span>
                            <input 
                                type="text" 
                                name='name' 
                                value={name} 
                                placeholder="Enter Name" 
                                onChange={onChange} autoComplete="off" 
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <span className="fas fa-envelope fa-lg"></span>

                            <input 
                                type="email" 
                                name='email' 
                                value={email} 
                                placeholder="Enter Email" 
                                onChange={onChange} 
                                autoComplete="off" required
                            />
                        </div>
                        
                        <div className="form-group">
                            <span className="fas fa-lock fa-lg"></span>
                            <input 
                                type="password" 
                                name='password' 
                                value={password} 
                                placeholder="Enter Password" 
                                onChange={onChange} 
                                autoComplete="off" required minLength='6'
                            />
                        </div>
                        
                        <input 
                            type="submit" 
                            value="Register" 
                            className="btn btn-block"
                        />
                    </form>
            </div>
        </div>
    )
}

export default Homescreen