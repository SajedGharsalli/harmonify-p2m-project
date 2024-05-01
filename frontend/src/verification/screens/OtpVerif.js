import { StyleSheet, Image,Text, View } from 'react-native'
import React, { useState } from 'react'
import lock from '../../../pics/lock.png'
import CodeInputField from '../components/CodeInputField'
import Button from '../../authentication/components/Button'

import { useNavigation, useRoute } from '@react-navigation/native'
import axios from 'axios'


export default function OtpVerif() {
    const route = useRoute()
    const navigation = useNavigation()

    const { email } = route.params
    
    const [code,setCode] = useState('')
    const MAX_CODE_LENGTH = 4

    const handleOtpVerification = ()=>{
        const otpData ={email : email,otp:code}
        axios.post('http://192.168.1.4:3000/OTP/verify',otpData).then((res) => {
            if (res.data.message===true) {
                console.log("Email verified");
            } else {
                console.log("Email not verified");
            }
        })
        .catch(err => console.log(err));
    }


    // const [timeLeft,setTimeLeft]= useState(null)
    // const [targetTime,setTargetTime]=useState(null)
    // const [activeResend,setActiveResend]= useState(false)

    // const [resendingEmail,setResendEmail]=useState(false)
    // const [resendStatus,setResendStatus]= useState('Resend')


  return (
    <View style={styles.container}>
        <Image source={lock} style={{width : 180 , height : 180}}/>
        <Text style={styles.text}>Account verification</Text>
        <CodeInputField code={code} 
        setCode={setCode} 
        maxLength={MAX_CODE_LENGTH} />
        {code.length ===4 && <Button title={'verify'} onPress={handleOtpVerification}/>}
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems :  'center',
        justifyContent : 'center',
    },
    text : {
        fontSize : 24,
        fontWeight : 'bold',
        color : '#009999'
    }
})