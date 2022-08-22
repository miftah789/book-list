import React, { useState } from "react";
import { StyleSheet, FlatList } from 'react-native';
import IBook from "../models/book.model";
import Book from "./book";

interface IBookListProps {
    data: IBook[]
}

const BookList = (props: IBookListProps) => {
    const [isDone, setDone] = useState(false);

    return (
        <FlatList
            style={styles.container}
            data={props.data}
            renderItem={
                (item: any) => {
                    return (
                        <Book data={item.item} />
                    )
                }
            }
            keyExtractor={(item, index) => item.id}
        />
    );
}

export default BookList

const styles = StyleSheet.create({
    container: {
        // height: '100%', maxHeight: '100%',
        height: 500,
        width: '100%',
        flexDirection: 'column',
        padding: 10,
        overflow: 'scroll',
    },
});