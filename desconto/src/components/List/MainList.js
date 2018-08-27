import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import MainListItem from './MainListItem';
import PointedLine from '../../assets/pointedLine.png';

export default class MainList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MainListItem value='PROMOÇÃO DO DIA' />
                <Image style={styles.pointedLine} source={PointedLine} />
                <MainListItem value='CUPONS PROMOCIONAIS' />
                <Image style={styles.pointedLine} source={PointedLine} />
                <MainListItem value='CARDÁPIO ONLINE' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffbb00',
    },
    pointedLine: {
        width: '95%',
        alignSelf: 'center',
    }
});