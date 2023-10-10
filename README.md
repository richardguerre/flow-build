# flow-build

Contains the latest build of the server and web app from the [richardguerre/flow](https://github.com/richardguerre/flow) repo. It is mostly used to deploy Flow to different environments without the overhead of cloning the source repo, install dependencies and build it.

> [!NOTE]
> Flow uses [Bun](https://bun.sh/docs/cli/run) to run the server. You can try running it with Node directly, but it is not recommended, and no support will be provided for it.
> 
> You can find the specific version of Bun used in the `.bunrc` file.

# Deploying and running Flow on Amazon Linux (Fedora)

To deploy and run Flow, you simply need to clone this repo. Then, run the following command to go into the flow-build directory:

```bash
cd flow-build
```

Then, run the following command to run Flow:

```bash
PORT=4000 DATABASE_URL=my_db_url ORIGIN=https://username.isflow.in PATH_TO_PLUGINS="/my/path/to/plugins" bun index.js
```

Where

- `PORT` is the port you want to run Flow on
- `DATABASE_URL` is the URL of the postgres database you want to use (with migrations already run)
- `ORIGIN` is the origin of the Flow instance you want to run. This is used for redirecting back to the Flow instance after authenticating with a third-party service.
- `PATH_TO_PLUGINS` is the path to the plugins directory you want to use. By default, this is `../../plugins` as that is the path during development of Flow (in [richardguerre/flow](https://github.com/richardguerre/flow)) but you can change it to whatever you want, like `./plugins` in the same directory as `index.js`.

## Using PM2 instead of Bun directly

Using PM2 is recommended over using Bun with the `--watch` flag as Bun's watch currently doesn't have a Ignore List feature, which means that the server would restart each time a plugin is installed or uninstalled, which is not desired and causes errors. Instead, you can wrap the command in a PM2 command like so:

For example:

```bash
pm2 start "PORT=4000 DATABASE_URL=my_db_url ORIGIN=https://username.isflow.in PATH_TO_PLUGINS=./my/path/to/plugins bun index.js"
```

You can learn more about PM2 [here](https://pm2.keymetrics.io/).

# Deploying and running Flow on other OSes

This repo currently contains the Prisma binary `libquery_engine-rhel-openssl-3.0.x.so.node` which is only compatible with Fedora 36 and later, which is what the Amazon Linux uses. If you want to run Flow on another OS, you will need to replace this binary with the one that is compatible with your OS. You can find out which binary you need to use by running the following command:

```bash
npx prisma -v
```

The "Current platform" displayed is [the `binaryTarget` Prisma recommends using for your OS](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#binarytargets-options). You can then download the binary by running `npx prisma init` and adding your binary in the `binaryTargets` option in the `schema.prisma` file. You can then run `npx prisma generate` to generate the binary and replace the one in this repo with it.

The `binaryTargets` option should look something like this:

```prisma
generator client {
  provider        = "prisma-client-js"
  binaryTargets   = ["your-current-platform-here"]
}
```