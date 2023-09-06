import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


const CountComponent = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>Let's count!</Text>
      <Text>{props.count} </Text>
      <StatusBar style="auto" />
    </View>
  )
};

// export default function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <View style={styles.container}>
//       <Text>Let's play with props</Text>
//       <CountComponent count={count} />
//       <Button
//         title="Press me"
//         onPress={()=>setCount(count+1)}
//       />
      
//     </View>
    
//   );
// }

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  setCount = () => this.setState({count: this.state.count+1})
  render() {
    return (
      <View style={styles.container}>
        <Text>Let's play with props</Text>
        <CountComponent count={this.state.count} />
        <Button
          title="Press me"
          onPress={()=>this.setCount(this.state.count+1)}
        />
        
      </View>
      
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
