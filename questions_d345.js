// ─────────────────────────────────────────────────────────
// DOMAIN 3: ACCESS CONTROLS (45 questions)
// ─────────────────────────────────────────────────────────

const questionsD3 = [
{domain:"Access Controls",question:"A company assigns permissions based on job roles (manager, analyst, auditor). Which access control model is used?",options:["Mandatory Access Control (MAC)","Discretionary Access Control (DAC)","Role-Based Access Control (RBAC)","Attribute-Based Access Control (ABAC)"],answer:"Role-Based Access Control (RBAC)",explanation:"RBAC assigns permissions based on organizational roles, simplifying access management for large groups."},

{domain:"Access Controls",question:"In which model does the DATA OWNER decide who has access?",options:["Mandatory Access Control (MAC)","Discretionary Access Control (DAC)","Role-Based Access Control (RBAC)","Rule-Based Access Control"],answer:"Discretionary Access Control (DAC)",explanation:"In DAC, the data owner has full discretion to grant or revoke access permissions."},

{domain:"Access Controls",question:"Government/military systems use security labels and clearance levels. This is:",options:["DAC","RBAC","Mandatory Access Control (MAC)","ABAC"],answer:"Mandatory Access Control (MAC)",explanation:"MAC uses security classifications and clearance levels set by administrators — users cannot change them."},

{domain:"Access Controls",question:"An employee accumulates permissions over time as they change roles, but old permissions are never removed. This is:",options:["Least privilege","Separation of duties","Privilege creep","Accountability"],answer:"Privilege creep",explanation:"Privilege creep is the gradual accumulation of permissions beyond current job needs due to role changes without access review."},

{domain:"Access Controls",question:"A mantrap is designed to:",options:["Monitor network traffic","Prevent tailgating by allowing only one person to enter at a time","Detect rogue wireless access points","Filter web content"],answer:"Prevent tailgating by allowing only one person to enter at a time",explanation:"Mantraps use interlocking doors to ensure only one authenticated person enters at a time, preventing tailgating."},

{domain:"Access Controls",question:"Granting a user ONLY the permissions needed for their specific job duties is:",options:["Need to know","Separation of duties","Least privilege","Mandatory access"],answer:"Least privilege",explanation:"Least privilege limits users to only necessary access, reducing the attack surface and potential damage."},

{domain:"Access Controls",question:"Two managers must BOTH approve sensitive financial transactions before processing. This is:",options:["Least privilege","Separation of duties","Dual control","Job rotation"],answer:"Dual control",explanation:"Dual control requires two authorized individuals to agree before a sensitive action can be completed."},

{domain:"Access Controls",question:"The PRIMARY security benefit of job rotation is:",options:["Developing broader employee skills","Reducing fraud likelihood by rotating who performs critical tasks","Completing work faster","Better workload distribution"],answer:"Reducing fraud likelihood by rotating who performs critical tasks",explanation:"Job rotation deters fraud because different people regularly perform the same tasks, making concealed schemes difficult to maintain."},

{domain:"Access Controls",question:"A security guard checks a badge before allowing server room entry. This is:",options:["Identification","Authentication","Authorization","Accountability"],answer:"Authentication",explanation:"Authentication verifies that someone is who they claim to be. Checking a badge confirms the claimed identity."},

{domain:"Access Controls",question:"After authentication, determining what resources a user CAN access is:",options:["Identification","Authentication","Authorization","Accounting"],answer:"Authorization",explanation:"Authorization determines permitted resources and operations after identity has been verified."},

{domain:"Access Controls",question:"A password policy requiring complex passwords is which type of control?",options:["Physical","Administrative","Logical/Technical","Compensating"],answer:"Logical/Technical",explanation:"Logical (technical) controls are software/hardware mechanisms. Password policies restrict access through technical enforcement."},

{domain:"Access Controls",question:"Access decisions based on user attributes, resource type, time of day, and location describe:",options:["MAC","DAC","RBAC","Attribute-Based Access Control (ABAC)"],answer:"Attribute-Based Access Control (ABAC)",explanation:"ABAC evaluates multiple attributes of subjects, objects, and environment for fine-grained, flexible access decisions."},

{domain:"Access Controls",question:"An unauthorized person following an authorized person through a secured entrance is:",options:["Shoulder surfing","Tailgating","Dumpster diving","Pretexting"],answer:"Tailgating",explanation:"Tailgating (piggybacking) is following an authorized person through a secured door without independent authentication."},

{domain:"Access Controls",question:"An employee is terminated for misconduct. The FIRST security action should be:",options:["Return company assets","Conduct an exit interview","Revoke all access rights immediately","Inform their team"],answer:"Revoke all access rights immediately",explanation:"Immediate access revocation prevents malicious actions. Asset return and other steps follow after access is secured."},

{domain:"Access Controls",question:"A smart card or hardware token is which authentication factor?",options:["Something you know","Something you have","Something you are","Somewhere you are"],answer:"Something you have",explanation:"Physical objects the user possesses (smart cards, hardware tokens, mobile devices) are 'something you have.'"},

{domain:"Access Controls",question:"Deny-by-default — blocking all access unless explicitly granted — follows which principle?",options:["Default allow","Implicit deny","Least privilege","Open access"],answer:"Implicit deny",explanation:"Implicit deny means access is denied unless explicitly permitted — a fundamental secure access control design principle."},

{domain:"Access Controls",question:"Using environmental design (fencing, lighting, landscaping) to deter unauthorized access is:",options:["CPTED","Biometric controls","Administrative controls","Electronic access controls"],answer:"CPTED",explanation:"Crime Prevention Through Environmental Design uses physical environmental features to naturally deter crime."},

{domain:"Access Controls",question:"Periodic reviews confirming user permissions are still appropriate is called:",options:["Access recertification","MAC enforcement","RBAC implementation","Separation of duties"],answer:"Access recertification",explanation:"Access recertification is the periodic review and validation that user permissions match current role requirements."},

{domain:"Access Controls",question:"A security camera recording events for later review is which control type?",options:["Preventive","Detective","Corrective","Deterrent"],answer:"Detective",explanation:"Detective controls identify and record events that have occurred, enabling after-the-fact investigation."},

{domain:"Access Controls",question:"An ACL specifies which users or systems are permitted or denied access to a resource. ACL stands for:",options:["Access Compliance List","Access Control List","Authorization Check Log","Access Certification Level"],answer:"Access Control List",explanation:"An Access Control List defines permissions for each user or system process on a specific resource."},

{domain:"Access Controls",question:"Proving you ARE who you claim to be is:",options:["Authorization","Accountability","Identification","Authentication"],answer:"Authentication",explanation:"Identification claims identity (username). Authentication proves it (password, biometric, token)."},

{domain:"Access Controls",question:"Which physical control uses biological characteristics to verify identity?",options:["Smart card","PIN pad","Biometric scanner","Key fob"],answer:"Biometric scanner",explanation:"Biometric scanners use physical characteristics (fingerprints, retina, facial features, voice) for authentication."},

// ─── NEW TRICKY Domain 3 questions ───

{domain:"Access Controls",question:"A hospital uses RBAC. A nurse is temporarily assigned to the pharmacy department for one week. The BEST approach to manage their access is:",options:["Give them the pharmacist role permanently for convenience","Create a temporary role with only the pharmacy permissions needed for the assignment, then revoke it after one week","Let them use a pharmacist's login credentials for the week","Grant full administrator access for the duration"],answer:"Create a temporary role with only the pharmacy permissions needed for the assignment, then revoke it after one week",explanation:"Temporary assignments should use temporary, scoped roles. Sharing credentials violates accountability; permanent roles violate least privilege."},

{domain:"Access Controls",question:"An organization implements Single Sign-On (SSO). Which is the GREATEST security risk this introduces?",options:["Users must remember multiple passwords","If the SSO credentials are compromised, the attacker gains access to ALL connected systems","SSO systems are too slow for enterprise use","SSO eliminates the need for multi-factor authentication"],answer:"If the SSO credentials are compromised, the attacker gains access to ALL connected systems",explanation:"SSO creates a single point of compromise — one stolen credential = access to everything. This is why MFA is critical with SSO."},

{domain:"Access Controls",question:"A former contractor's VPN credentials are found being used from a foreign country three months after their contract ended. The MOST likely control failure is:",options:["Lack of network segmentation","Failure to revoke access during the offboarding process","Insufficient encryption on the VPN","Weak password complexity requirements"],answer:"Failure to revoke access during the offboarding process",explanation:"Access should be revoked when any relationship ends. The core failure is in the identity lifecycle management / offboarding process."},

{domain:"Access Controls",question:"An employee needs temporary elevated privileges to install approved software. The BEST practice that follows least privilege is:",options:["Give the employee permanent local admin rights","Provide just-in-time (JIT) elevated access that automatically expires after a set time","Share the IT admin credentials with the employee","Disable security controls during the installation"],answer:"Provide just-in-time (JIT) elevated access that automatically expires after a set time",explanation:"JIT access grants temporary elevated privileges that expire automatically, maintaining least privilege while meeting business needs."},

{domain:"Access Controls",question:"A company discovers that 40% of employees have access to the finance system, but only 10% actually need it. This situation has MOST likely resulted from:",options:["A successful cyber attack granting unauthorized access","Lack of periodic access reviews leading to permission accumulation","The finance system being misconfigured","Employees hacking each other's accounts"],answer:"Lack of periodic access reviews leading to permission accumulation",explanation:"Without regular access reviews, permissions accumulate over time (privilege creep). Periodic recertification prevents this."},

{domain:"Access Controls",question:"A user attempts to access a file and receives 'Access Denied.' They then call IT claiming to be a manager and requesting access. This is an example of:",options:["Brute force attack","Social engineering","Privilege escalation via technical exploit","Tailgating"],answer:"Social engineering",explanation:"The user is attempting to manipulate IT staff through deception (impersonation) to gain unauthorized access — classic social engineering."},

{domain:"Access Controls",question:"An organization requires three separate individuals to authorize a wire transfer: one to initiate, one to approve, and one to execute. This BEST demonstrates:",options:["Least privilege","Separation of duties","Defense in depth","Need to know"],answer:"Separation of duties",explanation:"Separation of duties divides a sensitive process across multiple people so no single person can complete a high-risk action alone."},

{domain:"Access Controls",question:"Which is MORE secure for a high-security facility entrance?",options:["A security guard checking photo IDs","A biometric scanner combined with a PIN pad","A key card reader only","An open door with CCTV monitoring"],answer:"A biometric scanner combined with a PIN pad",explanation:"Combining biometrics (something you are) with a PIN (something you know) provides multi-factor physical authentication — stronger than any single factor."},

{domain:"Access Controls",question:"A system administrator has the ability to both create user accounts AND approve their own access requests. This violates:",options:["Least privilege","Separation of duties","Need to know","Defense in depth"],answer:"Separation of duties",explanation:"Being able to both create accounts and approve access allows a single person to create unauthorized access — a clear separation of duties violation."},

{domain:"Access Controls",question:"An employee on extended leave should have their access:",options:["Deleted permanently","Suspended/disabled until their return","Left unchanged since they'll return","Transferred to their replacement"],answer:"Suspended/disabled until their return",explanation:"Suspending access during extended leave prevents misuse while preserving the account for their return. Deletion is premature; leaving it active is risky."},
];

