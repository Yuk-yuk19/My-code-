# **Upload Type – Improper Input Validation**
## **Points : 450**

## 1️⃣ **Methodology**

**Step 1 – Using the upload feature**

1. I logged into the application and navigated to the **complaint** section.
2. I uploaded a valid PDF as required and intercepted the request using **Burp Suite**.

**Step 2 – Manipulating the file type**

3. In the intercepted request, I modified the **file type information**, changing the PDF category to 

**JPG**.

4. I then sent a PDF file while declaring it as a JPG.
5. The application accepted the upload, proving that the file type was not properly validated.

**Techniques used:**

* File type tampering
* Request interception (Burp Suite)
* Improper Input Validation testing

## 2️⃣ **Vulnerability**

* **Name:** Improper Input Validation (File Type Bypass)
* **Affected component:** File upload mechanism
* **Severity:** **High**

  * Accepts incorrect or spoofed file types
  * No server‑side MIME type validation

## 3️⃣ **Risks**

* **Malicious file upload**, including disguised scripts
* **Bypassing security controls** based on file extensions
* Possible **remote code execution** depending on server configuration
* **System compromise** or unauthorized access

## 4️⃣ **Actions**

The application must **validate file types strictly on the server side**, ensuring the uploaded file’s actual MIME type matches the allowed formats. The server should reject files with mismatched extensions or spoofed headers. Strong **input validation**, proper **MIME checking**, and adherence to **OWASP best practices** are essential to prevent malicious uploads and protect system integrity.
