
import { Button,View, Text, StyleSheet,Image,ImageBackground,TouchableOpacity } from 'react-native'

import * as ImagePicker from 'expo-image-picker'

import {useState} from 'react'




let imageback 

export default function App() {
  
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBackImage, setSelectedBackImage] = useState(null);


  let openImagePickerAsync = async () => {
    
    let permisionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if(permisionResult.granted === false){
      alert('permiso denegado');
      return;
    }
    
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.canceled || !pickerResult.assets?.length){
      return;
    }
    
    setSelectedImage({ localUri: pickerResult.assets[0].uri });
    
    
  }
  
  let openBackImagePickerAsync = async () => {

    let permisionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if(permisionResult.granted === false){
      alert('permiso denegado');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.canceled || !pickerResult.assets?.length){
      return;
    }

    setSelectedBackImage({ localUri: pickerResult.assets[0].uri });
  }


  imageback = { uri:  selectedBackImage !== null ? selectedBackImage.localUri : 'https://forums.destructoid.com/attachments/otczb45-1-gif.565/' };


  return (
    <View style={styles.container}>

      <ImageBackground source={imageback } style={styles.imageback}>
        
      </ImageBackground>
    
      <Text style={styles.title}>hello world skate     </Text>
    
      <Image source={{ uri: selectedImage !== null ? selectedImage.localUri : 'https://image.api.playstation.com/vulcan/img/cfn/11307kGDEQ-Af4VjkwzfffuEE2DIn5-r1kMp86kg5PyUc7morSMv04cMbucnKivYNnLJl5Y11Ys7pXuLan1YW7zg1XsxKtb0.png' }} 
      style={styles.image} />

    <TouchableOpacity style={styles.button} onPress={() => openImagePickerAsync()}  >
    
      <Text style={styles.buttonText}>puchale play</Text>
    
    </TouchableOpacity>

  <TouchableOpacity style={styles.buttonBack} onPress={() => openBackImagePickerAsync()}  >
    
      <Text style={styles.buttonText}>background</Text>
    
    </TouchableOpacity>



    </View>
  
  )
} 




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',  
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0bdbca',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
    resizeMode: 'cover',

  },
  imageback: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  button: {
    backgroundColor: '#0bdbca',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonBack:{
    backgroundColor: '#0bdbca',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,  
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


