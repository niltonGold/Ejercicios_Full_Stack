import React from "react";
import Header from "../../components/header";
import BoardContainer from "../../components/board-container";

export default function KanbanPage() {

    return (
        <React.Fragment>
            <Header></Header>
            <BoardContainer></BoardContainer>
        </React.Fragment>
    )
}