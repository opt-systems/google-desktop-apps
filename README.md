# GOOGLE DESKTOP APPS 

### Cross platform Electron wrapper for missing Google Desktop Apps

1. Currently supported apps:

- Google Keep
- Google Tasks

2. How to use:

- Clone this repo. e.g. 
```
  git clone https://github.com/opt-systems/google-desktop-apps.git
```
- install node deps e.g.
```
  yarn install
```
- build the apps:
```
  yarn build
```

You can also build specific apps using scripts from `package.json` file e.g.
```
  yarn build:tasks-dark
```

3. Which platforms are supported?

- Google Apps are supported on all Electron supported platforms (Windows, MacOS, Linux). 
- To build for specific platform, build on that platform :).

4. Dark mode:

Current apps support dark mode:
- Tasks: use Tasks Dark application
- Keep: After login set dark mode in settings (Settings -> Enable dark theme)

4. DISCLAIMER: These Apps are not official google desktop apps, they are just google's web apps wrapped by Electron.
