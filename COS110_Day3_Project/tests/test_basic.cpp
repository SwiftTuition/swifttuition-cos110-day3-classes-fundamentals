#include <iostream>
#include <cassert>
#include <string>
#include "../src/musictrack.h"

using namespace std;

// Test counter for scoring
int tests_passed = 0;
int total_tests = 0;

void test_assert(bool condition, const string& test_name) {
    total_tests++;
    if (condition) {
        cout << "✅ " << test_name << " - PASSED" << endl;
        tests_passed++;
    } else {
        cout << "❌ " << test_name << " - FAILED" << endl;
    }
}

void test_default_constructor() {
    cout << "\n🧪 Testing Default Constructor..." << endl;

    MusicTrack track;

    test_assert(track.getTitle() == "Bella", "Default title should be 'Bella'");
    test_assert(track.getDuration() == 206, "Default duration should be 206 seconds");
    test_assert(track.getGenre() == "Hip-Hop", "Default genre should be 'Hip-Hop'");
    test_assert(track.getPlayCount() == 0, "Default play count should be 0");
}

void test_parameterized_constructor() {
    cout << "\n🧪 Testing Parameterized Constructor..." << endl;

    MusicTrack track("Est-ce que tu m'aimes", 234, "Pop");

    test_assert(track.getTitle() == "Est-ce que tu m'aimes", "Title should match parameter");
    test_assert(track.getDuration() == 234, "Duration should match parameter");
    test_assert(track.getGenre() == "Pop", "Genre should match parameter");
    test_assert(track.getPlayCount() == 0, "Play count should start at 0");
}

void test_getters() {
    cout << "\n🧪 Testing Getter Functions..." << endl;

    MusicTrack track("J'me tire", 205, "Hip-Hop");

    test_assert(track.getTitle() == "J'me tire", "getTitle() should return correct value");
    test_assert(track.getDuration() == 205, "getDuration() should return correct value");
    test_assert(track.getGenre() == "Hip-Hop", "getGenre() should return correct value");
    test_assert(track.getPlayCount() == 0, "getPlayCount() should return correct value");
}

void test_setters() {
    cout << "\n🧪 Testing Setter Functions..." << endl;

    MusicTrack track;

    track.setTitle("Zombie");
    test_assert(track.getTitle() == "Zombie", "setTitle() should update title");

    track.setDuration(223);
    test_assert(track.getDuration() == 223, "setDuration() should update duration");

    track.setGenre("Hip-Hop");
    test_assert(track.getGenre() == "Hip-Hop", "setGenre() should update genre");

    track.setPlayCount(100);
    test_assert(track.getPlayCount() == 100, "setPlayCount() should update play count");
}

void test_play_functionality() {
    cout << "\n🧪 Testing Play Functionality..." << endl;

    MusicTrack track("Tout donner", 198, "Hip-Hop");

    // Test initial state
    test_assert(track.getPlayCount() == 0, "Initial play count should be 0");

    // Test play() function
    track.play();
    test_assert(track.getPlayCount() == 1, "Play count should be 1 after one play");

    track.play();
    track.play();
    test_assert(track.getPlayCount() == 3, "Play count should be 3 after three plays");

    // Test resetPlayCount()
    track.resetPlayCount();
    test_assert(track.getPlayCount() == 0, "Play count should be 0 after reset");
}

void test_gims_songs() {
    cout << "\n🧪 Testing Maître Gims Songs..." << endl;

    // Test all the requested Gims songs
    MusicTrack bella("Bella", 206, "Hip-Hop");
    test_assert(bella.getTitle() == "Bella" && bella.getDuration() == 206, "Bella track created correctly");

    MusicTrack estCeQue("Est-ce que tu m'aimes", 234, "Pop");
    test_assert(estCeQue.getTitle() == "Est-ce que tu m'aimes", "Est-ce que tu m'aimes track created correctly");

    MusicTrack toutDonner("Tout donner", 198, "Hip-Hop");
    test_assert(toutDonner.getTitle() == "Tout donner", "Tout donner track created correctly");

    MusicTrack ouAller("Où aller", 267, "R&B");
    test_assert(ouAller.getTitle() == "Où aller", "Où aller track created correctly");

    MusicTrack zombie("Zombie", 223, "Hip-Hop");
    test_assert(zombie.getTitle() == "Zombie", "Zombie track created correctly");

    MusicTrack jMeTire("J'me tire", 205, "Hip-Hop");
    test_assert(jMeTire.getTitle() == "J'me tire", "J'me tire track created correctly");
}

int main() {
    cout << "🎵 Maître Gims Music Studio - Basic Functionality Tests" << endl;
    cout << "=====================================================" << endl;

    test_default_constructor();
    test_parameterized_constructor();
    test_getters();
    test_setters();
    test_play_functionality();
    test_gims_songs();

    cout << "\n📊 Test Results:" << endl;
    cout << "Tests Passed: " << tests_passed << "/" << total_tests << endl;
    cout << "Score: " << (double(tests_passed) / total_tests * 40) << "/40 points" << endl;

    if (tests_passed == total_tests) {
        cout << "🎉 All basic tests passed! Ready for edge case testing." << endl;
    } else {
        cout << "⚠️  Some tests failed. Please fix your implementation." << endl;
    }

    return (tests_passed == total_tests) ? 0 : 1;
}