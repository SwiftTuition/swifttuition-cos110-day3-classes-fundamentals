# 🎵 Maître Gims Music Studio - Technical Implementation Guide

## 📋 Project Requirements

Your mission is to implement a `MusicTrack` class that demonstrates all fundamental object-oriented programming concepts from Day 3. This class will manage individual music tracks in Maître Gims' extensive catalog.

##  Class Specification

### MusicTrack Class Structure

```cpp
class MusicTrack {
private:
    string title;      // Track title (e.g., "Bella", "Sapés Comme Jamais")
    int duration;      // Duration in seconds
    string genre;      // Music genre (e.g., "Hip-Hop", "Pop", "Afrobeat")
    int playCount;     // Number of times played

public:
    // Constructors
    MusicTrack();                                    // Default constructor
    MusicTrack(string t, int d, string g);           // Parameterized constructor

    // Getter functions (accessors)
    string getTitle();
    int getDuration();
    string getGenre();
    int getPlayCount();

    // Setter functions (mutators)
    void setTitle(string t);
    void setDuration(int d);
    void setGenre(string g);
    void setPlayCount(int p);

    // Utility functions
    void play();                    // Increment play count by 1
    void resetPlayCount();          // Reset play count to 0
    string getFormattedDuration();  // Return duration as "MM:SS" format
    bool isPopular();              // Return true if play count > 1000000
};
```

## 🔧 Implementation Requirements

### 1. Default Constructor
```cpp
MusicTrack::MusicTrack() {
    // Initialize with Gims' most famous track as default
    title = "Bella";
    duration = 206;        // 3:26 in seconds
    genre = "Hip-Hop";
    playCount = 0;
}
```

### 2. Parameterized Constructor
```cpp
MusicTrack::MusicTrack(string t, int d, string g) {
    // Validate and set provided values
    setTitle(t);      // Use setter for validation
    setDuration(d);   // Use setter for validation
    setGenre(g);      // Use setter for validation
    playCount = 0;    // Always start with 0 plays
}
```

### 3. Getter Functions
All getters should simply return the corresponding private member variable:

```cpp
string MusicTrack::getTitle() {
    return title;
}

int MusicTrack::getDuration() {
    return duration;
}

// ... implement remaining getters
```

### 4. Setter Functions with Validation

**Title Setter**:
- Must not be empty
- If empty, set to "Untitled Track"

**Duration Setter**:
- Must be positive (> 0)
- If invalid, set to 180 seconds (3 minutes default)

**Genre Setter**:
- Must not be empty
- If empty, set to "Unknown"

**Play Count Setter**:
- Must not be negative (>= 0)
- If negative, set to 0

```cpp
void MusicTrack::setTitle(string t) {
    if (t.empty()) {
        title = "Untitled Track";
    } else {
        title = t;
    }
}

void MusicTrack::setDuration(int d) {
    if (d <= 0) {
        duration = 180;  // Default 3 minutes
    } else {
        duration = d;
    }
}

// ... implement remaining setters with validation
```

### 5. Utility Functions

**Play Function**:
```cpp
void MusicTrack::play() {
    playCount++;
}
```

**Reset Play Count**:
```cpp
void MusicTrack::resetPlayCount() {
    playCount = 0;
}
```

**Formatted Duration** (Advanced):
```cpp
string MusicTrack::getFormattedDuration() {
    int minutes = duration / 60;
    int seconds = duration % 60;

    string result = "";
    result += to_string(minutes);
    result += ":";

    if (seconds < 10) {
        result += "0";  // Add leading zero for single-digit seconds
    }
    result += to_string(seconds);

    return result;
}
```

**Popularity Check**:
```cpp
bool MusicTrack::isPopular() {
    return playCount > 1000000;  // Over 1 million plays
}
```

## 🧪 Testing Your Implementation

### Test Cases You Should Handle

1. **Default Constructor Test**:
```cpp
MusicTrack track1;
cout << track1.getTitle();  // Should output: "Bella"
cout << track1.getDuration();  // Should output: 206
```

2. **Parameterized Constructor Test**:
```cpp
MusicTrack track2("Sapés Comme Jamais", 245, "Hip-Hop");
cout << track2.getTitle();  // Should output: "Sapés Comme Jamais"
```

