import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';


export default () => {

  const buscarImagen = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });
      if (!result.cancelled) {
        return result.base64
      }
    } catch (E) {
      console.log(E);
    }
  }

  return [buscarImagen];
}