import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

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
        <Text>
          <Text>
            {book} {chapter}:{versesText}
          </Text>
        </Text>
      </View>
    </Pressable>
  );
}

export default VerseItem;
