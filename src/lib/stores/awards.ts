import AWS_Dev from "#lib/assets/AWS_Certified_Developer.webp";
import CCNAImg from "#lib/assets/ccna-logo.webp";
import CySAImg from "#lib/assets/CySA+.webp";
import AImg from "#lib/assets/A+.webp";
import AdvImg from "#lib/assets/Advent_of_Cyber_2022.webp";
import ITFImg from "#lib/assets/ITF+.webp";
import PenTestImg from "#lib/assets/CompTIA_PenTest+_Path.webp";
import SecurityImg from "#lib/assets/Security+.webp";
import SecEngImg from "#lib/assets/Security Engineer.webp";
import Soc2Img from "#lib/assets/SOC_Level_2.webp";
import Soc1Img from "#lib/assets/SOC_Level_1.webp";
import CyberDefenseImg from "#lib/assets/Cyber Defense_Certificate.webp";
import WebFundamentalsImg from "#lib/assets/Web_Fundamentals_Certificate.webp";
import PythonCoreImg from "#lib/assets/Python_Core_Certificate.webp";
import LeetCode150Img from "#lib/assets/Interview_150.webp";
import LeetCode75Img from "#lib/assets/LeetCode_75.webp";
import PenImg from "#lib/assets/CompTIA_PenTest+_Path.webp";
import CitiImg from "#lib/assets/citi.webp";
import WalmartImg from "#lib/assets/walmart.webp";
import CommoonwealthImg from "#lib/assets/commonwealth_bank.webp";

interface MediaItem {
  description: string;
  link: string;
  image_link: string;
  issued_date: Temporal.PlainDate; // month is 1-indexed
}

export const title =
  "The awards page displays all of my awards, accompanied by clickable links that serve as evidence of my achievement. Each award is listed with a description.";

function getdate(year: number, month: number): Temporal.PlainDate {
  return new Temporal.PlainDate(year, month, 1);
}

