# **Improper Input Validation: Payback Time**
## **Points: 450**

## 1️⃣ **Methodology**

**Step 1 – Normal interaction**

1. I logged in with a standard user account.
2. I proceeded to order a bicycle through the regular purchase flow.

**Step 2 – Intercepting the request**

3. Using **Burp Suite**, I intercepted the request sent when updating the quantity in the shopping cart.
4. I noticed that the application did **not** validate the quantity field on the server side.

**Step 3 – Exploitation**

5. I modified the quantity value from a positive number to **-1000**.
6. I forwarded the manipulated request, and the server **accepted the negative quantity** without any restrictions.
7. As a result, the system subtracted the value of 1000 bicycles from the total, effectively **crediting me with their monetary value**.

**Techniques used :**

* Interception and modification of requests (Burp Suite)
* Improper Input Validation testing
* Manipulation of numerical parameters

## 2️⃣ **Vulnerability**

* **Name:** Improper Input Validation / Broken Business Logic
* **Component affected:** Shopping cart / Order processing API
* **Severity:** **Critical**

  * Allows negative quantities to be processed
  * Direct financial impact
  * No server-side validation of numeric inputs

## 3️⃣ **Risks**

* **Financial loss** due to negative order manipulation
* **Fraudulent crediting** of large sums of money
* **Business logic corruption** (invalid orders, inconsistent stock)
* **Potential full compromise** of the purchase system

## 4️⃣ **Actions**

Implement **strict server-side validation** for numeric fields. Add business logic controls preventing negative orders or refunds without authorization. Apply OWASP recommendations regarding **input validation** and **business logic security**.
