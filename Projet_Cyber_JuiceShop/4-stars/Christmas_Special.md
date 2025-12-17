# **Christmas Special – Injection**

## **Points: 700**

## 1️⃣ **Methodology**

**Step 1 – Database reconnaissance**

1. I first completed the **Database Schema** challenge to gain visibility into the product database.
2. Using the browser developer tools, I inspected the frontend sources and searched for keywords related to the challenge.

**Step 2 – Identifying the hidden product**

3. By searching for **“Christmas 2014”** in the source files, I discovered a hidden product and its associated **ProductId**.

**Step 3 – Request interception and manipulation**

4. I added a product to the basket, which generated a request **POST /api/BasketItems/**.
5. I intercepted the request using **Burp Suite** and replaced the original `ProductId` with the one corresponding to **Christmas 2014**.
6. After sending the modified request, the application accepted it and added the hidden product to my basket, completing the challenge.

**Techniques used:**

* Source code inspection
* SQL/data enumeration (indirect)
* Interception and modification of requests (Burp Suite)

## 2️⃣ **Vulnerability**

* **Name:** Injection / Broken Business Logic
* **Affected component:** Basket API (`/api/BasketItems/`)
* **Severity:** **High**

  * Allows insertion of hidden or restricted products
  * No server-side validation of product availability

## 3️⃣ **Risks**

* **Unauthorized access to hidden or restricted products**
* **Financial loss** due to unintended product purchases
* **Business logic abuse** by manipulating product identifiers
* **Loss of trust** if exclusive or disabled items can be purchased

## 4️⃣ **Actions**

The application must **validate product identifiers strictly on the server side**, ensuring that only available and authorized products can be added to the basket. The backend should enforce **business logic controls**, prevent client-side manipulation of product IDs, and follow **OWASP best practices** to mitigate injection and logic-flaw vulnerabilities.
