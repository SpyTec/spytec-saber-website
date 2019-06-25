workflow "Publish website" {
  on = "push"
  resolves = ["deploy"]
}

action "install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
  runs = "run"
}

action "deploy" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["install"]
  runs = "run"
  args = "deploy"
  secrets = ["GITHUB_TOKEN"]
}
