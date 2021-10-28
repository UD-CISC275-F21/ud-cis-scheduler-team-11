import React from "react";
import { Row, Button } from "react-bootstrap";
import { ClasstypeTable } from "./TableView";
import { Table } from "../interfaces/Table";
import { useState } from "react";

export function SemesterButton() : JSX.Element {
    const [currentID, setID] = useState<number>(0);
    const semestersPerYear = 2; 
    const [semesters, setSem] = useState<Table[]>([{id:currentID, semester: 1, year: 1}]);

    function addSemester() {
        const tempid = currentID+1;
        let tempsem = (1+tempid)%semestersPerYear;

        const tempyear = Math.trunc(tempid/semestersPerYear)+1;
        if (tempsem===0) {
            tempsem+=semestersPerYear;
        }

        setID(tempid);
        const temp: Table = {id: tempid, semester: tempsem, year: tempyear};
        //temp.semester = currentSemester;
        const sems: Table[] = semesters;
        sems.push(temp);
        setSem(sems);
    }
    
    function deleteSemester() {
        setID(currentID-1);
        const sems: Table[] = semesters; 
        sems.pop();
        if (!sems[0]) {
            setID(-1);
            //setYear(0);
            //setSemester(0);
        }
        setSem(sems);
    }
    
    function deleteAllSems() {
        setID(0);
        setSem([{id:0, semester: 1, year: 1}]);
    }

    return (
        <>
            <Row><Button onClick={addSemester} className="m-3">Add Semester</Button></Row>
            <Row>
                <table>
                    { semesters.map((sem: Table) => {
                        return <tr key={sem.id}>
                            <td><ClasstypeTable currentSem={sem.semester} currYear={sem.year} currID={sem.id} semList={semesters} setSemList={setSem} thisID={currentID} idSet={setID} semPer={semestersPerYear}></ClasstypeTable></td>
                        </tr>;
                    })}
                </table>
            </Row>
            <Button onClick={deleteSemester} className="m-3">Delete Last Semester</Button>
            <Button onClick={deleteAllSems} className="m-3">Start Over</Button>
        </>
        //<ClasstypeTable currentSem={currentSemester}></ClasstypeTable>
    );
}
