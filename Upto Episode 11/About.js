// class base components dont have Hooks to use UseContext
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
const About = () =>{
    return (
        <div>
            <h1>About</h1>
            <div>
               loggedIn User
               <UserContext.Consumer>
                  {({loggedInUser}) => (
                   <h1 className="text-lg font-bold"> {loggedInUser}</h1> 
                   )}
               </UserContext.Consumer>
            </div>
            <h2> This is Namaste React </h2>
            <UserClass name={"nilesh"} location={"Nanded"} contact={"@gmail.com"}/>

        </div>
    );
};
export default About;