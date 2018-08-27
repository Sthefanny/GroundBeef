import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import BackgroundImage from '../../assets/burguersBackground.png';

function MainListItem(props) {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={BackgroundImage}
                imageStyle={{ resizeMode: 'cover' }}
            >
                <Text style={styles.text}>{props.value}</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    backgroundImage: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffbb00',
        width: '100%',
        height: 60,
    },
    text: {
        fontSize: 16
    }
});

export default MainListItem;