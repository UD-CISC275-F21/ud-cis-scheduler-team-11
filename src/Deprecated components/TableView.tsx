export{};
/*
import React from "react";
import {Classtype} from "../interfaces/classtype";
import { Card, Row, Button, Col } from "react-bootstrap";
import { Table } from "../interfaces/SemesterTable";

export function ClasstypeTable({currID, currentSem, currYear, semList, setSemList, thisID, idSet, semPer}:{
    currID: number,
    currentSem: number,
    currYear: number,
    semList: Table[],
    setSemList: (semList: Table[]) => void,
    thisID: number,
    idSet: (num: number) => void,
    semPer: number
}) : JSX.Element {
    const ClasstypeList: Classtype[] = [
        {code: "CISC106", name: "General Computer Science for Engineers", credits: 3},
        {code: "CISC", name: "ClassName", credits: 3},
        {code: "CISC", name: "ClassName", credits: 3},
        {code: "CISC", name: "ClassName", credits: 3},
        {code: "CISC", name: "ClassName", credits: 3}];

    
    function deleteSem () {
        const fixedList: Table[] = semList;
        fixedList.splice(currID, 1);
        if (fixedList[0]) {
            let temp: Table; 
            for (let i=currID; fixedList[i]; i++) {
                temp = fixedList[i];
                temp.id = i;
                temp.semester -= 1;
                if (temp.semester==0) {
                    temp.year -= 1;
                    temp.semester = semPer;
                }
                fixedList[i] = temp;
            }
            idSet(thisID-1);
            setSemList(fixedList);
        } else {
            idSet(-1);
        }
    }

    //<Row>ID {currID}</Row>
    return (
        <Card>
            <Row><strong>Semester {currentSem} Year {currYear}</strong></Row>
            <table>
                <tr><th>Class ID</th><th>Class Name</th><th>Credits</th></tr>
                { ClasstypeList.map((sbj: Classtype) => {
                    return <tr key={sbj.name}>
                        <td>{sbj.code}</td>
                        <td>{sbj.name}</td>
                        <td>{sbj.credits}</td>
                    </tr>;
                })}
            </table>
            <Row>
                <Col><Button >Add Course</Button></Col>
                <Col><Button >Delete Course</Button></Col>
                <Col><Button onClick={deleteSem}>Delete This Semester</Button></Col>
            </Row>
        </Card>
    );
    //Table setup credit to Dr. Bart
}
*/
