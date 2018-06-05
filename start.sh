# Auto Server Run for Ubuntu User

cmds=('cd backend && python3 manage.py runserver', 'cd frontend && npm start')

for i in "${cmds[@]}"
do
  gnome-terminal -hold -e "i" & 
done
