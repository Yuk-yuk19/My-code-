# **Broken Authentication: Reset Jim's Password**
## **Points: 450**

## 1️⃣ **Methodology**

**Step 1 – Initiating the process**

1. I click on **Reset Password** and enter Jim’s email address.
2. The application then displays a **security question** associated with the account.

**Step 2 – Public information gathering (internal OSINT)**

3. I search for “Jim Futurama” on the internet, but nothing useful comes up.
4. I then switch to internal OSINT by looking directly on the website:

* I inspect public content, especially **reviews** written by Jim.

**Step 3 – Clue analysis**

5. I find a review written by Jim in which he mentions **Starfleet**.
6. A quick search for “Jim Starfleet” leads to consistent information.

**Step 4 – Solving the security question**

7. The question displayed by the site is: *“Name of older brother?”*
8. Thanks to internal OSINT, I deduce that the answer is **Samuel**.
9. I validate the answer, and the password reset succeeds.

**Techniques used:**

* Internal OSINT (analysis of public site content)
* Enumeration of publicly exposed information
* No special tools: only the website and basic search

## 2️⃣ **Vulnerability**

* **Name:** Broken Authentication / Weak Security Questions
* **OWASP Category:** A07:2021 – Identification and Authentication Failures
* **Affected Component:** **Password reset system** (Security Questions)
* **Severity:** **High**

  * Answers can be found through internal OSINT
  * The account can be compromised without the owner’s involvement

## 3️⃣ **Risks**

* **Full account takeover** of the targeted user
* **Unauthorized access** to personal or sensitive data
* Potential **identity impersonation**
* **Reputational damage** if customer accounts are easily compromised

## 4️⃣ **Actions**

Strengthen the password reset mechanism by removing **weak security questions**, and use modern methods instead: temporary reset links, strong tokens, or MFA. Prevent the exposure of exploitable information in public content and follow OWASP best practices for secure authentication.
