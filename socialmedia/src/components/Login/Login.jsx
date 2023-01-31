import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useUsersContext } from '../../Context'

const Login = () => {
      const {useFetch,setMyId} = useUsersContext();
      const [name, setName] = useState('');
      const[allUsers,setAllUsers]=useState([]);
      useFetch(`https://dummyapi.io/data/v1/user?page=1&limit=100&=`,setAllUsers)

      const handleSubmit = () => {
            const isUserThere=  allUsers.data.filter(user => user.firstName.toLowerCase() === name.toLowerCase())
            if(isUserThere){
             setMyId(isUserThere[0].id);
            }
      }
  
      if(!allUsers){
            return(
                  <div>
                        <h1>Loading...</h1>
                  </div>
            )
      }

  return (
    <div className='login-containers'>
      <h1 style={{color:"white"}}> Welcome to SocialB.</h1>
      <div className='former-container'>
      <h1 className='login-header'> Login</h1>

      <form >
            <input type="text" placeholder='Email' value={name} className='email-name' onChange={(e) => setName(e.target.value)} />
            <Link to={'/'}>
             <button type='submit' onClick={handleSubmit}className='submit-to-login-btn'>
                  Log In
            </button>
            </Link>
      </form>
      <p>Register here</p>
      </div>
    </div>
  )
}

export default Login