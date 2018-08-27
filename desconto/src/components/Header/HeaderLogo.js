import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class HeaderLogo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 54,
    }
});