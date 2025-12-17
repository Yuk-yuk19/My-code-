# Manipulate Basket
## **Points: 450**

## 1️⃣ **Methodology**

### **Step 1 – Normal navigation**

1. I log in with a regular user account.
2. I add any product to my basket through the interface.

### **Step 2 – Request interception**

3. I intercept the request with **Burp Suite** when adding an item to the basket.
4. I notice a **POST /api/BasketItems/** request containing basket information, including the **user ID**.

### **Step 3 – Parameter manipulation**

5. I modify this user ID and resend the altered request.
6. The application accepts it, allowing me to add a product to **another user’s basket**.

### **Techniques used:**

* Interception and modification of HTTP requests (Burp Suite)
* IDOR testing / parameter manipulation
* Enumeration of fields sent to the backend

## 2️⃣ **Vulnerability**

* **Name:** IDOR (Insecure Direct Object Reference) / *Broken Access Control*
* **Affected component:** Basket API (`/api/BasketItems/`)
* **Severity:** **High**

  * Allows modifying another user’s basket
  * No server-side identity verification

## 3️⃣ **Risks**

* **Unauthorized basket modification** for any customer
* **Fraud or sabotage** (adding or removing items)
* **Financial impact** for the shop (manipulated orders)
* **Loss of customer trust**, risk of large-scale abuse

## 4️⃣ **Actions**

Fix the issue by verifying the **authenticated user only on the server side**, ignoring any user ID sent by the client. Add strict **access control checks** to prevent cross-user basket manipulation.