Step 1:
    Clone the repo using the command: git clone <repoLink> cloned_repo_name
    ![alt text](image.png)

Step 2:
    create changes in any one clone 
    ![alt text](image-1.png)
    and commit them and push them 

Step 3: 
    create conflicting edits in other clone commit them 
    when we try to push it will show a message as shown in the image
    ![alt text](image-2.png)

    then use command git pull to pull the changes made by other clone 
    use command: git pull origin master 
    you will see conflicts like 
![alt text](image-3.png)        
    resolve the conflicts and all chnages will be pushed and the graph will look like.
    ![alt text](image-4.png)
