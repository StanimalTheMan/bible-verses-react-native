import { View, Text } from "react-native";
import { VERSES } from "../data/dummy-data";

function VerseDetailScreen({ route, navigation }) {
  const verseId = route.params.verseId;

  const selectedVerse = VERSES.find((verse) => verse.id === verseId);

  let versesText =
    selectedVerse.verses.length > 1
      ? `${selectedVerse.verses[0]}-${verses[verses.length - 1]}`
      : `${selectedVerse.verses[0]}`;

  return (
    <View>
      <View>
        <Text>{selectedVerse.content}</Text>
      </View>
      <View>
        <Text>
          - {selectedVerse.book} {selectedVerse.chapter}:{versesText}{" "}
          {selectedVerse.version}
        </Text>
      </View>
    </View>
  );
}

export default VerseDetailScreen;