3. **Validation Test**:
```cpp
MusicTrack track3("", -50, "");
cout << track3.getTitle();     // Should output: "Untitled Track"
cout << track3.getDuration();  // Should output: 180
cout << track3.getGenre();     // Should output: "Unknown"
```

4. **Play Count Test**:
```cpp
MusicTrack track4;
track4.play();
track4.play();
cout << track4.getPlayCount();  // Should output: 2
```

5. **Formatted Duration Test**:
```cpp
MusicTrack track5("Test", 125, "Pop");
cout << track5.getFormattedDuration();  // Should output: "2:05"
```

## 🎯 Grading Rubric

### Basic Functionality (40 points)
- [ ] Default constructor initializes properly (10 pts)
- [ ] Parameterized constructor works correctly (10 pts)
- [ ] All getter functions return correct values (10 pts)
- [ ] All setter functions modify values correctly (10 pts)

### Edge Cases & Validation (30 points)
- [ ] Empty string validation in setTitle (8 pts)
- [ ] Negative duration validation in setDuration (8 pts)
- [ ] Empty genre validation in setGenre (7 pts)
- [ ] Negative play count validation in setPlayCount (7 pts)

### Memory Management (20 points)
- [ ] No memory leaks detected (10 pts)
- [ ] Proper string handling (5 pts)
- [ ] No undefined behavior (5 pts)

### Code Quality (10 points)
- [ ] Proper coding style and formatting (3 pts)
- [ ] Meaningful variable names (2 pts)
- [ ] Adequate comments (2 pts)
- [ ] Follows class design principles (3 pts)

## 🚀 Step-by-Step Implementation Guide

### Phase 1: Basic Structure
1. Complete the default constructor
2. Implement all getter functions
3. Test with basic functionality tests

### Phase 2: Parameterized Constructor
1. Implement the parameterized constructor
2. Make sure it calls setter functions for validation
3. Test with parameter validation

### Phase 3: Setters with Validation
1. Implement each setter function with proper validation
2. Test edge cases (empty strings, negative numbers)
3. Ensure all invalid inputs are handled gracefully

### Phase 4: Utility Functions
1. Implement play() and resetPlayCount()
2. Implement getFormattedDuration() (this is the challenging one!)
3. Implement isPopular()

### Phase 5: Complete Testing
1. Run all test suites
2. Fix any remaining issues
3. Verify your code meets all requirements

## 🛠️ Development Tips

### Debugging Common Issues

**Compilation Errors**:
- Don't forget semicolon after class definition
- Include `<string>` and `<iostream>` headers
- Use `using namespace std;` or `std::` prefix

**Logic Errors**:
- Test each function individually
- Print debug information to see intermediate values
- Check boundary conditions carefully

**Validation Logic**:
- Remember: setter functions should handle ALL invalid input
- Default values should be reasonable and safe
- Never leave member variables in an undefined state

### String Manipulation Help
```cpp
// Check if string is empty
if (str.empty()) { /* handle empty string */ }

// Convert number to string
string result = to_string(number);

// Concatenate strings
string full = part1 + ":" + part2;
```

## 📚 Concept Review

### Key OOP Principles Demonstrated

1. **Encapsulation**: Private data members protect track information
2. **Data Hiding**: External code can't directly modify internal state
3. **Controlled Access**: Public interface provides safe ways to interact
4. **Object Independence**: Each track object maintains its own state
5. **Constructor Initialization**: Objects start in a valid, predictable state

### Real-World Application

This isn't just an academic exercise! Music streaming services like Spotify, Apple Music, and YouTube Music use similar class structures to manage:
- Track metadata and playback statistics
- User playlists and listening history
- Artist catalogs and album collections
- Recommendation algorithms based on play patterns

Your `MusicTrack` class demonstrates the same professional software engineering practices used in the music industry!

---

## 🎵 Ready to Build Gims' Music Empire?

Remember: You're not just completing an assignment - you're creating a foundation that could scale to manage millions of tracks across multiple artists, albums, and streaming platforms.

Think like a professional software engineer building tools for the music industry. Every validation rule, every constructor, and every member function should be designed with real-world usage in mind.

**Bonne chance, future software architect!** 🚀✨