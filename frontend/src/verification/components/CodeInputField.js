import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CodeInputField({ code , setCode, maxLength }) {
  const codeDigitsArray = new Array(maxLength).fill(0);

  const [IsFocused,setIsFocused] = useState(false)
  const textInputRef = useRef(null);

  const handleOnBlur = () => {
    setIsFocused(true)
    textInputRef?.current?.focus()
  };
  const handleOnPress = ()=>{
    setIsFocused(false)
  }
  const toCodeDigit = (value, index) => {
    const emptyInputChar = ' ';
    const digit = code && code[index] ? code[index] : emptyInputChar;
    return (
      <View style={styles.box} key={index}>
        <Text style={styles.text}>{digit}</Text>
      </View>
    );
  };

  return (
    <View style={styles.inputSection}>
      <Pressable style={styles.inputContainer} onPress={handleOnPress}>
        {codeDigitsArray.map(toCodeDigit)}
      </Pressable>
      <TextInput
        style={styles.inputText}
        value={code}
        onChangeText={setCode}
        maxLength={maxLength}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        returnKeyType="done"
        ref={textInputRef}
        onBlur={handleOnBlur}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  inputText: {
    padding: 12,
    borderRadius: 5,
    borderWidth: 3,
    width: 300,
    position: 'absolute', 
    opacity: 0, 
  },
  inputContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  box: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
