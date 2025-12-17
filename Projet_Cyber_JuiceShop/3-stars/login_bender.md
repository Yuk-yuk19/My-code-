# Injection – Login Bender
**Points: 450**


## 1️⃣ Methodology

1. In the Admin section, I found the email address of a user: `bender@juice-sh.op`.
2. Since the challenge required an SQL injection, I searched for applicable attack techniques on a login form.
3. I discovered that the SQL sequence `'--` can be used to comment out the rest of an SQL query.
4. I then tested the following input:
   **Email:** `bender@juice-sh.op'--`
   **Password:** any value.
5. When submitting the form, the password validation was bypassed.
6. The system authenticated me as Bender without needing to know his actual password.


## 2️⃣ Vulnerability

* **Name:** SQL Injection – Authentication Bypass
* **Affected Component:** Authentication form (SQL backend)
* **Severity:** **Critical**

  * Allows logging in without a password
  * Full authentication bypass
  * Access to potentially sensitive accounts


## 3️⃣ Risks

* Unauthorized access to user or admin accounts
* Modification or deletion of database records
* Leakage of sensitive data
* Major reputational damage and high-impact security incident


## 4️⃣ Actions

* Use prepared statements to prevent SQL injection
* Never insert user input directly into SQL queries
* Implement strict validation for email/password fields
* Monitor suspicious login attempts through proper logging

