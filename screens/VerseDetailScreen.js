import { View, Text, StyleSheet } from "react-native";
import { VERSES } from "../data/dummy-data";

function VerseDetailScreen({ route, navigation }) {
  const verseId = route.params.verseId;

  const selectedVerse = VERSES.find((verse) => verse.id === verseId);

  let versesText =
    selectedVerse.verses.length > 1
      ? `${selectedVerse.verses[0]}-${verses[verses.length - 1]}`
      : `${selectedVerse.verses[0]}`;

  return (
    <View style={styles.verseContainer}>
      <View>
        <Text>{selectedVerse.content}</Text>
      </View>
      <View>
        <Text style={styles.verse}>
          - {selectedVerse.book} {selectedVerse.chapter}:{versesText}{" "}
          {selectedVerse.version}
        </Text>
      </View>
    </View>
  );
}

export default VerseDetailScreen;

const styles = StyleSheet.create({
  verseContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  verse: {
    fontWeight: "bold",
  },
});
