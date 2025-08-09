<img width="3188" height="1202" alt="frame (3)" src="https://github.com/user-attachments/assets/517ad8e9-ad22-457d-9538-a9e62d137cd7" />


# AIKudumbam 🎯


## Basic Details
### Team Name: TechNinja


### Team Members
- Team Lead: Sandra Suresh - [NSS College of Engneering, Palakkad]
- Member 2: Athul S Menon - [NSS College of Engneering, Palakkad]
<!-- - Member 3: [Name] - [College] -->

### Project Description
AI Kudumbam – Your Digital Dose of Family Drama is a fun web app where you can chat with your virtual Kerala family. Talk to the whole gang or individual characters like Amma, Ammayi, Ammavan, or Ammumma — each bringing their signature advice, gossip, and love in perfect Manglish.

### The Problem (that doesn't exist)
In today’s fast-paced world, many Malayalis living away from home are tragically deprived of the constant stream of unsolicited advice, probing questions, and overbearing affection that only a true Kerala family can provide. We saw this massive non-issue and decided it was time to bring back the drama — digitally.

### The Solution (that nobody asked for)
We built AI Kudumbam, a gloriously unnecessary web app that lets you chat with a virtual Kerala family. Choose your favorite family member archetype — Amma, Ammayi, Ammavan, or Ammumma — and receive lovingly intrusive messages in authentic Manglish. Clean your room? They’ll notice. Skipped lunch? They’ll scold. It’s all the family drama you never needed, now available on demand.

## Technical Details
### Technologies/Components Used
For Software:
Languages used: Python, JavaScript

Frameworks used: Flask (backend), React.js (frontend)

Libraries used:

    Google Generative AI / Gemini API

    OpenCV (for basic image preprocessing)

    Axios (for API calls in frontend)

    dotenv (for environment variable management)

Tools used:

    VS Code (development)

    Git & GitHub (version control)

    Postman (API testing)

    Node.js & npm (package management)

For Hardware:
Main components:

    Laptop/PC (for development)

    Webcam or smartphone camera (for capturing room images)

Specifications:

    Minimum 8 GB RAM, Quad-core processor

    Stable internet connection

Tools required:

    USB cable or wireless transfer for images

    Optional: external storage for backups
    
### Implementation
For Software:
# Installation
# Clone the repository
git clone https://github.com/your-username/your-project.git

# Navigate to project directory
cd your-project

# Backend setup
cd backend
pip install -r requirements.txt

# Frontend setup
cd ../frontend
npm install


# Run
# Start backend server
cd backend
python app.py

# Start frontend
cd ../frontend
npm start


### Project Documentation
For Software:

# Screenshots (Add at least 3)
![screenshot1](https://github.com/Sandra-004/AIKudumbam/blob/main/screenshots/ss1.png)-Landing Page
This shows our vibrant landing page describing each character?family memeber briefly with their images as well.
![Screenshot2](https://github.com/Sandra-004/AIKudumbam/blob/main/screenshots/ss2.png)-Chat Interface page
Shows the watsapp-like chat interface page with the family group , and indiviadual characters.

![Screenshot3](https://github.com/Sandra-004/AIKudumbam/blob/main/screenshots/ss3.png) -Chat with a character 
Shows the chat with AI Amma , user sharing an image and mother scolding as a reply.

# Diagrams
![Workflow](https://github.com/Sandra-004/AIKudumbam/blob/main/screenshots/ss4.png)
1. User’s Browser (Frontend)

    User interacts with the AI Kudumbam UI in their browser.

    The UI is the entry point for sending a request to start the group chat process.

2. Our Server (Python Backend)

    The browser sends a POST request to /api/group-chat.

    The backend then:

        Prepares the image (likely the room photo from the user).

        Shuffles personas so each persona will give a different, randomized reply.

3. Loop Over Personas

    For each persona in the shuffled list:

        The server sends the image and prompt to Google Gemini API via Google AI Cloud.

        Gemini returns a persona-specific response based on the image and instructions.

        This loop repeats for all personas in the set.

4. Final Output

    After all personas have responded, the results can be aggregated for the user in the frontend, simulating a family group chat where each persona reacts differently to the same image.

This is basically:

Frontend UI → Backend API → Persona Preparation → AI Model Calls → Responses Returned.

### Project Demo
# Video
[Add your demo video link here]
*Explain what the video demonstrates*

# Additional Demos
[Add any extra demo materials/links]

## Team Contributions
- Sandra Suresh Panicker: Front-end handling , connectivity to backend 
- athul s Menon: Backend handling , API generation and connectivity

Future Enhancements

    Group Chat Feature: We plan to implement a real-time group chat functionality, allowing multiple users to communicate seamlessly within dedicated chat rooms. This will include:

        Group creation and management

        Real-time messaging with WebSockets

        Media sharing (images, files)

        User roles (admin, moderator, member)

---
Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--25-25?link=https%3A%2F%2Fwww.tinkerhub.org%2Fevents%2FQ2Q1TQKX6Q%2FUseless%2520Projects)


