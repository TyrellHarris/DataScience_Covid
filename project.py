from flask import Flask, request, render_template, make_response
app = Flask(__name__, static_url_path='', static_folder='')



@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)