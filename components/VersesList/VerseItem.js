import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

function VerseItem({ id, book, chapter, verses }) {
  const navigation = useNavigation();

  function selectVerseItemHandler() {
    navigation.navigate("VerseDetail", {
      verseId: id,
    });
  }

  let versesText =
    verses.length > 1
      ? `${verses[0]}-${verses[verses.length - 1]}`
      : `${verses[0]}`;

  return (
    <Pressable onPress={selectVerseItemHandler}>
      <View>
        <Text style={styles.text}>
          {book} {chapter}:{versesText}
        </Text>
      </View>
    </Pressable>
  );
}

export default VerseItem;

const styles = StyleSheet.create({
  text: {
    borderColor: "black",
    borderWidth: 8,
    marginVertical: 16,
    textAlign: "center",
  },
});
