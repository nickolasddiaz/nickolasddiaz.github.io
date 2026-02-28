import CCNAImg from '$lib/assets/ccna-logo.webp'
import CySAImg from "$lib/assets/CySA+.webp";
import AImg from "$lib/assets/A+.webp";
import advImg from "$lib/assets/Advent_of_Cyber_2022.webp";
import itImg from "$lib/assets/ITF+.webp";
import penTestImg from "$lib/assets/CompTIA_PenTest+_Path.webp";
import securityImg from "$lib/assets/Security+.webp";
import SecEngImg from "$lib/assets/Security Engineer.webp";
import Soc2Img from "$lib/assets/SOC_Level_2.webp";
import Soc1Img from "$lib/assets/SOC_Level_1.webp";
import cyberDefenseImg from "$lib/assets/Cyber Defense_Certificate.webp";
import webFundamentalsImg from "$lib/assets/Web_Fundamentals_Certificate.webp";
import pythonCoreImg from "$lib/assets/Python_Core_Certificate.webp";
import LeetCode150Img from "$lib/assets/Interview_150.webp";
import LeetCode75Img from "$lib/assets/LeetCode_75.webp";
import PenImg from "$lib/assets/CompTIA_PenTest+_Path.webp";

interface MediaItem {
  description: string;
  link: string;
  image_link: string;
  issued_date: Date; // month is 0-indexed
}

export const title =
  "The awards page displays all of my awards, accompanied by clickable links that serve as evidence of my achievement. Each award is listed with a description.";

export const awards: Record<string, MediaItem> = {
  "CCNA": {
    description:
      "Demonstrated skills of network fundamentals, network access, IP connectivity, and IP services.",
    link: "https://www.credly.com/badges/81918252-2c3b-4fe1-8c05-6ebba99745c2/embedded",
    image_link: CCNAImg,
    issued_date: new Date(2025, 5),
  },
  "CompTIA CySA+": {
    description:
      "Cybersecurity Analyst certification, demonstrating expertise in security analytics and monitoring.",
    link: "https://www.credly.com/badges/bcea5607-d8f5-4a96-a005-8f030ec5a41e/embedded",
    image_link: CySAImg,
    issued_date: new Date(2023, 3),
  },
  "CompTIA A+": {
    description:
      "Certification validating entry-level IT skills for support technicians.",
    link: "https://www.credly.com/badges/866f776c-880c-4528-95ae-59845641259e/embedded",
    image_link: AImg,
    issued_date: new Date(2023, 0),
  },
  "CompTIA Security+": {
    description:
      "Global certification that validates the baseline skills necessary to perform core security functions.",
    link: "https://www.credly.com/badges/802704ce-60a7-4823-961d-5caa5c254c6c/embedded",
    image_link: securityImg,
    issued_date: new Date(2023, 0),
  },
  "CompTIA IT Fundamentals+": {
    description:
      "IT certification for foundational knowledge of IT concepts and practices.",
    link: "https://www.credly.com/badges/3e2a3cd8-d061-41bc-a8af-d424aff0d542/embedded",
    image_link: itImg,
    issued_date: new Date(2022, 11),
  },
  "Cyber Defense Certificate": {
    description:
      "Recognizes my skills in defending systems from cyber threats on TryHackMe.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-JORRDMLH57.png",
    image_link: cyberDefenseImg,
    issued_date: new Date(2023, 3),
  },
  "Security Engineer Certificate": {
    description:
      "Recognizes my skills in defending systems from cyber threats on TryHackMe.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-JIJXIEKRAO.pdf",
    image_link: SecEngImg,
    issued_date: new Date(2025, 7),
  },
  "SOC Level 2 Certificate": {
    description:
      "Recognizes my skills in defending systems from cyber threats on TryHackMe.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-YMUWRJIY5T.pdf",
    image_link: Soc2Img,
    issued_date: new Date(2025, 7),
  },
  "SOC Level 1 Certificate": {
    description:
      "Built knowledge on network, system, software security engineering on TryHackMe.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-I7ETUDPSQX.pdf",
    image_link: Soc1Img,
    issued_date: new Date(2025, 6),
  },
  "Web Fundamentals Certificate": {
    description:
      "Hands on skills on security operations, incident response and malware analysis on TryHackMe.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-OZ9ZLKUMU2.png",
    image_link: webFundamentalsImg,
    issued_date: new Date(2022, 7),
  },
  "Junior Penetration Tester Certificate": {
    description:
      "Hands on skills on SOC tools, and monitored endpoints for threats on TryHackMe.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-OY8DJDHOPE.png",
    image_link: penTestImg,
    issued_date: new Date(2022, 6),
  },
  "CompTIA PenTest+ Path": {
    description:
      "Completed the roadmap to obtain the CompTIA PenTest+ certification.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-B2APTAGSPY.png",
    image_link: PenImg,
    issued_date: new Date(2022, 10),
  },
  "Advent of Cyber 2022": {
    description:
      "Awarded for successfully completing the Advent of Cyber challenge on TryHackMe.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-RHEBQX68EP.png",
    image_link: advImg,
    issued_date: new Date(2022, 11),
  },
  "Python Core Certificate": {
    description:
      "Certification for completing the Python Core programming course on SoloLearn.",
    link: "https://www.sololearn.com/certificates/CT-IR4G4YUS",
    image_link: pythonCoreImg,
    issued_date: new Date(2022, 1),
  },
  "LeetCode 150": {
    description:
      "Awarded for successfully completing the Interview LeetCode 150 on Leetcode.",
    link: "https://leetcode.com/medal/?showImg=0&id=9183240",
    image_link: LeetCode150Img,
    issued_date: new Date(2025, 11),
  },
  "LeetCode 75": {
    description:
      "Awarded for successfully completing the LeetCode 75 on Leetcode.",
    link: "https://leetcode.com/medal/?showImg=0&id=8505897",
    image_link: LeetCode75Img,
    issued_date: new Date(2024, 6),
  },
};
