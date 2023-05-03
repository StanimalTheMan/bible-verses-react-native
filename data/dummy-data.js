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
  new Verse(
    "v2",
    ["t1"],
    "1 Corinthians",
    6,
    [18, 19, 20],
    "Flee from sexual morality.  Every other sin a person commits is outside the body, but the sexually immoral person sins against his own body.  Or do you not know that your body is a temple of the Holy Spirit within you, whom you have from God?  You are not your own, for you were bought with a price.  So glorify God in your body.",
    "ESV"
  ),
];
