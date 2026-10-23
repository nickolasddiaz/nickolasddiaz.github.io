import paperRaw from "#lib/data/papers_data.csv?raw";
import { resolve } from "$app/paths";

import bar_chart from "#lib/assets/emoji/bar_chart.png";
import book from "#lib/assets/emoji/book.png";
import briefcase from "#lib/assets/emoji/briefcase.png";
import classical_building from "#lib/assets/emoji/classical_building.png";
import dancer from "#lib/assets/emoji/dancer.png";
import dove_of_peace from "#lib/assets/emoji/dove_of_peace.png";
import magnet from "#lib/assets/emoji/magnet.png";
import notes from "#lib/assets/emoji/notes.png";
import performing_arts from "#lib/assets/emoji/performing_arts.png";
import shield from "#lib/assets/emoji/shield.png";
import test_tube from "#lib/assets/emoji/test_tube.png";

import speech_balloon from "#lib/assets/emoji/speech_balloon.png";

type emoji = string;
type color = string;
type topic = string;

export interface paper_type {
  emoji: emoji;
  background_color: color;
  pic: string;
}

export const topic_types: Record<topic, paper_type> = {
  Statistics: {
    emoji: "📊",
    background_color: "Beige",
    pic: bar_chart,
  },
  Literature: {
    emoji: "📖",
    background_color: "OrangeRed",
    pic: book,
  },
  Business: {
    emoji: "💼",
    background_color: "SteelBlue",
    pic: briefcase,
  },
  History: {
    emoji: "🏛️",
    background_color: "Wheat",
    pic: classical_building,
  },
  Spanish: {
    emoji: "💃",
    background_color: "BlueViolet",
    pic: dancer,
  },
  Bible: {
    emoji: "🕊️",
    background_color: "LightSeaGreen",
    pic: dove_of_peace,
  },
  Physics: {
    emoji: "🧲",
    background_color: "Khaki",
    pic: magnet,
  },
  Music: {
    emoji: "🎶",
    background_color: "Orchid",
    pic: notes,
  },
  Ethics: {
    emoji: "🎭",
    background_color: "Turquoise",
    pic: performing_arts,
  },
  Cybersecurity: {
    emoji: "🛡️",
    background_color: "BlueViolet",
    pic: shield,
  },
  Communication: {
    emoji: "💬",
    background_color: "SkyBlue",
    pic: speech_balloon,
  },
  Chemistry: {
    emoji: "🧪",
    background_color: "CornflowerBlue",
    pic: test_tube,
  },
};

export interface Paper {
  title: string;
  url: string;
  date: Temporal.PlainDate;
  topic: string;
  page_count: number;
  word_count: number;
}

export const papers: Paper[] = [];
export let total_pages: number = 0;
export let total_words: number = 0;

for (const line of paperRaw.split(/\r?\n/)) {
  if (line === "") {
    continue;
  }
  const values = line.split(",");

  let title = values[0]!;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const url = resolve(`/papers/${encodeURIComponent(title)}.pdf` as any);
  title = title.replace("_", "'");
  const date = Temporal.PlainDate.from(values[1]!); // ISO 8601 format (YYYY-MM-DD)
  const topic = values[2]!;
  const page_count = Number(values[3]);
  const word_count = Number(values[4]);
  total_pages += page_count;
  total_words += word_count;

  const newPaper: Paper = { title, url, date, topic, page_count, word_count };
  papers.push(newPaper);
}

export const FILTYPE = {
  Newest: 1,
  Oldest: 2,
  Page: 3,
  Word: 4,
  Alph: 5,
  Rev: 6,
} as const;

export function sortPapers(papers: Paper[], filterType: number): Paper[] {
  return [...papers].sort((a, b) => {
    switch (filterType) {
      case FILTYPE.Newest:
        return Temporal.PlainDate.compare(b.date, a.date);
      case FILTYPE.Oldest:
        return Temporal.PlainDate.compare(a.date, b.date);
      case FILTYPE.Page:
        return b.page_count - a.page_count;
      case FILTYPE.Word:
        return b.word_count - a.word_count;
      case FILTYPE.Alph:
        return a.title.localeCompare(b.title);
      case FILTYPE.Rev:
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });
}
