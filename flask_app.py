from flask import Flask, redirect, render_template, request, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["DEBUG"] = True

SQLALCHEMY_DATABASE_URI = "mysql+mysqlconnector://{username}:{password}@{hostname}/{databasename}".format(
    username="seanwayland",
    password="Moberheim1$",
    hostname="seanwayland.mysql.pythonanywhere-services.com",
    databasename="seanwayland$cardgame",
)
app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_POOL_RECYCLE"] = 299
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

class Comment(db.Model):

    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(4096))

class Game(db.Model):

    __tablename__ = "games"

    id = db.Column(db.Integer, primary_key=True)
    game_name = db.Column(db.String(4096))
    player_one_name = db.Column(db.String(4096))
    player_two_name = db.Column(db.String(4096))
    score = db.Column(db.Integer)


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        return render_template("main_page.html", comments=Comment.query.all())

    comment = Comment(content=request.form["contents"])
    db.session.add(comment)
    db.session.commit()
    return redirect(url_for('index'))

@app.route("/game", methods=["GET", "POST"])
def game():
    if request.method == "GET":
        return render_template("createGame.html")

    result = request.form
    gameName = result["gamename"]
    playerOne = result["playerone"]
    playerTwo = result["playertwo"]
    new_game = Game(game_name=request.form["gamename"], player_one_name = request.form["playerone"], player_two_name = request.form["playertwo"], score = 0)
    #new_game = Game('top game', 'sean', 'echo')
    db.session.add(new_game)
    db.session.commit()

    return redirect(url_for('game'))





