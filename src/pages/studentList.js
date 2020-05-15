import React, {Component} from 'react';
import firestore from '../services/firestore';
import firebase from 'firebase';
import { Stylesheet, Text, View, FlatList } from 'react-native';
import React, {useState} from 'react';

class StudentList extends React.Component {
  render() {
    const students =[{"name":"test1"},{"name":"test2"}];
    const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

    return (
      <div>
      {listItems }
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'blue',
    fontSize: 24,
  },
});
export default StudentList;