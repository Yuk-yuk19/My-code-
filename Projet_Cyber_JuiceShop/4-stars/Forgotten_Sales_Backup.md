# **Forgotten Sales Backup – Sensitive Data Exposure**
## **Points: 700**

## 1️⃣ **Methodology**

**Step 1 – Reusing a known technique**

1. I reused the same technique applied in the Easter Egg and Developer Backup challenges.
2. I targeted a suspected backup file related to sales data.

**Step 2 – Poison Null Byte injection**

3. I performed a **Poison Null Byte injection**, using proper URL encoding.
4. This allowed me to bypass file extension and access restrictions.

**Step 3 – Data exposure**

5. The server returned a **sales backup file**, confirming unrestricted access to sensitive business data.

**Techniques used:**

* Poison Null Byte Injection
* URL encoding
* Direct access to backup resources

## 2️⃣ **Vulnerability**

* **Name:** Sensitive Data Exposure
* **Affected component:** Sales data backups / File storage
* **Severity:** **Critical**

  * Exposure of confidential business and sales data
  * No authentication or authorization checks

## 3️⃣ **Risks**

* **Leak of confidential sales information**
* **Financial and competitive impact**
* **Regulatory and compliance risks**
* **Loss of customer and business trust**

## 4️⃣ **Actions**

The application must **remove public access to backup files**, sanitize file path inputs, and block **null byte attacks** at the server level. Sensitive business data should be stored securely with strict **access controls**, regular audits, and compliance with **OWASP data protection best practices**.
