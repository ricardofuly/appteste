import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { styles } from "./style";

export const Parceiros = () =>{
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getParceiros = async () =>{
        try{
            const response = await fetch('./api.json');
            const json = await response.json();
            setData(json.parceiros);
        }catch (error){
            console.error(error);
        }finally{
            setLoading(false)
        }
    }

    useEffect(() =>{
        getParceiros();
    }, {});

    return(
        <View>
            (isLoading ? (
                <ActivityIndicator/>
                ) : (
                    <FlatList style ={styles.listaParceiros}
                        data={data}
                        keyExtractor={({id}) => id}
                        renderItem={({item}) => (
                            <Text>
                                {item.logo}, {item.nome}
                            </Text>
                        )}
                    />
                )
                
            )
        </View>
    )
}