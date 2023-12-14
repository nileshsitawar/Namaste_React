import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    return (
        <div>
            <h3>OOPS!!!</h3>
            <h3>something went wrong!</h3>
            <h4>
                {err.status}: {err.statusText}
            </h4>
            
        </div>
    );
};

export default Error;