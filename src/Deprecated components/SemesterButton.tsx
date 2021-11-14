/*
import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { ClasstypeTable } from "./TableView";
//import { Table } from "../interfaces/SemesterTable";
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
        }
        setSem(sems);
    }
    
    function deleteAllSems() {
        setID(0);
        setSem([{id:0, semester: 1, year: 1}]);
    }

    return (
        <div style={styles.semesters}>
            <Row>
                <Row>
                    <table>
                        { semesters.map((sem: Table) => {
                            return <tr key={sem.id}>
                                <td><ClasstypeTable currentSem={sem.semester} currYear={sem.year} currID={sem.id} semList={semesters} setSemList={setSem} thisID={currentID} idSet={setID} semPer={semestersPerYear}></ClasstypeTable></td>
                            </tr>;
                        })}
                    </table>
                </Row>
                <Col>
                    <Button onClick={addSemester} className="m-3">Add Semester</Button>
                    <Button onClick={deleteSemester} className="m-3">Delete Last Semester</Button>
                    <Button onClick={deleteAllSems} className="m-3">Start Over</Button>
                </Col>
            </Row>
        </div>
        //<ClasstypeTable currentSem={currentSemester}></ClasstypeTable>
    );
}

const styles = {
    semesters: {
        width: "50%",
        padding: "50px 20px 0px 50px",
        margin: "50px auto",
        background: "gray",
        marginBottom: "100px",
        
        //alignItems: "center",
        //justifyContent: "right",
        fontSize: 17,
    },
} as const;

*/
