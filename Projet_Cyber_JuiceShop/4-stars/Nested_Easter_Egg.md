# **Nested Easter Egg – Cryptographic Issues**

## **Point : 700**

## 1️⃣ **Methodology**

**Step 1 – Discovery of the initial Easter Egg**

1. After accessing the first Easter Egg file, I identified encoded data embedded within its content.
2. The challenge indicated that the next step involved **decoding or decrypting** this data.

**Step 2 – Cryptographic analysis**

3. I analyzed the encoded string and identified that it was the result of a **reversible encoding / cryptographic transformation**.
4. I decoded the content to retrieve a meaningful phrase.

**Step 3 – Exploitation of the decoded result**

5. The decoded output revealed a **string intended to be appended to the URL**.
6. I added this string to the end of the application URL as instructed.

**Step 4 – Access to the hidden resource**

7. Navigating to the constructed URL led me to a **hidden page displaying a planet**, confirming the successful discovery of the nested Easter Egg.

**Techniques used:**

* Cryptographic analysis / decoding
* Enumeration of hidden application content
* Manual URL manipulation


## 2️⃣ **Vulnerability**

* **Name:** Cryptographic Issues / Weak Obfuscation
* **Affected component:** Hidden content protection mechanism
* **Severity:** **Medium**

  * Sensitive paths are protected only by reversible encoding
  * No proper access control or authorization mechanism


## 3️⃣ **Risks**

* **Unauthorized access to hidden or restricted content**
* **Information disclosure** through weak cryptographic protection
* **Reduced security posture** if similar techniques protect sensitive features
* Potential chaining with other vulnerabilities to escalate impact


## 4️⃣ **Actions**

The application should avoid relying on **weak or reversible encoding** to protect sensitive paths or content. Access to hidden resources must be controlled through **proper authorization checks**, and any cryptographic mechanism used should follow **modern, secure standards** and OWASP best practices.
