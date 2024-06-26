<p align="center">
	<img src="./res/stylichess-logo.svg" width=150>
	<h1 align="center">StyLichess</h1>
</p>
<p align="center">
	<a href="https://stylichess.github.io/">
		<img src="https://img.shields.io/badge/Official Website-gray?logo=lichess&style=for-the-badge">
	</a>
	<a href="https://github.com/Stylichess/stylichess/releases/latest">
		<img src="https://img.shields.io/github/v/release/stylichess/stylichess?style=for-the-badge">
	</a>
</p>

[Lichess](https://lichess.org/) is an amazing platform that has more than just the ability to play chess, and all for free. Unfortunately I felt like it didn't show this well with it's current design, nor did it show that it was a site that resides in 2023. Now with Prettier Lichess, Lichess becomes more readable, more discoverable, and prettier (plus customizable colors)!

## Code and license

Here is the source code for both the chrome and firefox extension! It's simple but it's mine. Feel free to download, fork, use, and mess with it all you want. No attribution or anything required.

The extension is not published in the Apple Store, but it is possible to get it to work in Safari by creating a build with XCode. More information about that can be found [here](https://github.com/Stylichess/stylichess/issues/153).

## General Usage

To install the extension, go to the official website for [Releases](https://github.com/Stylichess/stylichess/releases), download zip, unpack it and load into borwser. Set Lichess to dark background to have the best compatibility with stylichess. \
With the pop-up you can then customise the colours and choose themes. Have fun!

## Community Themes

Check out the community driven theme library [here](https://github.com/algertc/stylichess-themes).

## Development workflow

### Setup

Execute this command for the setup to get all packages:

```
npm install
```

### Build

During the build, the output files from webpack are placed in the `.dist/` folder. There are two ways to start this process. For a single build, run:

```
npm run build
```

To rebuild automatically when changes are made, run:

```
npm run watch
```

That's pretty much it :smiley:

For a more detailed description of how the extension works, have a look [here](https://github.com/Stylichess/stylichess/blob/master/.github/CONTRIBUTING.md#structure-of-the-extension).

## Questions, bugs and feature requests

If you have any questions, feature requests or want to report bugs, feel free to [create an issue](https://github.com/Stylichess/stylichess/issues/new).

## How to contribute

For more information, see the [contribution page](https://github.com/Stylichess/stylichess/blob/master/.github/CONTRIBUTING.md).

## Contributors

Thanks to everyone who contributed to this project! stylichess exists thanks to you.
