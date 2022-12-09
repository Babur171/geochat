import React, { useState } from "react"
import { useEffect } from "react";
import {
    View,
    Text,
    Pressable,
    Image,
    Switch,
    TextInput,
    FlatList,
} from "react-native"
import CalendarPicker from 'react-native-calendar-picker';

import { styles } from "./styles";
export const SearchChatHistory = ({ navigation }) => {
    const [selectedDate, SetSelectedData] = useState('');

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    const handleChange = async (date) => {
        SetSelectedData(date)
    }

    const minDate = new Date(); // Today
    const maxDate = new Date(2022, 12, 13);
  



    return (
        <View style={styles.container}>
            <View style={[styles.inputText, { paddingHorizontal: 20, paddingVertical: 10 }]}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/back1.png")} style={styles.m12} />
                </Pressable>
                <Text style={{ fontSize: 17, color: "#000" }}>Search Chat History</Text>
                <Text />
            </View>
            <View>
                <CalendarPicker
                    onDateChange={handleChange}
                    weekdays={days}
                    showDayStragglers={true}
                    previousTitle={' '}
                    nextTitle={' '}
                    todayBackgroundColor={'#39F229'}
                    todayTextStyle={{ color: "#fff" }}
                    dayLabelsWrapper={{ backgroundColor: "#eaf0f9", width: '100%', top: -20, borderBottomWidth: 0, borderTopWidth:0, opacity: 0.7, }}
                    startFromMonday={true}
                    allowRangeSelection={true}
                    monthTitleStyle={{color: "#D9E7FD"}}
                    yearTitleStyle= {{color: "#D9E7FD"}}
                />
            </View>

        </View>
    );
};

