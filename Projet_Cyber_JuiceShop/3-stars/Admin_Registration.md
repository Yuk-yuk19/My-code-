# **Admin Registration – Improper Input Validation**

## **Points: 450**

## 1️⃣ **Methodology**

**Step 1 – Creating a standard user account**

1. I start by creating a regular user account through the normal registration process.
2. I login with this new account to observe how the server handles requests.

**Step 2 – Intercepting the requests**

3. I use **Burp Suite** to intercept incoming and outgoing requests during registration and login.
4. In the server’s responses, I notice a field that indicates the user’s **role**.

**Step 3 – Manipulating the role parameter**

5. I test a controlled modification of this role field before the application processes the request.
6. The application performs no server-side validation and accepts the altered value, granting me an **administrator role**.

**Techniques used:**

* Request interception and manipulation (Burp Suite)
* Testing **Improper Input Validation**
* Analyzing API response parameters

## 2️⃣ **Vulnerability**

* **Name:** Improper Input Validation / Broken Access Control
* **OWASP Category:** A01:2021 – Broken Access Control
* **Affected Component:** User registration system and role management
* **Severity:** **Critical**

  * Allows full privilege escalation
  * No server‑side validation of user roles

## 3️⃣ **Risks**

* **Full compromise of the platform**
* **Unauthorized access to sensitive admin‑level functions**
* **Leak or manipulation of critical data**
* **Major financial and reputational impact**
* Attackers could perform actions while impersonating legitimate administrators

## 4️⃣ **Actions**

The application must **validate user roles strictly on the server side**, ignoring any role value coming from the client. The server should assign roles internally and never rely on client‑controlled data. Strong **access control mechanisms**, robust **input validation**, and adherence to **OWASP best practices** are recommended to prevent privilege escalation.
