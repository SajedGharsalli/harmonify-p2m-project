import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Camera } from 'expo-camera';

const CameraComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);


  const getPermissionAsync = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync(); // Request camera permissions
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={Camera.Constants.Type.front}
        autoFocus="on"
        videoStabilizationMode="auto"
      />
    </View>
  );
};

export default CameraComponent;
