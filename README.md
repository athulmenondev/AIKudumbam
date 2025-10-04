# 🤖 AI Kudumbam (AI Family)

### _"The well-meaning nags of a Keralite family, now powered by AI."_

## Screenshots

![AI Kudumbam ss1](https://github.com/athulmenondev/AIKudumbam/blob/main/screenshots/ss1.png)
![AI Kudumbam ss2](https://github.com/athulmenondev/AIKudumbam/blob/main/screenshots/ss2.png)
![AI Kudumbam ss3](https://github.com/athulmenondev/AIKudumbam/blob/main/screenshots/ss3.png)
---




## 🤔 What is this?

**AI Kudumbam** is a delightfully useless web application that lovingly simulates a classic Keralite family gathering. Ever missed getting unsolicited advice about your messy room, your career, or why you aren't married yet? No? Well, now you can experience it on demand!

Simply choose a family persona and upload a photo of your room. Our advanced AI vision model will analyze the image and generate a unique, in-character response in authentic "Manglish" (Malayalam-English).

This project solves no real-world problem. It's a humorous, interactive celebration of technology, culture, and the enduring love hidden within a family's well-meaning concerns.

---

## 👨‍👩‍👧‍👦 Meet the Kudumbam

Choose your destiny. Who do you want to hear from today?

* **AI Amma (Mom):** The OG. Her analysis will focus on cleanliness, whether you've eaten, and if you're getting enough sleep. She'll spot a stray cup from a mile away.
* **The Inquisitive Ammayi (Nosy Aunty):** She has a Ph.D. in forensic analysis of relatives' rooms. She'll use clues (books, gadgets, decor) to ask about your job, salary, and marriage prospects.
* **The "Njan-Ninte-Prayathil" Ammavan (Uncle):** The "When-I-Was-Your-Age" Uncle. He'll look at your modern comforts (AC, fancy chair, laptop) and dismiss them with a story about his own difficult past.
* **The Adoring Ammumma (Grandma):** Pure, unconditional love. Her only concern is if you've eaten properly and are healthy. She'll probably mistake your laundry pile for a cute pet.

---

## 💻 Tech Stack

* **Frontend:** React (Vite) + Tailwind CSS
* **Backend:** Python (FastAPI)
* **The Brains:** Google Gemini API

---

## 🚀 Getting Started: Running Locally

**Important Note:** This project uses the Google Gemini API, which requires a personal API key. For this reason, **AI Kudumbam is not hosted publicly**. To experience the app, you must run it on your local machine using your own free API key.

### Prerequisites

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/) (v18 or higher)
* [Python](https://www.python.org/downloads/) (v3.9 or higher)
* A **Google Gemini API Key**. You can get one for free from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation & Setup

**1. Clone the Repository**
```bash
git clone https://github.com/athulmenondev/AIKudumbam
cd ai-kudumbam
```

**2. Backend Setup**

Navigate to the backend directory, create a virtual environment, and install the dependencies.

```bash
cd backend

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows, use: venv\Scripts\activate

# Install required packages
pip install -r requirements.txt
```

Now, create a `.env` file in the `backend` directory to store your API key.

```
# backend/.env
GOOGLE_API_KEY="PASTE_YOUR_GEMINI_API_KEY_HERE"
```

**3. Frontend Setup**

Open a *new terminal window* and navigate to the frontend directory.

```bash
cd frontend

# Install dependencies
npm install
```

### ▶️ Running the Application

You need to have both the backend and frontend servers running simultaneously.

* **In your backend terminal:**
    ```bash
    # Make sure you are in the 'backend' directory with the virtual environment active
    uvicorn main:app --reload
    ```
    The backend API will now be running at `http://127.0.0.1:8000`.

* **In your frontend terminal:**
    ```bash
    # Make sure you are in the 'frontend' directory
    npm run dev
    ```
    The React development server will start, and your browser should open to `http://localhost:5173`.

That's it! You can now upload a photo or chat with anyone and get lovingly judged by your new AI family.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## ✨ Acknowledgements

* To every Keralite family for being the endless source of inspiration.
* To the developers behind the amazing tools that made this possible.

---

<br>

<div align="center">
Made with ❤️ and a little bit of chammandi.
</div>
