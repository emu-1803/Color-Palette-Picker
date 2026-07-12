🎨 Color Palette Picker

A simple React application that allows users to select a color from a palette and preview it instantly. This project was built to practice React fundamentals such as components, props, state, event handling, and rendering lists with .map().

## Features

- Display multiple color buttons.
- Click any color button to preview the selected color.
- Show the name of the selected color.
- Reset button clears the current selection.
- Displays a message when no color has been selected.
- Simple and responsive layout.

## How It Works

- The application stores a list of colors inside an array.
- The colors are displayed using the .map() method.
- Each color is passed to the ColorButton component.
- Clicking a button updates the selected color using React's useState hook.
- The selected color is passed as a prop to the ColorPreview component.
- The preview box changes to the selected color and displays its name.
- Clicking the Reset button clears the selected color and shows the default message.

## React Concepts Practiced

- Functional Components
- JSX
- Props
- useState
- Event Handling
- Rendering Lists with .map()

## Future Improvements

Add more colors.
Allow users to add custom colors.
Add Dark Mode.

## Screenshots

<img src="./src/color picker.png" alt="">
<img src="./src/color picker2.png" alt="">

## Author

Eman Mohammed

React Practice Project – Color Palette Picker

GitHub: https://github.com/emu-1803
