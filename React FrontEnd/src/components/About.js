import React from "react";
import { useEffect } from "react";
import { CardBody, Card } from "reactstrap";

const About=()=>{
    useEffect(()=>{
        document.title="About || Zubair"
    },[])
    return(
    <div>
        <Card className="my-2 bg-primary">
            <CardBody>
            <h3 className="text-center">This is for course app about</h3>
            <p className="text-center" >for studying about apis and other processes</p>
            </CardBody>
        </Card>
    </div>  
    )
}

export default About