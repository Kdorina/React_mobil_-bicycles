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
      <Text>Kerékpár</Text>

{/*       <div>
            <table>
                <thead>
                  <tr>
                    <th>Name</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.wheel}</td>
                    <td>{item.usage}</td>
                    <td>{item.price}</td>
                  </tr>
                </tbody>
            </table>
            
          </div> */}
        <View style={styles.itemName}>
          <th style={styles.space}>Name</th>
          <th style={styles.space}>Wheel</th>
          <th style={styles.space}>Use age</th>
          <th style={styles.space}>Price</th>
       </View>

      <FlatList
        data={bike}
        renderItem={ ({item}) => (
          <View style={styles.item}>
            <td style={styles.data}>{item.name}</td>
            <td style={styles.data}>{item.wheel}</td>
            <td style={styles.data}>{item.usage}</td>
            <td style={styles.data}>{item.price}</td>
          </View>
          
        )}
         />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemName: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  space: {
    margin:10
  },
  item: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
