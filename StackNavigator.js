import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Seleccione la Cama',
    };

    render() {
        let camasArr = [];
        for (var i = 1; i <= 20; i++) {
            camasArr.push(i);
        }

        let camas = camasArr.map(index =>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Details', {
                    itemId: index
                })}
                style={{
                    alignItems: 'center',
                    backgroundColor: '#DDDDDD',
                    padding: 10,
                    margin: 10,
                    width: 80
                }}
            ><Text>Cama {index}</Text>
            </TouchableOpacity>
        );

        return (
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                {camas}
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Detalles',
    };
    render() {
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        return (
            <View style={{}}>
                <Text>Cama Numero: {itemId}</Text>

            </View >
        );
    }
}

export default StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
},
    {
        initialRouteName: 'Home',
    }
);