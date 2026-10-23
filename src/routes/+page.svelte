<script lang="ts">
  import { onMount } from "svelte";
  import MainContent from "#lib/components/MainContent.svelte";
  import PhysicsBanner from "@nickolasddiaz/physics-banner";
  import ascii_art from "#lib/data/ascii_art.txt?raw";

  import AWS_Dev from "#lib/assets/AWS_Certified_Developer.webp";
  import CCNAImg from "#lib/assets/ccna-logo.webp";
  import CySAImg from "#lib/assets/CySA+.webp";
  import AImg from "#lib/assets/A+.webp";
  import SecurityImg from "#lib/assets/Security+.webp";
  import socialData from "#lib/stores/social_media.js";

  import { resolve } from "$app/paths";

  let canvas: HTMLCanvasElement;

  onMount(async () => {
    const physics_banner = new PhysicsBanner(
      canvas,
      "/fonts/courier-prime-latin-400-normal.woff",
      "#00ff22",
      16,
    );
    await physics_banner.setup();
    physics_banner.enable_bounds(true);
    physics_banner.spawn_string(ascii_art);
    physics_banner.set_shoot_speed(250);

    for (let i = 0; i < 4; i++) {
      physics_banner.shoot_character();
    }
  });

  // prettier-ignore
  const education: [string, string, string, string, string, string][] = [
    // name, degree, location, degree_level, start date, end date
    ["Florida Polytechnic University", "Computer Science", "Lakeland, Fl, USA","BS", "Aug 2024", "May 2027"],
    ["Cypress College University", "Computer Science", "Cypress CA, USA", "AS", "May 2022", "September 2024"],
  ];

  // prettier-ignore
  const projects: [string, string, string, string, string, string, string, string][] = [
    // name, link, start date, end date, bulletpoints 1-4
    ["COP-3604 Linux Infrastructure Observability Dashboard Project", "https://github.com/nickolasddiaz/COP-3604-Linux-Infrastructure-Observability-Dashboard-Project", "Oct 2, 2026", "Oct 18, 2026",
     "Uses asynchronous programing to gather metrics into a dashboard in GCP cloud.",
     "A reatime dashboard using Websockets and streamlit.",
     "Named pipe to share data between processes",
     "Bash shell scripts to automate installation, firewalls, stress tests and systemd services."
    ],
    ["Physics Banner", "https://github.com/nickolasddiaz/Physics-Banner", "Apr 9, 2026", "Oct 16, 2026",
     "A rigid body physics simulation for ascii art, build using typescript and HTMLcanvas element.",
     "Uses opentype.js to font paths, and uses convex hull using Graham Scan Algorithm to convert it into a convex shape.",
     "QuadTree implementation to efficiently query for entities and perform a bounding box check.",
     "SAT Theorem for collision detection and response."
    ],
    ["16-bit Computer + Online Compiler + Emulator", "https://github.com/nickolasddiaz/16bitcomputer", "Sep 28, 2025", "Jan 23, 2026",
     "Python-based compiler that generates assembly and binary code.",
     "High-level programming language with C/python-style syntax.",
     "Custom microcode architecture designed in Logic-SIM Evolution.",
     "116 instruction opcodes supporting arithmetic, logic, control flow, etc."
    ],
    ["CNT-3004 Client Server Project", "https://github.com/nickolasddiaz/CNT-3004-client-server-project", "Oct 27, 2025", "Nov 17, 2025",
     "A socket-based networked file sharing cloud server built using python.",
     "Multithreaded server supporting concurrent client connections.",
     "Efficient file streaming using on-the-fly ZIP compression/decompression using socket.io.",
     "GUI application using tkinter, and visualisations using Matplotlib."
    ],
    ["CEN-4033 Pantry Inventory Management System", "https://github.com/nickolasddiaz/CEN-4033-Pantry-Inventory-Management-System", "June 10, 2025", "June 17, 2025",
     "Web app in PHP that allows users to track the items they have in their pantry.",
     "Authentication: manages user sessions, logging/signing in and two factor authentication.",
     "Database management using MySQL to store user date.",
     "Worked in a team and created Software Requirements Specification (SRS), and design documents."
    ],
    ["Tank Game", "https://github.com/nickolasddiaz/Tank_Game", "Jan 3, 2025", "Mar 6, 2025",
     "Built Game using Java with the Libgdx framework.",
     "World generation used cellular noise for the terrain and wave collapse algorithm for the roads.",
     "Implemented a leaderboard system and spatial partitioning for collision detection.",
     "Complex combat system and powerup system."
    ],
    ["NickolasDDiazTextEditor", "https://github.com/nickolasddiaz/NickolasDiaz-Text-Editor", "Sep 29, 2024", "Oct 12, 2024",
     "A text editor built using C++ and Windows API.",
     "Multi-Document Interface, such as tabbed interface, and create/opening files",
     "Editing Capabilities, uses a command pattern for undo/redo.",
     "Gap buffer implementation: to efficiently manage text insertion and deletion."
    ],
    ["Password Manager", "https://github.com/nickolasddiaz/NickolasDanielPassManager", "Aug 10, 2024", "Oct 22, 2024",
     "Built website using Python Flask and Postgres database for the backend and JavaScript for the frontend.",
     "Defends against common web vulnerabilities such as XSS, SQL injection, and CSR.",
     "Implemented JWT and CSRF tokens for authentication, and AES CBC mode for encryption to securely store data.",
     "Account management, such as signing up, logging in, and resetting password/username."
    ],
  ];

  // prettier-ignore
  const certifications: [string, string, string, string, string, string][] = [
    // name, icon, verify link, description, awarded date, expires date
    ["AWS Certified Developer", AWS_Dev ,"https://www.credly.com/badges/c4027898-2975-4061-b33f-6fef885da965/embedded", "Technical proficiency in developing, testing, deploying, and debugging AWS Cloud-based applications", "Aug 11, 2026", "Aug 11, 2029"],
    ["Cisco CCNA", CCNAImg ,"https://www.credly.com/badges/81918252-2c3b-4fe1-8c05-6ebba99745c2/embedded", "Knowledge and skills in network fundamentals and access, IP connectivity, IP services, security fundamentals, and more.", "June 25, 2025", "June 25, 2028"],
    ["CompTIA CySA+", CySAImg ,"https://www.credly.com/badges/7090b6d1-673b-45e0-8aae-f7d011eadfa1/embedded", "Ability to detect, analyze, and respond to cybersecurity threats in today's security environments.", "April 06, 2023", "April 06, 2026"],
    ["CompTIA A+", AImg ,"https://www.credly.com/badges/866f776c-880c-4528-95ae-59845641259e/embedded", "The industry-standard, entry-level credential for launching an IT career", "January 16, 2023", "April 06, 2026"],
    ["CompTIA Security+", SecurityImg ,"https://www.credly.com/badges/802704ce-60a7-4823-961d-5caa5c254c6c/embedded", "Technical skills needed to assess enterprise security, manage risk, and respond to security incidents", "Jan 30, 2023", "April 06, 2026"],
  ];

  // prettier-ignore
  const etc: Record<string, string[]> = {
    "Programing Languages": ["Python", "Typescript", "TailwindCSS", "Svelte", "Python", "Java", "Python", "C++", "PHP"],
    "CyberSecurity/IT": ["Web security", "Networking fundamentals", "Defense frameworks", "Network security", "Traffic analysis", "AWS Cloud", "GCP Cloud"],
  };
