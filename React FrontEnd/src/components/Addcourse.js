import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";

const Addcourse = () => {

    useEffect(() => {
        document.title = "AddCourses || Zubair"
    }, [])

    const [course,setCourse]=useState({})

    const handleForm=(e)=>{
        console.log(course)

        e.preventDefault()
    }

    return (
        <div>
            <h1 className="text-center my-3">Add the course details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userid">Course Id</label>
                    <Input type="text" placeholder="enter here" name="userid" id="userid" 
                    onChange={(e)=>{
                        setCourse({...course,id:e.target.value})
                    }}/>
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="enter title here" name="title" id="title" 
                      onChange={(e)=>{
                        setCourse({...course,title:e.target.value})
                    }}/>
                </FormGroup>

                <FormGroup>
                    <label for="desc">Course Description</label>
                    <Input type="textarea" placeholder="enter description here" name="desc" id="desc" style={{ height: 150 }}
                      onChange={(e)=>{
                        setCourse({...course,desc:e.target.value})
                    }} />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success ">
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