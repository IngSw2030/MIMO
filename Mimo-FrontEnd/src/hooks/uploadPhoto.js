import {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';

export default () => {

    const [imagen,setImagen] = useState('');

    const escogerImagen = async () => {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          base64: true,
        });
        if (!result.cancelled) {
            setImagen(result.base64)
            console.log("entre")
        }
      } catch (E) {
        console.log(E);
    }
}
    return [escogerImagen,imagen]; 
};