</script>

<MainContent>
  <br />
  <canvas
    bind:this={canvas}
    class="mx-auto block h-auto w-[90vw] border border-solid border-primary-600 lg:w-[50vw]"
  ></canvas>
  <br />
  <h2>Biography</h2>
  <p>Hello this is Nickolas Diaz.</p>

  <br />
  <h2>Education</h2>
  <hr />
  <br />
  {#each education as [name, degree, location, degree_level, start_date, end_date] (name)}
    <div
      class="mb-3.75 flex flex-col gap-2 rounded-[10px] border border-primary-100 bg-white p-5 shadow-(--shadow)"
    >
      <div class="flex w-full items-center justify-between text-gray-600">
        <span><strong>{name}</strong></span>
        <span class="text-xs text-gray-400">{start_date} - {end_date}</span>
      </div>
      <p class="text-sm text-gray-600">
        {degree_level} in {degree} - {location}
      </p>
    </div>
  {/each}

  <h2>Projects</h2>
  <hr />
  <br />
  {#each projects as [name, link, start_date, end_date, bullet_1, bullet_2, bullet_3, bullet_4] (name)}
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      class="mb-2.5 block rounded-md border-l-3 border-l-gray-200 bg-white px-3.75 py-3 transition-all duration-200 hover:border-l-primary-400 hover:bg-gray-200"
    >
      <div class="flex w-full items-center justify-between text-gray-600">
        <span><strong>{name}</strong></span>
        <span class="text-xs text-gray-400">{start_date} - {end_date}</span>
      </div>
      <ul
        class="my-2 list-inside list-disc text-sm text-gray-600 marker:text-primary-700"
      >
        <li>{bullet_1}</li>
        <li>{bullet_2}</li>
        <li>{bullet_3}</li>
        <li>{bullet_4}</li>
      </ul>
    </a>
  {/each}

  <h2>Certifications</h2>
  <hr />
  {#each certifications as [name, icon, verify_link, description, awarded_date, expires_date] (name)}
    <a
      href={verify_link}
      target="_blank"
      rel="noopener noreferrer"
      class="mb-2.5 flex items-center gap-4 rounded-md border-l-3 border-l-gray-200 bg-white px-4 py-3 transition-all duration-200 hover:border-l-primary-400 hover:bg-gray-200"
    >
      <div class="flex h-12 w-12 shrink-0 items-center justify-center">
        <img
          src={resolve(icon as any)}
          alt={name}
          class="max-h-full max-w-full object-contain mix-blend-multiply"
        />
      </div>
      <div class="min-w-0 flex-1">
        <div
          class="mb-1 flex w-full items-center justify-between text-gray-600"
        >
          <span class="truncate"><strong>{name}</strong></span>
          <span class="text-xs text-gray-400"
            >Awarded: {awarded_date} - Expires: {expires_date}</span
          >
        </div>
        <p class="text-sm text-gray-600">{description}</p>
      </div>
    </a>
  {/each}

  <br />
  <h2>Skills</h2>
  <hr />
  <br />
  {#each Object.entries(etc) as [category, items] (category)}
    <div
      class="mb-3.75 flex flex-col gap-2 rounded-[10px] border border-primary-100 bg-white p-5 shadow-(--shadow)"
    >
      <strong class="text-gray-600">{category}</strong>
      <span class="text-sm text-gray-600">
        {items.join(", ")}
      </span>
    </div>
  {/each}
  <br />
  <h2>Social Media</h2>
  <hr />
  <br />
  <div class="flex justify-around p-5">
    {#each Object.entries(socialData) as [key, value] (key)}
      <a
        href={value.link}
        title={value.title}
        class="group rounded-lg p-3 shadow-md transition-shadow hover:shadow-sm hover:shadow-primary-500"
      >
        <img src={value.img} alt={value.title} class="mx-auto h-10 w-10" />
        <span class="group-hover:text-primary-500">{value.title}</span>
      </a>
    {/each}
  </div>
  <br />
  <br />
</MainContent>
