# **Upload Size – Improper Input Validation**

## **Point : 450**

## 1️⃣ **Methodology**

**Step 1 – Accessing the feature**

1. I logged in to the site and navigated to the **complaint** section.
2. I uploaded a file as requested, under 100 KB, and observed the request in **Burp Suite**.

**Step 2 – Manipulating the request**

3. I intercepted the request and modified the **file content**, replacing it with a larger PDF.
4. The application accepted the request and processed the oversized file.

**Techniques used:**

* Interception and modification of requests (Burp Suite)
* Improper Input Validation testing
* File content manipulation

## 2️⃣ **Vulnerability**

* **Name:** Improper Input Validation
* **Affected component:** File upload feature
* **Severity:** **High**

  * Application accepts files larger than intended
  * No proper validation of file size or content

## 3️⃣ **Risks**

* **Server storage overflow** or unexpected resource usage
* **Potential denial of service** if exploited repeatedly
* **Exposure of sensitive functionality** by bypassing file size limits
* **Reputation damage** if the system is perceived as insecure

## 4️⃣ **Actions**

The application must **enforce strict file size and content validation on the server side**, rejecting any files exceeding the allowed limit. All checks should be performed independently of client‑side enforcement. Proper **input validation**, **sanitization of uploaded content**, and adherence to **OWASP best practices** are recommended to prevent abuse and maintain system integrity.