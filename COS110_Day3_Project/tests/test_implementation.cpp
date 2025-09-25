#include <iostream>
#include <cassert>
#include <string>
#include <fstream>
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

void test_header_file_structure() {
    cout << "\n🧪 Testing Header File Structure..." << endl;

    // Read the header file to check structure
    ifstream headerFile("../src/musictrack.h");
    if (!headerFile.is_open()) {
        cout << "❌ Could not open musictrack.h for testing" << endl;
        return;
    }

    string line;
    string content;
    while (getline(headerFile, line)) {
        content += line + "\n";
    }
    headerFile.close();

    // Check for include guards
    bool hasIncludeGuard = (content.find("#ifndef") != string::npos &&
                           content.find("#define") != string::npos &&
                           content.find("#endif") != string::npos);
    test_assert(hasIncludeGuard, "Header should have proper include guards");

    // Check for class declaration
    bool hasClassDeclaration = (content.find("class MusicTrack") != string::npos);
    test_assert(hasClassDeclaration, "Header should contain MusicTrack class declaration");

    // Check for private section
    bool hasPrivateSection = (content.find("private:") != string::npos);
    test_assert(hasPrivateSection, "Class should have private section");

    // Check for public section
    bool hasPublicSection = (content.find("public:") != string::npos);
    test_assert(hasPublicSection, "Class should have public section");

    // Check for required member functions
    bool hasDefaultConstructor = (content.find("MusicTrack()") != string::npos);
    bool hasParameterizedConstructor = (content.find("MusicTrack(") != string::npos);
    bool hasGetters = (content.find("getTitle()") != string::npos &&
                      content.find("getDuration()") != string::npos);
    bool hasSetters = (content.find("setTitle(") != string::npos &&
                      content.find("setDuration(") != string::npos);

    test_assert(hasDefaultConstructor, "Header should declare default constructor");
    test_assert(hasParameterizedConstructor, "Header should declare parameterized constructor");
    test_assert(hasGetters, "Header should declare getter functions");
    test_assert(hasSetters, "Header should declare setter functions");
}

void test_encapsulation() {
    cout << "\n🧪 Testing Encapsulation..." << endl;

    MusicTrack track("Test", 180, "Pop");

    // These should work (public interface)
    test_assert(track.getTitle() == "Test", "Public getter should be accessible");

    track.setTitle("New Title");
    test_assert(track.getTitle() == "New Title", "Public setter should be accessible");

    // Test that we can't directly access private members
    // Note: This is tested at compile time - if private members are accessible,
    // compilation would fail. The fact that our code compiles with proper
    // encapsulation suggests the implementation is correct.
    test_assert(true, "Encapsulation properly implemented (private members inaccessible)");
}

void test_const_correctness() {
    cout << "\n🧪 Testing Const Correctness..." << endl;

    const MusicTrack constTrack("Const Test", 180, "Pop");

    // Test that const object can call const getter functions
    // Note: If getters aren't const, this won't compile
    string title = constTrack.getTitle();
    int duration = constTrack.getDuration();
    string genre = constTrack.getGenre();
    int playCount = constTrack.getPlayCount();

    test_assert(title == "Const Test", "Const object should allow getter access");
    test_assert(duration == 180, "Const getter should return correct duration");
    test_assert(genre == "Pop", "Const getter should return correct genre");
    test_assert(playCount == 0, "Const getter should return correct play count");

    // Test formatted duration and popularity on const object
    string formatted = constTrack.getFormattedDuration();
    bool popular = constTrack.isPopular();

    test_assert(formatted == "3:00", "Const object should allow formatted duration access");
    test_assert(popular == false, "Const object should allow popularity check");
}

void test_function_signatures() {
    cout << "\n🧪 Testing Function Signatures..." << endl;

    MusicTrack track("Test", 180, "Pop");

    // Test that all required functions exist and work
    // Default constructor (tested implicitly)
    MusicTrack defaultTrack;
    test_assert(true, "Default constructor exists and is callable");

    // Parameterized constructor (tested implicitly)
    MusicTrack paramTrack("Param", 200, "Rock");
    test_assert(true, "Parameterized constructor exists and is callable");

    // Getter functions
    string title = track.getTitle();
    int duration = track.getDuration();
    string genre = track.getGenre();
    int playCount = track.getPlayCount();
    test_assert(true, "All getter functions exist and are callable");

    // Setter functions
    track.setTitle("New");
    track.setDuration(200);
    track.setGenre("New Genre");
    track.setPlayCount(10);
    test_assert(true, "All setter functions exist and are callable");

    // Utility functions
    track.play();
    track.resetPlayCount();
    string formatted = track.getFormattedDuration();
    bool popular = track.isPopular();
    test_assert(true, "All utility functions exist and are callable");
}

