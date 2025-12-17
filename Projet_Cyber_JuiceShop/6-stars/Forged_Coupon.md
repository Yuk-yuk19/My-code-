# **Forged Coupon – Cryptographic Issues**
## **Points: 1350**

## 1️⃣ **Methodology**

**Step 1 – Coupon discovery**

1. I added products to the basket and proceeded to the **payment** step.
2. On the payment page, I noticed a coupon input field and a small text containing clickable links.
3. One of the links redirected to the official Juice Shop social profile, where several **coupon codes** were shared publicly.

**Step 2 – Analysis of the coupon format**
4. I tested the latest coupon and confirmed that it was valid.
5. I analyzed the structure of the coupon and suspected it was **encoded or encrypted**, not randomly generated.

**Step 3 – Decoding and manipulation**
6. I converted the coupon value from **ASCII85 to text**, which revealed the string `DEC25-20`.
7. I assumed this value represented a discount percentage.
8. I modified it to `DEC25-80` to increase the discount.
9. I re-encoded the modified value back into ASCII85, producing the forged coupon code `l}6D#h7ZNq`.

**Step 4 – Exploitation**
10. I entered the forged coupon code at checkout.
11. The application accepted the coupon and applied the higher discount, validating the challenge.

**Techniques used:**

* Cryptographic analysis (encoding/decoding)
* Business logic manipulation
* Manual data tampering

## 2️⃣ **Vulnerability**

* **Name:** Cryptographic Issues / Weak Coupon Protection
* **Affected component:** Coupon validation system
* **Severity:** **Critical**

  * Coupons can be decoded and modified
  * No integrity or authenticity verification
  * Allows creation of forged discounts

## 3️⃣ **Risks**

* **Financial losses** due to unauthorized discounts
* **Fraudulent purchases** at reduced or near-free prices
* **Abuse at scale** if coupons are shared publicly
* **Loss of trust** in promotional and payment systems

## 4️⃣ **Actions**

The application must **protect coupons using strong cryptographic mechanisms**, such as digital signatures or server-side validation, to prevent tampering. Coupon values should never be reversible or modifiable by users. Implementing **secure token generation**, strict **backend validation**, and following **OWASP cryptographic best practices** is essential to prevent coupon forgery.