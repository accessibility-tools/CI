# Accessibility (A11Y) CI

This Continuous Integration (CI) tool allows you to run automated accessibility tests against a specified website (based on a URL). It will run silently until crawling is complete unless you specify it to do another function on top of the crawling, for example, you can ask the crawler to write the results to a file on completion.

## Getting Started

### Prerequisites

To install and run the project locally, you will need the following on your computer:
- [NodeJS + Node Package Manager (NPM)](https://nodejs.org/). Node is used to run the script, and npm is used to install it.

You should also have *write* permission for the directory where you are going to install the tool.

### Installing

In a terminal, such as Terminal or iTerm on Mac, Gnome Terminal on Linux, or Powershell on Windows, type:

```bash
npm install @accessibility-tools/ci -g
```

This will install the Command Line Interface (CLI) globally in your system, and provide the `aci` command to run it.

For a list of available configuration options, you can run `aci --help`.

### Troubleshooting
There is a potential issue with the global package installation, which states `ERROR: Failed to download Chromium`.
To solve it, you need to try out following solutions:

1. probably your user lacks **write** permission in the directory where you are installing the tool.
    To grant you user this type of permission in your terminal type:
    ```bash
     sudo chown -R $USER <path_to_the_installation_directory>
    ```
    Now re-install the tool: 
    ```bash
     npm uninstall @accessibility-tools/ci -g
     npm install @accessibility-tools/ci -g
    ```
     
    **Note**: in most cases the path to the installation directory is `/usr/local/lib/node_modules`.
      
2. in case you have right permissions, but the installation still throws the error you need to install Chromium manually.
    For that first of all uninstall the current failed installation of the tool.  
    ```bash
     npm uninstall @accessibility-tools/ci -g
    ```
    Now disabled auto-downloading for Chromium via a global env variable: 
    ```bash
     export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
    ```
    Install the project itself and unset the global env variable to a default value:
    ```bash
     npm install @accessibility-tools/ci -g
     unset PUPPETEER_SKIP_CHROMIUM_DOWNLOAD
    ```
    Install Chromium manually
    ```bash
     cd <path_to_the_installation_directory>
     node node_modules/@accessibility-tools/ci/node_modules/puppeteer/install.js
    ```
3. worse case scenario: if nothing is working for you, you still can run it with `npx` like so:
    ```bash
     npx @accessibility-tools/ci -s <website_url>
    ```
    **Note**: however, in this case `npx` will download Chromium every time when you run this command and remove it after its execution.  

**Note**: please note that in different operation systems granting permissions, setting/unsetting glabal env commands can be different (example is presenting for OS X).

## Running the application

To run the application, in a terminal, type:

```bash
aci [options]
```

### List all valid configuration options (flags)

```bash
aci --help
```

Flag configurations can be found in [the parse-args helper script](./src/helpers/parse-args.js).

### Example usage

#### Scan a whole site

```bash
aci https://example.com
```

Or

```bash
aci --site https://example.com
```

#### Limit the amount of pages scanned

```bash
aci https://example.com --pageLimit 1
```

#### Scan a whole site and display results in the terminal

```bash
aci https://example.com --displayResults
```

#### Ignore fragment links and query params

Sometimes, sites use fragment links (`#section`) and query parameters (`?menu=open`) in the URL to indicate different states or positions in the document. You might want to ignore those if you get up too many duplicates and/or errors.

```bash
aci https://example.com --ignoreFragmentLinks --ignoreQueryParams
```

## Built With

- [NodeJS](https://nodejs.org/)
- [Git SCM](https://git-scm.com/)
- [All other dependencies](./package.json)

## Contributing

Before getting started with setting the project up locally, I assume the following are already installed on your computer:

- [NodeJS + Node Package Manager (NPM)](https://nodejs.org/)
- [Git Source Control Manager](https://git-scm.com/)

Please read [Contribution guidelines](./.github/contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

When you are ready to begin contributing, you can pull the repository by running:

```bash
git clone git@github.com:accessibility-tools/CI.git
```

Move into the directory and install the dependencies

```bash
cd CI
npm install
```

Now you should be good to go!

### Versioning

For this project we use [Semantic Versioning](http://semver.org/).

## License

This project is licensed under the MIT License - see the [Licence file](./LICENCE) for details.

## Direct and Indirect contributors

- [James Robb](https://jamesrobb.co.uk/)
- [Fotis Papadogeorgopoulos](https://fotis.xyz/)
- [James Stone](http://jamesstone.com/)
