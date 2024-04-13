import { StyleSheet, View, FlatList, Text, Animated, useWindowDimensions } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Choose from './Choose'
import GenderPicker from './GenderPicker'
import Button from '../components/Button'

import { useNavigation, useRoute } from '@react-navigation/native'



export default Continue = () => {
    const route = useRoute()
    const navigation = useNavigation()

    const { email } = route.params

    const { width } = useWindowDimensions();

    const componentsArray = [
        { key: 'genderPicker', component: GenderPicker },
        { key: 'choose', component: Choose },
    ];

    const [age, setAge] = useState(null);
    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [Gender, setGender] = useState(null);

    const items = { age: age, weight: weight, height: height }
    const setItems = { setAge: setAge, setWeight: setWeight, setHeight: setHeight }

    const render = (item) => {
        const Component = item.component;
        return (
            <View style={[styles.slideContainer, { width: width }]}>
                <Component items={items} setItems={setItems} Gender={Gender} setGender={setGender} />
            </View>)
    }


    const handleNext = () => {
        const userData = {
            email: email,
            age: age,
            weight: weight,
            height: height,
            sex: Gender
        }
        axios.put('http://192.168.1.5:3000/user/update', userData).then((res) => {
            console.log(res.data)
            Setmess("register successful")
        }).catch((err) => { console.log(err) })
    }


    return (
        <View style={styles.container} >
            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>Let's complete your profile</Text>
                    <Text style={styles.subtitle}>It will help us get to know you better</Text>
                </View>
                <FlatList data={componentsArray}
                    renderItem={({ item }) => render(item)}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    scrollEventThrottle={32}
                />
            </View>
            <View style={{ position: 'absolute', bottom: 120, width: 150, alignSelf: 'center' }} >
                {age && weight && height && Gender && <Button title={'Next'} onPress={() => handleNext()} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        marginBottom: 20,
        textAlign: 'center',
        marginLeft: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#3B3F42',
    },
    subtitle: {
        fontSize: 20,
        color: '#808080',
        marginTop: 5,
    },
    slideContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
})