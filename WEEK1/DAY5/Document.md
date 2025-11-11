1) create validate.sh in root folder
    A .sh file is a shell script, which is a text file containing a sequence of commands for a Unix-based operating system (like Linux or macOS). These commands are interpreted and executed by a shell, which is the operating system's command-line interface and interpreter. 
    a) write the necessary script in the file
    b) make it executable using chmod +x file_name command
    c) add some data into comfig.json file
    d) test the json file by running it

2) Add Eslint and prettier
    a) Install and config prettier using the npm command given in their documentations.
    b) create a index.js test file to check if prettier is working fine or = not.
    c) Install eslint and congig it using npm command given in the documentations.
    d) install he eslint prettier plugin that turns off the eslint rules that colied with prettier so that they both work fine together.
    e) run the lint-staged command to check to linting or farmatting issues and 

3) Install and setup husky 
    a) read the husky documentation and install and setup husky using the given commands.
    b) first intialise the git repo of your project other wise configuring the husky wont create the .husky folder where e=we need to write the pre commit
    c) write the pre-commit script in the pre-commit file.
    d) make the script executable by chmod +x file_name command
    e) exectue the file and test it

4) Create the build.sh file in the root folder 
    a) write the reqiered code to include log build the project and generate chhecksum.
    b) make the file executable and run it to test.

5) To create a cron job 
    a) create a Cron_job.sh file in the root folder.
    b) write the necessary script to run validate.sh and build.sh file
    c) using the commands add the cron job to linus crontab
        a) crontab -e (to edit the cron tab)
        b) write the command to add crom job
            * * * * * /path to the sh file/ path the to output logs file/
        c) add the command and exit and run it manualy to test it.
