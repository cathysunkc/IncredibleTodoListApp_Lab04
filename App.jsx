/*
 * Mobile Application Development - CPRG303B
 * Lab Assignment 4: Event Handling & State Lifting
 * Name: Cathy Sun
 * Date: 2024 Feb 28
 */

import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {

  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const handleAddTask = (taskText) => {
    if (!tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  }
  
  return (
    <>
      <Text style={{color: "#03b1fc", fontSize: 20, textAlign: 'center', padding: 5}}>
            To Do List App
      </Text>
      <Text style={{color: "black", fontSize: 16, borderColor: "#ccc", backgroundColor: "#fccf03", padding: 5}}>
            Items:
      </Text>
      <SafeAreaView>          
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={handleAddTask} />      
      </SafeAreaView>
    </>
  );
}

export default App;
