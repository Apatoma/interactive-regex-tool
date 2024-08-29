from flask import request, jsonify
from app import app
from app.regex_analyzer import analyze_regex

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    pattern = data.get('pattern', '')
    test_string = data.get('test_string', '')
    result = analyze_regex(pattern, test_string)
    return jsonify(result)
