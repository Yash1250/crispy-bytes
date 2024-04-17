import {useRouteError} from "react-router-dom"

const Error = ()=>{
    let err = useRouteError();
    return (
        <>
        <h1>
            Ooops....
        </h1>
        <h1>
            Something Went Wrong
        </h1>
        <h2>
            {err.status} : {err.statusText}
        </h2>
        </>
    )
}

export default Error;