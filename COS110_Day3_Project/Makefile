# 🎤 Maître Gims Music Studio - Makefile
# "Makefiles are like Gims' beats - structured, powerful, and always on point!" - Studio Engineer

# Compiler settings
CXX = g++
CXXFLAGS = -Wall -Wextra -std=c++98 -g
SRCDIR = src
TESTDIR = tests
OBJDIR = obj

# Source files
SOURCES = $(SRCDIR)/artist.cpp $(SRCDIR)/main.cpp
OBJECTS = $(OBJDIR)/artist.o $(OBJDIR)/main.o
TARGET = artist_manager

# Test files
TEST_BASIC = $(TESTDIR)/test_basic
TEST_EDGE = $(TESTDIR)/test_edge
TEST_MEMORY = $(TESTDIR)/test_memory
TEST_IMPL = $(TESTDIR)/test_implementation

# Colors for output (because we're fancy like that)
RED = \033[0;31m
GREEN = \033[0;32m
YELLOW = \033[0;33m
BLUE = \033[0;34m
PURPLE = \033[0;35m
CYAN = \033[0;36m
NC = \033[0m # No Color

# Default target
.PHONY: all clean run check-basic check-edge check-memory check-full help
.DEFAULT_GOAL := help

# Create object directory
$(OBJDIR):
	@mkdir -p $(OBJDIR)

# Compile object files
$(OBJDIR)/%.o: $(SRCDIR)/%.cpp | $(OBJDIR)
	@echo "$(CYAN)🔨 Recording track $<...$(NC)"
	@$(CXX) $(CXXFLAGS) -c $< -o $@

# Build main program
$(TARGET): $(OBJECTS)
	@echo "$(GREEN)🔗 Mixing the final track...$(NC)"
	@$(CXX) $(CXXFLAGS) $(OBJECTS) -o $(TARGET)
	@echo "$(GREEN)✅ Studio session complete!$(NC)"

# Run the program
run: $(TARGET)
	@echo "$(PURPLE)🚀 Starting Maître Gims Music Studio...$(NC)"
	@echo "$(YELLOW)Maître Gims: 'Let's make some musical magic!'$(NC)"
	@./$(TARGET)

# Basic functionality tests (40% of grade)
check-basic: $(TARGET)
	@echo "$(BLUE)🧪 Running Basic Functionality Tests (40%)...$(NC)"
	@echo "$(YELLOW)Sound Engineer: 'Testing the basic tracks!'$(NC)"
	@$(CXX) $(CXXFLAGS) $(SRCDIR)/artist.cpp $(TESTDIR)/test_basic.cpp -o $(TEST_BASIC)
	@./$(TEST_BASIC) && echo "$(GREEN)✅ Basic tests passed!$(NC)" || echo "$(RED)❌ Basic tests failed!$(NC)"
	@rm -f $(TEST_BASIC)

# Edge case tests (30% of grade)
check-edge: $(TARGET)
	@echo "$(BLUE)🔍 Running Edge Case Tests (30%)...$(NC)"
	@echo "$(YELLOW)Maître Gims: 'Testing the complex harmonies!'$(NC)"
	@$(CXX) $(CXXFLAGS) $(SRCDIR)/artist.cpp $(TESTDIR)/test_edge.cpp -o $(TEST_EDGE)
	@./$(TEST_EDGE) && echo "$(GREEN)✅ Edge case tests passed!$(NC)" || echo "$(RED)❌ Edge case tests failed!$(NC)"
	@rm -f $(TEST_EDGE)

# Memory leak tests (20% of grade)
check-memory: $(TARGET)
	@echo "$(BLUE)🧠 Running Memory Leak Tests (20%)...$(NC)"
	@echo "$(YELLOW)Studio Manager: 'No memory leaks in our studio!'$(NC)"
	@if command -v valgrind >/dev/null 2>&1; then \
		echo "$(CYAN)Using Valgrind for memory analysis...$(NC)"; \
		valgrind --leak-check=full --show-leak-kinds=all --track-origins=yes --error-exitcode=1 ./$(TARGET) > /dev/null 2>&1 && \
		echo "$(GREEN)✅ No memory leaks detected!$(NC)" || \
		echo "$(RED)❌ Memory leaks found! Check your delete statements.$(NC)"; \
	else \
		echo "$(YELLOW)⚠️  Valgrind not available, compiling memory test instead...$(NC)"; \
		$(CXX) $(CXXFLAGS) $(SRCDIR)/artist.cpp $(TESTDIR)/test_memory.cpp -o $(TEST_MEMORY); \
		./$(TEST_MEMORY) && echo "$(GREEN)✅ Memory tests passed!$(NC)" || echo "$(RED)❌ Memory tests failed!$(NC)"; \
		rm -f $(TEST_MEMORY); \
	fi

# Implementation quality tests (10% of grade)
check-implementation:
	@echo "$(BLUE)📝 Running Implementation Quality Tests (10%)...$(NC)"
	@echo "$(YELLOW)Music Producer: 'Is your code as smooth as Gims' vocals?'$(NC)"
	@$(CXX) $(CXXFLAGS) $(SRCDIR)/artist.cpp $(TESTDIR)/test_implementation.cpp -o $(TEST_IMPL)
	@./$(TEST_IMPL) && echo "$(GREEN)✅ Implementation quality tests passed!$(NC)" || echo "$(RED)❌ Implementation needs improvement!$(NC)"
	@rm -f $(TEST_IMPL)

# Full test suite (100% of grade)
check-full: check-basic check-edge check-memory check-implementation
	@echo ""
	@echo "$(PURPLE)🎌 === FINAL RESULTS ===$(NC)"
	@echo "$(CYAN)All tests completed! Check individual results above.$(NC)"
	@echo "$(YELLOW)Maître Gims: 'That's a wrap! Time to celebrate with some music!'$(NC)"
	@echo "$(GREEN)Remember: Clean code creates the most beautiful harmonies!$(NC)"

# Development helpers
debug: CXXFLAGS += -DDEBUG
debug: $(TARGET)
	@echo "$(PURPLE)🐛 Debug build ready!$(NC)"

release: CXXFLAGS += -O2 -DNDEBUG
release: clean $(TARGET)
	@echo "$(GREEN)🚀 Release build ready!$(NC)"

# Clean up
clean:
	@echo "$(CYAN)🧹 Cleaning up the studio...$(NC)"
	@rm -rf $(OBJDIR) $(TARGET) $(TEST_BASIC) $(TEST_EDGE) $(TEST_MEMORY) $(TEST_IMPL)
	@echo "$(GREEN)✅ Cleanup complete!$(NC)"

# Help message
help:
	@echo "$(PURPLE)🎤 Maître Gims Music Studio - Build Commands$(NC)"
	@echo ""
	@echo "$(CYAN)Available commands:$(NC)"
	@echo "  $(GREEN)make run$(NC)              - Compile and run the program"
	@echo "  $(GREEN)make check-basic$(NC)      - Test basic functionality (40%)"
	@echo "  $(GREEN)make check-edge$(NC)       - Test edge cases (30%)"
	@echo "  $(GREEN)make check-memory$(NC)     - Check for memory leaks (20%)"
	@echo "  $(GREEN)make check-full$(NC)       - Run complete test suite (100%)"
	@echo "  $(GREEN)make debug$(NC)            - Build with debug information"
	@echo "  $(GREEN)make release$(NC)          - Build optimized release version"
	@echo "  $(GREEN)make clean$(NC)            - Clean up build files"
	@echo "  $(GREEN)make help$(NC)             - Show this help message"
	@echo ""
	@echo "$(YELLOW)Maître Gims says: 'Choose your beat and let's create magic!'$(NC)"
	@echo "$(BLUE)Studio Engineer says: 'Follow the music sheets carefully!'$(NC)"
	@echo "$(RED)Music Producer says: 'Make it perfect or we remix it!'$(NC)"

# File dependencies
$(OBJDIR)/artist.o: $(SRCDIR)/artist.cpp $(SRCDIR)/artist.h
$(OBJDIR)/main.o: $(SRCDIR)/main.cpp $(SRCDIR)/artist.h