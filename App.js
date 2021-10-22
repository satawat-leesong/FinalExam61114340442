import React, { useState, useEffect} from "react";
import { View, StatusBar, FlatList,Alert } from "react-native";
import styled from "styled-components";
import AddInput from "./components/AddInput";
import TodoList from "./components/TodoList";
import Empty from "./components/Empty";
import Header from "./components/Header";
import firestore,{firebase,collection, query, where } from '@react-native-firebase/firestore';
//import { collection, query, where } from "firebase/firestore";

export default function App() {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    firestore()
      .collection('Task')
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(documentSnapshot => {
          return {
            _id: documentSnapshot.id,
            date: '',
            value: '',
            ...documentSnapshot.data()
          };
        });

        setData(data);
      });
    }, 
  []);

 
  const submitHandler = (value, date) => {
    firestore()
            .collection('Task')
            .add({
              value: value,
              date: date.toUTCString().slice(0, 16),
          });
  };

  const deleteItem = (key) => {
    console.log(key);
    return Alert.alert(
      "Are your sure ?",
      "You want to delete!!!",
      [
        {
          text: "Yes",
          onPress: () => {

              firestore().collection('Task').doc(key).delete()
          },
        },
        {
          text: "No",
        },
      ],
    );
   
  };

  const searchItem = (keyword) => {
    console.log(keyword);

    }

  return (
    <ComponentContainer>
      <View>
        <StatusBar barStyle="light-content" backgroundColor="green" />
      </View>
      <View>
        <FlatList
          data={data}
          ListHeaderComponent={() => <Header searchItem={searchItem} />}
          ListEmptyComponent={() => <Empty />}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TodoList item={item} deleteItem={deleteItem} />
          )}
        />
        <View>
          <AddInput submitHandler={submitHandler} />
        </View>
      </View>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  background-color: green;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;