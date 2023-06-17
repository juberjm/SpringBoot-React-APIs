import React, { useState, useEffect } from "react";
import Course from "./Course"
import { Button } from "reactstrap";
import base_url from "../Api/BootApi";
import axios from "axios"
import {  toast } from 'react-toastify';

const Allcourcees = () => {
    useEffect(() => {
        document.title="All courses || Zubair"
    }, [])


    const getAllCourcesFromServer=()=>{
        axios.get(`${base_url}/courses`)
        .then((response)=>{
            console.log(response.data)

            toast.success("course has been loaded",{
                position:"bottom-center",
            })
            setCources(response.data)

        },
        (error)=>{
            console.log(error)
            toast.warning("something went wrong",{
                position:"bottom-center",
            })

        })
    }

    useEffect(()=>{
        getAllCourcesFromServer()
    },[])

    const [courses, setCources] = useState([])

    return (
        <div>
            <h1>
                All cources
            </h1>
            <p>List of cources are as follows</p>
            {
                courses.length > 0 ? courses.map((item) => (
                    <Course key={item.id} Course={item} />
                )) : "no cources avillable"
            }
        </div>
    )
}

export default Allcourcees;