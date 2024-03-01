/*
 * Mobile Application Development - CPRG303B
 * Lab Assignment 4: Event Handling & State Lifting
 * Name: Cathy Sun
 * Date: 2024 Feb 28
 */

import React from 'react';

import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Text
  } from 'react-native';


function ToDoForm( {addTask} ) {

    const [taskText, setTaskText] = React.useState('');

    const handlePress = () => {
        addTask(taskText);
        setTaskText('');
    }

    return (
        <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Add a new task..."
              onChangeText={(text) => setTaskText(text)}
              value={taskText}
            />
            <Button title="Add Task" onPress={handlePress} />
        </View>   
    );
}


const styles = StyleSheet.create({    
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });

export default ToDoForm;