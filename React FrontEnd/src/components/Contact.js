import React from "react";
import { useEffect } from "react";
import { CardBody, Card } from "reactstrap";

const Contact=()=>{
    useEffect(() => {
        document.title = "Courses | Zubair"
    }, [])
    return(
    <Card className="my-2 bg-success">
        <CardBody>
        <h3 className="text-center">Contact</h3>
        <p className="text-center" >Email = juberjm1258@gmail.com</p>
        </CardBody>
    </Card>
        )
}
export default Contact