import Topic from "../models/topic";
import Verse from "../models/verse";

export const TOPICS = [
  new Topic("t1", "Lust & Sex"),
  new Topic("t1", "Lust & Sex"),
];

export const VERSES = [
  new Verse(
    "v1",
    ["t1"],
    "Matthew",
    5,
    [28],
    "But I say to you that everyone who looks at a woman with lustful intent has already committed adultery with her in his heart.",
    "ESV"
  ),
];
