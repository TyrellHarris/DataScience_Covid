from flask import Flask, request, render_template, make_response
app = Flask(__name__, static_url_path='', static_folder='')



@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/page2')
def page2():
    return app.send_static_file('page2.html')

@app.route('/page3')
def page3():
    return app.send_static_file('page3.html')

@app.route('/about')
def about():
    return app.send_static_file('about.html')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)