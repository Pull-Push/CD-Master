# all @app.routes go in here! 
from app import app
from flask import render_template, redirect, request, session, flash
from app.models.democlass import testClass


@app.route('/')
def index():
    return render_template('index.html')

