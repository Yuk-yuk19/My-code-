# **Forgotten Developer Backup – Sensitive Data Exposure**
## **Points: 700**

## 1️⃣ **Methodology**

**Step 1 – Identifying the attack vector**

1. I approached this challenge similarly to the Easter Egg challenge.
2. I suspected the presence of a hidden or improperly protected backup file on the server.

**Step 2 – Poison Null Byte injection**

3. I crafted a request using a **Poison Null Byte injection** technique.
4. I applied proper **URL encoding** to inject a null byte (`%00`) into the request, allowing me to bypass file extension restrictions.

**Step 3 – File retrieval**

5. The server accepted the crafted request and returned a **developer backup file**.
6. Downloading this file confirmed the exposure of sensitive data and validated the challenge.

**Techniques used:**

* Poison Null Byte Injection
* URL encoding
* Improper file handling exploitation

## 2️⃣ **Vulnerability**

* **Name:** Sensitive Data Exposure / Improper File Handling
* **Affected component:** File handling and backup storage mechanism
* **Severity:** **High**

  * Allows access to backup files
  * Sensitive data exposed without authentication

## 3️⃣ **Risks**

* **Exposure of sensitive developer or application data**
* **Information disclosure** that may facilitate further attacks
* **Increased attack surface** due to leaked internal files
* **Severe reputational damage** if backups are publicly accessible

## 4️⃣ **Actions**

The application must **restrict access to backup and development files**, ensure that sensitive files are never publicly accessible, and properly handle file paths on the server. Strong **input validation**, secure **file storage practices**, and adherence to **OWASP best practices** are required to prevent sensitive data exposure.
