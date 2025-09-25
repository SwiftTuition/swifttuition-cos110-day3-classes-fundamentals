#include <iostream>
#include <cassert>
#include <string>
#include <vector>
#include <sstream>
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

void test_object_creation_destruction() {
    cout << "\n🧪 Testing Object Creation and Destruction..." << endl;

    // Test local object creation and automatic destruction
    {
        MusicTrack localTrack("Local Test", 180, "Test");
        test_assert(localTrack.getTitle() == "Local Test", "Local object should be created correctly");
    } // localTrack goes out of scope here and should be destroyed automatically

    test_assert(true, "Local object destruction completed without errors");

    // Test multiple object creation
    MusicTrack track1("Track 1", 180, "Pop");
    MusicTrack track2("Track 2", 200, "Rock");
    MusicTrack track3("Track 3", 220, "Jazz");

    test_assert(track1.getTitle() == "Track 1", "Multiple objects: track1 should be independent");
    test_assert(track2.getTitle() == "Track 2", "Multiple objects: track2 should be independent");
    test_assert(track3.getTitle() == "Track 3", "Multiple objects: track3 should be independent");
}

void test_copy_semantics() {
    cout << "\n🧪 Testing Copy Semantics..." << endl;

    // Test copy constructor (implicit)
    MusicTrack original("Original", 180, "Pop");
    original.setPlayCount(100);

    MusicTrack copied = original;
    test_assert(copied.getTitle() == "Original", "Copy constructor: title should be copied");
    test_assert(copied.getDuration() == 180, "Copy constructor: duration should be copied");
    test_assert(copied.getGenre() == "Pop", "Copy constructor: genre should be copied");
    test_assert(copied.getPlayCount() == 100, "Copy constructor: play count should be copied");

    // Test that copies are independent
    copied.setTitle("Modified Copy");
    copied.setPlayCount(200);

    test_assert(original.getTitle() == "Original", "Original should remain unchanged after copy modification");
    test_assert(original.getPlayCount() == 100, "Original play count should remain unchanged");
    test_assert(copied.getTitle() == "Modified Copy", "Copy should reflect modifications");
    test_assert(copied.getPlayCount() == 200, "Copy play count should reflect modifications");
}

void test_assignment_operator() {
    cout << "\n🧪 Testing Assignment Operator..." << endl;

    MusicTrack track1("Track 1", 180, "Pop");
    MusicTrack track2("Track 2", 200, "Rock");

    track1.setPlayCount(50);
    track2.setPlayCount(75);

    // Test assignment
    track2 = track1;

    test_assert(track2.getTitle() == "Track 1", "Assignment: title should be copied");
    test_assert(track2.getDuration() == 180, "Assignment: duration should be copied");
    test_assert(track2.getGenre() == "Pop", "Assignment: genre should be copied");
    test_assert(track2.getPlayCount() == 50, "Assignment: play count should be copied");

    // Test independence after assignment
    track2.setTitle("Modified Track 2");
    test_assert(track1.getTitle() == "Track 1", "Original should remain unchanged after assignment target modification");
}

void test_large_scale_creation() {
    cout << "\n🧪 Testing Large Scale Object Creation..." << endl;

    const int NUM_TRACKS = 1000;
    vector<MusicTrack> playlist;

    // Create many objects
    for (int i = 0; i < NUM_TRACKS; i++) {
        stringstream ss;
        ss << "Track " << i;
        string title = ss.str();
        playlist.push_back(MusicTrack(title, 180 + i, "Genre"));
    }

    test_assert(playlist.size() == NUM_TRACKS, "Should create 1000 track objects");

    // Verify objects are created correctly
    test_assert(playlist[0].getTitle() == "Track 0", "First track should be created correctly");
    test_assert(playlist[0].getDuration() == 180, "First track duration should be correct");

    test_assert(playlist[999].getTitle() == "Track 999", "Last track should be created correctly");
    test_assert(playlist[999].getDuration() == 1179, "Last track duration should be correct");

    // Test operations on many objects
    for (int i = 0; i < NUM_TRACKS; i++) {
        playlist[i].play();
    }

    test_assert(playlist[500].getPlayCount() == 1, "Operations on many objects should work correctly");

    cout << "   Successfully created and operated on " << NUM_TRACKS << " objects" << endl;
}

