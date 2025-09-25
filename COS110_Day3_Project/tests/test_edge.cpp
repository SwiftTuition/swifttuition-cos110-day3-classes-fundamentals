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

void test_empty_string_validation() {
    cout << "\n🧪 Testing Empty String Validation..." << endl;

    MusicTrack track("", 120, "Pop");
    test_assert(track.getTitle() == "Untitled Track", "Empty title should default to 'Untitled Track'");

    MusicTrack track2("Valid Title", 120, "");
    test_assert(track2.getGenre() == "Unknown", "Empty genre should default to 'Unknown'");

    // Test setting empty strings after creation
    track2.setTitle("");
    test_assert(track2.getTitle() == "Untitled Track", "setTitle('') should set to 'Untitled Track'");

    track2.setGenre("");
    test_assert(track2.getGenre() == "Unknown", "setGenre('') should set to 'Unknown'");
}

void test_negative_duration_validation() {
    cout << "\n🧪 Testing Negative Duration Validation..." << endl;

    MusicTrack track("Test", -100, "Pop");
    test_assert(track.getDuration() == 180, "Negative duration should default to 180 seconds");

    MusicTrack track2("Test", -1, "Pop");
    test_assert(track2.getDuration() == 180, "Duration -1 should default to 180 seconds");

    // Test setting negative duration after creation
    track2.setDuration(-500);
    test_assert(track2.getDuration() == 180, "setDuration(-500) should set to 180 seconds");

    track2.setDuration(0);
    test_assert(track2.getDuration() == 180, "setDuration(0) should set to 180 seconds");
}

void test_negative_play_count() {
    cout << "\n🧪 Testing Negative Play Count Validation..." << endl;

    MusicTrack track("Test", 120, "Pop");

    track.setPlayCount(-100);
    test_assert(track.getPlayCount() == 0, "setPlayCount(-100) should set to 0");

    track.setPlayCount(-1);
    test_assert(track.getPlayCount() == 0, "setPlayCount(-1) should set to 0");

    // Ensure play count doesn't go negative through other means
    track.resetPlayCount();
    test_assert(track.getPlayCount() == 0, "resetPlayCount() should maintain 0");
}

void test_extreme_values() {
    cout << "\n🧪 Testing Extreme Values..." << endl;

    // Test very large duration
    MusicTrack track("Test", 999999, "Pop");
    test_assert(track.getDuration() == 999999, "Very large duration should be accepted");

    // Test very large play count
    track.setPlayCount(2000000000);
    test_assert(track.getPlayCount() == 2000000000, "Very large play count should be accepted");

    // Test popularity with extreme values
    test_assert(track.isPopular() == true, "Track with 2 billion plays should be popular");

    // Test formatted duration with extreme values
    MusicTrack longTrack("Long", 3661, "Test"); // 61:01
    test_assert(longTrack.getFormattedDuration() == "61:01", "Long duration should format correctly");

    MusicTrack veryLongTrack("VeryLong", 36000, "Test"); // 600:00
    test_assert(veryLongTrack.getFormattedDuration() == "600:00", "Very long duration should format correctly");
}

void test_special_characters_in_strings() {
    cout << "\n🧪 Testing Special Characters in Strings..." << endl;

    // Test French characters (like in Gims songs)
    MusicTrack track("Est-ce que tu m'aimes", 234, "Français");
    test_assert(track.getTitle() == "Est-ce que tu m'aimes", "French characters should be preserved");
    test_assert(track.getGenre() == "Français", "Genre with special characters should be preserved");

    // Test various special characters
    MusicTrack track2("Song & Dance #1", 180, "Rock/Pop");
    test_assert(track2.getTitle() == "Song & Dance #1", "Special characters in title should be preserved");
    test_assert(track2.getGenre() == "Rock/Pop", "Forward slash in genre should be preserved");

    // Test long strings
    string longTitle(100, 'A');
    MusicTrack track3(longTitle, 180, "Pop");
    test_assert(track3.getTitle() == longTitle, "Very long title should be preserved");
}

