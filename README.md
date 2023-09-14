# README Generator

This is a program that creates a professional README in an HTML file that is created entirely from Node.js. Answer the series of prompts, and your README will be generated automatically!

- I wanted to create a nice looking README generator that was very user-friendly
- I built this project to streamline the sometimes tedious task of creating a README for a project
- It saves tons of time for the developer!
- I learned how to use Node.js to create a series of files
    - Learning how to apply CSS properties was a particular challenge
    - Also learning how to apply JavaScript functions was a challenge


## Installation

It is required to install Node.js to your machine to run this program. Here is how to do it:<br> 
**For MacOS - using Bash**<br>
```curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"```<br>
**For MacOS - using Homebrew**<br>
```brew install node```<br>
<br>
**For Windows - using Scoop**<br>
```scoop install nodejs```<br>
*or*<br>
```scoop install nodejs-lts```
<br>
**For Linux - Alpine**<br>
```apk add nodejs npm```<br>
**Arch Linux**<br>
```pacman -S nodejs npm```<br>
<br>
Next, copy my application by going [here](https://github.com/dsatpm/readme_app).
- Click on the green 'Code' icon and copy the URL *or* SSH Key. Information on how to do that can be found [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
- Once cloned, open 'readme_app' in your IDE of choice (I use [VSCode](https://code.visualstudio.com/)).
- In the Terminal window, run:
`node inquirer.mjs`
- Follow the prompts and BOOM. README created.


## Usage

Here are some screenshots of how to navigate the program:
<br>
Start with this
```node inquirer.mjs```<br>
![demo](./assets/images/readme-demo1.png)
![demo](./assets/images/readme-demo2.png)
![demo](./assets/images/readme-demo3.png)

readme.html created!!!<br>
![demo](./assets/images/readme-demo4.png)

And the finished product!<br>
![demo](./assets/images/readme-demo5.png)

For a video of the live demo, please look [here](https://drive.google.com/file/d/1DgSio52Ks6uMFiYB8Tc56bQmKz0CbDDR/view?usp=drive_link)


## Credits

This project was made entirely with [Node.js](https://nodejs.org/en) and [Inquirer](https://www.npmjs.com/package/inquirer), and was created by [me](https://github.com/dsatpm).
Other sources used:
- [ChatGPT](https://chat.openai.com/) for finding bugs and inconsistencies in my code
- [Stack Overflow](https://stackoverflow.com/) for Node.js help
- [Google Fonts](https://fonts.google.com/) for some cool-looking font-families
- [Node.js](https://nodejs.org/en) for installation and troubleshooting
- [Inquirer](https://www.npmjs.com/package/inquirer) which provided the console prompt functionality


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Contributions

Please refer to the [Contributor Covenant](https://www.contributor-covenant.org/) for details on how to contribute



