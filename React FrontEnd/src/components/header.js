import React from "react";
import { CardBody,Card} from "reactstrap";

function header({name,title}){
    return(
        <div>
            <Card className="my-2 bg-warning">
                <CardBody>
                <h1 className="text-center">welcome to the app</h1>

                </CardBody>
            </Card>
        </div>
    )
}

export default header;