export const awards: Record<string, MediaItem> = {
  "Citi Bank Simulation": {
    description: "Technology Software Development Job Simulation",
    link: "https://www.theforage.com/completion-certificates/8eNRcRqBZM9HLvwGw/2jxESPvorR7fmypXj_8eNRcRqBZM9HLvwGw_6a511c49d283f5ca6ab23dac_1783982601182_completion_certificate.pdf",
    image_link: CitiImg,
    issued_date: getdate(2026, 7),
  },
  "Forage Walmart Simulation": {
    description: "Advanced Software Engineering Job Simulation",
    link: "https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_6a511c49d283f5ca6ab23dac_1785971578873_completion_certificate.pdf",
    image_link: WalmartImg,
    issued_date: getdate(2026, 8),
  },
  "Common Wealth Bank Simulation": {
    description: "Tech Explorer Job Simulation",
    link: "https://www.theforage.com/completion-certificates/2sNmYuurxgpFYawco/GYcpProEZQFCiSmT6_2sNmYuurxgpFYawco_6a511c49d283f5ca6ab23dac_1785970587561_completion_certificate.pdf",
    image_link: CommoonwealthImg,
    issued_date: getdate(2026, 8),
  },
  "AWS Certified Developer": {
    description:
      "Validates my ability to develop, test, deploy, and debug cloud-native applications on AWS.",
    link: "https://www.credly.com/badges/c4027898-2975-4061-b33f-6fef885da965/embedded",
    image_link: AWS_Dev,
    issued_date: getdate(2026, 8),
  },
  CCNA: {
    description:
      "Demonstrated skills of network fundamentals, network access, IP connectivity, and IP services.",
    link: "https://www.credly.com/badges/81918252-2c3b-4fe1-8c05-6ebba99745c2/embedded",
    image_link: CCNAImg,
    issued_date: getdate(2025, 7),
  },
  "CompTIA CySA+": {
    description:
      "Cybersecurity Analyst certification, demonstrating expertise in security analytics and monitoring.",
    link: "https://www.credly.com/badges/bcea5607-d8f5-4a96-a005-8f030ec5a41e/embedded",
    image_link: CySAImg,
    issued_date: getdate(2023, 4),
  },
  "CompTIA A+": {
    description:
      "Certification validating entry-level IT skills for support technicians.",
    link: "https://www.credly.com/badges/866f776c-880c-4528-95ae-59845641259e/embedded",
    image_link: AImg,
    issued_date: getdate(2023, 1),
  },
  "CompTIA Security+": {
    description:
      "Global certification that validates the baseline skills necessary to perform core security functions.",
    link: "https://www.credly.com/badges/802704ce-60a7-4823-961d-5caa5c254c6c/embedded",
    image_link: SecurityImg,
    issued_date: getdate(2023, 1),
  },
  "CompTIA IT Fundamentals+": {
    description:
      "IT certification for foundational knowledge of IT concepts and practices.",
    link: "https://www.credly.com/badges/3e2a3cd8-d061-41bc-a8af-d424aff0d542/embedded",
    image_link: ITFImg,
    issued_date: getdate(2022, 12),
  },
  "Cyber Defense Certificate": {
    description:
      "Recognizes my skills in defending systems from cyber threats on TryHackMe.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-JORRDMLH57.png",
    image_link: CyberDefenseImg,
    issued_date: getdate(2023, 4),
  },
  "Security Engineer Certificate": {
    description:
      "Recognizes my skills in defending systems from cyber threats on TryHackMe.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-JIJXIEKRAO.pdf",
    image_link: SecEngImg,
    issued_date: getdate(2025, 8),
  },
  "SOC Level 2 Certificate": {
    description:
      "Recognizes my skills in defending systems from cyber threats on TryHackMe.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-YMUWRJIY5T.pdf",
    image_link: Soc2Img,
    issued_date: getdate(2025, 8),
  },
  "SOC Level 1 Certificate": {
    description:
      "Built knowledge on network, system, software security engineering on TryHackMe.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-I7ETUDPSQX.pdf",
    image_link: Soc1Img,
    issued_date: getdate(2025, 7),
  },
  "Web Fundamentals Certificate": {
    description:
      "Hands on skills on security operations, incident response and malware analysis on TryHackMe.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-OZ9ZLKUMU2.png",
    image_link: WebFundamentalsImg,
    issued_date: getdate(2022, 8),
  },
  "Junior Penetration Tester Certificate": {
    description:
      "Hands on skills on SOC tools, and monitored endpoints for threats on TryHackMe.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-OY8DJDHOPE.png",
    image_link: PenTestImg,
    issued_date: getdate(2022, 7),
  },
  "CompTIA PenTest+ Path": {
    description:
      "Completed the roadmap to obtain the CompTIA PenTest+ certification.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-B2APTAGSPY.png",
    image_link: PenImg,
    issued_date: getdate(2022, 11),
  },
  "Advent of Cyber 2022": {
    description:
      "Awarded for successfully completing the Advent of Cyber challenge on TryHackMe.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-RHEBQX68EP.png",
    image_link: AdvImg,
    issued_date: getdate(2022, 12),
  },
  "Python Core Certificate": {
    description:
      "Certification for completing the Python Core programming course on SoloLearn.",
    link: "https://www.sololearn.com/certificates/CT-IR4G4YUS",
    image_link: PythonCoreImg,
    issued_date: getdate(2022, 2),
  },
  "LeetCode 150": {
    description:
      "Awarded for successfully completing the Interview LeetCode 150 on Leetcode.",
    link: "https://leetcode.com/medal/?showImg=0&id=9183240",
    image_link: LeetCode150Img,
    issued_date: getdate(2025, 12),
  },
  "LeetCode 75": {
    description:
      "Awarded for successfully completing the LeetCode 75 on Leetcode.",
    link: "https://leetcode.com/medal/?showImg=0&id=8505897",
    image_link: LeetCode75Img,
    issued_date: getdate(2024, 7),
  },
};
