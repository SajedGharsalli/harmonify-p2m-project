import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const OnboardingItem = ({ item, navigation }) => {
    const { height, width } = useWindowDimensions();

    return (
        <View style={[styles.container, { width: width }]}>
            <View style={{ alignItems: 'center', justifyItems: 'center', height: height * 0.4 }} >
                <Image source={item.image} style={[styles.image, { width: width * 0.8 }]} resizeMode="contain" />
            </View>
            <View style={{ flex: 0.3, width: width * 0.9 }}>
                <Text style={styles.title} >{item.title}</Text>
                <Text style={styles.description} >{item.description}</Text>
            </View>
            <Button index={item.id} onPress={()=>navigation.navigate('Register')}/>
        </View>
    );
}

export default OnboardingItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    image: {
        flex: 0.7,
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#006080'
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
    }
});
