import './Login.scss'
const Login = () =>{
    return(
        <>
            <div className="login_background">
                <div className="login_content">
                    <input type='email' placeholder='Login'/>
                    <input type='password' placeholder='Password'/>
                    <button>
                        Sign in
                    </button>                   
                        
                </div>

            </div>
        </>
    )
}
export default Login