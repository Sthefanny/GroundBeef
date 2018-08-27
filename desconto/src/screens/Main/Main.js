import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import MainList from '../../components/List/MainList';
import BurguerImage from '../../assets/burguer.png';

export default class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={BurguerImage}
                    style={styles.logo}
                />
                <MainList />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 360,
        height: 324,
    }
});