import { useSelector, useDispatch } from 'react-redux'
import { F_CHANGE_MESSAGE } from '../store'
import ComponentB from '../components/ComponentB'

function Login() {

    const { message } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const handleChange = e => F_CHANGE_MESSAGE(dispatch, e.target.value)

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                <input 
                    onChange={handleChange}
                    type="text"
                    placeholder="Input Message"
                />
                <p>{message}</p>
                <ComponentB />
            </div>
        </div>
    )
}

export default Login;