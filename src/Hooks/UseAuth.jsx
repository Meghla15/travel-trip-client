 import{ useContext } from 'react';
import { AuthContext } from '../FireBase/FireBaseProvider';

const UseAuth = () => {
    const all = useContext(AuthContext)
    return all;
};

export default UseAuth;