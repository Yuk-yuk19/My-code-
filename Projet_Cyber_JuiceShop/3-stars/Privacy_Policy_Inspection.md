# **Privacy Policy Inspection – Security through Obscurity**
## **Points: 450**

## 1️⃣ **Methodology**

**Step 1 – Initial review**

1. When I first saw the challenge, I assumed that simply reading the **Privacy Policy** page would be sufficient.
2. After carefully reading the entire document, I realized there was no visible indication proving that the policy had been inspected.

**Step 2 – Source code inspection**

3. I decided to inspect the **HTML source code** of the Privacy Policy page.
4. I noticed that some text fragments were located inside `<span>` elements nested within `<p>` tags.

**Step 3 – URL manipulation**

5. I attempted to include these text fragments directly in the URL, first separated by hyphens (`-`), which did not work.
6. I then retried using forward slashes (`/`) as separators.
7. This approach succeeded and validated the challenge.

**Techniques used:**

* Source code inspection
* Security through obscurity analysis
* URL path manipulation

## 2️⃣ **Vulnerability**

* **Name:** Security through Obscurity
* **Affected component:** Privacy Policy page routing / frontend logic
* **Severity:** **Low to Medium**

  * Relies on hidden frontend behavior instead of explicit validation
  * No clear user feedback or verification mechanism

## 3️⃣ **Risks**

* **False sense of security** by hiding logic instead of enforcing it properly
* **Poor maintainability** and unclear application behavior
* Potential **information disclosure** if similar hidden mechanisms exist elsewhere
* Reduced trust due to non-transparent validation logic

## 4️⃣ **Actions**

The application should avoid relying on hidden frontend behavior and instead implement **explicit, server‑side validation** to confirm user actions. Clear verification mechanisms, transparent logic, and adherence to **OWASP best practices** are recommended to eliminate security through obscurity patterns.