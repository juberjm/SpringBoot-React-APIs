import React from "react";
import { useEffect } from "react";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";

const Addcourse = () => {

    useEffect(() => {
        document.title = "AddCourses || Zubair"
    }, [])
    return (
        <div>
            <h1 className="text-center my-3">Add the course details</h1>
            <Form>
                <FormGroup>
                    <label for="userid">Course Id</label>
                    <Input type="text" placeholder="enter here" name="userid" id="userid" />
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="enter title here" name="title" id="title" />
                </FormGroup>

                <FormGroup>
                    <label for="desc">Course Description</label>
                    <Input type="textarea" placeholder="enter description here" name="desc" id="desc" style={{ height: 150 }} />
                </FormGroup>

                <Container className="text-center">
                    <Button color="success ">
                        Add Course
                    </Button>
                    <Button color="warning">
                        Clear
                    </Button>
                </Container>
            </Form>

        </div>
    )
}
export default Addcourse