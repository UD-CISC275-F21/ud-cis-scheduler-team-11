import React, { Component } from 'react'
import Select from 'react-select'


export function Dropdown(): JSX.Element {
    const options =[
      {id: "1", code: "EGGG101", name: "Introduction to Engineering", credits: "3"}, 
      {id: "2", code: "CISC108", name: "Intro to Computer Science 1", credits: "3"}, 
      {id: "3", code: "MATH241", name: "Analytic Geometry & Calculus", credits: "4"},
      {id: "4", code: "ENGL110", name: "Seminar in Composition", credits: "3"}, 
      {id: "5", code: "Breadth Requirement (CAH)", name: "Humanities breadth requirement", credits: "3"}
    ]

const styles = {
    classes: {
        width: "20%",
        padding: "0px 90px",
        margin: "50px",
        //margin: "50px auto",
        //background: "gold",
        borderRadius: "10px",
        //display: "flex",
        //flexDirection: "column",
        //alignItems: "center",
        fontSize: 20,
        border: "10px solid red",
    },
    h1: {
        marginLeft: "100px",
    },
} as const;

const MyComponent = () => (
  <Select options={options} />
)