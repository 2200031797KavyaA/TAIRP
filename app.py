from flask import Flask, render_template, request
app = Flask(__name__)
movies = [
    {"title": "Movie 1", "genre": "Action"},
    {"title": "Movie 2", "genre": "Comedy"},
    {"title": "Movie 3", "genre": "Drama"},
    # Add more movies
]
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/search', methods=['POST'])
def search_movies():
    search_query = request.form.get('search_query')
    results = [movie for movie in movies if search_query.lower() in movie['genre'].lower()]
    return render_template('movie_results.html', results=results)
if __name__ == '__main__':
    app.run(debug=True)
