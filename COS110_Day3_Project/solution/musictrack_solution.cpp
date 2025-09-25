#include "musictrack_solution.h"
#include <string>
#include <iostream>
#include <sstream>
using namespace std;

// Default Constructor - Initialize with Bella as default
MusicTrack::MusicTrack() {
    title = "Bella";
    duration = 206;        // 3:26 in seconds
    genre = "Hip-Hop";
    playCount = 0;
}

// Parameterized Constructor - Initialize with provided values (with validation)
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

// Getter Functions
string MusicTrack::getTitle() const {
    return title;
}

int MusicTrack::getDuration() const {
    return duration;
}

string MusicTrack::getGenre() const {
    return genre;
}

int MusicTrack::getPlayCount() const {
    return playCount;
}

// Setter Functions - With validation (Day 3 level)
void MusicTrack::setTitle(string t) {
    if (t.empty()) {
        title = "Untitled Track";
    } else {
        title = t;
    }
}

void MusicTrack::setDuration(int d) {
    if (d <= 0) {
        duration = 180;
    } else {
        duration = d;
    }
}

void MusicTrack::setGenre(string g) {
    if (g.empty()) {
        genre = "Unknown";
    } else {
        genre = g;
    }
}

void MusicTrack::setPlayCount(int p) {
    if (p < 0) {
        playCount = 0;
    } else {
        playCount = p;
    }
}

// Utility Functions
void MusicTrack::play() {
    playCount++;
}

void MusicTrack::resetPlayCount() {
    playCount = 0;
}

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

bool MusicTrack::isPopular() const {
    return playCount > 1000000;
}