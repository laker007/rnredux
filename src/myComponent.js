import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet,Button} from 'react-native';

export default class myComponent extends Component {
    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <Text>{this.props.text}</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={this.props.name}
                    onChangeText={this.props.onChange}/>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    input: {
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        margin:10,
        padding:10,
        height: 50,
        width: 300,
        fontSize:15,
    }
})
