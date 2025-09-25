#include "musictrack.h"
#include <string>
#include <iostream>
#include <sstream>
using namespace std;

/**
 * Parameterized Constructor
 * Initialize with provided values, with validation
 * @param t Track title (defaults to "Untitled Track" if empty)
 * @param d Duration in seconds (defaults to 180 if negative)
 * @param g Genre (defaults to "Unknown" if empty)
 */
MusicTrack::MusicTrack(string t, int d, string g) {
    // Validate and set title
    if (t.empty()) {
        title = "Untitled Track";
    } else {
        title = t;
    }

    // Validate and set duration
    if (d <= 0) {
        duration = 180;
    } else {
        duration = d;
    }

    // Validate and set genre
    if (g.empty()) {
        genre = "Unknown";
    } else {
        genre = g;
    }

    playCount = 0;
}

// TODO: Students need to implement all these functions
// This file contains starter code and TODOs for student implementation

/**
 * Default Constructor
 * Initialize with Gims' most famous track "Bella" as defaults
 * - title: "Bella"
 * - duration: 206 (seconds for 3:26)
 * - genre: "Hip-Hop"
 * - playCount: 0
 */
MusicTrack::MusicTrack() {
    title = "Bella";
    duration = 206;
    genre = "Hip-Hop";
    playCount = 0;
}

// Getter Functions - TODO: Implement all getters

/**
 * Get Track Title
 * Return the title member variable
 */
string MusicTrack::getTitle() const {
    return title;
}

/**
 * Get Track Duration
 * Return the duration member variable
 */
int MusicTrack::getDuration() const {
    return duration;
}

/**
 * Get Track Genre
 * Return the genre member variable
 */
string MusicTrack::getGenre() const {
    return genre;
}

/**
 * Get Play Count
 * Return the playCount member variable
 */
int MusicTrack::getPlayCount() const {
    return playCount;
}

// Setter Functions - TODO: Implement all setters

/**
 * Set Track Title
 * Set the title to the provided value with validation
 */
void MusicTrack::setTitle(string t) {
    if (t.empty()) {
        title = "Untitled Track";
    } else {
        title = t;
    }
}

/**
 * Set Duration
 * Set the duration to the provided value with validation
 */
void MusicTrack::setDuration(int d) {
    if (d <= 0) {
        duration = 180;
    } else {
        duration = d;
    }
}

/**
 * Set Genre
 * Set the genre to the provided value with validation
 */
void MusicTrack::setGenre(string g) {
    if (g.empty()) {
        genre = "Unknown";
    } else {
        genre = g;
    }
}

/**
 * Set Play Count
 * Set the play count to the provided value with validation
 */
void MusicTrack::setPlayCount(int p) {
    if (p < 0) {
        playCount = 0;
    } else {
        playCount = p;
    }
}

// Utility Functions - TODO: Implement all utility functions

/**
 * Play the Track
 * Increment play count by 1
 */
void MusicTrack::play() {
    playCount++;
}

/**
 * Reset Play Count
 * Set play count back to 0
 */
void MusicTrack::resetPlayCount() {
    playCount = 0;
}

/**
 * Get Formatted Duration (MM:SS format)
 * Convert seconds to MM:SS format
 * Examples: 125 seconds -> "2:05", 61 seconds -> "1:01", 3661 seconds -> "61:01"
 */
string MusicTrack::getFormattedDuration() const {
    int minutes = duration / 60;
    int seconds = duration % 60;

    // Convert integers to strings using stringstream (C++98 compatible)
    stringstream ss;
    ss << minutes << ":";

    if (seconds < 10) {
        ss << "0";
    }
    ss << seconds;

    return ss.str();
}

/**
 * Check if Track is Popular
 * Return true if play count > 1,000,000
 */
bool MusicTrack::isPopular() const {
    return playCount > 1000000;
}

/*
 * Implementation Hints for Students:
 *
 * 1. VALIDATION: Always check input values in setter functions
 *    - Empty strings: use str.empty()
 *    - Negative numbers: use < 0 or <= 0 comparisons
 *    - Set sensible defaults when input is invalid
 *
 * 2. STRING FORMATTING: For getFormattedDuration()
 *    - Convert int to string: to_string(number)
 *    - Concatenate strings: str1 + str2
 *    - Add leading zero: if (seconds < 10) result += "0";
 *
 * 3. MEMBER VARIABLE ACCESS:
 *    - In member functions, you can directly access private variables
 *    - No need for "this->" prefix in simple cases
 *    - Example: title = "new title"; (not this->title = "new title";)
 *
 * 4. CONSTRUCTOR CHAINING:
 *    - Use setter functions in parameterized constructor for validation
 *    - Example: setTitle(t); instead of title = t;
 *    - This ensures consistent validation logic
 *
 * Remember: Test each function as you implement it!
 * Use the provided test cases to verify your implementation works correctly.
 */