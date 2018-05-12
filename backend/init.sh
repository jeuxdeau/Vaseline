rm -rf db.sqlite3
rm -r companions/migrations
python3 manage.py makemigrations companions
python3 manage.py migrate
python3 manage.py shell < inittest.py
