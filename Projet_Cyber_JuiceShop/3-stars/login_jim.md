# **Injection – Login Jim**
**Points: 450**

## 1️⃣ **Methodology**

1. While exploring the Admin section, I identified the email address of a user: `jim@juice-sh.op`.
2. Since the challenge belongs to the *Injection* category, I looked for SQL injection techniques applicable to a login form.
3. I learned that adding the sequence `'--` allows commenting out the rest of an SQL query.
4. I then entered:
   **Email:** `jim@juice-sh.op'--`
   **Password:** any value.
5. Upon submitting, the SQL query was truncated, bypassing the password verification.
6. This allowed me to log in without knowing the real password.

## 2️⃣ **Vulnerability**

* **Name:** SQL Injection (Authentication Bypass)
* **Affected Component:** Authentication system (SQL login)
* **Severity:** Critical

  * Full authentication bypass
  * Possible access to sensitive or admin accounts

## 3️⃣ **Risks**

* Complete compromise of user or admin accounts
* Data manipulation or deletion
* Leakage of sensitive information

## 4️⃣ **Actions**

* Use parameterized prepared statements to prevent SQL injection
* Never concatenate user inputs directly into SQL queries
* Implement strict validation on input fields (email, password)
