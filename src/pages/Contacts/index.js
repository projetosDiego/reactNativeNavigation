import React from 'react'
import { View, Text } from 'react-native'

export default function Contacts({navigation}){
    return(
        <View style={{marginTop:30, marginLeft:20}}>
            <View>
                <Text>Nome: Joao Silva</Text>
                <Text>Telefone: (21) 98351-0506</Text>
                <Text
                    onPress={() => navigation.navigate('Information',
                        {
                            nome: 'Joao Silva',
                            telefone: '(21) 98351-0506',
                            endereco: 'Rua das Flores',
                            numero: '765',
                            profissao: 'Carpinteiro',
                            email: 'joasilva@carpintaria.com.br'
                        }
                    )}
                >Information...</Text>
            </View>
            <View style={{marginTop:30}}>
                <Text>Nome: Amanda Silva</Text>
                <Text>Telefone: (21) 98351-0506</Text>
                <Text
                    onPress={() => navigation.navigate('Information',
                        {
                            nome: 'Amanda Silva',
                            telefone: '(21) 98351-0506',
                            endereco: 'Rua das Flores',
                            numero: '765',
                            profissao: 'Carpinteiro',
                            email: 'amandasilvaa@carpintaria.com.br'
                        }
                    )}
                >Information...</Text>
            </View>
            
        </View>
    )
}