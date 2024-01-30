import React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Correct import statement for FontAwesome
  {/**  onPress={() => alert("AWW button pressed !") replaces them*/}
export default function Buttoncomp({ label, theme,onPresshandler }) {
  if (theme === "primary") {
    return (
      <View style={[styles.butcontr,{ borderWidth:4,borderRadius:18,borderColor:"#ffd33"}]}>
        <Pressable
          style={[styles.button, {backgroundColor: "#fff" }]}
        
          onPress={onPresshandler}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonicon}
          />
          <Text style={[styles.buttonlabel, { color: "#25292e" }]}>
            {label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.butcontr}>
      <Pressable
        style={styles.button}
        onPress={() => alert("AWW button pressed !")}
      >
        <Text style={styles.buttonlabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  butcontr: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#5394",
  },
  buttonlabel: {
    color: "#111",
    fontSize: 16,
    fontWeight: "300",
  },
  buttonicon: {
    paddingLeft: 8,
  },
});
