import React from "react";
import "./App.css";
import { Names } from "./components/Names";
import { Welcome } from "./components/Welcome";

function App(): JSX.Element {
    return (
    <Container>
      <Row>
        <Welcome></Welcome>
      </Row> 
    </Container>
    );
}

export default App;
