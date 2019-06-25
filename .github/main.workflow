workflow "Publish website" {
  on = "push"
  resolves = ["Deploy"]
}

action "install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["install"]
  args = "run build"
}

action "Deploy" {
  uses = "maxheld83/ghpages@v0.2.1"
  needs = ["build"]
  secrets = [
    "GH_PAT",
  ]
}
