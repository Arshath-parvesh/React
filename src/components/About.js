import User from "./user";
import UserClass from "./UserClass";

const About = () =>{
    return(
        <div>
            <h1>This is about page</h1>
            {/* <User name={"Arshath Paresh"} Location={"Chennai"}/> */}
            <UserClass name={"Arshath Paresh"} Location={"Chennai"}/>
        </div>
    )
}
export default About;