import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Names } from "./components/Names";
import { Welcome } from "./components/Welcome";
import { Dropdown } from "./components/CourseDropdown";
import { LoadClasses } from "./components/DragButtons";
import { SemesterButton } from "./components/SemesterButton";
import "./components/Message.css";
import { Message } from "./components/Message";
import { Footer } from "./components/Footer";
import { Column } from "./Column";
import { AppContainer } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";

/*
function App(): JSX.Element {
    return (
        <div className = "App">
            <Message />
            <Welcome></Welcome>
            <Dropdown></Dropdown>
            <div className='rowC'>
                <LoadClasses></LoadClasses>
                <SemesterButton></SemesterButton>
            </div>
            <Footer />
        </div>
    );
}
*/

export const App = () => {
    const {lists, dispatch} = useAppState();
  
    return (
        <AppContainer>
            {lists.map((list) => (
                <Column text={list.text} key={list.id} id={list.id} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add another list"
                onAdd={text => dispatch(addList(text))}
            />
        </AppContainer>
    );
};
