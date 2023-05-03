import { FlatList } from "react-native";

import { TOPICS } from "../data/dummy-data";
import TopicGridTitle from "../components/TopicGridTile";

function TopicsScreen({ navigation }) {
  function renderTopicItem(itemData) {
    function pressHandler() {
      navigation.navigate("VerseOverview", {
        topicId: itemData.item.id,
      });
    }

    return (
      <TopicGridTitle title={itemData.item.title} onPress={pressHandler} />
    );
  }

  return (
    <FlatList
      data={TOPICS}
      keyExtractor={(item) => item.id}
      renderItem={renderTopicItem}
      numColumns={2}
    />
  );
}

export default TopicsScreen;
