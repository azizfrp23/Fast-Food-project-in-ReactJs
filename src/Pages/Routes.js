import { Redirect } from "react-router-dom"
import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import About from "./About/About"
import Login from "./Login/Login"
import Main from "./Main/Main"

const Routes = () =>{
    const user = true
    return(
        <>
        <Navbar />
        {
            user ?(

                <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/about' component={About}/>
                <Redirect to="/"/>
            </Switch>
            ):(
                <Switch>
                    <Route path = '/login' component={Login}/>
                    <Redirect to='/login'/>

                </Switch>
            )
        }

        </>
    )
}
export default Routes