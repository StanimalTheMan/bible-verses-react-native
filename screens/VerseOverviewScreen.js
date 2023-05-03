import { View, Text } from "react-native";
import { TOPICS, VERSES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import VersesList from "../components/VersesList/VersesList";

function VerseOverviewScreen({ route, navigation }) {
  const topicId = route.params.topicId;

  const displayedVerses = VERSES.filter((verseItem) => {
    return verseItem.topicIds.indexOf(topicId) >= 0;
  });

  useLayoutEffect(() => {
    const topicTitle = TOPICS.find((topic) => topic.id == topic.id).title;

    navigation.setOptions({
      title: topicTitle,
    });
  }, [topicId, navigation]);

  return <VersesList items={displayedVerses} />;
}

export default VerseOverviewScreen;
