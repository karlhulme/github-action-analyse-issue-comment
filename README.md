# A Github Action for Analysing an Issue Comment

Plug this into a Github workflow that is triggered by a new issue comment being made.

The comment will be analysed for the presence of the following instructions:
* **--release:\<branch\>** Where branch is the name of a branch such as *master* or *lts_v2*.

## Inputs

* **author** - The username of the person that created the comment.
* **commentBody** - The contents of the comment that was created.

## Outputs

* **instruction** - A value of *release* or empty.
* **release_branch** - If the instruction is *release* this value will contain the name of the branch to be released.

## Example

```yml
name: Release

on:
  issue_comment:
    types: [created]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Analyse Comment
        uses: karlhulme/github-action-analyse-issue-comment@master
        with:
          author: ${{github.event.comment.user.login}}
          commentBody: ${{github.event.comment.body}}
```