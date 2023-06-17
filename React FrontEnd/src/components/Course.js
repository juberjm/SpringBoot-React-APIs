import React from "react";
import {Card,
CardBody, cardTitle, CardSubtitle,CardText, CardFooter, Button, Container,
} from "reactstrap"

const Course=({Course})=>{
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{Course.title}</CardSubtitle>
                <CardText>{Course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger">Delete</Button>
                    <Button color="warning">Update</Button>
                 </Container>
            </CardBody>
        </Card> 
    )
}
export default Course;