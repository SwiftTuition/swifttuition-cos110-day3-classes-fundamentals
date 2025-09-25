#ifndef MUSICTRACK_SOLUTION_H
#define MUSICTRACK_SOLUTION_H

#include <string>
using namespace std;

// This is the complete working solution - Day 3 appropriate version
class MusicTrack {
public:
    string title;
    int duration;
    string genre;
    int playCount;

    MusicTrack();
    MusicTrack(string t, int d, string g);

    string getTitle() const;
    int getDuration() const;
    string getGenre() const;
    int getPlayCount() const;

    void setTitle(string t);
    void setDuration(int d);
    void setGenre(string g);
    void setPlayCount(int p);

    void play();
    void resetPlayCount();
    string getFormattedDuration() const;
    bool isPopular() const;
};

#endif