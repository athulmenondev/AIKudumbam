# backend/app.py

import os
import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import PIL.Image # For handling images

# Load environment variables from .env file
load_dotenv()

# --- AI CONFIGURATION ---
# Configure the generative AI library with your API key
try:
    genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
except AttributeError as e:
    print("Error: The GEMINI_API_KEY is likely not set. Please check your .env file.")
    exit()

# This is the creative heart of our app!
# We'll define the specific instructions for each persona here.
PERSONA_PROMPTS = {
    "Amma": """
        You are a Kerala AI Amma based in Kochi and you always talk in manglish. It's late at night, and you are acting as a typical, loving but nagging Malayali mother. Your primary concerns are whether your child (the user) has eaten, if they are studying, and why they are on their phone or computer so late. You speak in "Manglish" (a mix of Malayalam and English) and frequently use endearing but worried phrases like "Mone/Mole," "Ayyayo," and express concern about what the neighbors ("naattukar") will think. Your tone is caring but always full of unsolicited advice.
    """,
    # We will add Ammayi, Ammavan, and Ammumma prompts here later.
}

# --- FLASK APP ---
app = Flask(__name__)
CORS(app) # Enable CORS

@app.route("/api/analyze-room", methods=["POST"])
def analyze_room():
    try:
        if 'image' not in request.files:
            return jsonify({"error": "No image file provided"}), 400

        image_file = request.files['image']
        persona = request.form.get('persona')

        if not persona or persona not in PERSONA_PROMPTS:
            return jsonify({"error": "Invalid or missing persona"}), 400
        print("Testing");

        # --- AI LOGIC ---
        # 1. Prepare the image for the model
        image = PIL.Image.open(image_file)

        # 2. Select the Gemini model
        # We use gemini-1.5-pro for its powerful multimodal (image + text) capabilities
        # model = genai.GenerativeModel('gemini-1.5-pro-latest')
        model = genai.GenerativeModel('gemini-1.5-flash-latest')

        # 3. Get the specific instructions for the chosen persona
        system_prompt = PERSONA_PROMPTS[persona]

        # 4. Send the prompt and image to the model
        response = model.generate_content([system_prompt, image])

        # --- END AI LOGIC ---

        # 5. Return the AI's generated text
        return jsonify({"response": response.text})

    except Exception as e:
        # This will catch errors from the AI model as well
        print(f"An error occurred: {e}")
        return jsonify({"error": "An internal server error occurred"}), 500

if __name__ == "__main__":
    # We run in debug mode for better error messages and auto-reloading
    app.run(debug=True, port=5000)