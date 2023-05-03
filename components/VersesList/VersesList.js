import { View, FlatList, StyleSheet } from "react-native";
import VerseItem from "./VerseItem";

function VersesList({ items }) {
  function renderVerseItem(itemData) {
    const item = itemData.item;

    const verseItemOverviewProps = {
      id: item.id,
      book: item.book,
      chapter: item.chapter,
      verses: item.verses,
    };

    return <VerseItem {...verseItemOverviewProps} />;
  }

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderVerseItem}
      />
    </View>
  );
}

export default VersesList;
