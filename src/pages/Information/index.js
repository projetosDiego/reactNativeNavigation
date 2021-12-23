import React from 'react'
import { View, Text } from 'react-native'

export default function Information({ route }){
    return(
        <View style={{marginTop:30, marginLeft:20}}>
            <Text>Nome: {route.params?.nome}</Text>
            <Text>Telefone: {route.params?.telefone}</Text>
            <Text>Endereco: {route.params?.endereco}</Text>
            <Text>Numero: {route.params?.numero}</Text>
            <Text>Profissao: {route.params?.profissao}</Text>
            <Text>e-mail: {route.params?.email}</Text>
        </View>
    )
}