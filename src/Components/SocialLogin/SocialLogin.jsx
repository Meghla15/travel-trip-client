import UseAuth from '../../Hooks/UseAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from 'react-icons/fa';
// import { FaGithub } from 'react-icons/fa';

const SocialLogin = () => {
    const {googleLogin,githubLogin} = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";

    const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result =>{
           if(result.user){
            navigate(from)
           }
        })
    }
    return (
        <div>
        <div className='divider font-bold'> Continue with </div>
        <div className=' flex justify-around'>
            <button onClick={()=>handleSocialLogin(googleLogin)} 
            className='btn btn-primary rounded-full btn-outline font-bold font-neon'><FcGoogle /></button>
            <button onClick={()=>handleSocialLogin(githubLogin)} 
            className='btn btn-secondary  rounded-full btn-outline font-bold font-neon'><FaGithub /></button>
            

        </div>
        
    </div>
    );
};

export default SocialLogin;