# **Steganography – Security through Obscurity**
## **Points: 700**

## 1️⃣ **Methodology**

**Step 1 – Network traffic analysis**

1. I accessed the application and opened the browser **Network** tab.
2. I triggered requests to retrieve images used by the site.

**Step 2 – Image extraction**

3. I downloaded the image files observed in the network requests.
4. One image appeared normal but was suspicious due to the challenge context.

**Step 3 – Steganography analysis**

5. I used a **steganography tool** to analyze the image.
6. The tool revealed a hidden image embedded inside the original one.

**Step 4 – Challenge validation**

7. After extracting and opening the hidden image, I found **“Pickle Rick”**.
8. I submitted a feedback containing **Pickle Rick**, which successfully completed the challenge.

**Techniques used:**

* Network traffic inspection
* Steganography analysis
* Hidden data extraction
* Manual analysis

## 2️⃣ **Vulnerability**

* **Name:** Security Through Obscurity
* **Affected component:** Static image assets
* **Severity:** **Medium**

  * Sensitive information hidden instead of properly protected
  * No real security control preventing disclosure

## 3️⃣ **Risks**

* **Disclosure of hidden information** assumed to be secret
* **False sense of security** relying on obscurity
* **Information leakage** through publicly accessible assets
* Potential abuse if sensitive data is hidden instead of secured

## 4️⃣ **Actions**

The application should **avoid relying on obscurity as a security mechanism**. Sensitive data must never be hidden inside static files and should instead be protected using proper **access controls** and **encryption**. Following **OWASP best practices** ensures that information is secured rather than merely concealed.
