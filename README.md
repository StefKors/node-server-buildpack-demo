1. install [pack](https://buildpacks.io/docs/tools/pack/)
2. `pack config default-builder heroku/buildpacks:20`
3. `pack build node-server-buildpack-demo -t node-server-buildpack-demo:1.1.0`