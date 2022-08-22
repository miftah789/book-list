import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Menu from './components/menu';
import BookList from './components/book-list';
import IBook from './models/book.model';
import EditBookView from './views/edit-book.view';

export default function App() {

  const [data, setData] = useState<IBook[]>([])
  const [isEditBookVisible, setIsEditBookVisible] = useState(false)

  const onAddBook = () => {
    setIsEditBookVisible(true)
  }

  const onCloseEditBook = () => {
    setIsEditBookVisible(false)
  }

  const onSaveBook = (data: IBook) => {
    setData((d) => [...d, data])
    setIsEditBookVisible(false)
  }

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Book List</Text>
        <BookList data={data} />
        <Menu onAddBook={onAddBook}/>

        <EditBookView isVisible={isEditBookVisible}
                      onClose={onCloseEditBook}
                      onSave={onSaveBook}
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 0,
  },
});