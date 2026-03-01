import github from "$lib/assets/social_media/github.svg";
import linkedin from "$lib/assets/social_media/linkedin.svg";
import handshake from "$lib/assets/social_media/handshake.svg";
import leetcode from "$lib/assets/social_media/leetcode.svg";



interface media {
    title: string,
    img: string,
    link: string
}

export default [
    {
        "title": "Github",
        "img": github,
        "link": "https://github.com/nickolasddiaz"
    },
    {
        "title": "Linkedin",
        "img": linkedin,
        "link": "https://www.linkedin.com/in/nickolas-diaz-937222242/"
    },
    {
        "title": "Handshake",
        "img": handshake,
        "link": "https://floridapoly.joinhandshake.com/profiles/hezpcr"
    },
    {
        "title": "Leetcode",
        "img": leetcode,
        "link": "https://leetcode.com/u/nickolasddiaz/"
    },

] as media[]