# **Supply Chain Attack – Vulnerable Components**
## **Points: 1000**

## 1️⃣ **Methodology**

**Step 1 – Dependency analysis**

1. I started by analyzing the **package.json** file of the Juice Shop project to identify potentially vulnerable dependencies.
2. I focused particularly on **development dependencies**, which are often overlooked but can still be targeted by supply chain attacks.

**Step 2 – External research (OSINT)**

3. I searched online for known vulnerabilities related to the identified packages.
4. During this research, I discovered that **eslint-scope@3.7.2** had been involved in a **supply chain attack**.

**Step 3 – Vulnerability confirmation**

5. I consulted the **official security report on GitHub**, which confirmed that this specific version was compromised and used to steal **npm tokens**.
6. I verified that **eslint-scope@3.7.2** was indeed present in the Juice Shop dependencies.

**Step 4 – Challenge validation**

7. I submitted the **name of the vulnerable package** along with the **link to the official security advisory**, which successfully validated the challenge.

**Techniques used:**

* Dependency analysis
* OSINT / vulnerability research
* Supply chain risk assessment
* Source file inspection (`package.json`)

## 2️⃣ **Vulnerability**

* **Name:** Supply Chain Attack / Vulnerable Dependency
* **Affected component:** Development dependencies (`eslint-scope@3.7.2`)
* **Severity:** **Critical**

  * Compromised package used to steal npm authentication tokens
  * Potential impact beyond the application itself
  * Trust in the dependency chain is broken

## 3️⃣ **Risks**

* **Credential theft** (npm tokens or developer credentials)
* **Injection of malicious code** into the application
* **Compromise of the build pipeline**
* **Propagation of malware** to downstream users
* **Severe reputational damage** and loss of trust

## 4️⃣ **Actions**

The application must **continuously audit and monitor third-party dependencies**, including development tools. Vulnerable or compromised packages should be **immediately removed or upgraded**, and dependency versions should be **pinned and verified**. Using automated dependency scanning tools, enforcing **least-privilege access for tokens**, and following **OWASP supply chain security best practices** are strongly recommended.