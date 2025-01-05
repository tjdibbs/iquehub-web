interface CyberModule {
  title: string;
  lessons: string[];
  roles: string[];
}

export const CYBER_MODULE_2: CyberModule[] = [
  {
    title: 'Module 8: Exploitation and Gaining Access',
    lessons: [
      'Introduction to Metasploit Framework',
      'Exploiting system vulnerabilities',
      'Cracking passwords and bypassing authentication',
      'Exploiting web applications with Burp Suite',
    ],
    roles: [
      'Red Team Operator (Junior)',
      'Application Security Tester',
      'Exploit Developer (Entry Level)',
    ],
  },
  {
    title: 'Module 9: Post-Exploitation Tactics',
    lessons: [
      'Privilege escalation techniques',
      'Lateral movement within networks',
      'Data exfiltration methods',
      'Maintaining access',
    ],
    roles: [
      'Penetration Tester (Intermediate Level)',
      'Red Team Operator',
      'Ethical Hacker',
    ],
  },
  {
    title: 'Module 10: Finalizing the Penetration Test',
    lessons: [
      'Covering tracks and avoiding detection',
      'Writing professional penetration testing reports',
      'Capstone project: Conducting a full penetration test on a simulated environment',
      'Presentation of findings and remediation strategies',
    ],
    roles: [
      'Senior Penetration Tester',
      'Cybersecurity Consultant',
      'Offensive Security Specialist',
    ],
  },
];

export const CYBER_MODULE_1: CyberModule[] = [
  {
    title: 'Module 1 & 2: Basics of Networking',
    lessons: [
      'OSI and TCP/IP models',
      'IP addressing and subnetting',
      'Network protocols (DNS, DHCP, HTTP/S, FTP, etc.)',
      'Basic troubleshooting tools (ping, tracert, netstat)',
      'Introduction to network topologies and devices',
    ],
    roles: [
      'Network Support Technician',
      'IT Support Specialist',
      'Help Desk Technician',
    ],
  },
  {
    title: 'Module 3: Introduction to Cybersecurity',
    lessons: [
      'Principles: Confidentiality, Integrity, Availability (CIA)',
      'Threats and vulnerabilities (malware, phishing, ransomware)',
      'Risk management and mitigation techniques',
      'Cryptography basics (symmetric vs. asymmetric encryption, hashing)',
    ],
    roles: [
      'Cybersecurity Analyst (Entry Level)',
      'IT Security Support Specialist',
      'Risk Analyst',
    ],
  },
  {
    title: 'Module 4: Security Operations',
    lessons: [
      'Authentication, Authorization, and Accounting (AAA)',
      'Access control models (DAC, MAC, RBAC)',
      'Security monitoring tools: SIEM, IDS/IPS',
      'Implementing organizational security policies',
    ],
    roles: [
      'SOC Analyst (Level 1)',
      'Information Security Analyst',
      'Compliance Analyst',
    ],
  },
  {
    title: 'Module 5: Network and Application Security',
    lessons: [
      'Securing network devices and endpoints',
      'Cloud security fundamentals',
      'Web application vulnerabilities (OWASP Top 10)',
      'Incident response basics',
    ],
    roles: [
      'Network Security Administrator',
      'Cloud Security Associate',
      'Application Security Analyst',
    ],
  },
  {
    title: 'Module 6: Penetration Testing Fundamentals',
    lessons: [
      'Overview of the penetration testing lifecycle',
      'Legal and ethical considerations',
      'Lab setup: Kali Linux and key tools',
      'Reconnaissance: OSINT tools and techniques',
    ],
    roles: [
      'Penetration Tester (Junior Level)',
      'Vulnerability Analyst',
      'Cybersecurity Technician',
    ],
  },
  {
    title: 'Module 7: Scanning and Vulnerability Analysis',
    lessons: [
      'Network scanning tools (Nmap, Nessus)',
      'Identifying and analyzing vulnerabilities',
      'Common services and their weaknesses (SSH, FTP, SMB)',
    ],
    roles: [
      'Vulnerability Management Analyst',
      'Security Consultant (Entry Level)',
      'SOC Analyst (Level 2)',
    ],
  },
];
