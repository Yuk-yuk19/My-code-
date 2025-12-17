# **Poison Null Byte – Improper Input Validation**

## **Point : 700**

## 1️⃣ **Methodology**

**Step 1 – Understanding the objective**

1. I identified that this challenge was related to an **Easter Egg** hidden through file handling.

**Step 2 – Null Byte Injection**

2. I used a **Null Byte Injection**, which relies on injecting the `%00` character to bypass file handling logic.
3. Since `%` characters must be URL-encoded, I referred to URL encoding documentation to correctly encode the payload (`%00` → `%2500`).

**Step 3 – Crafting the request**

4. I modified the request by appending a file extension such as `.md` after the encoded null byte.
5. The application processed the request and allowed access to the Easter Egg content, confirming the vulnerability.

**Techniques used:**

* Null Byte Injection
* URL encoding manipulation
* Improper Input Validation testing


## 2️⃣ **Vulnerability**

* **Name:** Null Byte Injection / Improper Input Validation
* **Affected component:** File handling / resource access logic
* **Severity:** **High**

  * Input is not properly sanitized
  * Allows bypass of file type or path restrictions


## 3️⃣ **Risks**

* **Unauthorized access** to hidden or restricted files
* **Information disclosure** of internal resources
* **Potential file inclusion abuse**
* Increased attack surface for further exploitation


## 4️⃣ **Actions**

The application must **sanitize and validate all user input strictly on the server side**, rejecting null bytes and improperly encoded characters. File access logic should not rely on user-controlled input, and robust **input validation** combined with **secure file handling practices** and adherence to **OWASP recommendations** is required to prevent this type of bypass.

