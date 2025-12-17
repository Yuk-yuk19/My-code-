# **Misplaced Signature File – Sensitive Data Exposure**
## **Points: 700**

## 1️⃣ **Methodology**

**Step 1 – Identifying the attack vector**

1. I followed the same approach used in the **Easter Egg** challenge.
2. I suspected that a hidden or backup file might be accessible through improper file handling.

**Step 2 – Null byte injection**

3. I performed a **Poison Null Byte injection** by manipulating the requested file path.
4. I used URL encoding techniques to correctly inject the null byte (`%00`) into the request.

**Step 3 – File retrieval**

5. The application accepted the manipulated request.
6. This allowed me to download the **misplaced signature file**, confirming the exposure of sensitive data and completing the challenge.

**Techniques used:**

* Poison Null Byte injection
* URL encoding
* File path manipulation

## 2️⃣ **Vulnerability**

* **Name:** Sensitive Data Exposure / Improper File Handling
* **Affected component:** File access mechanism
* **Severity:** **High**

  * Allows access to unintended files
  * No proper validation of requested file paths

## 3️⃣ **Risks**

* **Exposure of sensitive internal files**
* **Information disclosure** that can aid further attacks
* **Increased attack surface** through accessible backups or signature files
* **Reputational damage** if internal data is leaked

## 4️⃣ **Actions**

The application must **strictly validate and sanitize file paths on the server side**, preventing null byte injections and unauthorized file access. Access to backup or signature files should be restricted, unnecessary files removed from production, and **OWASP best practices** followed to reduce the risk of sensitive data exposure.