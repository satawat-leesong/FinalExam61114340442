import React, { useState } from "react";
import styled from "styled-components";
import AntDesign from "react-native-vector-icons/AntDesign";

let today = new Date().toUTCString().slice(0, 16);

export default function Header({ searchItem }) {
    const [value, setValue] = useState("");
    const onChangeText = (text) => {
        setValue(text);
    };

    function toThaiDateString(date) {
        let monthNames = [
            "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน",
            "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม.",
            "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
        ];
        let year = date.getFullYear() + 543;
        let month = monthNames[date.getMonth()];
        let numOfDay = date.getDate();
        return `${numOfDay} ${month} ${year} `;
    }
    
    let date1 = new Date();
    let thaidate = toThaiDateString(date1);

    return (
        <>
            <ComponentContainer>
                <HeaderText>To-Do.</HeaderText>
                <HeaderList>{thaidate}</HeaderList>
            </ComponentContainer>
            <SearchContainer>
                <InputContainer>
                    <Input placeholder="Search..." onChangeText={onChangeText} />
                </InputContainer>
                <SubmitButton 
                    onPress={() => {
                        setValue(searchItem(value));
                    }} 
                >
                    <AntDesign name="search1" size={24} color="green" />
                </SubmitButton>
            </SearchContainer>
        </>
    );
}

const ComponentContainer = styled.View`
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const SearchContainer = styled.View`
    flex-direction: row;
    height: 60px;
`;

const HeaderText = styled.Text`
    color: white;
    font-family: Poppins-Bold;
    font-size: 30px;
`;

const HeaderList = styled.Text`
    color: white;
    font-family: Poppins-Bold;
    font-size: 20px;
    margin-right: 20px;
`;

const InputContainer = styled.View`
    flex-direction: row;
    border-radius: 10px;
`;

const Input = styled.TextInput`
    font-family: Poppins-Regular;
    font-size: 15px;
    background-color: white;
    width: 300px;
    margin-right: 20px;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
    width: 50px;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    margin-bottom: 20px;
    border-radius: 50px;
`;