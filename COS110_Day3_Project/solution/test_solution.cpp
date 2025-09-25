#include <iostream>
#include <cassert>
#include <string>
#include "musictrack_solution.h"

using namespace std;

void testSolution() {
    cout << "🧪 Testing Complete Solution..." << endl;

    // Test default constructor
    MusicTrack track1;
    assert(track1.getTitle() == "Bella");
    assert(track1.getDuration() == 206);
    assert(track1.getGenre() == "Hip-Hop");
    assert(track1.getPlayCount() == 0);
    cout << "✅ Default constructor test passed" << endl;

    // Test setting values manually (Day 3 approach)
    MusicTrack track2;
    track2.setTitle("Est-ce que tu m'aimes");
    track2.setDuration(234);
    track2.setGenre("Pop");
    assert(track2.getTitle() == "Est-ce que tu m'aimes");
    assert(track2.getDuration() == 234);
    assert(track2.getGenre() == "Pop");
    assert(track2.getPlayCount() == 0);
    cout << "✅ Manual setting test passed" << endl;

    // Test basic operations
    MusicTrack track3;
    track3.title = "Test Track";
    track3.duration = 180;
    track3.genre = "Test Genre";
    assert(track3.getTitle() == "Test Track");
    cout << "✅ Basic operations test passed" << endl;

    // Test play functionality
    track1.play();
    track1.play();
    assert(track1.getPlayCount() == 2);
    track1.resetPlayCount();
    assert(track1.getPlayCount() == 0);
    cout << "✅ Play/reset test passed" << endl;

    // Test formatted duration
    MusicTrack track4;
    track4.duration = 125;  // 2:05
    assert(track4.getFormattedDuration() == "2:05");

    MusicTrack track5;
    track5.duration = 65;   // 1:05
    assert(track5.getFormattedDuration() == "1:05");
    cout << "✅ Formatted duration test passed" << endl;

    // Test popularity
    track1.setPlayCount(1500000);
    assert(track1.isPopular() == true);
    track2.setPlayCount(500000);
    assert(track2.isPopular() == false);
    cout << "✅ Popularity test passed" << endl;

    cout << "🎉 All solution tests passed!" << endl;
}

int main() {
    testSolution();
    return 0;
}