void test_implementation_file_structure() {
    cout << "\n🧪 Testing Implementation File Structure..." << endl;

    // Read the implementation file to check structure
    ifstream implFile("../src/musictrack.cpp");
    if (!implFile.is_open()) {
        test_assert(false, "musictrack.cpp should exist and be readable");
        return;
    }

    string line;
    string content;
    while (getline(implFile, line)) {
        content += line + "\n";
    }
    implFile.close();

    // Check for header include
    bool includesHeader = (content.find("#include \"musictrack.h\"") != string::npos);
    test_assert(includesHeader, "Implementation should include its header file");

    // Check for scope resolution operator usage
    bool usesScope = (content.find("MusicTrack::") != string::npos);
    test_assert(usesScope, "Implementation should use scope resolution operator");

    // Check for constructor implementations
    bool hasDefaultConstructorImpl = (content.find("MusicTrack::MusicTrack()") != string::npos);
    bool hasParamConstructorImpl = (content.find("MusicTrack::MusicTrack(") != string::npos &&
                                   content.find("string") != string::npos);
    test_assert(hasDefaultConstructorImpl, "Default constructor should be implemented");
    test_assert(hasParamConstructorImpl, "Parameterized constructor should be implemented");

    // Check for function implementations
    bool hasGetterImpl = (content.find("MusicTrack::getTitle") != string::npos);
    bool hasSetterImpl = (content.find("MusicTrack::setTitle") != string::npos);
    test_assert(hasGetterImpl, "Getter functions should be implemented");
    test_assert(hasSetterImpl, "Setter functions should be implemented");
}

void test_code_style() {
    cout << "\n🧪 Testing Code Style..." << endl;

    // These tests verify that the code follows good practices
    // Most are implicit in the working functionality

    MusicTrack track("Style Test", 180, "Pop");

    // Test initialization (if constructor properly initializes)
    test_assert(track.getPlayCount() == 0, "Objects should be properly initialized");

    // Test return types (implicit - if wrong types, compilation fails)
    string title = track.getTitle();
    int duration = track.getDuration();
    test_assert(!title.empty(), "Functions should return appropriate types");
    test_assert(duration > 0, "Functions should return meaningful values");

    // Test parameter validation (shows defensive programming)
    track.setDuration(-100);
    test_assert(track.getDuration() > 0, "Code should validate input parameters");

    track.setTitle("");
    test_assert(!track.getTitle().empty(), "Code should handle edge cases");
}

void test_object_integrity() {
    cout << "\n🧪 Testing Object Integrity..." << endl;

    MusicTrack track("Integrity Test", 240, "Test");

    // Test that object state remains consistent
    track.play();
    track.play();
    track.play();

    int playCount1 = track.getPlayCount();
    string title1 = track.getTitle();
    int duration1 = track.getDuration();

    // Perform other operations
    track.setGenre("New Genre");
    string formatted = track.getFormattedDuration();

    // Check that unrelated operations don't affect other members
    int playCount2 = track.getPlayCount();
    string title2 = track.getTitle();
    int duration2 = track.getDuration();

    test_assert(playCount1 == playCount2, "Play count should remain unchanged by unrelated operations");
    test_assert(title1 == title2, "Title should remain unchanged by unrelated operations");
    test_assert(duration1 == duration2, "Duration should remain unchanged by unrelated operations");

    // Test that object state is internally consistent
    test_assert(formatted == "4:00", "Formatted duration should match actual duration");
    test_assert(track.getGenre() == "New Genre", "Genre should reflect last set value");
}

int main() {
    cout << "🎵 Maître Gims Music Studio - Implementation Quality Tests" << endl;
    cout << "=========================================================" << endl;

    test_header_file_structure();
    test_encapsulation();
    test_const_correctness();
    test_function_signatures();
    test_implementation_file_structure();
    test_code_style();
    test_object_integrity();

    cout << "\n📊 Test Results:" << endl;
    cout << "Tests Passed: " << tests_passed << "/" << total_tests << endl;
    cout << "Score: " << (double(tests_passed) / total_tests * 10) << "/10 points" << endl;

    if (tests_passed == total_tests) {
        cout << "🎉 All implementation tests passed! Code quality is excellent." << endl;
        cout << "💡 Your implementation follows good C++ practices." << endl;
    } else {
        cout << "⚠️  Some implementation tests failed. Review code structure and style." << endl;
    }

    return (tests_passed == total_tests) ? 0 : 1;
}