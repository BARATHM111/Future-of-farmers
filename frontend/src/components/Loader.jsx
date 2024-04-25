import {Spinner} from "react-bootstrap";

const Loader = () => {
    return (
        <Spinner
            animation = "border"
            role = "Status"
            style = {{
                Width: "100%",
                height: "100px",
                margin: "auto",
                display: "block",    
            }}
        ></Spinner>
    )
}

export default Loader