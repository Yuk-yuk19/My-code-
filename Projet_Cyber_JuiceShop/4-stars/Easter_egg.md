# **Easter Egg – Broken Access Control**
## **Point : 700**

## 1️⃣ **Methodology**

**Step 1 – Understanding the challenge**

1. I identified that this challenge was related to a hidden **Easter Egg** and required bypassing access restrictions.

**Step 2 – Crafting the malicious request**

2. I learned that a **Null Byte Injection** could be used to manipulate file handling behavior.
3. Using URL encoding references, I noted that `%00` represents a null byte, and `%25` is required to encode the `%` character itself in a URL.

**Step 3 – Exploitation**

4. I crafted a request containing a **double-encoded null byte** (`%2500`) to poison the request.
5. I appended `.md` to the requested resource to force the application to treat the file as a readable Markdown file.
6. The server accepted the request and returned the hidden Easter Egg content.

**Techniques used:**

* Null Byte Injection
* URL encoding manipulation
* Access control bypass
* Manual request crafting

## 2️⃣ **Vulnerability**

* **Name:** Broken Access Control / Null Byte Injection
* **Affected component:** File handling and access control mechanism
* **Severity:** **High**

  * Unauthorized access to hidden or restricted files
  * Bypass of intended file type or access restrictions

## 3️⃣ **Risks**

* **Unauthorized access to internal or hidden resources**
* **Information disclosure** of sensitive or unintended content
* **Potential abuse of file handling logic** for further exploitation
* **Reputation damage** if hidden resources are publicly accessible

## 4️⃣ **Actions**

The application must **enforce strict access control on all files**, validate requested file paths securely, and properly handle **null byte characters** during decoding. Server-side validation should prevent file extension manipulation, and following **OWASP secure file handling best practices** is recommended to avoid similar bypasses.