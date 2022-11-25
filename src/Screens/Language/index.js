import React, { useState } from "react"
import {
    View,
    Text,
    TouchableOpacity,
    Pressable,
    Image,
    ImageBackground,
    ScrollView
} from "react-native"
import { styles } from "./styles";
import { Input } from "@/Components/TextInput";
export const Language = ({ navigation }) => {
    const [serachCountry, setSearchCountry] = useState("");
    const handleInputCountry = (value) => {
        setSearchCountry(value)
    }
    const data = [
        { id: 1, name: "Afghanistan [es)" },
        { id: 2, name: "Aland Islands (+358)" },
        { id: 3, name: "Albania (+355)" },
        { id: 4, name: "Algeria (+213) " },
        { id: 5, name: "American Samoa (+1684) " },
        { id: 6, name: "Andorra (+376) " },
        { id: 7, name: "Angola (+244) )" },
        { id: 8, name: "Anguilla (+1264) " },
        { id: 9, name: "Antarctica 672) " },
        { id: 10, name: "Antigua Barbuda 1268) " },
        { id: 11, name: "Argentina (+54) " },
        { id: 12, name: "Armenia (+374) " },
        { id: 13, name: "Aruba (+297)" },
        { id: 14, name: "Australia (+61) " },
        { id: 15, name: "Austria (+43) " },
        { id: 16, name: "Azerbaijan (+994) " },
        { id: 11, name: "Argentina (+54) " },
        { id: 12, name: "Armenia (+374) " },
        { id: 13, name: "Aruba (+297)" },
        { id: 14, name: "Australia (+61) " },
        { id: 15, name: "Austria (+43) " },
        { id: 16, name: "Azerbaijan (+994) " }
    ]

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 30, marginBottom: 20 }}>
                <View style={styles.mr10}>
                    <Input
                        placeholder='Search your country'
                        onChangeText={handleInputCountry}
                        style={styles.inputStyle}
                    />
                </View>
            </View>
            <View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ marginHorizontal: 30 }}>
                        {data.map((item) => (
                            <Text style={styles.countries}>{item.name}</Text>
                        ))}

                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

