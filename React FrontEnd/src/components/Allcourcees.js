import React, { useState, useEffect } from "react";
import Course from "./Course"
import { Button } from "reactstrap";
const Allcourcees = () => {
    useEffect(() => {
        document.title="All courses || Zubair"
    }, [])

    const [courses, setCources] = useState([
        { title: "java course", description: "this is demo course for java" },
        { title: "react course", description: "this is demo course for react" },
        { title: "nodejs course", description: "this is demo course for nodejs" },
        { title: "anguloar course", description: "this is demo course for angular" },

    ])

    return (
        <div>
            <h1>
                All cources
            </h1>
            <p>List of cources are as follows</p>
            {
                courses.length > 0 ? courses.map((item) => (
                    <Course Course={item} />
                )) : "no cources avillable"
            }
        </div>
    )
}

export default Allcourcees;