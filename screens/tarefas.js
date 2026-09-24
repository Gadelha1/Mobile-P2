import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import styles from '../styles/tarefasStyles';

export default function TarefasScreen() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () =>{
    if (!task || !task.trim()) return;
    setTasks(prev => [...prev, { id: Math.random().toString(), value: task.trim() }]);
    setTask('');
  }

  const removeTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return(
    <View style={styles.app}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Adicionar Tarefa'
          onChangeText={setTask}
          value={task}
        />

      <Pressable style={styles.btn}
        onPress={addTask}>
        <Text style={{color:'#fff', fontWeight:'600'}}>Adicionar</Text>
      </Pressable>
      </View>

      <View style={styles.list}>
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({item})=>(
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>{item.value}</Text>
              <Pressable style={styles.removeBtn} onPress={() => removeTask(item.id)}>
                <Text style={styles.removeBtnText}>×</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  )
}