// ─────────────────────────────────────────────────────────
// DOMAIN 4: NETWORK SECURITY (50 questions)
// ─────────────────────────────────────────────────────────

const questionsD4 = [
{domain:"Network Security",question:"Which OSI layer handles logical addressing (IP) and routing between networks?",options:["Layer 2 – Data Link","Layer 3 – Network","Layer 4 – Transport","Layer 7 – Application"],answer:"Layer 3 – Network",explanation:"The Network layer (Layer 3) handles IP addressing and routing packets between different networks."},

{domain:"Network Security",question:"A firewall that tracks active connection states to make filtering decisions is a:",options:["Packet filtering firewall","Stateful inspection firewall","Application layer firewall","Proxy firewall"],answer:"Stateful inspection firewall",explanation:"Stateful inspection tracks active connections and allows packets belonging to established, legitimate connections."},

{domain:"Network Security",question:"A VPN primarily provides:",options:["Malware prevention on endpoints","An encrypted tunnel for secure communication over untrusted networks","Network intrusion monitoring","Web content filtering"],answer:"An encrypted tunnel for secure communication over untrusted networks",explanation:"VPNs create encrypted tunnels over public networks, protecting data in transit from eavesdropping."},

{domain:"Network Security",question:"Overwhelming a server with traffic to deny legitimate users access is a:",options:["MitM attack","SQL injection","Denial-of-Service (DoS) attack","XSS attack"],answer:"Denial-of-Service (DoS) attack",explanation:"DoS attacks flood targets with excessive traffic/requests to exhaust resources and prevent legitimate access."},

{domain:"Network Security",question:"Which device operates at Layer 3 and forwards packets based on IP addresses?",options:["Hub","Switch","Router","Bridge"],answer:"Router",explanation:"Routers operate at Layer 3, making forwarding decisions based on IP addresses between different networks."},

{domain:"Network Security",question:"An IDS only detects and alerts; an IPS can also:",options:["Only generate reports","Block or drop malicious traffic","Encrypt network traffic","Assign IP addresses"],answer:"Block or drop malicious traffic",explanation:"IDS passively monitors and alerts. IPS operates inline and can actively block malicious traffic."},

{domain:"Network Security",question:"HTTPS uses which cryptographic protocol?",options:["HTTP","FTP","TLS/SSL","SMTP"],answer:"TLS/SSL",explanation:"TLS (Transport Layer Security) encrypts HTTPS connections between browser and server."},

{domain:"Network Security",question:"A DMZ in network architecture:",options:["Secures confidential internal systems","Isolates publicly accessible servers from the internal network","Replaces the need for a firewall","Connects remote VPN users"],answer:"Isolates publicly accessible servers from the internal network",explanation:"A DMZ sits between internet and internal network, hosting public-facing servers while protecting internal resources."},

{domain:"Network Security",question:"Dividing a network so finance and R&D can't communicate directly without a firewall is:",options:["VPN tunneling","Network segmentation","Load balancing","Port scanning"],answer:"Network segmentation",explanation:"Network segmentation divides networks into zones, limiting traffic flow to reduce attack surface."},

{domain:"Network Security",question:"A decoy system designed to attract attackers and study their techniques is:",options:["A honeypot","A firewall","A VPN concentrator","A backup server"],answer:"A honeypot",explanation:"Honeypots are intentional decoys that attract attackers, allowing security teams to observe techniques safely."},

{domain:"Network Security",question:"Port 443 is associated with:",options:["FTP","HTTP","HTTPS","SMTP"],answer:"HTTPS",explanation:"Port 443 is the default for HTTPS (HTTP over TLS/SSL) — encrypted web communications."},

{domain:"Network Security",question:"Self-replicating malware that spreads across networks WITHOUT user interaction is a:",options:["Virus","Trojan","Worm","Spyware"],answer:"Worm",explanation:"Worms self-replicate and spread automatically across networks without requiring user action or a host file."},

{domain:"Network Security",question:"DHCP automatically assigns:",options:["Domain names","IP addresses","Firewall rules","Encryption keys"],answer:"IP addresses",explanation:"DHCP dynamically assigns IP addresses and other network configuration to devices on a network."},

{domain:"Network Security",question:"Capturing a valid authentication token and reusing it for unauthorized access is a:",options:["Brute force attack","Replay attack","Phishing attack","DDoS attack"],answer:"Replay attack",explanation:"Replay attacks capture legitimate transmissions and replay them to bypass authentication."},

{domain:"Network Security",question:"A switch learns MAC addresses and forwards frames to specific ports. It operates at:",options:["Layer 1","Layer 2","Layer 3","Layer 7"],answer:"Layer 2",explanation:"Switches operate at Layer 2 (Data Link), using MAC addresses to forward frames to specific ports."},

{domain:"Network Security",question:"NAT maps private IPs to public IPs, enabling multiple internal hosts to:",options:["Encrypt traffic automatically","Share a single public IP for internet access","Bypass firewall rules","Detect intrusions"],answer:"Share a single public IP for internet access",explanation:"NAT translates private addresses to public, allowing many internal devices to share one public IP."},

{domain:"Network Security",question:"A vulnerability unknown to the vendor with no available patch is a:",options:["Known vulnerability","Publicly disclosed bug","Zero-day vulnerability","Legacy vulnerability"],answer:"Zero-day vulnerability",explanation:"Zero-day vulnerabilities are unknown to vendors — defenders have 'zero days' to prepare defenses."},

{domain:"Network Security",question:"WPA3 improves on WPA2 primarily through:",options:["Using older proven algorithms","SAE handshake providing stronger protection against offline password attacks","Eliminating passwords entirely","Enterprise-only availability"],answer:"SAE handshake providing stronger protection against offline password attacks",explanation:"WPA3's SAE (Simultaneous Authentication of Equals) replaces WPA2's PSK, providing forward secrecy and offline attack resistance."},

{domain:"Network Security",question:"192.168.0.0/16 is a private address range that should NOT be:",options:["Used internally","Assigned by DHCP","Routed on the public internet","Used with NAT"],answer:"Routed on the public internet",explanation:"RFC 1918 private ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) are not routable on the public internet."},

{domain:"Network Security",question:"A signature-based IDS generates alerts by:",options:["Monitoring bandwidth usage","Comparing traffic against known attack patterns","Analyzing user behavior baselines","Blocking encrypted traffic"],answer:"Comparing traffic against known attack patterns",explanation:"Signature-based IDS matches traffic against a database of known attack signatures to detect threats."},

{domain:"Network Security",question:"A proxy server acts as an intermediary providing:",options:["Direct unfiltered internet connectivity","Caching, filtering, anonymity, and access control","Automatic IP assignment","Physical network segmentation"],answer:"Caching, filtering, anonymity, and access control",explanation:"Proxy servers intercept requests between clients and servers, providing content filtering, caching, and access control."},

{domain:"Network Security",question:"DNS cache poisoning redirects users by:",options:["Overwhelming DNS servers with requests","Inserting fraudulent DNS records into a resolver's cache","Encrypting DNS traffic","Blocking all DNS queries"],answer:"Inserting fraudulent DNS records into a resolver's cache",explanation:"DNS poisoning corrupts cache with false records, directing users to attacker-controlled IPs for legitimate domains."},

{domain:"Network Security",question:"A DDoS attack differs from a DoS attack because DDoS:",options:["Uses a single powerful source","Uses multiple compromised systems simultaneously","Only targets web servers","Is easier to mitigate"],answer:"Uses multiple compromised systems simultaneously",explanation:"DDoS uses botnets (many compromised systems) to simultaneously flood targets, making mitigation much harder."},

{domain:"Network Security",question:"Encrypted communication between remote offices and headquarters should use:",options:["A firewall at headquarters only","A site-to-site VPN","An IDS at each office","Network segmentation alone"],answer:"A site-to-site VPN",explanation:"Site-to-site VPNs create encrypted tunnels between locations, protecting all inter-office traffic."},

// ─── NEW TRICKY Domain 4 questions ───

{domain:"Network Security",question:"An organization notices that its IDS is generating thousands of alerts daily, most of which are false positives. The security team begins ignoring alerts. The GREATEST risk this creates is:",options:["Increased network bandwidth consumption","Missing a real attack hidden among false positives (alert fatigue)","The IDS hardware will fail from overuse","Regulatory non-compliance for having too many alerts"],answer:"Missing a real attack hidden among false positives (alert fatigue)",explanation:"Alert fatigue leads analysts to ignore or miss genuine threats buried in noise. Tuning the IDS to reduce false positives is critical."},

{domain:"Network Security",question:"A company's web application experiences a SQL injection attack through a user input form. Which control would BEST have prevented this?",options:["A network firewall blocking port 80","Input validation and parameterized queries in the application code","Encrypting the database with AES-256","Installing antivirus on the web server"],answer:"Input validation and parameterized queries in the application code",explanation:"SQL injection is an application-layer attack. Network firewalls can't prevent it — the application must validate/sanitize input and use parameterized queries."},

{domain:"Network Security",question:"An employee connects their personal laptop to the corporate Wi-Fi. The laptop has outdated antivirus and unpatched software. This PRIMARILY threatens the network through:",options:["Increased bandwidth consumption","Introducing a potential entry point for malware into the corporate network","Violating the company's email policy","Reducing Wi-Fi signal strength for other users"],answer:"Introducing a potential entry point for malware into the corporate network",explanation:"Unpatched, unmanaged devices can carry malware or vulnerabilities that spread to the corporate network once connected. This is a key BYOD risk."},

{domain:"Network Security",question:"A company implements network segmentation by placing its payment processing systems on a separate VLAN. The PRIMARY security benefit is:",options:["Faster transaction processing speed","Limiting the blast radius if other network segments are compromised","Reducing the cost of network hardware","Simplifying network administration"],answer:"Limiting the blast radius if other network segments are compromised",explanation:"Segmentation contains breaches to individual segments. If one segment is compromised, payment systems remain isolated and protected."},

{domain:"Network Security",question:"An attacker sets up a rogue Wi-Fi access point named 'CompanyWiFi-Free' near the office. Employees connect thinking it's legitimate. This attack is called:",options:["DNS poisoning","Evil twin attack","ARP spoofing","Packet sniffing"],answer:"Evil twin attack",explanation:"An evil twin mimics a legitimate Wi-Fi network to trick users into connecting, allowing the attacker to intercept all their traffic."},

{domain:"Network Security",question:"A firewall rule allows all outbound traffic but blocks all inbound traffic except port 443. An attacker establishes a reverse shell from a compromised internal host. Why does the firewall NOT stop this?",options:["The firewall is misconfigured and broken","The reverse shell initiates the connection outbound, which the firewall allows","Port 443 is inherently insecure","The attacker bypassed the firewall physically"],answer:"The reverse shell initiates the connection outbound, which the firewall allows",explanation:"Reverse shells connect outbound from the victim to the attacker. Since outbound traffic is allowed, the firewall doesn't block it. This is why egress filtering and monitoring are critical."},

{domain:"Network Security",question:"Which protocol provides BOTH authentication and encryption for remote server management?",options:["Telnet","FTP","SSH","HTTP"],answer:"SSH",explanation:"SSH (Secure Shell) provides encrypted and authenticated remote access. Telnet and FTP transmit data (including credentials) in cleartext."},

{domain:"Network Security",question:"A company's web server logs show repeated requests to /../../etc/passwd. This is an attempt at:",options:["SQL injection","Cross-site scripting (XSS)","Directory traversal attack","Denial of service"],answer:"Directory traversal attack",explanation:"Directory traversal uses '../' sequences to navigate to files outside the web root, attempting to access sensitive system files."},

{domain:"Network Security",question:"An organization wants to monitor encrypted HTTPS traffic for malware. The BEST approach is:",options:["Block all HTTPS traffic","Deploy a TLS inspection proxy that decrypts, inspects, and re-encrypts traffic","Disable encryption on the network","Rely solely on endpoint antivirus"],answer:"Deploy a TLS inspection proxy that decrypts, inspects, and re-encrypts traffic",explanation:"TLS inspection proxies can decrypt traffic for inspection while maintaining encryption to the destination. This enables visibility into encrypted threats."},

{domain:"Network Security",question:"Which is the MOST significant limitation of a signature-based IDS?",options:["It generates too few alerts","It cannot detect previously unknown (zero-day) attacks","It requires too much network bandwidth","It can only monitor wireless networks"],answer:"It cannot detect previously unknown (zero-day) attacks",explanation:"Signature-based detection only matches known patterns. Novel, zero-day attacks have no signatures and will evade detection. Anomaly-based detection can catch these."},
];

