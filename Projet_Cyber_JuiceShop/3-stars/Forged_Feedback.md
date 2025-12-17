# **Broken Access Control: Forged Feedback**
## **Points: 450**

## 1️⃣ **Methodology**

**Step 1 – Navigation and Observation**

1. I log in with any valid user account and navigate to the **feedback** interface.
2. I notice that all the information required to submit feedback is directly accessible from this page.

**Step 2 – Intercepting the Request**

3. I submit a normal feedback entry.
4. I use **Burp Suite** to intercept and inspect the outgoing request.

**Step 3 – API Behavior Enumeration**

5. In Burp, I observe that the request is a **GET /api/Feedback** and includes the **user ID** of the currently logged-in user.
6. I perform a *parameter manipulation test* by modifying this user ID.

**Step 4 – Controlled Exploitation**

7. I resend the modified request to see whether the server validates the user’s identity.
8. The server accepts the request with a **different user ID**, allowing me to submit feedback **as another user (e.g., Jim)** while being logged in as **admin**.

**Techniques Used:**

* Request interception/modification (Burp Suite)
* Client-side parameter enumeration
* IDOR testing (*Insecure Direct Object Reference*)

## 2️⃣ **Vulnerability**

* **Name:** IDOR (Insecure Direct Object Reference) / *Broken Access Control*
* ** OWASP Category:** A01:2021 – Broken Access Control
* **Affected Component:** Feedback API (`/api/Feedback`)
* **Severity:** **High**

  * Allows actions on behalf of another user
  * No server-side access control or user identity verification

## 3️⃣ **Risks**

* **Identity Impersonation:** an attacker can submit feedback or reports while impersonating another user.
* **Reputational Damage:** fake feedback submitted under real customer names.
* **Internal Manipulation:** malicious users could submit “official” messages as employees or support staff.
* **Indirect Privilege Escalation:** other sensitive endpoints could be abused in the same way.

## 4️⃣ **Actions**

The server must validate the user’s identity **exclusively on the server side**, ignoring any user ID provided by the client. A strong **access control mechanism** should be enforced, along with OWASP-recommended best practices to prevent IDOR vulnerabilities.
