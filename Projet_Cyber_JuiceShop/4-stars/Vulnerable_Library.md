# **Vulnerable Library – Vulnerable Components**

## **Points: 700**

## 1️⃣ **Methodology**

**Step 1 – Dependency inspection**

1. I accessed the **package.json** file in the same way as for the Legacy Typosquatting challenge.
2. I reviewed all listed dependencies and identified the library **`sanitize-html` version 1.4.2**.

**Step 2 – Vulnerability research**
3. I searched publicly available information online regarding **sanitize-html 1.4.2**.
4. I confirmed that this version contains **known security vulnerabilities**.

**Step 3 – Validation**
5. I submitted a feedback reporting **sanitize-html 1.4.2** as a vulnerable library.
6. The application validated the challenge.

**Techniques used:**

* Dependency analysis
* Vulnerability research (OSINT)
* Identification of known vulnerable libraries

## 2️⃣ **Vulnerability**

* **Name:** Use of Vulnerable Library
* **Affected component:** Dependency management (`sanitize-html`)
* **Severity:** **High**

  * Known vulnerabilities in the library version
  * Potential exposure to XSS or content sanitization bypass

## 3️⃣ **Risks**

* **Client-side attacks** such as XSS
* **Bypass of input sanitization**
* **Compromise of user data**
* **Security incidents due to outdated components**

## 4️⃣ **Actions**

The application must **keep third-party libraries up to date**, replace vulnerable versions with patched releases, and continuously monitor dependencies for known vulnerabilities. Using automated dependency scanning tools and following **OWASP guidelines for vulnerable components** is strongly recommended.