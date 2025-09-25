# 🎵 Maître Gims Music Studio Management System

**Day 3 Project: Classes & Object-Oriented Programming**

A sophisticated music track management system inspired by the legendary Maître Gims, designed to teach fundamental object-oriented programming concepts through real-world application.

## 🚀 Quick Start

### GitHub Codespaces (Recommended)
1. Open this repository in GitHub Codespaces
2. The development environment will automatically configure
3. Run `make` to see available commands
4. Start with `make test-basic` to test your implementation

### Local Development
```bash
# Clone and navigate to project
git clone <repository-url>
cd COS110_Day3_Project

# Compile and test
make clean
make
make test-basic
```

## 📚 Learning Objectives

This project teaches you to master:

- **Class Definition**: Creating blueprints for music track objects
- **Encapsulation**: Using private data members for data protection
- **Constructors**: Smart object initialization with default and parameterized constructors
- **Member Functions**: Implementing getters, setters, and utility functions
- **Object Instantiation**: Creating and managing multiple track objects
- **Data Validation**: Ensuring track information remains consistent and valid

## 🎯 Project Overview

You'll implement a `MusicTrack` class that can:

- Store track information (title, duration, genre, play count) safely in private members
- Provide controlled access through public getter and setter functions
- Initialize tracks with sensible defaults using constructors
- Validate data to prevent impossible values (like negative play counts)
- Support multiple tracks in Maître Gims' extensive catalog

## 📁 Project Structure

```
COS110_Day3_Project/
├── .devcontainer/          # GitHub Codespaces configuration
├── docs/                   # Project documentation
│   ├── STORY.md           # The musical adventure story
│   ├── INSTRUCTIONS.md    # Detailed implementation guide
│   └── SUPPORT.md         # Student support resources
├── src/                    # Your implementation files
│   ├── main.cpp           # Test harness with Gims-style humor
│   ├── musictrack.h       # Header file (class definition)
│   └── musictrack.cpp     # Implementation file (your code here)
├── tests/                  # Comprehensive testing suite
│   ├── test_basic.cpp     # Basic functionality (40% of grade)
│   ├── test_edge.cpp      # Edge cases (30% of grade)
│   ├── test_memory.cpp    # Memory management (20% of grade)
│   └── test_implementation.cpp # Code quality (10% of grade)
├── solution/               # Internal verification (hidden from students)
├── .devcontainer/          # GitHub Codespaces configuration
├── Makefile               # Build system with colored output
└── README.md              # This file
```

## 🧪 Testing Framework

### 4-Tier Grading System
- **Basic Tests (40%)**: Core functionality - constructors, getters, setters
- **Edge Cases (30%)**: Invalid input handling, boundary conditions
- **Memory Tests (20%)**: Proper memory usage and no leaks
- **Implementation (10%)**: Code quality, documentation, style

### Available Commands
```bash
make                    # Compile everything
make test-basic        # Run basic functionality tests
make test-edge         # Run edge case tests
make test-memory       # Run memory management tests
make test-implementation # Run code quality tests
make test-all          # Run complete test suite
make clean             # Clean build artifacts
```

### Test Output Example
```
🎵 Testing Maître Gims Music Studio System...

✅ Basic Constructor Test - PASSED
✅ Parameterized Constructor Test - PASSED
✅ Getter Functions Test - PASSED
✅ Setter Functions Test - PASSED
❌ Input Validation Test - FAILED
   Expected: Negative duration rejected
   Actual: Negative duration accepted

Score: 75/100 (Keep coding, future studio engineer!)
```

## 🤖 AI Assistant Integration

### Meet Shinpachi - Your Coding Tutor
```bash
# Set your API key (get it from https://makersuite.google.com/app/apikey)
export GEMINI_API_KEY='your-api-key-here'

# Ask questions about C++ classes and OOP
gemini "How do I create a constructor?"
gemini "What's the difference between public and private?"

# Or run interactively
gemini
```

Shinpachi (our AI assistant) is configured with educational prompts that:
- Guide you toward solutions without giving direct answers
- Explain concepts when you're stuck
- Help debug common issues with classes and objects
- Provide coding best practices for object-oriented design
- Uses C++98 standard (like your course requirements)

## 🛠️ Getting Started

1. **Read the Story**: Start with `docs/STORY.md` to understand Gims' musical predicament
2. **Study Instructions**: Review `docs/INSTRUCTIONS.md` for detailed requirements
3. **Examine Headers**: Look at `src/musictrack.h` to see the class structure
4. **Implement Functions**: Complete the functions in `src/musictrack.cpp`
5. **Test Incrementally**: Use `make test-basic` to verify each step
6. **Iterate**: Fix issues and retest until all tests pass

## 📖 Key Concepts Demonstrated

### Class-Based Design
```cpp
class MusicTrack {
private:
    string title;        // Protected data
    int duration;        // Can't be corrupted externally
    string genre;        // Encapsulated information
    int playCount;       // Controlled access only

public:
    MusicTrack();        // Default constructor
    MusicTrack(string t, int d, string g);  // Parameterized constructor

    // Controlled access interface
    string getTitle();
    void setTitle(string t);
    // ... more member functions
};
```

### Object-Oriented Benefits
- **Data Protection**: Private members prevent data corruption
- **Code Reusability**: Create multiple track objects from one class
- **Maintainability**: Changes to implementation don't affect usage
- **Real-World Modeling**: Objects represent actual music tracks naturally

## 🎯 Success Criteria

Your implementation is complete when:
- [ ] All basic tests pass (constructor, getters, setters)
- [ ] Edge case handling works (invalid input validation)
- [ ] No memory leaks detected
- [ ] Code follows proper C++ style conventions
- [ ] Maître Gims can manage his entire music catalog efficiently!

## 🆘 Need Help?

- **Stuck on Concepts?** Check `docs/SUPPORT.md` for explanations and examples
- **Compilation Errors?** The error messages contain clues - read them carefully
- **Test Failures?** Run individual test suites to isolate issues
- **AI Assistant**: Just type `gemini` to chat with Shinpachi about C++ concepts
- **Human Support**: Contact admin@swifttuition.co.za or WhatsApp +27 73 499 6948

## 🎵 Fun Facts About Maître Gims

- Real name: Gandhi Bilel Djuna
- Born in Kinshasa, Democratic Republic of Congo
- Member of the successful French hip-hop group Sexion d'Assaut
- Known for always wearing sunglasses, even indoors
- His 2013 album "Subliminal" went triple platinum in France
- Combines French and Lingala (Congolese language) in his music

---

**Remember**: You're not just learning to code - you're building a system that could actually help manage a real music studio! Think like a professional software developer creating tools for the music industry.

*Happy coding, and may your classes be as well-structured as Gims' hit songs!* 🎤✨