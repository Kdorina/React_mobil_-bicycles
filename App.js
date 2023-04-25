import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';

export default function App() {
  const[bike, setBikes]=useState([]);
  function bikes(){

    let host = "http://localhost:8000/bikes";

    fetch(host).then(response => response.json()).then(
      result=> {
        console.log(result);
        setBikes(result);
      });
  }

  useEffect( () => {
    bikes();
  }, []);

  return (
  
    

    <View style={styles.container}>

      <Text style={styles.title}>Kerékpár</Text>

        <View style={styles.content}>

          <View style={styles.itemName}>
            <p style={styles.space}>Name</p>
            <p style={styles.space}>Wheel</p>
            <p style={styles.space}>Use age</p>
            <p style={styles.space}>Price</p>
          </View>
          
                <FlatList  style={styles.background}
          data={bike}
          renderItem={ ({item}) => (
            <View style={styles.items}>
          
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.wheel}</Text>
                <Text style={styles.text}>{item.usage}</Text>
                <Text style={styles.text}>{item.price}</Text>
          
            </View>
          
          )}
           />
                
                <StatusBar style="auto" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A90E2',
   justifyContent:'center',
   alignItems:'center'
   
  },
  title:{
    textAlign:'center',
    marginTop:60,
    fontSize:20,
    fontWeight:500,
  },
  content:{
    flex: 1,
    margin:30,
    marginTop:50,
    fontFamily:'arial',
    
  },
  itemName: {
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor:'#afcaeb',
    borderRadius:25,
  },
  space: {
    margin:5,
    padding:10,
  },

  items: {
    flexDirection:'row',
    justifyContent:'space-between',     
  
  },

  background:{
    display:'flex',
    marginTop:10,
    backgroundColor:'#afcaeb',
    borderRadius:25,
    maxHeight:350,

  },
  text: {
    margin:5,
    flex:1,
    padding:10,
    justifyContent:'center'

  },
  
});
