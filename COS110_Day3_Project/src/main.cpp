#include <iostream>
#include <string>
#include "musictrack.h"

using namespace std;

/**
 * Maître Gims Studio Management Test Harness
 *
 * This program demonstrates the MusicTrack class by creating objects
 * for some of Gims' most popular songs and testing various functionality.
 */

void displayTrackInfo(MusicTrack& track) {
    cout << "🎵 Track: " << track.getTitle() << endl;
    cout << "   Duration: " << track.getFormattedDuration()
         << " (" << track.getDuration() << " seconds)" << endl;
    cout << "   Genre: " << track.getGenre() << endl;
    cout << "   Play Count: " << track.getPlayCount() << endl;
    cout << "   Popular: " << (track.isPopular() ? "Yes" : "No") << endl;
    cout << endl;
}

int main() {
    cout << "🎤 Welcome to Maître Gims' Music Studio Management System!" << endl;
    cout << "=====================================================" << endl << endl;

    // Test default constructor with "Bella"
    cout << "📀 Creating default track (should be 'Bella')..." << endl;
    MusicTrack defaultTrack;
    displayTrackInfo(defaultTrack);

    // Test parameterized constructor with Gims' hit songs
    cout << "🎵 Creating Maître Gims' greatest hits catalog..." << endl << endl;

    // Create tracks for Gims' popular songs
    MusicTrack bella("Bella", 206, "Hip-Hop");  // 3:26
    MusicTrack estCeQueTuMAimes("Est-ce que tu m'aimes", 234, "Pop");  // 3:54
    MusicTrack toutDonner("Tout donner", 198, "Hip-Hop");  // 3:18
    MusicTrack ouAller("Où aller", 267, "R&B");  // 4:27
    MusicTrack zombie("Zombie", 223, "Hip-Hop");  // 3:43
    MusicTrack jMeTire("J'me tire", 205, "Hip-Hop");  // 3:25

    // Display initial catalog
    cout << "📚 Initial Catalog:" << endl;
    cout << "==================" << endl;
    displayTrackInfo(bella);
    displayTrackInfo(estCeQueTuMAimes);
    displayTrackInfo(toutDonner);
    displayTrackInfo(ouAller);
    displayTrackInfo(zombie);
    displayTrackInfo(jMeTire);

    // Simulate some plays - make Bella popular!
    cout << "🔥 Simulating streaming success for 'Bella'..." << endl;
    cout << "   Playing Bella 1,500,000 times..." << endl;
    bella.setPlayCount(1500000);  // Set to popular status

    cout << "🎧 Playing other tracks a few times..." << endl;
    for (int i = 0; i < 50000; i++) {
        estCeQueTuMAimes.play();
    }
    for (int i = 0; i < 25000; i++) {
        jMeTire.play();
    }
    for (int i = 0; i < 75000; i++) {
        toutDonner.play();
    }

    cout << endl << "📊 Updated Catalog with Play Counts:" << endl;
    cout << "====================================" << endl;
    displayTrackInfo(bella);
    displayTrackInfo(estCeQueTuMAimes);
    displayTrackInfo(toutDonner);
    displayTrackInfo(jMeTire);

    // Test validation by trying to set invalid values
    cout << "🧪 Testing input validation..." << endl;
    MusicTrack testTrack;

    cout << "   Setting empty title..." << endl;
    testTrack.setTitle("");
    cout << "   Result: '" << testTrack.getTitle() << "'" << endl;

    cout << "   Setting negative duration..." << endl;
    testTrack.setDuration(-100);
    cout << "   Result: " << testTrack.getDuration() << " seconds" << endl;

    cout << "   Setting empty genre..." << endl;
    testTrack.setGenre("");
    cout << "   Result: '" << testTrack.getGenre() << "'" << endl;

    cout << "   Setting negative play count..." << endl;
    testTrack.setPlayCount(-500);
    cout << "   Result: " << testTrack.getPlayCount() << " plays" << endl;

    cout << endl;

    // Test play and reset functionality
    cout << "🎮 Testing play and reset functionality..." << endl;
    MusicTrack playTest("Test Track", 180, "Test");

    cout << "   Initial play count: " << playTest.getPlayCount() << endl;
    playTest.play();
    playTest.play();
    playTest.play();
    cout << "   After 3 plays: " << playTest.getPlayCount() << endl;
    playTest.resetPlayCount();
    cout << "   After reset: " << playTest.getPlayCount() << endl;

    cout << endl;

    // Test formatted duration
    cout << "⏱️  Testing formatted duration display..." << endl;
    MusicTrack durationTest1("Short Track", 65, "Test");    // 1:05
    MusicTrack durationTest2("Medium Track", 245, "Test");  // 4:05
    MusicTrack durationTest3("Long Track", 3661, "Test");   // 61:01

    cout << "   " << durationTest1.getDuration() << " seconds = "
         << durationTest1.getFormattedDuration() << endl;
    cout << "   " << durationTest2.getDuration() << " seconds = "
         << durationTest2.getFormattedDuration() << endl;
    cout << "   " << durationTest3.getDuration() << " seconds = "
         << durationTest3.getFormattedDuration() << endl;

    cout << endl << "🎉 Studio management system test completed!" << endl;
    cout << "   If all tests passed, your MusicTrack class is working correctly!" << endl;
    cout << "   Ready for the real grading tests!" << endl << endl;

    cout << "🎤 'Merci beaucoup!' - Maître Gims" << endl;

    return 0;
}

/*
 * Expected Output (when implementation is complete):
 *
 * This test program should demonstrate:
 * 1. Default constructor creates "Bella" track
 * 2. Parameterized constructor works for all Gims songs
 * 3. Play count tracking and popularity detection
 * 4. Input validation prevents invalid data
 * 5. Formatted duration converts seconds to MM:SS format
 * 6. Play/reset functionality modifies play counts
 *
 * Students can use this output to verify their implementation
 * matches expected behavior before running the official tests.
 */