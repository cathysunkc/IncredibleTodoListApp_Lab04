/*
 * Mobile Application Development - CPRG303B
 * Lab Assignment 4: Event Handling & State Lifting
 * Name: Cathy Sun
 * Date: 2024 Feb 28
 */

import React from 'react';

import {
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView  } from 'react-native';

function ToDoList({ tasks }) {
    return (     
        <ScrollView>
          {tasks.map((item, index) => (            
              <Pressable key={index}>
                <View style={[styles.task]}>
                  <Text style={styles.taskText}>{item}</Text>
                </View>
              </Pressable>                     
          ))}
        </ScrollView>  
    );
}

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },    
  });

export default ToDoList;