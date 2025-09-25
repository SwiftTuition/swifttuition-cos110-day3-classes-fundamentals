#ifndef MUSICTRACK_H
#define MUSICTRACK_H

#include <string>
using namespace std;

/**
 * MusicTrack Class - Maître Gims Studio Management System
 *
 * Represents a single music track with basic data management.
 * This class demonstrates fundamental concepts including:
 * - Basic class structure and member variables
 * - Default constructor for object initialization
 * - Member functions for data access and manipulation
 *
 * Inspired by the legendary Maître Gims and his need to organize
 * his extensive music catalog professionally.
 */
class MusicTrack {
public:
    // Member variables - track information
    string title;      // Track title (e.g., "Bella", "Sapés Comme Jamais")
    int duration;      // Duration in seconds (e.g., 206 for 3:26)
    string genre;      // Music genre (e.g., "Hip-Hop", "Pop", "Afrobeat")
    int playCount;     // Number of times this track has been played

    // Default Constructor
    /**
     * Default Constructor
     * Creates a new MusicTrack with Gims' most famous song as defaults
     * Usage: MusicTrack track1;
     */
    MusicTrack();

    /**
     * Parameterized Constructor
     * Creates a new MusicTrack with specified values
     * @param t Track title
     * @param d Duration in seconds
     * @param g Genre of the track
     * Usage: MusicTrack track2("Bella", 206, "Hip-Hop");
     */
    MusicTrack(string t, int d, string g);

    // Member Functions - basic operations on track data

    /**
     * Get the track title
     * @return Current title of the track
     */
    string getTitle() const;

    /**
     * Get the track duration in seconds
     * @return Duration in seconds
     */
    int getDuration() const;

    /**
     * Get the track genre
     * @return Current genre of the track
     */
    string getGenre() const;

    /**
     * Get the current play count
     * @return Number of times track has been played
     */
    int getPlayCount() const;

    /**
     * Set the track title
     * @param t New title for the track
     */
    void setTitle(string t);

    /**
     * Set the track duration
     * @param d New duration in seconds
     */
    void setDuration(int d);

    /**
     * Set the track genre
     * @param g New genre for the track
     */
    void setGenre(string g);

    /**
     * Set the play count
     * @param p New play count
     */
    void setPlayCount(int p);

    /**
     * Simulate playing the track
     * Increments play count by 1 each time called
     */
    void play();

    /**
     * Reset the play count to zero
     */
    void resetPlayCount();

    /**
     * Get duration formatted as MM:SS
     * Converts seconds to human-readable time format
     * @return String in format "M:SS" or "MM:SS"
     */
    string getFormattedDuration() const;

    /**
     * Check if track is considered popular
     * A track is popular if it has more than 1,000,000 plays
     * @return true if play count > 1,000,000, false otherwise
     */
    bool isPopular() const;
};

#endif

/*
 * Implementation Notes for Students:
 *
 * 1. CLASS STRUCTURE: This header defines a simple class with member
 *    variables and member functions all in the public section.
 *
 * 2. MEMBER VARIABLES: The data that each MusicTrack object will contain.
 *    Each object gets its own copy of these variables.
 *
 * 3. DEFAULT CONSTRUCTOR: Special function that runs when creating
 *    new objects to set up initial values.
 *
 * 4. MEMBER FUNCTIONS: Functions that operate on the object's data.
 *    They can access and modify the member variables.
 *
 * 5. SCOPE RESOLUTION: In the .cpp file, use MusicTrack::functionName
 *    to implement these functions.
 *
 * Remember: This header file defines WHAT the class can do.
 * The implementation file (.cpp) defines HOW it does these things.
 */