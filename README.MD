# 🧩 Interactive Regex Testing and Visualization Tool

Welcome to the **Interactive Regex Testing and Visualization Tool**! This web application helps developers test and understand regular expressions (regex). It provides a real-time interactive editor where users can input regex patterns and test strings to see matches and get detailed explanations of regex components.

## ✨ Features

- 🔍 **Real-Time Regex Testing**: Allows users to input regex patterns and test strings to instantly see matches and their details.
- 📊 **Match Visualization**: Displays matched substrings with information on their position and captured groups.
- 📚 **Regex Explanation**: Provides a basic explanation of common regex components to help users understand their functionality.
- 🖥️ **User-Friendly Interface**: Simple and intuitive design to facilitate ease of use.

## 🛠️ Technology Stack

**Backend**:
- 🐍 **Python**
- 🔥 **Flask** (for handling API requests)
- 🌐 **Flask-Cors** (for handling Cross-Origin Resource Sharing)

**Frontend**:
- ⚛️ **React.js**
- 🎨 **CSS** (for styling)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Python 3.x**
- **Node.js & npm**

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Apatoma/interactive-regex-tool.git
    cd interactive-regex-tool
    ```

2. **Set up the backend**:
    ```bash
    cd backend
    pip install -r requirements.txt
    python run.py
    ```

3. **Set up the frontend**:
    ```bash
    cd frontend
    npm install
    npm start
    ```

4. **Access the application**:
    - Open your browser and navigate to `http://localhost:3000` to interact with the application.

## 📝 Usage

- **Input Regex Pattern and Test String**: Use the provided input fields to enter your regex pattern and the string you want to test.
- **Analyze Regex**: Click on the "Analyze" button to see the matches and explanations.
- **View Matches**: The matches section will display all the matched substrings, their start and end positions, and any captured groups.
- **Understand Regex Components**: The explanation section provides insights into common regex components present in your pattern.

## 🛤️ Future Enhancements

- 🔬 **Advanced Regex Explanations**: Extend the explanation functionality to cover more complex regex components and patterns.
- 🎨 **Syntax Highlighting**: Implement syntax highlighting in the regex editor to improve readability and ease of use.
- 📚 **Pattern Library**: Allow users to save and categorize their regex patterns for future reference.
- ⚙️ **Customizable Testing**: Add options for testing against multiple strings or patterns simultaneously.

## 🧑‍💻 Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes or improvements.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Made with ❤️ by [Alejandro](https://github.com/Apatoma)
