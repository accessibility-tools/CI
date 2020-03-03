# A11Y CI

The CI tool allows you to run automated accessibility tests against a specified url. It will run silently until crawling is complete unless you specify it to do another function on top of the crawling, for example, you can ask the crawler to write the results to a file on completion.

## Getting Started

### Prerequisites

Before getting started with setting the project up locally, I assume the following are already installed on your computer:

- [NodeJS + Node Package Manager (NPM)](https://nodejs.org/)
- [Git Source Control Manager](https://git-scm.com/)

### Installing

Install the CLI by running:

```bash
npm install @accessibility-tools/ci -g
```

Once installed you can run the cli using the `aci` command. For a list of available configuration options, you can run `aci --help`.

## Running the application

To run the application, simply run:

```bash
aci [options]
```

### See all valid flags that you can pass

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
aci https://example.com -displayResults
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
