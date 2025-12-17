# **Legacy Typosquatting – Vulnerable Components**

## **Points: 700**

## 1️⃣ **Methodology**

**Step 1 – Accessing project files**

1. As with the Easter Egg challenge, I accessed the **FTP** of the application.
2. I downloaded the **package.json** file to review the frontend/backend dependencies.

**Step 2 – Dependency analysis**
3. I inspected the list of installed packages and searched for suspicious or legacy dependencies.
4. I identified a dependency named **`epilogue-js`**, which stood out as relevant to the challenge.

**Step 3 – Validation**
5. I submitted a feedback mentioning **epilogue-js** as a vulnerable or suspicious component.
6. The challenge was successfully validated.

**Techniques used:**

* Dependency analysis
* Source file inspection
* Identification of legacy / typosquatted packages

## 2️⃣ **Vulnerability**

* **Name:** Typosquatting / Vulnerable Dependency
* **Affected component:** Dependency management (`package.json`)
* **Severity:** **High**

  * Presence of a legacy or suspicious package
  * Potential risk of malicious or outdated code execution

## 3️⃣ **Risks**

* **Supply chain attack risk** through malicious or compromised dependencies
* **Execution of vulnerable code** in the application
* **Maintenance and security debt** due to outdated libraries
* **Loss of trust** if insecure components are discovered publicly

## 4️⃣ **Actions**

The application should **regularly audit and review its dependencies**, remove unused or legacy packages, and ensure that only trusted libraries are used. Implementing dependency monitoring tools and following **OWASP secure dependency management best practices** is recommended to reduce supply chain risks.

