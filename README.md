# A Github Action for Analysing an Issue Comment

Plug this into a Github workflow that is triggered by a new issue comment being made.

The comment will be analysed for the presence of the following instructions:
* **--release:\<branch\>** Where branch is the name of a branch such as *master* or *lts_v2*.

The input to the steps are:
* **author** - The username of the person that created the comment.
* **commentBody** - The contents of the comment that was created.

The output of the step is as follows:
