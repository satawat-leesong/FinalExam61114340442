import React from "react";
import styled from "styled-components";
import firestore, { firebase } from '@react-native-firebase/firestore';
export default function Empty() {
    return (
        <ComponentContainer>
            <EmptyImage source={require("../assets/images/bg.png")} />
            <EmptyText>Add Task</EmptyText>
        </ComponentContainer>
    );
}

const ComponentContainer = styled.View`
    align-items: center;
    justify-content: center;
    height: 650px;
`;

const EmptyImage = styled.Image`
    width: 200px;
    height: 400px;
`;

const EmptyText = styled.Text`
    color: white;
    font-family: Poppins-Bold;
    margin-top: 30px;
    font-size: 30px;
`;