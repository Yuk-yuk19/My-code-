Voici la **traduction en anglais**, fidèle et professionnelle :

# **Sensitive Data – Login Amy**
**Points: 450**

## 1️⃣ **Methodology**

### **1. Initial analysis**

1. I attempted to log into the user account **Amy**, but I did not have her password.
2. No protection mechanism (rate limiting, CAPTCHA, account lockout…) prevented trying multiple approaches.

### **2. Search for publicly accessible clues (OSINT)**

3. I searched for information related to the challenge’s context, especially references displayed in the interface and cultural hints.
4. The theme clearly referenced the **Futurama** series, where a character named **Amy Wong** is well known.

### **3. Targeted research (Internet OSINT)**

5. With a simple Internet search (“Amy Futurama password”, “Amy Kif”), I found that the character is in a relationship with **Kif Kroker**.
6. Several unofficial sources list fictional passwords based on this relationship, including **K1f…**

### **4. Oriented attempts**

7. I tried this variant directly during the login process.
8. The password **K1f…** worked, confirming that the application used a **weak password** based on public information.

## 2️⃣ **Vulnerability**

* **Name:** Weak password management / Information Disclosure / Use of Predictable Password
* **OWASP Category:** A07:2021 – Identification and Authentication Failures
* **Affected Component:** User authentication system (login)
* **Severity:** **High**

  * The password can be retrieved through a simple Internet search
  * No mechanism prevents password guessing

## 3️⃣ **Risks**

* **Full compromise** of Amy’s user account
* **Potential access** to sensitive data
* **Snowball effect** if Amy reused this password elsewhere
* **Reputation damage**: trivial passwords used by the platform
* **Possible privilege escalation** depending on Amy’s permissions

## 4️⃣ **Actions**

Implement a strong password policy and block the use of simple or publicly predictable passwords.
Add protection mechanisms to authentication: attempt limiting, temporary lockout, and alerts.
Force users to reset weak passwords.
Follow OWASP best practices to ensure secure credential management.
