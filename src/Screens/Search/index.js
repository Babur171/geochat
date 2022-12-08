import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableButton } from "@/Components/ToucableButton";
import { Input } from "@/Components/TextInput";
import { styles } from "./styles";
import { Button } from "@/Components/Button";
import { FileComponent } from "./File";
import { UrlComponent } from "./Urls";
import { TrasactionComponent } from "./Trasaction";
import { MiniPrograms } from "./MiniPrograms";

export const Search = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [component, setComponent] = useState("Files");
  let data = [1, 2, 3];

  const handleInputSearch = (value) => {
    setSearch(value);
  };

  const changeComponent = (value) => {
    setComponent(value);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.searchBarView,
          { width: 200, position: "absolute", zIndex: 1, bottom: -5 },
        ]}
      >
        <Button
          buttonText={"Files"}
          backgroundColor={"#4285F4"}
          onPress={() => changeComponent("Files")}
        />
        <Button
          buttonText={"URL"}
          backgroundColor={"#4285F4"}
          onPress={() => changeComponent("URL")}
        />
        <Button
          buttonText={"Transactions"}
          backgroundColor={"#4285F4"}
          onPress={() => changeComponent("Transactions")}
        />
        <Button
          buttonText={"Mini"}
          backgroundColor={"#4285F4"}
          onPress={() => changeComponent("Mini Programs")}
        />
      </View>

      <View style={styles.searchBarView}>
        <Input
          style={styles.searchBar}
          onChangeText={handleInputSearch}
          placeholder={`${component}`}
        />
        <TouchableButton
          style={styles.cancleButton}
          title={"Cancel"}
          onPress={() => console.log("pressed")}
        />
      </View>
      <Text style={styles.contentStyle}>{"No Content"}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {component === "Files" && <FileComponent />}
        {component === "URL" && <UrlComponent />}
        {component === "Transactions" && <TrasactionComponent />}
        {component === "Mini Programs" && <MiniPrograms />}
      </ScrollView>
    </View>
  );
};
