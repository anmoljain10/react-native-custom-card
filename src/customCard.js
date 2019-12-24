import React,{ Component } from 'react';
import { View,StyleSheet,Text } from 'react-native'; 

class CustomCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }
    render() {
        return(
            <View style={styles.container}>
                <Text>Hello!</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default CustomCard;