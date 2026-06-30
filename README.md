# To-Do List Application

A clean, minimalist task management application built with vanilla HTML, CSS, and JavaScript. Keep track of your daily tasks with persistent local storage.

## Features

- **Add Tasks**: Quickly add new tasks with a single click or Enter key
- **Mark Complete**: Click on any task to toggle completion status
- **Delete Tasks**: Remove individual tasks with a delete button
- **Persistent Storage**: All tasks are saved locally in your browser
- **Clean Dark Theme**: Modern dark interface with purple accent colors
- **Zero Dependencies**: Pure vanilla JavaScript - no frameworks or libraries

## How It Works

1. Type a task in the input field
2. Click **Add Task** or press Enter to add it to your list
3. Click on any task to toggle between **completed** (strikethrough) and active
4. Click the **red delete button** on any task to remove it permanently
5. All tasks are automatically saved to localStorage

## Project Structure

```

todo-list/
├── index.html          # Main HTML structure
├── Style.css           # Styling and dark theme
├── script.js           # Application logic
└── README.md           # Project documentation

```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with dark theme and animations
- **JavaScript (ES6)** - DOM manipulation, event handling, and local storage

## Installation & Usage

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No server, build process, or installation required
4. Start managing your tasks immediately!

## Customization

### Styling

The dark theme uses:
- Primary background: `#1e1e1e`
- Secondary background: `#333333`
- Accent color: `#5f3ae3` (purple)
- Delete button: `#d32f2f` (red)

Modify these colors in `Style.css` to match your brand.

### Data Persistence

Tasks are stored in `localStorage` under the key `"tasks"`. The data persists even after closing the browser.

### Adding Additional Features

You can extend the application by modifying the task object in `script.js`:

```javascript
const newtask = {
  id: Date.now(),
  text: tasktext,
  completed: false,
  priority: "medium",     // Add priority
  dueDate: "2024-12-31"   // Add due date
};
```

## API Reference

### Core Functions

| Function | Description |
|---|---|
| `rendertask(task)` | Renders a single task to the DOM |
| `savetask()` | Saves tasks array to localStorage |
| `addtaskbtn` click handler | Creates and adds new task |

### Event Listeners

| Element | Event | Handler |
|---|---|---|
| `#addtaskbtn` | `click` | Adds new task |
| `#addtask` | `keypress` | Adds task on Enter key |
| `<li>` | `click` | Toggles completion status |
| `<button>` inside `<li>` | `click` | Deletes task |

## Browser Support

Works on all modern browsers:

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 14+
- ✅ Edge 79+
- ✅ Opera 47+

## Keyboard Shortcuts

- Press **Enter** in the input field to quickly add a task
- Click on any task to mark it as complete
- Click the delete button (red) to remove a task

## Future Improvements

- Edit existing tasks
- Task priorities (high, medium, low)
- Due dates and reminders
- Categories or tags
- Search and filter functionality
- Drag and drop reordering
- Export/import tasks as JSON
- Undo delete functionality
- Task completion animations

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
1. Create a new branch (`git checkout -b feature/improvement`)
1. Make your changes
1. Commit your changes (`git commit -m 'Add feature'`)
1. Push to the branch (`git push origin feature/improvement`)
1. Open a Pull Request

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

- Built with ❤️ using vanilla JavaScript
- Inspired by the need for simple, privacy-first task management
- Dark theme designed for comfortable use in low-light conditions

**Stay organized and productive!** No sign-up, no cloud sync, just pure local task management.

