# **Broken Authentication: Reset Bender's Password**
## **Point: 700**

## 1️⃣ **Methodology**

**Step 1 – Initiating password reset**

1. I clicked on **Forgot Password** and entered **Bender’s email address**.
2. The application displayed a **security question** associated with the account.

**Step 2 – OSINT research**

3. The security question was: *“Company you first worked for as an adult?”*
4. I performed **OSINT research** by searching for information about Bender’s background.
5. I found references to **Suicide Booth**, a well-known element from Futurama.

**Step 3 – Information correlation**

6. I consulted the Futurama wiki and identified the company **“Stop’n’Drop”** as the correct answer.
7. I submitted this answer, allowing me to reset the password.
8. I successfully set a new password and gained access to Bender’s account.

**Techniques used:**

* OSINT (Open Source Intelligence)
* Enumeration of security questions
* Weak authentication recovery testing

## 2️⃣ **Vulnerability**

* **Name:** Broken Authentication – Weak Security Questions
* **OWASP Category:** A07:2021 – Identification and Authentication Failures
* **Affected component:** Password reset mechanism
* **Severity:** **High**

  * Security answers can be found using public information
  * No additional verification is required to reset the password

## 3️⃣ **Risks**

* **Full account takeover** of the affected user
* **Unauthorized access** to personal or sensitive data
* **Identity impersonation**
* **Reputational damage** due to weak account recovery mechanisms


## 4️⃣ **Actions**

The application should **remove weak security questions** and rely on modern password reset mechanisms such as **time-limited tokens**, **email verification**, or **multi-factor authentication (MFA)**. Publicly guessable information must never be used for account recovery. Applying **OWASP authentication best practices** is essential to prevent account takeover.
