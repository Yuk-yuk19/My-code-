# **Expired Coupon – Improper Input Validation**

## **Point : 700**

## 1️⃣ **Methodology**

**Step 1 – Source code analysis**

1. I inspected the **main.js** file and searched for date-related values such as *2020*.
2. I discovered a coupon code named **WMNSDY2020**.

**Step 2 – Understanding the coupon logic**

3. Since the coupon referenced the year 2020, I assumed it was an **expired coupon**.
4. I searched online for the meaning of *WMNSDY* and found that it stands for **Women’s Day**.

**Step 3 – Client-side manipulation**

5. I changed my system date to **March 8, 2020** (International Women’s Day).
6. I placed an order using the coupon code **WMNSDY2020**.
7. The application accepted the coupon despite it being expired, validating the challenge.

**Techniques used:**

* Source code inspection
* Logic flaw analysis
* Client-side date manipulation
* Improper Input Validation testing


## 2️⃣ **Vulnerability**

* **Name:** Improper Input Validation / Business Logic Flaw
* **Affected component:** Coupon validation system
* **Severity:** **High**

  * Expired coupons can still be used
  * No server-side validation of the current date


## 3️⃣ **Risks**

* **Financial loss** due to misuse of expired coupons
* **Abuse of promotional campaigns**
* **Loss of trust** in discount and pricing mechanisms
* Potential large-scale abuse if automated


## 4️⃣ **Actions**

The application must **validate coupon expiration dates strictly on the server side**, independently of the client system time. All time-based checks should rely on **server-controlled timestamps**. Proper **business logic validation** and adherence to **OWASP best practices** are required to prevent coupon abuse.