// ─────────────────────────────────────────────────────────
// DOMAIN 5: SECURITY OPERATIONS (38 questions)
// ─────────────────────────────────────────────────────────

const questionsD5 = [
{domain:"Security Operations",question:"A SOC analyst notices a spike in failed logins on a critical server at 3 AM. The FIRST action should be:",options:["Immediately shut down the server","Investigate the anomaly to determine if it's a real attack or false positive","Notify all employees via email","Delete the audit logs to free space"],answer:"Investigate the anomaly to determine if it's a real attack or false positive",explanation:"Always investigate and triage alerts before taking drastic action. Shutting down without investigation causes unnecessary disruption."},

{domain:"Security Operations",question:"A SIEM system's PRIMARY purpose is:",options:["Encrypting data at rest","Collecting, correlating, and analyzing security event logs in real time","Blocking malicious network traffic","Managing user access rights"],answer:"Collecting, correlating, and analyzing security event logs in real time",explanation:"SIEM aggregates and correlates logs from multiple sources, providing real-time analysis and alerting for security events."},

{domain:"Security Operations",question:"Data classification ensures that:",options:["All data is encrypted automatically","Appropriate controls are applied based on data sensitivity and value","Network segmentation is maintained","IP addresses are properly assigned"],answer:"Appropriate controls are applied based on data sensitivity and value",explanation:"Classification categorizes data by sensitivity (public, internal, confidential, secret) so proportionate controls are applied."},

{domain:"Security Operations",question:"Patch management's PRIMARY purpose is:",options:["Updating UI designs","Remediating known vulnerabilities by applying vendor-supplied fixes","Monitoring user activity","Managing software licenses"],answer:"Remediating known vulnerabilities by applying vendor-supplied fixes",explanation:"Patch management addresses known software vulnerabilities by applying vendor patches, reducing the attack surface."},

{domain:"Security Operations",question:"The MOST secure method to ensure hard drive data is unrecoverable before disposal is:",options:["Deleting files and emptying recycle bin","Formatting the drive","Degaussing or physical destruction","Overwriting with zeros once"],answer:"Degaussing or physical destruction",explanation:"Degaussing disrupts magnetic fields; physical destruction (shredding, crushing) makes media completely unrecoverable."},

{domain:"Security Operations",question:"A vulnerability assessment differs from a penetration test in that it:",options:["Attempts to exploit vulnerabilities","Identifies and prioritizes weaknesses WITHOUT exploiting them","Simulates a real attack","Tests employee security awareness"],answer:"Identifies and prioritizes weaknesses WITHOUT exploiting them",explanation:"Vulnerability assessments identify and classify weaknesses. Penetration tests actively attempt exploitation to measure real impact."},

{domain:"Security Operations",question:"Personal devices accessing corporate data outside organization's security controls is a concern of:",options:["Company device policies","BYOD (Bring Your Own Device) policies","Network segmentation","Firewall rules"],answer:"BYOD (Bring Your Own Device) policies",explanation:"BYOD introduces risks when personal devices store or access corporate data without organizational security controls."},

{domain:"Security Operations",question:"Change management requires approval, documentation, and testing before implementation PRIMARILY to:",options:["Slow down IT","Prevent unauthorized changes from introducing vulnerabilities or instability","Ensure only senior staff make changes","Create billing records"],answer:"Prevent unauthorized changes from introducing vulnerabilities or instability",explanation:"Change management ensures changes are authorized, tested, and documented, preventing unauthorized modifications and new vulnerabilities."},

{domain:"Security Operations",question:"'Need to know' means:",options:["All employees should know all policies","Even cleared users should only access information necessary for their specific job function","All data must be classified","All employees need security training"],answer:"Even cleared users should only access information necessary for their specific job function",explanation:"Need to know restricts access even among authorized individuals — you only get access to information directly required for your specific duties."},

{domain:"Security Operations",question:"Security logs PRIMARILY provide:",options:["System performance improvements","An audit trail for detecting incidents and supporting forensic investigations","Automatic attack prevention","Documentation for compliance only"],answer:"An audit trail for detecting incidents and supporting forensic investigations",explanation:"Logs provide chronological records of activity, enabling detection, investigation, and forensic analysis."},

{domain:"Security Operations",question:"An Acceptable Use Policy (AUP) defines:",options:["Technical software standards","Acceptable and prohibited uses of company technology resources","Technical device configurations","Hardware/software inventory"],answer:"Acceptable and prohibited uses of company technology resources",explanation:"An AUP establishes rules and guidelines for how employees may and may not use organizational technology."},

{domain:"Security Operations",question:"Configuration management maintains:",options:["User access permissions","A consistent, documented baseline of system settings to prevent unauthorized changes","Data classification levels","Development lifecycles"],answer:"A consistent, documented baseline of system settings to prevent unauthorized changes",explanation:"Configuration management defines and enforces baseline configurations, tracking changes to prevent drift and unauthorized modifications."},

{domain:"Security Operations",question:"Endpoint DLP with USB port restrictions would BEST prevent:",options:["Network-based attacks","Data exfiltration via removable storage devices","Phishing emails","Brute force attacks"],answer:"Data exfiltration via removable storage devices",explanation:"Endpoint DLP can restrict/block USB drives and removable media, preventing unauthorized data removal from endpoints."},

{domain:"Security Operations",question:"Restoring systems from backup after ransomware is BEST classified as which control type?",options:["Preventive","Detective","Corrective","Deterrent"],answer:"Corrective",explanation:"Corrective controls restore systems to normal after an incident. Backup restoration remedies the impact of an attack."},

{domain:"Security Operations",question:"Security awareness training PRIMARILY ensures that:",options:["IT staff learn advanced hacking","All employees understand security risks and their protection responsibilities","Compliance requirements are satisfied only","Employees can configure security systems"],answer:"All employees understand security risks and their protection responsibilities",explanation:"Security awareness training educates everyone about threats, policies, and best practices for recognizing and avoiding risks."},

{domain:"Security Operations",question:"A user logs in from Nigeria at 8 AM and Australia at 8:15 AM the same day. This is MOST likely:",options:["Normal VPN usage","An impossible travel anomaly indicating account compromise","A distributed team across time zones","A firewall error"],answer:"An impossible travel anomaly indicating account compromise",explanation:"Impossible travel alerts flag authentication from physically impossible locations in short timeframes, strongly suggesting account compromise."},

{domain:"Security Operations",question:"The BEST password management practice is:",options:["Same password for all systems","Long, unique passwords per system stored in a password manager","Passwords written near the workstation","Shared passwords with trusted colleagues"],answer:"Long, unique passwords per system stored in a password manager",explanation:"Unique, complex passwords per system in a password manager eliminates reuse risk and memorization problems."},

{domain:"Security Operations",question:"Testing an incident response plan via simulated cyberattack without affecting production is BEST done through:",options:["Checklist review","Tabletop exercise","Full interruption test","Parallel test"],answer:"Tabletop exercise",explanation:"Tabletop exercises walk through scenarios via discussion without executing actions, identifying gaps without production impact."},

// ─── NEW TRICKY Domain 5 questions ───

{domain:"Security Operations",question:"An organization's security team receives a vulnerability scan report showing 500 critical vulnerabilities across 1,000 systems. With limited resources, the BEST approach to prioritize remediation is:",options:["Patch all 500 vulnerabilities simultaneously","Prioritize vulnerabilities on internet-facing systems and those with known active exploits","Ignore the report since 500 is too many to address","Wait for the next quarterly patch cycle"],answer:"Prioritize vulnerabilities on internet-facing systems and those with known active exploits",explanation:"Risk-based prioritization focuses on vulnerabilities most likely to be exploited (internet-facing, known exploits) to maximize security value with limited resources."},

{domain:"Security Operations",question:"A new employee asks a colleague to hold the secure door open as they enter the building. The colleague should:",options:["Hold the door open — it's polite and they look like an employee","Ask the person to badge in independently, even if it seems rude","Ignore the person and walk through quickly","Report the person to law enforcement immediately"],answer:"Ask the person to badge in independently, even if it seems rude",explanation:"Tailgating prevention requires each person to authenticate independently. Social pressure should not override physical security controls."},

{domain:"Security Operations",question:"An organization stores backup tapes at the same facility as its primary data center. The GREATEST risk this introduces is:",options:["Increased storage costs","Both primary data and backups could be destroyed by the same disaster","Backup tapes degrade faster in the same environment","Regulatory non-compliance"],answer:"Both primary data and backups could be destroyed by the same disaster",explanation:"Co-locating backups with primary systems means a single disaster (fire, flood) could destroy both, defeating the purpose of backups entirely."},

{domain:"Security Operations",question:"A company implements a clean desk policy. The PRIMARY security benefit is:",options:["A more organized workspace improves employee productivity","Sensitive documents and devices are not left exposed when employees are away","Cleaning staff can more easily maintain the office","It reduces paper waste and supports environmental sustainability"],answer:"Sensitive documents and devices are not left exposed when employees are away",explanation:"Clean desk policies prevent unauthorized access to sensitive information left visible on desks — it's a physical security control."},

{domain:"Security Operations",question:"Which of the following is MOST important to include in a security incident report?",options:["The names of all employees who were in the building that day","A detailed timeline of events, actions taken, evidence preserved, and impact assessment","The personal opinions of the security team about who is responsible","A comparison with competitors' security incidents"],answer:"A detailed timeline of events, actions taken, evidence preserved, and impact assessment",explanation:"Incident reports must contain factual, objective information: timeline, actions, evidence, and impact — not opinions or irrelevant details."},

{domain:"Security Operations",question:"An organization mandates that all mobile devices used for work must have remote wipe capability. This control PRIMARILY protects against:",options:["Malware infection","Data exposure from lost or stolen devices","Unauthorized app installations","Battery drain from background processes"],answer:"Data exposure from lost or stolen devices",explanation:"Remote wipe allows the organization to erase corporate data from a lost/stolen device, protecting confidentiality of the data."},

{domain:"Security Operations",question:"A security analyst discovers that the organization's intrusion detection logs are only stored for 7 days. A sophisticated attacker who operates slowly over several weeks would exploit this by:",options:["Attacking more aggressively to finish within 7 days","Operating below detection thresholds, knowing evidence will be automatically deleted","Targeting only systems without logging","Disabling the IDS directly"],answer:"Operating below detection thresholds, knowing evidence will be automatically deleted",explanation:"Short log retention enables 'low and slow' attacks. Attackers can operate subtly knowing their traces will be automatically purged before discovery."},

{domain:"Security Operations",question:"Which practice BEST ensures that security controls remain effective over time?",options:["Installing controls and assuming they will work indefinitely","Continuous monitoring and regular security assessments","Hiring more security staff every year","Purchasing the most expensive security products available"],answer:"Continuous monitoring and regular security assessments",explanation:"Security is not a one-time effort. Continuous monitoring and regular assessments verify controls remain effective as threats evolve."},

{domain:"Security Operations",question:"A company's IT team applies a critical security patch. The next morning, three production applications stop working. The ROOT cause of this failure is most likely:",options:["The patch contained malware","Insufficient testing in a staging environment before production deployment","The vendor intentionally released a faulty patch","Other employees sabotaged the systems overnight"],answer:"Insufficient testing in a staging environment before production deployment",explanation:"Proper change management requires testing patches in staging before production. Bypassing this step risks breaking production systems."},
];

// ─── Combine all questions + add domain config ───
questions.push(...questionsD3, ...questionsD4, ...questionsD5);

const DOMAIN_COLORS = {
  "Security Principles": "#7c6bf5",
  "Business Continuity, DR & IR": "#34d399",
  "Access Controls": "#f59e0b",
  "Network Security": "#3b82f6",
  "Security Operations": "#f472b6"
};

const DOMAIN_BG = {
  "Security Principles": "rgba(124,107,245,0.15)",
  "Business Continuity, DR & IR": "rgba(52,211,153,0.15)",
  "Access Controls": "rgba(245,158,11,0.15)",
  "Network Security": "rgba(59,130,246,0.15)",
  "Security Operations": "rgba(244,114,182,0.15)"
};

// Target distribution ratio per 100-question exam
const DOMAIN_DISTRIBUTION = {
  "Security Principles": 26,
  "Business Continuity, DR & IR": 10,
  "Access Controls": 22,
  "Network Security": 24,
  "Security Operations": 18
};