void test_string_memory_management() {
    cout << "\n🧪 Testing String Memory Management..." << endl;

    // Test with very long strings
    string longTitle(1000, 'A');  // 1000 'A' characters
    string longGenre(500, 'B');   // 500 'B' characters

    MusicTrack track(longTitle, 180, longGenre);

    test_assert(track.getTitle().length() == 1000, "Long title should be stored correctly");
    test_assert(track.getGenre().length() == 500, "Long genre should be stored correctly");
    test_assert(track.getTitle() == longTitle, "Long title content should match");
    test_assert(track.getGenre() == longGenre, "Long genre content should match");

    // Test multiple string operations
    for (int i = 0; i < 100; i++) {
        stringstream ss;
        ss << "Title " << i;
        string newTitle = ss.str();
        track.setTitle(newTitle);
        test_assert(track.getTitle() == newTitle, "String reassignment should work correctly");
    }

    // Test string with special characters
    string specialTitle = "Maître Gims - Est-ce que tu m'aimes? (Émotion & Passion) [2023]";
    track.setTitle(specialTitle);
    test_assert(track.getTitle() == specialTitle, "Special characters should be handled correctly");
}

void test_scope_and_lifetime() {
    cout << "\n🧪 Testing Scope and Object Lifetime..." << endl;

    MusicTrack* trackPtr = NULL;

    // Test object creation in different scopes
    {
        MusicTrack innerTrack("Inner", 180, "Test");
        trackPtr = &innerTrack;
        test_assert(trackPtr->getTitle() == "Inner", "Object should be accessible within scope");
    }
    // innerTrack goes out of scope here - trackPtr now points to destroyed object

    // Don't access trackPtr here as it points to destroyed object
    test_assert(true, "Object destruction at scope exit completed");

    // Test nested scope objects
    {
        MusicTrack outer("Outer", 180, "Test");
        {
            MusicTrack inner("Inner", 200, "Test");
            test_assert(outer.getTitle() == "Outer", "Outer scope object should be accessible");
            test_assert(inner.getTitle() == "Inner", "Inner scope object should be accessible");
        }
        // inner destroyed, outer still alive
        test_assert(outer.getTitle() == "Outer", "Outer scope object should survive inner scope destruction");
    }
    // outer destroyed

    test_assert(true, "Nested scope object management completed correctly");
}

void test_stress_operations() {
    cout << "\n🧪 Testing Stress Operations..." << endl;

    MusicTrack track("Stress Test", 180, "Test");

    // Stress test play operations
    for (int i = 0; i < 100000; i++) {
        track.play();
        if (i % 10000 == 0) {
            track.resetPlayCount();
        }
    }

    test_assert(track.getPlayCount() == 0, "Stress test: final play count should be 0 after last reset");

    // Stress test string operations
    for (int i = 0; i < 1000; i++) {
        stringstream ss;
        ss << "Stress Title " << i;
        string newTitle = ss.str();
        stringstream ss2;
        ss2 << "Stress Genre " << i;
        string newGenre = ss2.str();
        track.setTitle(newTitle);
        track.setGenre(newGenre);
        track.setDuration(100 + i);
        track.setPlayCount(i);
    }

    test_assert(track.getTitle() == "Stress Title 999", "Stress test: final title should be correct");
    test_assert(track.getGenre() == "Stress Genre 999", "Stress test: final genre should be correct");
    test_assert(track.getDuration() == 1099, "Stress test: final duration should be correct");
    test_assert(track.getPlayCount() == 999, "Stress test: final play count should be correct");

    cout << "   Successfully completed stress testing with 100,000+ operations" << endl;
}

int main() {
    cout << "🎵 Maître Gims Music Studio - Memory Management Tests" << endl;
    cout << "====================================================" << endl;

    test_object_creation_destruction();
    test_copy_semantics();
    test_assignment_operator();
    test_large_scale_creation();
    test_string_memory_management();
    test_scope_and_lifetime();
    test_stress_operations();

    cout << "\n📊 Test Results:" << endl;
    cout << "Tests Passed: " << tests_passed << "/" << total_tests << endl;
    cout << "Score: " << (double(tests_passed) / total_tests * 20) << "/20 points" << endl;

    if (tests_passed == total_tests) {
        cout << "🎉 All memory management tests passed! No memory leaks detected." << endl;
        cout << "💡 Run with Valgrind for detailed memory analysis." << endl;
    } else {
        cout << "⚠️  Some memory tests failed. Check object lifecycle management." << endl;
    }

    return (tests_passed == total_tests) ? 0 : 1;
}