# **Broken Access Control: Forged Review**
## **Points: 450**

## 1️⃣ **Methodology**

**Step 1 – Normal navigation**

1. I log in with a regular user account.
2. I write a review as if I were going to submit it normally.

**Step 2 – Request interception**
3. I intercept the review creation request using **Burp Suite**.
4. I notice that the request contains the **user ID** of the person posting the review.

**Step 3 – Parameter manipulation**
5. I modify the user ID in the request and replace it with another user’s ID.
6. I send the modified request and observe that the application accepts it:
→ the review is published **under another user’s name**.

**Techniques used:**

* Intercepting & modifying requests (Burp Suite)
* IDOR testing / parameter manipulation
* Enumerating fields sent to the backend

---

## 2️⃣ **Vulnerability**

* **Name:** IDOR (Insecure Direct Object Reference) / Broken Access Control
* **Affected component:** Reviews API
* **Severity:** **High**

  * Allows posting reviews as another user
  * No server-side access control validation

---

## 3️⃣ **Risks**

* **Identity impersonation** through customer reviews
* **Reputation manipulation** (fake reviews, sabotage)
* **Loss of user trust**
* Potential for **mass exploitation** if automated

---

## 4️⃣ **Actions**

Fix the issue by validating the user’s identity **server-side only**, without relying on any user ID provided by the client. Implement **strict access control** to prevent reviews from being created on behalf of other users.
