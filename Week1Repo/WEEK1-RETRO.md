DAY 1 — System Reverse Engineering + Node and Terminal Mastering
    Focus Areas
    Deep understanding of terminal commands, environment variables, and PATH configuration.
    Managing multiple Node.js versions using NVM.
    Performance benchmarking of Streams vs Buffers in Node.js.

    What I Did

        Explored system and shell configurations using commands like uname -a, echo $SHELL, which node, and npm root -g.
        Installed and used NVM to switch between Node LTS and latest versions.
        Built a script introspect.js that compares file reading using fs.readFile (Buffer) and fs.createReadStream (Stream).
        Measured execution time and memory usage for both methods.

    Key Learnings2

        Deeper understanding of Node runtime environment and file system performance.
        Learned how streams are more memory-efficient than buffers.
        Improved command-line proficiency and system inspection skills.

DAY 2 — Node CLI App, Concurrency, and Large Data Processing
    Focus Areas

        Building a CLI tool using Node.js.
        Applying concurrency with Promise.all and worker_threads.
        Performance benchmarking at different concurrency levels.

    What I Did

        Generated a large corpus text file with over 200,000 words.
        Built a CLI app wordstat.js to analyze text statistics with options for file, top words, minimum length, and unique filtering.
        Processed file chunks in parallel using asynchronous methods.
        Logged performance results for concurrency levels 1, 4, and 8.

    Key Learnings

        Learned asynchronous and parallel processing patterns in Node.js.
        Gained insights into Node’s event loop and worker threads.
        Improved ability to measure and compare performance of concurrent tasks.

DAY 3 — Git Mastery: Reset, Revert, Cherry-pick, Bisect, Stash
Focus Areas

        Recovering from Git mistakes.
        Commit discipline and debugging using Git bisect.
        What I Did
        Created a repository with more than 8 commits and intentionally introduced a bug.
        Used git bisect to find the faulty commit.
        Reverted the buggy commit using git revert instead of reset.
        Practiced stash workflows using git stash, git pull, and git stash apply.
        Simulated merge conflicts and resolved them while keeping both changes.

    Key Learnings
    Developed a stronger understanding of Git’s history rewriting and recovery tools
    Learned to maintain clean, traceable commit history.
    Improved collaboration and conflict resolution skills.

DAY 4 — HTTP and API Forensics (cURL and Headers)
    Focus Areas
    Understanding HTTP request and response cycles.
    Inspecting headers, caching, and pagination behavior.

    What I Did
    Performed DNS lookup and traceroute using nslookup and traceroute
    Used cURL to make API requests to dummyjson.com.
    Modified headers like User-Agent and Authorization to study response differences.
    Tested caching using ETag and If-None-Match headers.
    Built a simple Node HTTP server with:
    /echo to return request headers
    /slow?ms=3000 to simulate delayed responses
    /cache to send cache headers

    Key Learnings
    Learned how to inspect and manipulate HTTP headers.
    Understood client-server interactions and caching mechanisms.
    Became more confident in using cURL and debugging APIs.

DAY 5 — Automation and Mini-CI Pipeline
    Focus Areas
    Scripting, validation, and CI automation with pre-commit hooks.

    What I Did

    Created a validation script (validate.sh) to:
    Check for required folders and files.
    Validate JSON configuration.
    Append logs with timestamps.
    Configured ESLint and Prettier to enforce consistent code style.
    Set up Husky pre-commit hooks to block commits if validation or linting failed.
    Created build artifacts (build-<timestamp>.tgz) with SHA checksum.
    Scheduled automated script execution using cron.

    Key Learnings
    Learned to automate validation and code quality checks.
    Gained understanding of continuous integration workflows.
    Improved shell scripting and automation skills.

How I Learned

Conducted extensive research through official documentation for Node.js, Git, cURL, and NVM.
Collaborated with teammates to solve problems and exchange knowledge.
Used AI tools occasionally to debug code and understand complex topics.
Focused on experimenting and learning by doing rather than just reading.
Overall Learning Summary

Improved command-line fluency.
Strong understanding of Node.js runtime and asynchronous programming.
Practical experience with Git recovery and history management.
Better knowledge of HTTP protocols and request handling.
Learned the fundamentals of automation and continuous integration.

Areas to Improve
Writing more optimized concurrent algorithms.
Exploring advanced Git workflows like rebase and submodules.
Learning Docker and deployment pipelines to extend automation skills.

Conclusion
This 5-day learning experience helped me strengthen my technical foundation in system-level development, Node.js programming, and process automation.
It improved my problem-solving skills, confidence in using the terminal, and ability to collaborate effectively with my team.