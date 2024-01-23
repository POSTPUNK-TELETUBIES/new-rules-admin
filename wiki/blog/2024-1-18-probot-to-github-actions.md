---
slug: probot-to-github-actions
Title: Why was the switch from Probot to GitHub Actions made?
authors: jaenfigueroa
---

# Why was the switch from Probot to GitHub Actions made?

| Feature                                            |                                                      Probot                                                       |                                                                     Github actions                                                                     |
| -------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: |
| Architecture and Execution Environment             |                         Express server that needs to be running and working with webhooks                         |                              Runs within GitHub's infrastructure, has access to the repo and its secrets, and runs CI/CD                               |
| Resilience and Failure Management                  |                         Server death or response timeout results in loss of functionality                         |                                No dangerous timeouts (maximum 6 hours), part of CI/CD, repository-integrated, reusable                                 |
| Programming Language                               |                                                    Javascript                                                     |                                      Uses YAML with GitHub information and Bash scripts, may also involve Docker                                       |
| Developer Familiarity                              | Part of the stack that most frontend developers are familiar with, can be maintained locally, easy-to-program API | Requires knowledge of Bash scripting, GitHub Actions learning curve, not all frontend developers are familiar with GitHub and POSIX (excluding Docker) |
| Dependency Management and Local Testing Complexity |                            Bundling required (with node resolution) or using CommonJS                             |                                Just a very small text file, but local testing requires an emulator (Again, complexity)                                 |
| Scalability                                        |                                Limited scalability depending on the Express server                                |                                         High scalability, capable of handling multiple simultaneous workflows                                          |
| Support and Community                              |                              Active community, possibly smaller than GitHub Actions                               |                                    Strong GitHub Actions community with extensive resources and examples available                                     |
| Costs                                              |                            May require additional resources to keep the server running                            |                                          Integrated with GitHub, some free minutes, possible additional costs                                          |
| Complex Workflows                                  |                                        Limited compared to GitHub Actions                                         |                                              Specifically designed for complex and customizable workflows                                              |
