# A Github Action for Analysing an Issue Comment

Plug this into a Github workflow that is triggered by a new issue comment being made.

The comment will be analysed for the presence of the following instructions:
* **--release:\<branch\>** Where branch is the name of a branch such as *master* or *lts_v2*.

## Inputs

* **authorisedLoginsCsv** - A comma-separated list of logins that are authorised to trigger actions from issue comments.
* **commentJson** - The comment object raised with the event expressed as a JSON string.

## Outputs

* **instruction** - A value of *release* or empty.
* **analysisFailureReason** - If the analysis was not successful then this value will contain the reason.
* **branchName** - If the instruction is *release* this value will contain the name of the branch to be released.

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
          authorisedLoginsCsv: personA,personB
          commentJson: ${{toJson(github.event.comment)}}
```

## Development

You must run `npm run build` to create the distribution file.  Do this before committing changes.
