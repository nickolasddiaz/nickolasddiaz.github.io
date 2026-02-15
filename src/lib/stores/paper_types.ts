import paperRaw from '$lib/data/papers_data.csv?raw'; 
import { resolve } from '$app/paths';


type emoji = string;
type color = string;
type topic = string;

export interface paper_type{
    emoji: emoji,
    background_color: color
}


export const topic_types: Record<topic, paper_type> = {
    "Literature": {
        emoji: "📖",
        background_color: "OrangeRed"
    },
    "Business": {
        emoji: "💼",
        background_color: "SteelBlue"
    },
    "History": {
        emoji: "🏛️",
        background_color: "Wheat"
    },
    "Communication": {
        emoji: "💬",
        background_color: "SkyBlue"
    },
    "Physics": {
        emoji: "🧲",
        background_color: "Khaki"
    },
    "Ethics": {
        emoji: "🎭",
        background_color: "Turquoise"
    },
    "Bible": {
        emoji: "🕊️",
        background_color: "LightSeaGreen"
    },
    "Cybersecurity": {
        emoji: "🛡️",
        background_color: "BlueViolet"
    },
    "Chemistry": {
        emoji: "🧪",
        background_color: "CornflowerBlue"
    },
    "Music": {
        emoji: "🎶",
        background_color: "Orchid"
    },
    "Spanish": {
        emoji: "💃",
        background_color: "BlueViolet"
    },
    "Statistics": {
        emoji: "📊",
        background_color: "Beige"
    }
    
};


export interface Paper {
    title: string;
    url: string;
    date: Date;
    topic: string;
    page_count: number;
    word_count: number;
}

export const papers: Paper[] = [];
export let total_pages: number = 0;
export let total_words: number = 0;

for (const line of paperRaw.split(/\r?\n/)) {        
    const values = line.split(','); 
        
    let title = values[0];
    const url = resolve(`/papers/${encodeURIComponent(title)}.pdf`);
    title = title.replace('_',"'");
    const date = new Date(values[1]);
    const topic = values[2];
    const page_count = Number(values[3]);
    const word_count = Number(values[4]);
    total_pages += page_count;
    total_words += word_count;
        
    const newPaper: Paper = {title, url, date, topic, page_count, word_count};
    papers.push(newPaper);
}


export const FILTYPE = {
    Newest: 1,
    Oldest: 2,
    Page: 3,
    Word: 4,
    Alph: 5,
    Rev: 6
} as const;


export function sortPapers(papers: Paper[], filterType: number): Paper[] {
    return [...papers].sort((a, b) => {
        switch (filterType) {
            case FILTYPE.Newest:
                return b.date.getTime() - a.date.getTime();
            case FILTYPE.Oldest:
                return a.date.getTime() - b.date.getTime();
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