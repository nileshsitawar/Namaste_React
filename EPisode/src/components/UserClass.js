import React from "react";
class UserClass extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count:0,
            count2:3,
        };
    }
    render(){
        const {count,count2} = this.state
        // const {name,location,contact} = this.props; (we can destructure the this.props to make it readable
        return (
            <div className="user-card">
           
                <h4>count:{count} </h4>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count +1,
                    });
                }}
                >
                    Count Increase</button>
                <h3>name:{this.props.name}</h3>
                <h3>location:{this.props.location}</h3>
                <h3>contact:{this.props.contact}</h3>

            </div>
        )
    }

}
export default UserClass;