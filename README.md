# NoteCode

**NoteCode** is a simple code-sharing application that allows users to store, edit, and share coding snippets. This project demonstrates full-stack development skills using Flask for the backend and React for the frontend.

---

## Features

- **Code Editor**: Users can write and edit code snippets using the Monaco Editor.
- **Share Snippets**: Each snippet is assigned a unique URL for easy sharing.
- **Persistent Storage**: Snippets are saved in a database (SQLite).
- **Responsive Design**: The application is fully responsive and works across all devices.
- **Customization**: Users can select the language and theme for their code snippets.

---

## Project Structure

```
notecode/
├── backend/        # Flask backend
│   ├── app/        # Application logic
│   ├── requirements.txt  # Backend dependencies
│   └── app.py      # Entry point for Flask
├── frontend/       # React frontend
│   ├── src/        # React components
│   ├── public/     # Static files
│   └── package.json  # Frontend dependencies
├── .gitignore      # Files and folders to ignore in Git
└── README.md       # Project documentation
```

---

## Installation

### Prerequisites

- Python 3.x
- Node.js and npm

### Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask application:
   ```bash
   flask run
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## Usage

1. Open the frontend at `http://localhost:3000`.
2. Write or edit code snippets in the editor.
3. Click the "Share" button to generate a unique URL for your snippet.
4. Share the link or access it later to view or edit the snippet.

---

## Technologies Used

- **Backend**: Flask, SQLite
- **Frontend**: React, Monaco Editor
- **Styling**: CSS
- **Version Control**: Git

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

Developed by **Bryan Lazo**.  
Feel free to reach out on [LinkedIn](https://www.linkedin.com/in/bryanlazodev) or [GitHub](https://github.com/blazo-dev).
