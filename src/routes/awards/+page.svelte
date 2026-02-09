<script lang="ts">
   	import MainContent from "$lib/components/MainContent.svelte";

    import CySAImg from '$lib/assets/CompTIA_CySA+.png';
    import AImg from '$lib/assets/CompTIA_A+.png';
    import advImg from '$lib/assets/Advent_of_Cyber_2022.png';
    import itImg from '$lib/assets/CompTIA_IT_Fundamentals+.png';
    import penTestImg from '$lib/assets/CompTIA_PenTest+_Path.png';
    import securityImg from '$lib/assets/CompTIA_Security+.png';
    import cyberDefenseImg from '$lib/assets/Cyber Defense_Certificate.png';
    import webFundamentalsImg from '$lib/assets/Web_Fundamentals_Certificate.png';
    import pythonCoreImg from '$lib/assets/Python_Core_Certificate.png';
    import LeetCodeImg from '$lib/assets/LeetCode_75.png';
    import PenImg from '$lib/assets/CompTIA_PenTest+_Path.png';


    interface MediaItem {
		description: string;
		link: string;
		image_link: string;
		issued_date: string;
	}

	const title = "The awards page displays all of my awards, accompanied by clickable links that serve as evidence of my achievement. Each award is listed with a description.";

	const awards: Record<string, MediaItem> = {
		"CompTIA CySA+": {
			description: "Cybersecurity Analyst certification, demonstrating expertise in security analytics and monitoring.",
			link: "https://www.credly.com/badges/bcea5607-d8f5-4a96-a005-8f030ec5a41e/embedded",
			image_link: CySAImg,
			issued_date: "April 2023"
		},
		"CompTIA A+": {
			description: "Certification validating entry-level IT skills for support technicians.",
			link: "https://www.credly.com/badges/866f776c-880c-4528-95ae-59845641259e/embedded",
			image_link: AImg,
			issued_date: "January 2023"
		},
		"CompTIA Security+": {
			description: "Global certification that validates the baseline skills necessary to perform core security functions.",
			link: "https://www.credly.com/badges/802704ce-60a7-4823-961d-5caa5c254c6c/embedded",
			image_link: securityImg,
			issued_date: "January 2023"
		},
		"CompTIA IT Fundamentals+": {
			description: "IT certification for foundational knowledge of IT concepts and practices.",
			link: "https://www.credly.com/badges/3e2a3cd8-d061-41bc-a8af-d424aff0d542/embedded",
			image_link: itImg,
			issued_date: "December 2022"
		},
		"Cyber Defense Certificate": {
			description: "Recognizes my skills in defending systems from cyber threats on TryHackMe.",
			link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-JORRDMLH57.png",
			image_link: cyberDefenseImg,
			issued_date: "April 2023"
		},
		"Web Fundamentals Certificate": {
			description: "Awarded for mastering core web technologies and techniques on TryHackMe.",
			link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-OZ9ZLKUMU2.png",
			image_link: webFundamentalsImg,
			issued_date: "August 2022"
		},
		"Junior Penetration Tester Certificate": {
			description: "A certification showcasing my penetration testing skills on TryHackMe.",
			link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-OY8DJDHOPE.png",
			image_link: penTestImg,
			issued_date: "July 2022"
		},
		"CompTIA PenTest+ Path": {
			description: "Completed the roadmap to obtain the CompTIA PenTest+ certification.",
			link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-B2APTAGSPY.png",
			image_link: PenImg,
			issued_date: "October 2022"
		},
		"Advent of Cyber 2022": {
			description: "Awarded for successfully completing the Advent of Cyber challenge on TryHackMe.",
			link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-RHEBQX68EP.png",
			image_link: advImg,
			issued_date: "December 2022"
		},
		"Python Core Certificate": {
			description: "Certification for completing the Python Core programming course on SoloLearn.",
			link: "https://www.sololearn.com/certificates/CT-IR4G4YUS",
			image_link: pythonCoreImg,
			issued_date: "February 2022"
		},
		"LeetCode_75": {
			description: "Awarded for successfully completing the LeetCode_75 on Leetcode.",
			link: "https://leetcode.com/u/nickolasddiaz/",
			image_link: LeetCodeImg,
			issued_date: "July 2024"
		}
	};
</script>

<MainContent>
	<h1 class="intro-text">
		{title}
	</h1>

	<div class="awards-grid">
	    {#each Object.entries(awards) as [name, item] (name)} 
			<div>
    			<div class="container">
    				<img src={item.image_link} alt={name} style="max-width: 10vw;"/>
                    <span style="height: 100%">
                        <a href={item.link} target="_blank" rel="external">
             			<strong>{name}:</strong>
             			</a>{item.description} 
                	    <span class="date">Issued on {item.issued_date}</span>
                    </span>
    			</div>
				
			</div>
		{/each}
	</div>
</MainContent>

<style>
    .container {
      display: flex;
      width: 100%;
    }
    .container > span{
        padding: 2%;
    }
    
	.intro-text {
		font-size: 1rem;
		text-align: center;
		margin-bottom: 2rem;
	}

	.awards-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	.date {
		display: block;
		font-style: italic;
		color: #666;
		margin-top: 0.25rem;
	}

	@media (max-width: 600px) {
		.awards-grid {
			grid-template-columns: 1fr;
		}
	}
</style>