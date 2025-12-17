# **Deluxe Fraud – Improper Input Validation**
## **Points: 450**

## 1️⃣ **Methodology**

**Step 1 – Account creation**

1. I created a new user account and followed the normal steps required to reach the **Deluxe Membership** payment page.

**Step 2 – Intercepting the transaction**

2. At the payment screen, I selected the **wallet** payment option.
3. Using **Burp Suite**, I intercepted the outgoing request before it was sent to the server.

**Step 3 – Manipulating the payment method**

4. In the intercepted request, I observed a field specifying the **payment method**.
5. By changing this value to **"none"**, I bypassed the required payment validation.
6. The server accepted the request and granted me the **Deluxe Membership** without completing any real payment.

**Techniques used:**

* Interception and modification of HTTP requests (Burp Suite)
* Input manipulation
* Parameter tampering

## 2️⃣ **Vulnerability**

* **Name:** Improper Input Validation
* **Affected component:** Deluxe Membership payment API
* **Severity:** **High**

  * Allows bypassing of the payment process
  * Grants premium features without transaction validation

## 3️⃣ **Risks**

* **Financial loss** due to unpaid premium memberships
* **Fraudulent upgrades** impacting business revenue
* **Exploitation at scale** if automated
* **Reputation damage** if users discover that payment checks can be bypassed

## 4️⃣ **Actions**

The application must **validate payment methods strictly on the server side** and reject any request where the payment field is missing, altered, or invalid. Payment authorization must be confirmed by the backend before granting access to premium features. Strong **input validation**, robust **transaction verification mechanisms**, and strict adherence to **OWASP best practices** are recommended to prevent fraudulent membership upgrades.
