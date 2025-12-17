# **Injection – Database Schema**
**Points: 450**

## 1️⃣ **Methodology**

1. I searched for a product on the Juice Shop website (“banana”), which triggered a request that I intercepted using Burp Suite.
2. After reviewing the search request, I suspected a **SQL injection vulnerability** (as hinted in the challenge description).
3. I started by testing a simple injection similar to the one used to bypass authentication (`'--` in the Bender login challenge).
4. This attempt returned a SQL error message, revealing the internal query and showing that **two parentheses needed to be closed**.
5. I adjusted my payload accordingly by properly closing the query:
   `banana'))--`
   This test worked, confirming that the injection was exploitable.
6. Since my goal was to retrieve the **entire database schema**, I investigated how to extract information using a **UNION SELECT** payload.
7. I looked up URL encoding documentation to properly encode the payload:
   [https://www.w3schools.com/tags/ref_urlencode.ASP](https://www.w3schools.com/tags/ref_urlencode.ASP)
8. I then crafted a UNION payload targeting **sqlite_master**, the internal system table containing the database schema:
   `banana'))UNION%20SELECT%20sql,2,3,4,5,6,7,8,9%20FROM%20sqlite_master--`
9. This injection successfully displayed the full database schema, validating the challenge.

## 2️⃣ **Vulnerability**

* **Name:** SQL Injection (Data Extraction via UNION SELECT)
* **Affected Component:** SQL engine / Product search endpoint
* **Severity:** **Critical**

  * Allows extraction of the entire database schema
  * Could lead to leakage of sensitive data
  * Enables full escalation on the backend system

## 3️⃣ **Risks**

* **Schema exfiltration** → exposure of all tables, columns, and internal structure.
* **Sensitive data leakage** stored in the database.
* **Complete understanding of the data model**, enabling further attacks (auth bypass, account takeover, etc.).
* Major impact on confidentiality, integrity, and the overall security posture of the application.

## 4️⃣ **Actions**

* Use **prepared statements with parameterized queries** to prevent SQL injection.
* Filter and validate all user inputs (special characters, quotes, SQL operators).
* Disable verbose SQL error messages to avoid exposing internal queries.
* Implement a WAF or detection mechanisms for SQL injection patterns.
