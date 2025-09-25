// Day 3 Quiz Data: Classes & Object-Oriented Programming
// 152 questions covering all Day 3 learning objectives

const quizData = [
    {
        id: 1,
        type: "true-false",
        topic: "fundamentals",
        difficulty: "easy",
        question: "A class is a blueprint for creating objects.",
        options: ["True", "False"],
        correct: 0,
        explanation: "A class defines the structure and behavior that objects of that type will have, just like a blueprint defines how houses will be built."
    },
    {
        id: 2,
        type: "true-false",
        topic: "fundamentals",
        difficulty: "easy",
        question: "In procedural programming, data and functions are bundled together.",
        options: ["True", "False"],
        correct: 1,
        explanation: "In procedural programming, data and functions are separate. Object-oriented programming bundles them together in classes."
    },
    {
        id: 3,
        type: "true-false",
        topic: "fundamentals",
        difficulty: "medium",
        question: "Object-oriented programming solves the problem of having multiple global variables for similar data.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Classes allow you to create multiple objects with their own data, eliminating the need for separate global variables like room_width, garden_width, etc."
    },
    {
        id: 4,
        type: "true-false",
        topic: "fundamentals",
        difficulty: "easy",
        question: "Member variables and attributes refer to the same thing in object-oriented programming.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Member variables and attributes are both terms for the data stored within a class or object."
    },
    {
        id: 5,
        type: "true-false",
        topic: "fundamentals",
        difficulty: "easy",
        question: "Member functions and methods refer to the same thing in object-oriented programming.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Member functions and methods are both terms for functions that belong to a class and operate on its data."
    },
    {
        id: 6,
        type: "multiple-choice",
        topic: "fundamentals",
        difficulty: "medium",
        question: "What is the main advantage of object-oriented programming over procedural programming?",
        options: ["Functions are faster", "Data and functions are bundled together", "Uses less memory", "Easier to learn"],
        correct: 1,
        explanation: "The main advantage is encapsulation - bundling related data and functions together, making code more organized and maintainable."
    },
    {
        id: 7,
        type: "multiple-choice",
        topic: "fundamentals",
        difficulty: "easy",
        question: "Which of the following best describes an object?",
        options: ["A function", "An instance of a class", "A variable", "A data type"],
        correct: 1,
        explanation: "An object is an instance (specific example) created from a class blueprint."
    },
    {
        id: 8,
        type: "multiple-choice",
        topic: "fundamentals",
        difficulty: "easy",
        question: "In the analogy of class as cookie cutter, what represents the object?",
        options: ["The dough", "The actual cookie made", "The recipe", "The oven"],
        correct: 1,
        explanation: "The object is like the actual cookie produced using the cookie cutter (class) template."
    },
    {
        id: 9,
        type: "multiple-choice",
        topic: "fundamentals",
        difficulty: "medium",
        question: "What problem does object-oriented programming solve when managing multiple rectangles?",
        options: ["Speed of calculations", "Need for separate variables and functions for each rectangle", "Memory usage", "User interface complexity"],
        correct: 1,
        explanation: "OOP eliminates the need for room_width, garden_width, setRoomWidth(), setGardenWidth() etc. by allowing multiple objects from one class."
    },
    {
        id: 10,
        type: "multiple-choice",
        topic: "fundamentals",
        difficulty: "medium",
        question: "Which statement best describes encapsulation?",
        options: ["Making functions faster", "Bundling data and functions together", "Using global variables", "Writing longer code"],
        correct: 1,
        explanation: "Encapsulation is the fundamental OOP principle of grouping related data and functions into a single unit (class)."
    },
    {
        id: 11,
        type: "fill-gap",
        topic: "fundamentals",
        difficulty: "easy",
        question: "A _____ is a blueprint for creating objects, while an _____ is a specific instance created from that blueprint.",
        answer: "class, object",
        explanation: "A class defines the template, and objects are individual instances created from that template."
    },
    {
        id: 12,
        type: "fill-gap",
        topic: "fundamentals",
        difficulty: "easy",
        question: "The data stored in a class are called _____ variables or _____.",
        answer: "member, attributes",
        explanation: "The terms member variables and attributes both refer to the data components of a class."
    },
    {
        id: 13,
        type: "fill-gap",
        topic: "fundamentals",
        difficulty: "medium",
        question: "In procedural programming, if you want three rectangles, you need _____ separate width variables and _____ separate setWidth functions.",
        answer: "three, three",
        explanation: "Procedural programming requires separate variables and functions for each entity, leading to code duplication."
    },
    {
        id: 14,
        type: "true-false",
        topic: "access",
        difficulty: "easy",
        question: "Private members can be accessed from anywhere in the program.",
        options: ["True", "False"],
        correct: 1,
        explanation: "Private members can only be accessed by member functions of the same class, not from outside the class."
    },
    {
        id: 15,
        type: "true-false",
        topic: "access",
        difficulty: "easy",
        question: "Public members can be accessed from any part of the program.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Public members are accessible from anywhere in the program, providing the external interface to the class."
    },
    {
        id: 16,
        type: "true-false",
        topic: "access",
        difficulty: "medium",
        question: "If you don't specify an access specifier in a class, members are public by default.",
        options: ["True", "False"],
        correct: 1,
        explanation: "In classes, members are private by default if no access specifier is given."
    },
    {
        id: 17,
        type: "true-false",
        topic: "access",
        difficulty: "medium",
        question: "A class can have multiple private and public sections.",
        options: ["True", "False"],
        correct: 0,
        explanation: "You can alternate between private: and public: sections multiple times within a single class."
    },
    {
        id: 18,
        type: "true-false",
        topic: "access",
        difficulty: "medium",
        question: "Access specifiers affect all members listed after them until the next access specifier.",
        options: ["True", "False"],
        correct: 0,
        explanation: "An access specifier (private: or public:) applies to all subsequent members until another access specifier is encountered."
    },
    {
        id: 19,
        type: "multiple-choice",
        topic: "access",
        difficulty: "medium",
        question: "What is the purpose of making member variables private?",
        options: ["To use less memory", "To make the program faster", "To protect data from direct access", "To reduce compilation time"],
        correct: 2,
        explanation: "Private member variables prevent external code from directly accessing and potentially corrupting the object's internal data."
    },
    {
        id: 20,
        type: "multiple-choice",
        topic: "access",
        difficulty: "easy",
        question: "Which access specifier should typically be used for member functions that provide the class interface?",
        options: ["private", "public", "protected", "static"],
        correct: 1,
        explanation: "Public member functions provide the external interface that other parts of the program use to interact with the object."
    },
    {
        id: 21,
        type: "multiple-choice",
        topic: "access",
        difficulty: "easy",
        question: "What happens if you try to access a private member from outside the class?",
        options: ["It works normally", "Compilation error", "Runtime error", "The value becomes 0"],
        correct: 1,
        explanation: "Attempting to access private members from outside the class results in a compilation error."
    },
    {
        id: 22,
        type: "multiple-choice",
        topic: "access",
        difficulty: "medium",
        question: "In the code `class Test { int x; public: int y; };`, what is the access level of variable x?",
        options: ["public", "private", "protected", "undefined"],
        correct: 1,
        explanation: "Members declared before any access specifier are private by default in classes."
    },
    {
        id: 23,
        type: "fill-gap",
        topic: "access",
        difficulty: "easy",
        question: "Members declared as _____ can only be accessed by the class's own member functions.",
        answer: "private",
        explanation: "Private members are only accessible within the class itself, providing data protection."
    },
    {
        id: 24,
        type: "fill-gap",
        topic: "access",
        difficulty: "easy",
        question: "To allow external code to access a member, it must be declared as _____.",
        answer: "public",
        explanation: "Public members form the external interface of the class and can be accessed from anywhere."
    },
    {
        id: 25,
        type: "true-false",
        topic: "objects",
        difficulty: "easy",
        question: "Creating an object from a class is called instantiation.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Instantiation is the process of creating a specific object instance from a class template."
    },
    {
        id: 26,
        type: "true-false",
        topic: "objects",
        difficulty: "medium",
        question: "Each object created from a class has its own copy of the class's member variables.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Every object maintains its own separate copy of member variables, allowing independent state."
    },
    {
        id: 27,
        type: "true-false",
        topic: "objects",
        difficulty: "easy",
        question: "The dot operator (.) is used to access members of an object.",
        options: ["True", "False"],
        correct: 0,
        explanation: "The dot operator allows access to both member functions and public member variables of an object."
    },
    {
        id: 28,
        type: "true-false",
        topic: "objects",
        difficulty: "medium",
        question: "You can call member functions without creating an object first.",
        options: ["True", "False"],
        correct: 1,
        explanation: "Non-static member functions need an object to operate on; you must create an object first (unless using static functions)."
    },
    {
        id: 29,
        type: "multiple-choice",
        topic: "objects",
        difficulty: "easy",
        question: "What syntax is used to create an object named 'myRect' of class 'Rectangle'?",
        options: ["Rectangle myRect;", "myRect Rectangle;", "object Rectangle myRect;", "new Rectangle myRect;"],
        correct: 0,
        explanation: "Objects are declared using the same syntax as variables: ClassName objectName;"
    },
    {
        id: 30,
        type: "multiple-choice",
        topic: "objects",
        difficulty: "medium",
        question: "If you have `Rectangle r1, r2;` and set `r1.setWidth(5)` and `r2.setWidth(10)`, what happens?",
        options: ["Both objects have width 10", "Both objects have width 5", "r1 has width 5, r2 has width 10", "Compilation error"],
        correct: 2,
        explanation: "Each object maintains its own independent data, so r1 and r2 have separate width values."
    },
    {
        id: 31,
        type: "multiple-choice",
        topic: "objects",
        difficulty: "easy",
        question: "What operator is used to access a member function of an object?",
        options: ["->", ".", "::", "[]"],
        correct: 1,
        explanation: "The dot operator (.) is used to access members of objects (-> is used with pointers)."
    },
    {
        id: 32,
        type: "fill-gap",
        topic: "objects",
        difficulty: "easy",
        question: "To call the setWidth function on an object named 'box', you would write: box._____(5.0);",
        answer: "setWidth",
        explanation: "Member functions are called using the dot operator followed by the function name and parameters."
    },
    {
        id: 33,
        type: "true-false",
        topic: "constructors",
        difficulty: "easy",
        question: "A constructor has the same name as the class.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Constructors must have exactly the same name as the class they belong to."
    },
    {
        id: 34,
        type: "true-false",
        topic: "constructors",
        difficulty: "easy",
        question: "Constructors have a return type.",
        options: ["True", "False"],
        correct: 1,
        explanation: "Constructors never have a return type, not even void."
    },
    {
        id: 35,
        type: "true-false",
        topic: "constructors",
        difficulty: "easy",
        question: "Constructors are called automatically when an object is created.",
        options: ["True", "False"],
        correct: 0,
        explanation: "The constructor runs automatically during object creation to initialize the object's state."
    },
    {
        id: 36,
        type: "true-false",
        topic: "constructors",
        difficulty: "medium",
        question: "A class can have multiple constructors with different parameters.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Constructor overloading allows multiple constructors with different parameter lists."
    },
    {
        id: 37,
        type: "true-false",
        topic: "constructors",
        difficulty: "hard",
        question: "If you don't write any constructor, C++ provides one that initializes all member variables to zero.",
        options: ["True", "False"],
        correct: 1,
        explanation: "The compiler-generated default constructor allocates memory but doesn't initialize primitive types, leaving them with garbage values."
    },
    {
        id: 38,
        type: "multiple-choice",
        topic: "constructors",
        difficulty: "easy",
        question: "What is the purpose of a constructor?",
        options: ["Delete objects", "Initialize objects", "Copy objects", "Print objects"],
        correct: 1,
        explanation: "Constructors are responsible for setting up the initial state of newly created objects."
    },
    {
        id: 39,
        type: "multiple-choice",
        topic: "constructors",
        difficulty: "medium",
        question: "A default constructor is one that:",
        options: ["Takes many parameters", "Takes no parameters", "Returns a value", "Is private"],
        correct: 1,
        explanation: "A default constructor is one that can be called with no arguments, either taking no parameters or having default values for all parameters."
    },
    {
        id: 40,
        type: "multiple-choice",
        topic: "constructors",
        difficulty: "hard",
        question: "In the constructor `Rectangle::Rectangle() : width(1.0), length(1.0) {}`, what is the part `: width(1.0), length(1.0)` called?",
        options: ["Parameter list", "Initialization list", "Return statement", "Function body"],
        correct: 1,
        explanation: "The initialization list (after the colon) initializes member variables before the constructor body executes."
    },
    {
        id: 41,
        type: "fill-gap",
        topic: "constructors",
        difficulty: "easy",
        question: "A constructor must have the _____ name as the class and has _____ return type.",
        answer: "same, no",
        explanation: "Constructors are identified by having the exact same name as the class and never having a return type."
    },
    {
        id: 42,
        type: "true-false",
        topic: "functions",
        difficulty: "easy",
        question: "Getter functions typically modify the object's data.",
        options: ["True", "False"],
        correct: 1,
        explanation: "Getter functions (accessors) retrieve data without modifying it; setter functions (mutators) modify data."
    },
    {
        id: 43,
        type: "true-false",
        topic: "functions",
        difficulty: "medium",
        question: "Setter functions should include validation to ensure data integrity.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Setter functions should validate input to prevent invalid data (like negative dimensions) from being stored."
    },
    {
        id: 44,
        type: "true-false",
        topic: "functions",
        difficulty: "easy",
        question: "The naming convention for getter functions typically starts with \"get\".",
        options: ["True", "False"],
        correct: 0,
        explanation: "Getter functions conventionally start with \"get\" (getWidth, getName, etc.) to indicate they retrieve values."
    },
    {
        id: 45,
        type: "multiple-choice",
        topic: "functions",
        difficulty: "easy",
        question: "What is the main purpose of a setter function?",
        options: ["Retrieve data", "Modify private data with validation", "Delete objects", "Print information"],
        correct: 1,
        explanation: "Setter functions (mutators) provide controlled access to modify private member variables, often including validation."
    },
    {
        id: 46,
        type: "multiple-choice",
        topic: "functions",
        difficulty: "easy",
        question: "Which function would be considered a getter?",
        options: ["setName()", "getName()", "updateName()", "changeName()"],
        correct: 1,
        explanation: "Functions starting with \"get\" are typically getters that return the value of private member variables."
    },
    {
        id: 47,
        type: "true-false",
        topic: "scope",
        difficulty: "easy",
        question: "The scope resolution operator consists of two colons (::).",
        options: ["True", "False"],
        correct: 0,
        explanation: "The scope resolution operator is written as :: (two consecutive colons)."
    },
    {
        id: 48,
        type: "true-false",
        topic: "scope",
        difficulty: "medium",
        question: "The scope resolution operator is needed when implementing member functions outside the class definition.",
        options: ["True", "False"],
        correct: 0,
        explanation: "When implementing member functions in a .cpp file, :: tells the compiler which class the function belongs to."
    },
    {
        id: 49,
        type: "multiple-choice",
        topic: "scope",
        difficulty: "medium",
        question: "What does `Rectangle::getArea()` tell the compiler?",
        options: ["getArea is a global function", "getArea belongs to the Rectangle class", "getArea is a variable", "getArea is a constructor"],
        correct: 1,
        explanation: "The :: operator specifies that getArea is a member function of the Rectangle class."
    },
    {
        id: 50,
        type: "multiple-choice",
        topic: "scope",
        difficulty: "medium",
        question: "Why do we need the scope resolution operator?",
        options: ["To make code faster", "To specify which class a function belongs to", "To access private members", "To create objects"],
        correct: 1,
        explanation: "The :: operator tells the compiler which class owns a particular function when implementing it outside the class."
    },
    {
        id: 51,
        type: "fill-gap",
        topic: "scope",
        difficulty: "medium",
        question: "To implement a member function called getWidth for class Rectangle outside the class, you would write: _____ Rectangle::_____(){ return width; }",
        answer: "double, getWidth",
        explanation: "The return type comes first, then ClassName::functionName to specify which class the function belongs to."
    },
    {
        id: 52,
        type: "multiple-choice",
        topic: "analysis",
        difficulty: "medium",
        question: "Analyze this code:\n```cpp\nclass Box {\n    double length;\npublic:\n    void setLength(double l) { length = l; }\n};\n\nBox b;\ncout << b.length;\n```\nWhat happens?",
        options: ["Prints the length", "Compilation error", "Prints 0", "Runtime error"],
        correct: 1,
        explanation: "length is private by default (no access specifier given), so accessing it directly from outside the class causes a compilation error."
    },
    {
        id: 53,
        type: "multiple-choice",
        topic: "analysis",
        difficulty: "hard",
        question: "What does this code output?\n```cpp\nclass Counter {\n    int count;\npublic:\n    Counter() { count = 0; }\n    void increment() { count++; }\n    int getValue() { return count; }\n};\n\nCounter c1, c2;\nc1.increment();\nc1.increment();\nc2.increment();\ncout << c1.getValue() << \" \" << c2.getValue();\n```",
        options: ["0 0", "2 1", "1 1", "3 1"],
        correct: 1,
        explanation: "Each object has its own count variable. c1 is incremented twice (value 2), c2 is incremented once (value 1)."
    },
    {
        id: 54,
        type: "multiple-choice",
        topic: "mistakes",
        difficulty: "medium",
        question: "What's wrong with this constructor?\n```cpp\nclass Circle {\npublic:\n    void Circle() { radius = 1.0; }\n};\n```",
        options: ["Nothing wrong", "Constructor shouldn't have void return type", "Wrong name", "Missing parameters"],
        correct: 1,
        explanation: "Constructors never have a return type, not even void."
    },
    {
        id: 55,
        type: "fill-gap",
        topic: "mistakes",
        difficulty: "easy",
        question: "What's the error in this code?\n```cpp\nclass Rectangle {\n    double width, length;\npublic:\n    Rectangle();\n}  // Missing something here\n```",
        answer: "semicolon",
        explanation: "Class definitions must end with a semicolon. Missing the semicolon after the closing brace causes a compilation error."
    },
    {
        id: 56,
        type: "multiple-choice",
        topic: "fundamentals",
        difficulty: "medium",
        question: "In object-oriented programming, what principle prevents external code from directly modifying an object's internal data?",
        options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
        correct: 2,
        explanation: "Encapsulation bundles data and methods together while hiding internal implementation details and preventing direct access to internal data."
    },
    {
        id: 57,
        type: "multiple-choice",
        topic: "access",
        difficulty: "hard",
        question: "Which of the following demonstrates proper encapsulation?",
        options: ["Making all members public", "Making all members private", "Making data private and interface public", "Using global variables"],
        correct: 2,
        explanation: "Proper encapsulation involves keeping data (member variables) private while providing a public interface through member functions."
    },
    {
        id: 58,
        type: "multiple-choice",
        topic: "constructors",
        difficulty: "hard",
        question: "What happens to uninitialized member variables in a class without a custom constructor?",
        options: ["They are set to zero", "They contain garbage values", "They are set to empty/null", "Compilation error occurs"],
        correct: 1,
        explanation: "Without a custom constructor, primitive type member variables contain whatever garbage data was previously in that memory location."
    },
    {
        id: 59,
        type: "multiple-choice",
        topic: "functions",
        difficulty: "hard",
        question: "Why is it better to use getter/setter functions instead of making member variables public?",
        options: ["It's faster", "Allows validation and maintains data integrity", "Uses less memory", "Required by C++ syntax"],
        correct: 1,
        explanation: "Getter/setter functions allow validation of input data, maintain invariants, and provide flexibility for future changes without affecting client code."
    },
    {
        id: 60,
        type: "multiple-choice",
        topic: "scope",
        difficulty: "medium",
        question: "In the code `double Circle::getArea() { return 3.14159 * radius * radius; }`, what does `Circle::` specify?",
        options: ["The return type", "Which class this function belongs to", "The function name", "A namespace"],
        correct: 1,
        explanation: "The scope resolution operator (::) specifies that this getArea function is a member of the Circle class."
    },
    {
        id: 61,
        type: "multiple-choice",
        topic: "access",
        difficulty: "medium",
        question: "If a class has private member variables, how should external code access these variables?",
        options: ["Direct access using dot operator", "Through public getter functions", "Using scope resolution operator", "Cannot be accessed at all"],
        correct: 1,
        explanation: "Private member variables can only be accessed indirectly through public member functions (getters) that the class provides."
    },
    {
        id: 62,
        type: "multiple-choice",
        topic: "constructors",
        difficulty: "hard",
        question: "What is constructor overloading?",
        options: ["Having multiple classes with same constructor", "Having multiple constructors with different parameters", "Calling constructor multiple times", "Constructor calling another constructor"],
        correct: 1,
        explanation: "Constructor overloading means having multiple constructors in the same class with different parameter lists."
    },
    {
        id: 63,
        type: "fill-gap",
        topic: "constructors",
        difficulty: "medium",
        question: "Complete the constructor implementation:\n```cpp\nclass Student {\n    string name;\n    int age;\npublic:\n    Student(string n, int a) {\n        _____ = n;\n        _____ = a;\n    }\n};\n```",
        answer: "name, age",
        explanation: "The constructor parameters n and a should be assigned to the member variables name and age respectively."
    },
    {
        id: 64,
        type: "multiple-choice",
        topic: "objects",
        difficulty: "medium",
        question: "What's wrong with this member function call?\n```cpp\nRectangle r;\ngetArea();  // What's wrong here?\n```",
        options: ["Nothing wrong", "Missing object name and dot operator", "Wrong function name", "Missing parameters"],
        correct: 1,
        explanation: "Member functions must be called on an object using the dot operator: r.getArea()"
    },
    {
        id: 65,
        type: "true-false",
        topic: "objects",
        difficulty: "hard",
        question: "Each object created from a class shares the same memory location for member variables.",
        options: ["True", "False"],
        correct: 1,
        explanation: "Each object has its own separate memory space for member variables. Only static members are shared among all objects of a class."
    },
    {
        id: 66,
        type: "multiple-choice",
        topic: "fundamentals",
        difficulty: "hard",
        question: "What is the difference between a class and a struct in C++?",
        options: ["No difference", "struct members are public by default, class members are private by default", "struct can't have functions", "struct can't have constructors"],
        correct: 1,
        explanation: "The only difference is default access: struct members are public by default, class members are private by default."
    },
    {
        id: 67,
        type: "fill-gap",
        topic: "objects",
        difficulty: "medium",
        question: "In object-oriented programming, what does the term \"instantiation\" mean?",
        answer: "creating an object from a class",
        explanation: "Instantiation is the process of creating a specific object (instance) from a class template."
    },
    {
        id: 68,
        type: "true-false",
        topic: "constructors",
        difficulty: "hard",
        question: "A constructor can be called explicitly like a regular function.",
        options: ["True", "False"],
        correct: 1,
        explanation: "Constructors are called automatically when objects are created. You cannot call them explicitly like regular functions."
    },
    {
        id: 69,
        type: "multiple-choice",
        topic: "access",
        difficulty: "medium",
        question: "What access level should data members typically have in a well-designed class?",
        options: ["public", "private", "protected", "static"],
        correct: 1,
        explanation: "Data members should typically be private to maintain encapsulation and data integrity."
    },
    {
        id: 70,
        type: "true-false",
        topic: "access",
        difficulty: "easy",
        question: "You can have both private and public sections in the same class.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Classes can alternate between private: and public: sections multiple times."
    },
    {
        id: 71,
        type: "multiple-choice",
        topic: "access",
        difficulty: "medium",
        question: "What happens when you don't provide any access specifier for a class member?",
        options: ["It becomes public", "It becomes private", "Compilation error", "It becomes protected"],
        correct: 1,
        explanation: "In classes, members are private by default if no access specifier is given."
    },
    {
        id: 72,
        type: "fill-gap",
        topic: "access",
        difficulty: "easy",
        question: "To allow external code to call a function, it should be declared _____.",
        answer: "public",
        explanation: "Public functions form the interface that external code uses to interact with objects."
    },
    {
        id: 73,
        type: "true-false",
        topic: "access",
        difficulty: "easy",
        question: "Private members can be accessed by any function in the same program.",
        options: ["True", "False"],
        correct: 1,
        explanation: "Private members can only be accessed by member functions of the same class."
    },
    {
        id: 74,
        type: "multiple-choice",
        topic: "fundamentals",
        difficulty: "medium",
        question: "Which principle of OOP involves hiding implementation details?",
        options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
        correct: 2,
        explanation: "Encapsulation hides internal implementation details while providing a controlled public interface."
    },
    {
        id: 75,
        type: "fill-gap",
        topic: "access",
        difficulty: "medium",
        question: "Complete the class definition syntax: class Rectangle { _____ double width; _____ void setWidth(double w); };",
        answer: "private:, public:",
        explanation: "Typically, data members are private and member functions that form the interface are public."
    },
    {
        id: 76,
        type: "multiple-choice",
        topic: "access",
        difficulty: "medium",
        question: "What is the main benefit of making member variables private?",
        options: ["Faster execution", "Data protection and validation", "Less memory usage", "Easier to type"],
        correct: 1,
        explanation: "Private members prevent external code from corrupting object state and allow validation in setter functions."
    },
    {
        id: 77,
        type: "true-false",
        topic: "access",
        difficulty: "hard",
        question: "Objects of the same class type can access each other's private members.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Within a class's member functions, you can access private members of other objects of the same class type."
    },
    {
        id: 78,
        type: "multiple-choice",
        topic: "objects",
        difficulty: "easy",
        question: "What does object instantiation create?",
        options: ["A new class", "A specific instance of a class", "A function", "A variable"],
        correct: 1,
        explanation: "Instantiation creates a specific object instance from a class template."
    },
    {
        id: 79,
        type: "fill-gap",
        topic: "objects",
        difficulty: "easy",
        question: "To access member function getName() of object student, write: student._____(   );",
        answer: "getName",
        explanation: "The dot operator is used with the function name to call member functions on objects."
    },
    {
        id: 80,
        type: "multiple-choice",
        topic: "objects",
        difficulty: "medium",
        question: "How many separate copies of member variables exist for two objects of the same class?",
        options: ["One copy shared", "Two separate copies", "No copies", "Three copies"],
        correct: 1,
        explanation: "Each object maintains its own separate copy of all member variables."
    },
    {
        id: 81,
        type: "true-false",
        topic: "objects",
        difficulty: "easy",
        question: "You can create multiple objects from the same class.",
        options: ["True", "False"],
        correct: 0,
        explanation: "A class is a template that can be used to create many different objects."
    },
    {
        id: 82,
        type: "multiple-choice",
        topic: "objects",
        difficulty: "easy",
        question: "What operator is used to access members of an object (not a pointer)?",
        options: ["::", "->", ".", "[]"],
        correct: 2,
        explanation: "The dot operator (.) is used to access members of objects, while -> is used for pointers."
    },
    {
        id: 83,
        type: "fill-gap",
        topic: "objects",
        difficulty: "easy",
        question: "Complete this object creation: _____ Rectangle myRoom;",
        answer: "(nothing needed)",
        explanation: "Objects are declared using ClassName objectName; syntax - no additional keyword is needed."
    },
    {
        id: 84,
        type: "multiple-choice",
        topic: "objects",
        difficulty: "medium",
        question: "What happens to the member variables when you create a new object?",
        options: ["They share memory with other objects", "They get their own memory space", "They are automatically deleted", "They become global variables"],
        correct: 1,
        explanation: "Each object gets its own separate memory space for member variables."
    },
    {
        id: 85,
        type: "true-false",
        topic: "objects",
        difficulty: "easy",
        question: "The statement `Rectangle r1, r2, r3;` creates three separate Rectangle objects.",
        options: ["True", "False"],
        correct: 0,
        explanation: "This declares three separate objects: r1, r2, and r3, each with their own member variables."
    },
    {
        id: 86,
        type: "multiple-choice",
        topic: "objects",
        difficulty: "medium",
        question: "What is required before you can call a non-static member function?",
        options: ["Nothing special", "An object of that class", "A pointer", "A reference"],
        correct: 1,
        explanation: "Non-static member functions need an object to operate on."
    },
    {
        id: 87,
        type: "multiple-choice",
        topic: "constructors",
        difficulty: "easy",
        question: "What is the primary purpose of a constructor?",
        options: ["Destroy objects", "Initialize newly created objects", "Copy objects", "Access private members"],
        correct: 1,
        explanation: "Constructors set up the initial state of objects when they are created."
    },
    {
        id: 88,
        type: "true-false",
        topic: "constructors",
        difficulty: "easy",
        question: "A constructor must always take at least one parameter.",
        options: ["True", "False"],
        correct: 1,
        explanation: "Default constructors take no parameters, and they are very common."
    },
    {
        id: 89,
        type: "multiple-choice",
        topic: "constructors",
        difficulty: "easy",
        question: "What is special about a constructor's name?",
        options: ["It must start with 'construct'", "It must be the same as the class name", "It must be in all caps", "It must end with 'Init'"],
        correct: 1,
        explanation: "Constructors must have exactly the same name as their class."
    },
    {
        id: 90,
        type: "fill-gap",
        topic: "constructors",
        difficulty: "medium",
        question: "Fill in the constructor: class Circle { public: _____(){ radius = 1.0; } };",
        answer: "Circle",
        explanation: "The constructor name must match the class name exactly."
    },
    {
        id: 91,
        type: "true-false",
        topic: "constructors",
        difficulty: "easy",
        question: "Constructors have a return type of void.",
        options: ["True", "False"],
        correct: 1,
        explanation: "Constructors have no return type at all, not even void."
    },
    {
        id: 92,
        type: "multiple-choice",
        topic: "constructors",
        difficulty: "easy",
        question: "When is a constructor called?",
        options: ["When accessing a member", "Automatically when an object is created", "When the program ends", "When calling a member function"],
        correct: 1,
        explanation: "Constructors are automatically invoked during object creation."
    },
    {
        id: 93,
        type: "multiple-choice",
        topic: "constructors",
        difficulty: "medium",
        question: "What happens if you don't provide any constructor in a class?",
        options: ["Compilation error", "Objects cannot be created", "C++ provides a default constructor", "All member variables are set to zero"],
        correct: 2,
        explanation: "C++ automatically generates a default constructor if none is provided, though it doesn't initialize primitive types."
    },
    {
        id: 94,
        type: "fill-gap",
        topic: "constructors",
        difficulty: "medium",
        question: "Complete this constructor implementation: Rectangle::_____(){ width = 1.0; length = 1.0; }",
        answer: "Rectangle",
        explanation: "When implementing outside the class, use ClassName::ConstructorName format."
    },
    {
        id: 95,
        type: "true-false",
        topic: "constructors",
        difficulty: "medium",
        question: "A class can have multiple constructors.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Constructor overloading allows multiple constructors with different parameter lists."
    },
    {
        id: 96,
        type: "multiple-choice",
        topic: "constructors",
        difficulty: "hard",
        question: "What is an initialization list in a constructor?",
        options: ["A list of parameters", "A way to initialize members before the constructor body", "A list of function calls", "A type of comment"],
        correct: 1,
        explanation: "Initialization lists (after the colon) initialize members before the constructor body executes."
    },
    {
        id: 97,
        type: "multiple-choice",
        topic: "functions",
        difficulty: "easy",
        question: "What are getter functions also called?",
        options: ["Mutators", "Accessors", "Constructors", "Destructors"],
        correct: 1,
        explanation: "Getter functions are also called accessors because they provide access to private data."
    },
    {
        id: 98,
        type: "multiple-choice",
        topic: "functions",
        difficulty: "easy",
        question: "What are setter functions also called?",
        options: ["Accessors", "Mutators", "Constructors", "Destructors"],
        correct: 1,
        explanation: "Setter functions are also called mutators because they modify (mutate) private data."
    },
    {
        id: 99,
        type: "true-false",
        topic: "functions",
        difficulty: "easy",
        question: "Getter functions should typically modify the object's state.",
        options: ["True", "False"],
        correct: 1,
        explanation: "Getter functions should only retrieve values without changing the object's state."
    },
    {
        id: 100,
        type: "multiple-choice",
        topic: "functions",
        difficulty: "medium",
        question: "What should a well-designed setter function include?",
        options: ["Nothing special", "Input validation", "Multiple return statements", "Global variables"],
        correct: 1,
        explanation: "Setter functions should validate input to prevent invalid data from being stored."
    },
    {
        id: 101,
        type: "fill-gap",
        topic: "functions",
        difficulty: "easy",
        question: "Fill in the typical getter pattern: double getWidth() { _____ width; }",
        answer: "return",
        explanation: "Getter functions typically return the value of the corresponding private member variable."
    },
    {
        id: 102,
        type: "multiple-choice",
        topic: "functions",
        difficulty: "medium",
        question: "What is the main advantage of using getters and setters instead of public member variables?",
        options: ["Faster execution", "Better memory usage", "Data validation and future flexibility", "Shorter code"],
        correct: 2,
        explanation: "Getters/setters allow validation, logging, and changes to internal representation without affecting client code."
    },
    {
        id: 103,
        type: "true-false",
        topic: "functions",
        difficulty: "medium",
        question: "A setter function should always accept any value passed to it.",
        options: ["True", "False"],
        correct: 1,
        explanation: "Setter functions should validate input and reject invalid values to maintain data integrity."
    },
    {
        id: 104,
        type: "fill-gap",
        topic: "functions",
        difficulty: "easy",
        question: "What naming convention is typically used for a function that retrieves the value of a member called 'radius'?",
        answer: "getRadius",
        explanation: "Getter functions typically follow the naming pattern get + MemberName."
    },
    {
        id: 105,
        type: "multiple-choice",
        topic: "scope",
        difficulty: "easy",
        question: "What does the scope resolution operator (::) look like?",
        options: [":", "::", ".:.", "->"],
        correct: 1,
        explanation: "The scope resolution operator consists of two consecutive colons."
    },
    {
        id: 106,
        type: "multiple-choice",
        topic: "scope",
        difficulty: "medium",
        question: "When do you need to use the scope resolution operator?",
        options: ["When creating objects", "When implementing member functions outside the class", "When accessing public members", "When declaring variables"],
        correct: 1,
        explanation: ":: is needed when implementing member functions in separate files to specify which class they belong to."
    },
    {
        id: 107,
        type: "true-false",
        topic: "scope",
        difficulty: "easy",
        question: "The scope resolution operator is optional when implementing member functions outside the class.",
        options: ["True", "False"],
        correct: 1,
        explanation: "The :: operator is required to tell the compiler which class the function belongs to."
    },
    {
        id: 108,
        type: "fill-gap",
        topic: "scope",
        difficulty: "medium",
        question: "Complete the function implementation: double _____ getArea() { return width * length; }",
        answer: "Rectangle::",
        explanation: "The scope resolution operator with class name specifies that this function belongs to the Rectangle class."
    },
    {
        id: 109,
        type: "multiple-choice",
        topic: "scope",
        difficulty: "medium",
        question: "What does `Student::getName()` tell the compiler?",
        options: ["getName is a global function", "getName belongs to the Student class", "getName is a variable", "getName is a constructor"],
        correct: 1,
        explanation: "The :: operator indicates that getName is a member function of the Student class."
    },
    {
        id: 110,
        type: "true-false",
        topic: "scope",
        difficulty: "hard",
        question: "You can use the scope resolution operator to access private members from outside a class.",
        options: ["True", "False"],
        correct: 1,
        explanation: "The :: operator specifies function ownership but doesn't override access specifiers - private members remain private."
    },
    {
        id: 111,
        type: "multiple-choice",
        topic: "scope",
        difficulty: "medium",
        question: "Where is the scope resolution operator placed in a function implementation?",
        options: ["At the end", "Between the return type and function name", "Inside the function body", "Before the return type"],
        correct: 1,
        explanation: "The pattern is: ReturnType ClassName::FunctionName() { body }"
    },
    {
        id: 112,
        type: "multiple-choice",
        topic: "analysis",
        difficulty: "medium",
        question: "Analyze this code: What's the output?\n```cpp\nclass Counter {\n    int value;\npublic:\n    Counter() { value = 0; }\n    void increment() { value++; }\n    int getValue() { return value; }\n};\nCounter a, b;\na.increment();\nb.increment();\nb.increment();\ncout << a.getValue() << b.getValue();\n```",
        options: ["00", "12", "21", "22"],
        correct: 1,
        explanation: "Object 'a' is incremented once (value=1), object 'b' is incremented twice (value=2), output is \"12\"."
    },
    {
        id: 113,
        type: "multiple-choice",
        topic: "analysis",
        difficulty: "easy",
        question: "What's wrong with this code?\n```cpp\nclass Box {\nprivate:\n    double length;\npublic:\n    void setLength(double l);\n};\nBox b;\nb.length = 5.0;\n```",
        options: ["Nothing wrong", "Cannot access private member directly", "Missing constructor", "Wrong data type"],
        correct: 1,
        explanation: "'length' is private and cannot be accessed directly from outside the class."
    },
    {
        id: 114,
        type: "multiple-choice",
        topic: "analysis",
        difficulty: "medium",
        question: "Predict the output:\n```cpp\nclass Test {\n    int x;\npublic:\n    Test() { x = 10; }\n    void setX(int val) { x = val; }\n    int getX() { return x; }\n};\nTest t1, t2;\nt1.setX(20);\ncout << t1.getX() << \" \" << t2.getX();\n```",
        options: ["20 20", "10 10", "20 10", "10 20"],
        correct: 2,
        explanation: "t1 is set to 20, t2 keeps its initialized value of 10. Each object has separate data."
    },
    {
        id: 115,
        type: "multiple-choice",
        topic: "analysis",
        difficulty: "hard",
        question: "What error occurs in this code?\n```cpp\nclass Circle {\n    double radius;\npublic:\n    Circle(double r) { radius = r; }\n};\nCircle c;\n```",
        options: ["No error", "Cannot create object without providing constructor argument", "Syntax error in class", "Missing return type"],
        correct: 1,
        explanation: "The class only has a parameterized constructor, so creating an object without arguments fails."
    },
    {
        id: 116,
        type: "multiple-choice",
        topic: "mistakes",
        difficulty: "medium",
        question: "What's the error in this constructor?\n```cpp\nclass Rectangle {\npublic:\n    int Rectangle() { width = 1.0; }\n};\n```",
        options: ["Nothing wrong", "Constructor has return type", "Wrong parameter list", "Missing private section"],
        correct: 1,
        explanation: "Constructors never have a return type, not even void or int."
    },
    {
        id: 117,
        type: "fill-gap",
        topic: "mistakes",
        difficulty: "easy",
        question: "What's missing in this class definition?\n```cpp\nclass Student {\n    string name;\npublic:\n    void setName(string n);\n}\n```",
        answer: "semicolon",
        explanation: "Class definitions must end with a semicolon after the closing brace."
    },
    {
        id: 118,
        type: "multiple-choice",
        topic: "mistakes",
        difficulty: "easy",
        question: "What's wrong with this function call?\n```cpp\nRectangle r;\nsetWidth(10.0);\n```",
        options: ["Nothing wrong", "Missing object reference and dot operator", "Wrong parameter", "Function doesn't exist"],
        correct: 1,
        explanation: "Should be r.setWidth(10.0); - member functions need to be called on an object."
    },
    {
        id: 119,
        type: "multiple-choice",
        topic: "mistakes",
        difficulty: "easy",
        question: "What error does this code have?\n```cpp\nclass Circle {\nprivate:\n    double radius;\npublic:\n    Circle() { radius = 1.0; }\n};\nCircle c;\ncout << c.radius;\n```",
        options: ["No error", "Cannot access private member", "Missing constructor call", "Wrong output statement"],
        correct: 1,
        explanation: "radius is private and cannot be accessed directly; need a getter function."
    },
    {
        id: 120,
        type: "true-false",
        topic: "mistakes",
        difficulty: "hard",
        question: "This is a valid way to implement a member function: `void setWidth(double w) { Rectangle::width = w; }`",
        options: ["True", "False"],
        correct: 1,
        explanation: "When implementing inside the class or with proper scope resolution, you don't use ClassName:: for member access."
    },
    {
        id: 121,
        type: "multiple-choice",
        topic: "fundamentals",
        difficulty: "medium",
        question: "What concept allows objects to have their own separate copies of member variables?",
        options: ["Inheritance", "Encapsulation", "Instance independence", "Polymorphism"],
        correct: 2,
        explanation: "Each instance (object) of a class maintains its own separate copy of member variables."
    },
    {
        id: 122,
        type: "fill-gap",
        topic: "fundamentals",
        difficulty: "medium",
        question: "In object-oriented programming, _____ defines what objects can do, while _____ defines what data they contain.",
        answer: "member functions, member variables",
        explanation: "Member functions define behavior (what objects can do) and member variables define state (what data they store)."
    },
    {
        id: 123,
        type: "true-false",
        topic: "fundamentals",
        difficulty: "medium",
        question: "Procedural programming and object-oriented programming can be used together in the same program.",
        options: ["True", "False"],
        correct: 0,
        explanation: "C++ supports both paradigms, and you can mix procedural functions with object-oriented classes."
    },
    {
        id: 124,
        type: "multiple-choice",
        topic: "fundamentals",
        difficulty: "easy",
        question: "What is the main difference between a class and an object?",
        options: ["No difference", "Class is a template, object is an instance", "Classes are faster", "Objects use less memory"],
        correct: 1,
        explanation: "A class is like a blueprint or template, while an object is a specific instance created from that template."
    },
    {
        id: 125,
        type: "multiple-choice",
        topic: "fundamentals",
        difficulty: "easy",
        question: "In the car analogy, if a class is like a car blueprint, what is an object?",
        options: ["The blueprint", "A specific manufactured car", "The factory", "The design process"],
        correct: 1,
        explanation: "An object is like a specific car manufactured from the blueprint (class)."
    },
    {
        id: 126,
        type: "multiple-choice",
        topic: "fundamentals",
        difficulty: "medium",
        question: "Which of these is NOT a benefit of object-oriented programming?",
        options: ["Data protection", "Code reusability", "Automatic performance optimization", "Real-world modeling"],
        correct: 2,
        explanation: "OOP doesn't automatically make programs faster - it provides better organization, encapsulation, and modeling."
    },
    {
        id: 127,
        type: "true-false",
        topic: "access",
        difficulty: "medium",
        question: "In a well-designed class, the public section should contain mainly member functions, not member variables.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Good encapsulation keeps data private and provides public functions as the interface."
    },
    {
        id: 128,
        type: "fill-gap",
        topic: "access",
        difficulty: "easy",
        question: "What access specifier should be used for data that needs to be hidden from external access?",
        answer: "private",
        explanation: "Private members are hidden from external access and can only be accessed by the class's own functions."
    },
    {
        id: 129,
        type: "true-false",
        topic: "access",
        difficulty: "medium",
        question: "Making all class members public violates the principle of encapsulation.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Encapsulation requires hiding internal details, so making everything public defeats this purpose."
    },
    {
        id: 130,
        type: "multiple-choice",
        topic: "access",
        difficulty: "hard",
        question: "Which statement about access specifiers is correct?",
        options: ["They only apply to variables", "They can be changed at runtime", "They affect all subsequent members until changed", "They are optional in all cases"],
        correct: 2,
        explanation: "Access specifiers apply to all following members until the next access specifier is encountered."
    },
    {
        id: 131,
        type: "fill-gap",
        topic: "objects",
        difficulty: "easy",
        question: "What is the syntax for creating an object called 'book' from a class called 'Library'?",
        answer: "Library book;",
        explanation: "Objects are declared using ClassName objectName; syntax."
    },
    {
        id: 132,
        type: "true-false",
        topic: "objects",
        difficulty: "medium",
        question: "When you create an object, memory is automatically allocated for its member variables.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Object creation includes memory allocation for all member variables of that object."
    },
    {
        id: 133,
        type: "multiple-choice",
        topic: "objects",
        difficulty: "easy",
        question: "How many objects can be created from a single class?",
        options: ["Only one", "Exactly two", "Up to 100", "Unlimited (within memory constraints)"],
        correct: 3,
        explanation: "You can create as many objects as needed from a single class, limited only by available memory."
    },
    {
        id: 134,
        type: "multiple-choice",
        topic: "objects",
        difficulty: "medium",
        question: "What happens to an object's member variables when another object of the same class is created?",
        options: ["They are shared", "They remain independent", "They are deleted", "They are copied"],
        correct: 1,
        explanation: "Each object maintains its own independent set of member variables."
    },
    {
        id: 135,
        type: "fill-gap",
        topic: "objects",
        difficulty: "easy",
        question: "Complete this object usage: `Circle c; c._____(5.0);` to call a function that sets the radius.",
        answer: "setRadius",
        explanation: "Member functions are called using objectName.functionName(parameters)."
    },
    {
        id: 136,
        type: "fill-gap",
        topic: "objects",
        difficulty: "medium",
        question: "What is the term for the process of creating objects from a class?",
        answer: "instantiation",
        explanation: "Instantiation is the formal term for creating object instances from a class template."
    },
    {
        id: 137,
        type: "multiple-choice",
        topic: "constructors",
        difficulty: "easy",
        question: "Which constructor is called when you write `Rectangle r;`?",
        options: ["Parameterized constructor", "Default constructor", "Copy constructor", "No constructor"],
        correct: 1,
        explanation: "Creating an object without arguments calls the default constructor (if available)."
    },
    {
        id: 138,
        type: "true-false",
        topic: "constructors",
        difficulty: "medium",
        question: "Every class must have at least one constructor.",
        options: ["True", "False"],
        correct: 1,
        explanation: "If you don't provide any constructor, C++ automatically generates a default constructor."
    },
    {
        id: 139,
        type: "multiple-choice",
        topic: "constructors",
        difficulty: "medium",
        question: "What is the primary difference between a default constructor and a parameterized constructor?",
        options: ["Speed of execution", "Number of parameters", "Return type", "Access level"],
        correct: 1,
        explanation: "Default constructors take no parameters, while parameterized constructors take one or more parameters."
    },
    {
        id: 140,
        type: "fill-gap",
        topic: "constructors",
        difficulty: "medium",
        question: "Fill in this parameterized constructor: `Rectangle(double w, double l) { _____ = w; _____ = l; }`",
        answer: "width, length",
        explanation: "The constructor should assign parameters to corresponding member variables."
    },
    {
        id: 141,
        type: "true-false",
        topic: "constructors",
        difficulty: "medium",
        question: "Constructors can be overloaded just like regular functions.",
        options: ["True", "False"],
        correct: 0,
        explanation: "You can have multiple constructors with different parameter lists (constructor overloading)."
    },
    {
        id: 142,
        type: "multiple-choice",
        topic: "constructors",
        difficulty: "medium",
        question: "What problem does a constructor solve?",
        options: ["Memory leaks", "Uninitialized member variables", "Access violations", "Performance issues"],
        correct: 1,
        explanation: "Constructors ensure objects start with valid, initialized data rather than garbage values."
    },
    {
        id: 143,
        type: "multiple-choice",
        topic: "functions",
        difficulty: "easy",
        question: "Which function type should NOT return a value?",
        options: ["Getter functions", "Setter functions", "Calculator functions", "Access functions"],
        correct: 1,
        explanation: "Setter functions typically don't need to return values; they modify object state."
    },
    {
        id: 144,
        type: "multiple-choice",
        topic: "functions",
        difficulty: "medium",
        question: "What should a setter function do if given invalid input?",
        options: ["Accept it anyway", "Crash the program", "Reject it or use a default value", "Convert it to valid input"],
        correct: 2,
        explanation: "Good setter functions validate input and handle invalid values appropriately."
    },
    {
        id: 145,
        type: "true-false",
        topic: "functions",
        difficulty: "hard",
        question: "Getter functions should typically be declared as const.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Const getter functions promise not to modify the object's state, which is good design."
    },
    {
        id: 146,
        type: "multiple-choice",
        topic: "scope",
        difficulty: "medium",
        question: "What is the main purpose of the scope resolution operator in C++?",
        options: ["Speed up execution", "Specify namespace or class ownership", "Access private members", "Create objects"],
        correct: 1,
        explanation: "The :: operator specifies which namespace or class a function or variable belongs to."
    },
    {
        id: 147,
        type: "fill-gap",
        topic: "scope",
        difficulty: "medium",
        question: "Fill in the implementation: `_____ Student::getGPA() { return gpa; }`",
        answer: "double",
        explanation: "The return type (double) comes before the class name and scope resolution operator."
    },
    {
        id: 148,
        type: "true-false",
        topic: "scope",
        difficulty: "hard",
        question: "The scope resolution operator is only used with classes.",
        options: ["True", "False"],
        correct: 1,
        explanation: "The :: operator is also used with namespaces (like std::cout) and global scope resolution."
    },
    {
        id: 149,
        type: "multiple-choice",
        topic: "analysis",
        difficulty: "medium",
        question: "Analyze this code - what will happen?\n```cpp\nclass Test {\npublic:\n    Test() { cout << \"Constructor called\\n\"; }\n};\nTest a, b, c;\n```",
        options: ["Prints \"Constructor called\" once", "Prints \"Constructor called\" three times", "Compilation error", "No output"],
        correct: 1,
        explanation: "Each object creation calls the constructor, so it prints three times (once for a, b, and c)."
    },
    {
        id: 150,
        type: "fill-gap",
        topic: "analysis",
        difficulty: "medium",
        question: "What's the result of this code?\n```cpp\nclass Value {\n    int num;\npublic:\n    Value(int n) { num = n; }\n    int getNum() { return num; }\n};\nValue v1(10);\nValue v2(20);\ncout << v1.getNum() + v2.getNum();\n```",
        answer: "30",
        explanation: "v1 has num=10, v2 has num=20, so getNum() returns 10+20=30."
    },
    {
        id: 151,
        type: "true-false",
        topic: "fundamentals",
        difficulty: "hard",
        question: "Object-oriented programming completely eliminates the need for global variables.",
        options: ["True", "False"],
        correct: 1,
        explanation: "While OOP reduces reliance on global variables, they may still be needed in some cases (like global constants)."
    },
    {
        id: 152,
        type: "multiple-choice",
        topic: "fundamentals",
        difficulty: "hard",
        question: "What is the main advantage of encapsulation in software maintenance?",
        options: ["Faster compilation", "Changes to internal implementation don't affect external code", "Uses less memory", "Automatically fixes bugs"],
        correct: 1,
        explanation: "Encapsulation allows internal changes without breaking code that uses the class, improving maintainability."
    }
];