# **Change Bender's Password – Broken Authentication**
## **Points: 1000**

## 1️⃣ **Methodology**

**Step 1 – Initial access**

1. I first logged into **Bender’s account** by exploiting an SQL injection on the login form.
2. Once authenticated as Bender, I navigated to the **Reset Password** section.

**Step 2 – Request interception**

3. I enabled **Burp Suite** and intercepted the password change request.
4. I observed that the request contained multiple fields, including the **current password**, which was already partially filled with placeholder data.

**Step 3 – Manipulation of authentication logic**

5. I tested removing one of the required fields, specifically the **current password** parameter.
6. The application accepted the modified request without validating the current password.
7. I submitted a new password (`slurmCl4ssic`), and the server successfully updated Bender’s password.

**Techniques used:**

* SQL Injection (initial access)
* Interception and modification of requests (Burp Suite)
* Broken Authentication logic testing
* Parameter tampering

## 2️⃣ **Vulnerability**

* **Name:** Broken Authentication
* **Affected component:** Password change / reset functionality
* **Severity:** **Critical**

  * Allows password change without knowing the current password
  * Authentication checks can be bypassed
  * Leads to full account takeover

## 3️⃣ **Risks**

* **Complete account compromise** of targeted users
* **Unauthorized password changes**, locking out legitimate users
* **Privilege escalation** if high-privilege accounts are affected
* **Severe reputational damage** and loss of user trust

## 4️⃣ **Actions**

The application must **enforce strict server-side validation** during password changes, always requiring the correct current password. All required fields must be verified before processing the request. Implementing **robust authentication controls**, proper **request validation**, and following **OWASP best practices** is essential to prevent account takeover attacks.

