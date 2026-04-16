<img width="1396" height="816" alt="Screenshot 2026-04-17 014723" src="https://github.com/user-attachments/assets/2eef8ae4-ac16-4f34-8870-272b2f88b1f8" /># 🚀 KoinX Tax Loss Harvesting Tool

A responsive React-based application that simulates **Tax Loss Harvesting** for crypto portfolios. This tool allows users to analyze their capital gains and strategically select assets to minimize tax liability.

---

## 🔗 Live Demo

👉 https://tax-loss-harvesting-eta.vercel.app/

## 📂 GitHub Repository

👉 https://github.com/dhyaneshsupare/KoinX-Tax-Loss-Harvesting

---

## 🧠 Problem Statement

Tax Loss Harvesting is a strategy used to reduce tax liability by offsetting gains with losses.

This application:

* Displays **capital gains before and after harvesting**
* Allows users to **select assets to sell**
* Dynamically updates **tax impact in real-time**

---

## ✨ Features

### 📊 Capital Gains Dashboard

* Pre-Harvesting vs After-Harvesting comparison
* Short-term & Long-term breakdown
* Real-time calculation of:

  * Profits
  * Losses
  * Net Capital Gains
  * Effective Capital Gains

---

### 📋 Holdings Table

* Displays crypto portfolio holdings
* Includes:

  * Asset details (logo, name)
  * Holdings & average buy price
  * Current price
  * Short-term & long-term gains

---

### ✅ Interactive Selection

* Select individual assets using checkboxes
* Select/Deselect all functionality
* “Amount to Sell” auto-populates on selection

---

### 📉 Tax Optimization Logic

* Positive gains → added to profits
* Negative gains → added to losses
* Updates capital gains dynamically

---


### 👁️ View More Functionality

* Initially shows limited holdings
* “View More” button loads additional assets
* Improves UI readability and UX

---

### 📱 Responsive Design

* Fully responsive layout
* Works across desktop and mobile devices

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **State Management:** React Hooks (useState, useMemo)
* **Data Handling:** Mock APIs (local data simulation)
* **Deployment:** Vercel

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/KoinX-Tax-Loss-Harvesting.git
cd KoinX-Tax-Loss-Harvesting
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 📂 Project Structure

```
src/
 ├── components/
 │   ├── CapitalGainsCard.jsx
 │   ├── HoldingsTable.jsx
 │   ├── HoldingRow.jsx
 │
 ├── data/
 │   ├── mockData.js
 │
 ├── utils/
 │   ├── calculations.js
 │
 ├── App.jsx
 ├── main.jsx
```

---

## 🧮 Core Logic

### Capital Gains Calculation

```
Net STCG = Profits - Losses  
Net LTCG = Profits - Losses  
Total Gains = STCG + LTCG  
```

---

### Harvesting Logic

* When a user selects an asset:

  * If gain > 0 → added to profits
  * If gain < 0 → added to losses

---

## 📸 Screenshots
Production ready build.
<img width="821" height="590" alt="Screenshot 2026-04-17 011111" src="https://github.com/user-attachments/assets/3011783b-700d-45ab-9b92-83adf58337fc" />

Vercel deployed.
<img width="1900" height="967" alt="image" src="https://github.com/user-attachments/assets/43f438a7-ef4a-4845-a422-a5164a8ad03d" />

Working View More Button
<img width="1384" height="521" alt="image" src="https://github.com/user-attachments/assets/cb82e80e-77a8-4076-ae07-729dc4c2e39c" />

<img width="1384" height="891" alt="image" src="https://github.com/user-attachments/assets/5c38a703-e5c4-4683-8b42-e168df85847a" />

Before selecting the Holdings.
<img width="1396" height="816" alt="Screenshot 2026-04-17 014723" src="https://github.com/user-attachments/assets/a684294d-2f47-4a38-9ea2-57b0145583ff" />

After selecting the Holdings.
<img width="1391" height="810" alt="Screenshot 2026-04-17 014741" src="https://github.com/user-attachments/assets/eb1995c7-31da-4ed7-a4cb-1661759a9b48" />





---

## ⚠️ Assumptions

* Tax rates are not calculated (only gain/loss simulation)
* Gains are directly aggregated from holdings
* Mock data is used instead of real APIs

---

## 🚀 Deployment

Deployed using Vercel:

* Automatic CI/CD via GitHub
* Instant updates on push

---

## 💡 Future Improvements

* 🔍 Search & filter functionality
* 📊 Highlight best assets for harvesting
* 📈 Charts for gain visualization
* 🌐 Real API integration

---

## 🙌 Acknowledgements

* KoinX Assignment Team
* CoinGecko (for asset logos)

---

## 👨‍💻 Author

**Dhyanesh Supare**

* GitHub: https://github.com/dhyaneshsupare
* LinkedIn: https://linkedin.com/in/dhyanesh-supare

---

## ⭐ If you liked this project, consider giving it a star!
