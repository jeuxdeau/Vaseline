# Auto Server Run for Ubuntu User
# How To Use "bash start.sh"

cmds=('cd backend && python3 manage.py runserver', 'cd frontend && npm start')

for i in "${cmds[@]}"
do
  gnome-terminal -e "i" & 
done
