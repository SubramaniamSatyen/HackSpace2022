# HackSpace2022

This repository contains the code for our HackSpace 2022 Project - ReactWithMe. Created by a team of four UCLA students our app allows users to add timestamped reactions when watching a video, then share those reactions to enable friends to view reactions in real time as they watch the same content. The app was created using firebase for persistent storage and React Native with Expo for our UI.

## Development

Most of the logic for the app is distributed in the following folders

* `components/` - contains resuable modules rendered by each screen
* `screens/` - contains individual screens with core functionality (user authentication, recording reactions, searching reactions, etc.)

## Running the App
Prerequisties to running the app locally are [Node.js](https://nodejs.org/en) and a [text editor](https://code.visualstudio.com/)

1. Confirm firebase connection details are properly set
2. Run the command `npx expo start` in the project directory
3. Specify the interface you'd like to use to view the app (we recommend using your browser for simplicity)
4. Test the app!

## Additional Resources
* React Native Expo [quickstart](https://docs.expo.dev/tutorial/create-your-first-app/)
* React Native [documentation](https://reactnative.dev/docs/environment-setup)
* Firestore + React Native Expo [guide](https://www.freecodecamp.org/news/react-native-firebase-tutorial/)
