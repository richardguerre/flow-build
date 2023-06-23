# flow-build

Contains the latest build of the server and web app from the richardguerre/flow repo. It is mostly used to deploy Flow to different environments without having to clone the repo and build it.

# Deploying and running Flow on Amazon Linux (Fedora)

To deploy and run Flow, you simply need to clone this repo. Then, run the following command to go into the flow-build directory:

```bash
cd flow-build
```

Then, run the following command to run Flow:

```bash
PORT=4000 DATABASE_URL=my_db_url PATH_TO_PLUGINS="/my/path/to/plugins" node index.js
```

Where

- `PORT` is the port you want to run Flow on
- `DATABASE_URL` is the URL of the postgres database you want to use (with migrations already run)
- `PATH_TO_PLUGINS` is the path to the plugins directory you want to use. By default, this is `../../plugins` as that is the path during development of Flow (in richardguerre/flow) but you can change it to whatever you want, like `./plugins` in the same directory as `index.js`.

## Using PM2 instead of Node

Using PM2 is recommended over using Node to keep your Flow instance running. Then you can replace `node` with `pm2 start` to run Flow with PM2 instead of Node.

For example:

```bash
PORT=4000 DATABASE_URL=my_db_url PATH_TO_PLUGINS="/my/path/to/plugins" pm2 start index.js
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