# **Extra Language – Broken Anti Automation**
## **Points: 1000**

## 1️⃣ **Methodology**

**Step 1 – Request observation**

1. I started **Burp Suite** and enabled the proxy.
2. I changed the language in the application interface and intercepted the related network request.
3. I observed a request to **GET /assets/i18n/** followed by a localization code, such as `de_DE`.

**Step 2 – Enumeration of supported languages**

4. I researched Juice Shop translations on the official Crowdin page:
[https://crowdin.com/project/owasp-juice-shop](https://crowdin.com/project/owasp-juice-shop)
5. On this page, I noticed a colored flag and inspected its source code.
6. I discovered an additional localization code: **`tlh_AA`**.

**Step 3 – Request manipulation**

7. I replaced `de_DE` with `tlh_AA` in the intercepted request:
`GET /assets/i18n/tlh_AA`
8. I sent the modified request and the application successfully loaded the extra language, completing the challenge.

**Techniques used:**

* Request interception and modification (Burp Suite)
* Enumeration of localization files
* OSINT (public translation platform analysis)

## 2️⃣ **Vulnerability**

* **Name:** Broken Anti Automation / Security Misconfiguration
* **Affected component:** Language localization system (`/assets/i18n`)
* **Severity:** **Medium**

  * Hidden or undocumented features are accessible
  * No restriction on available localization files

## 3️⃣ **Risks**

* **Exposure of hidden or unfinished features**
* **Information disclosure** through unused or internal language files
* **Bypass of intended application restrictions**
* **Potential abuse** if combined with other enumeration techniques

## 4️⃣ **Actions**

The application should **restrict access to supported localization files only**, enforcing a whitelist on the server side. Hidden or unused language resources should be removed from production environments, and proper **access controls** should be applied to prevent unauthorized enumeration, following **OWASP best practices**.