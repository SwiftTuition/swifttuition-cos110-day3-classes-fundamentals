#!/bin/bash

# Post-create script for COS110 Day 3 Project
echo "🎵 Setting up Maître Gims Music Studio Environment..."

# Update system packages
sudo apt-get update -y

# Install essential C++ development tools
sudo apt-get install -y \
    build-essential \
    g++ \
    make \
    valgrind \
    gdb \
    tree \
    curl \
    wget \
    zip \
    unzip \
    python3 \
    python3-pip

# Install Gemini CLI via Python
echo "📡 Installing Gemini CLI for AI assistance..."
pip3 install google-generativeai

# Create the gemini command wrapper
sudo tee /usr/local/bin/gemini > /dev/null << 'EOF'
#!/usr/bin/env python3
import os
import sys
import google.generativeai as genai

def main():
    # Check if API key is set
    api_key = os.getenv('GEMINI_API_KEY')
    if not api_key:
        print("🔑 Please set your GEMINI_API_KEY environment variable.")
        print("Visit https://makersuite.google.com/app/apikey to get your API key.")
        print("Then run: export GEMINI_API_KEY='your-api-key-here'")
        return

    # Configure the API
    genai.configure(api_key=api_key)

    # Educational prompt for C++ classes
    system_prompt = """You are Shinpachi, the responsible and patient member of the Yorozuya from Gintama, acting as a programming tutor for COS 110 (Computer Programming). You're helping students learn C++ classes and object-oriented programming.

Your teaching style:
- Patient and encouraging, like Shinpachi's responsible nature
- Use simple analogies to explain complex concepts
- Focus on C++98 standard (use NULL, not nullptr)
- Always provide complete, compilable code examples
- Guide students to solutions rather than giving direct answers
- Reference the current project context when possible

Current project: Maître Gims Music Studio Management System
Topics: Classes, constructors, access specifiers, member functions

Always be educational and supportive, helping students understand the 'why' behind programming concepts."""

    # Get user input
    if len(sys.argv) > 1:
        user_input = ' '.join(sys.argv[1:])
    else:
        user_input = input("💭 Ask me about C++ classes and OOP: ")

    if not user_input.strip():
        print("Please ask me a question about C++ classes!")
        return

    try:
        # Use Gemini Pro model
        model = genai.GenerativeModel('gemini-pro')
        full_prompt = f"{system_prompt}\n\nStudent question: {user_input}"

        response = model.generate_content(full_prompt)
        print(f"\n🤓 Shinpachi says:\n{response.text}")

    except Exception as e:
        print(f"❌ Error communicating with Gemini: {str(e)}")
        print("Make sure your GEMINI_API_KEY is valid and you have internet access.")

if __name__ == "__main__":
    main()
EOF

# Make the gemini command executable
sudo chmod +x /usr/local/bin/gemini

# Set up aliases for convenience
echo 'alias run="make run"' >> ~/.bashrc
echo 'alias test-basic="make test-basic"' >> ~/.bashrc
echo 'alias test-edge="make test-edge"' >> ~/.bashrc
echo 'alias test-memory="make test-memory"' >> ~/.bashrc
echo 'alias test-implementation="make test-implementation"' >> ~/.bashrc
echo 'alias test-all="make test-all"' >> ~/.bashrc

# Make sure the workspace has proper permissions
sudo chown -R vscode:vscode /workspaces

# Display welcome message
echo ""
echo "🎤 Welcome to Maître Gims' Music Studio! 🎤"
echo ""
echo "Available commands:"
echo "  make run                  - Compile and run your program"
echo "  make test-basic          - Test basic functionality (40%)"
echo "  make test-edge           - Test edge cases (30%)"
echo "  make test-memory         - Test memory management (20%)"
echo "  make test-implementation - Test code quality (10%)"
echo "  make test-all           - Complete test suite"
echo ""
echo "AI Assistant (Shinpachi):"
echo "  gemini                   - Ask questions about C++ and OOP!"
echo "  (Set GEMINI_API_KEY first: export GEMINI_API_KEY='your-key')"
echo ""
echo "Let's create some musical magic with C++ classes! 🚀"
echo ""