void test_boundary_conditions() {
    cout << "\n🧪 Testing Boundary Conditions..." << endl;

    // Test duration = 1 (minimum valid)
    MusicTrack track("Test", 1, "Pop");
    test_assert(track.getDuration() == 1, "Duration 1 should be accepted");
    test_assert(track.getFormattedDuration() == "0:01", "Duration 1 should format as 0:01");

    // Test play count boundaries for popularity
    MusicTrack track2("Borderline", 180, "Pop");
    track2.setPlayCount(1000000);
    test_assert(track2.isPopular() == false, "Exactly 1,000,000 plays should not be popular");

    track2.setPlayCount(1000001);
    test_assert(track2.isPopular() == true, "1,000,001 plays should be popular");

    // Test formatted duration edge cases
    MusicTrack track3("Edge", 59, "Test"); // 0:59
    test_assert(track3.getFormattedDuration() == "0:59", "59 seconds should format as 0:59");

    MusicTrack track4("Edge", 60, "Test"); // 1:00
    test_assert(track4.getFormattedDuration() == "1:00", "60 seconds should format as 1:00");
}

void test_constructor_validation() {
    cout << "\n🧪 Testing Constructor Validation Edge Cases..." << endl;

    // Test all invalid parameters at once
    MusicTrack track("", -50, "");
    test_assert(track.getTitle() == "Untitled Track", "All invalid params: title should default");
    test_assert(track.getDuration() == 180, "All invalid params: duration should default");
    test_assert(track.getGenre() == "Unknown", "All invalid params: genre should default");
    test_assert(track.getPlayCount() == 0, "All invalid params: play count should be 0");

    // Test mixed valid/invalid parameters
    MusicTrack track2("Valid Title", -100, "");
    test_assert(track2.getTitle() == "Valid Title", "Mixed params: valid title should be kept");
    test_assert(track2.getDuration() == 180, "Mixed params: invalid duration should default");
    test_assert(track2.getGenre() == "Unknown", "Mixed params: invalid genre should default");
}

void test_multiple_operations() {
    cout << "\n🧪 Testing Multiple Sequential Operations..." << endl;

    MusicTrack track("Test Track", 180, "Test Genre");

    // Multiple plays
    for (int i = 0; i < 1000; i++) {
        track.play();
    }
    test_assert(track.getPlayCount() == 1000, "1000 plays should register correctly");

    // Reset and play again
    track.resetPlayCount();
    test_assert(track.getPlayCount() == 0, "Reset after many plays should work");

    track.play();
    test_assert(track.getPlayCount() == 1, "Play after reset should work");

    // Multiple setter calls
    track.setTitle("New Title 1");
    track.setTitle("New Title 2");
    track.setTitle("Final Title");
    test_assert(track.getTitle() == "Final Title", "Multiple setTitle calls should work");

    // Test setter with invalid then valid
    track.setDuration(-100);
    test_assert(track.getDuration() == 180, "Invalid duration should default");
    track.setDuration(200);
    test_assert(track.getDuration() == 200, "Valid duration after invalid should work");
}

int main() {
    cout << "🎵 Maître Gims Music Studio - Edge Case Tests" << endl;
    cout << "==============================================" << endl;

    test_empty_string_validation();
    test_negative_duration_validation();
    test_negative_play_count();
    test_extreme_values();
    test_special_characters_in_strings();
    test_boundary_conditions();
    test_constructor_validation();
    test_multiple_operations();

    cout << "\n📊 Test Results:" << endl;
    cout << "Tests Passed: " << tests_passed << "/" << total_tests << endl;
    cout << "Score: " << (double(tests_passed) / total_tests * 30) << "/30 points" << endl;

    if (tests_passed == total_tests) {
        cout << "🎉 All edge case tests passed! Your validation logic is robust." << endl;
    } else {
        cout << "⚠️  Some edge case tests failed. Check your input validation." << endl;
    }

    return (tests_passed == total_tests) ? 0 : 1;
}