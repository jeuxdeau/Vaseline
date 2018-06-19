from random import randint

options = {
        '서울': ['강남구','강동구','강북구','강서구','관악구','광진구','구로구','금천구','노원구','도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','성북구','송파구','양천구','영등포구','용산구','은평구','종로구','중구','중랑구'],
        '부산': ['강서구','금정구','남구','동구','동래구','부산진구','북구','사상구','사하구','서구','수영구','연제구','영도구','중구','해운대구','기장군'],
        '대구': ['남구','달서구','동구','북구','서구','수성구','중구','달성군'],
        '인천': ['계양구','남구','남동구','동구','부평구','서구','연수구','중구','강화군','옹진군'],
        '광주': ['광산구','남구','동구','북구','서구'],
        '대전': ['대덕구','동구','서구','유성구','중구'],
        '울산': ['남구','동구','북구','중구','울주군'],
        '세종': ['조치원읍', '금남면', '부강면', '소정면', '연기면', '연동면', '연서면', '장군면', '전동면', '전의면', '가람동', '한솔동', '새롬동', '나성동', '다정동', '새>롬동', '도담동', '어진동', '아름동', '종촌동', '고운동', '대평동', '반곡동', '보람동', '소담동'],
        '경기': ['고양시','과천시','광명시','광주시','구리시','군포시','김포시','남양주시','동두천시','부천시','성남시','수원시','시흥시','안산시','안성시','안양시','>양주시','여주시','오산시','용인시','의왕시','의정부시','이천시','파주시','평택시','포천시','하남시','화성시','가평군','양평군','연천군'],
        '강원': ['강릉시','동해시','삼척시','속초시','원주시','춘천시','태백시','고성군','양구군','양양군','영월군','인제군','정선군','철원군','평창군','홍천군','화천>군','횡성군'],
        '충북': ['제천시','청주시','충주시','괴산군','단양군','보은군','영동군','옥천군','음성군','증평군','진천군'],
        '충남': ['계룡시','공주시','논산시','당진시','보령시','서산시','아산시','천안시','금산군','부여군','서천군','예산군','청양군','태안군','홍성군'],
        '전북': ['전주시','군산시','김제시','남원시','익산시','정읍시','고창군','무주군','부안군','순창군','완주군','임실군','장수군','진안군'],
        '전남': ['광양시','나주시','목포시','순천시','여수시','강진군','고흥군','곡성군','구례군','담양군','무안군','보성군','신안군','영광군','영암군','완도군','장성군','장흥군','진도군','함평군','해남군','화순군'],
        '경북': ['경산시','경주시','구미시','김천시','문경시','상주시','안동시','영주시','영천시','포항시','고령군','군위군','봉화군','성주군','예천군','영덕군','영양군','울릉군','울진군','의성군','청도군','청송군','칠곡군'],
        '경남': ['거제시','김해시','밀양시','사천시','양산시','진주시','창원시','통영시','거창군','고성군','남해군','산청군','의령군','창녕군','하동군','함안군','함양군','합천군'],
        '제주': ['제주시','서귀포시'],
        '해외': ['해외']
}


def create_users(N):
    ls = []
    for i in range(1, N):
        ls.append(("user{0}".format(i+1), "user{0}passwd".format(i+1)))
    return ls

def create_personality(N):
    ls = []
    for i in range(1, N):
        ls.append((randint(1,5), randint(1,5), randint(1,5), randint(1,5), randint(1,5), randint(1,5), "etc{0}".format(i)))
    return ls

def create_personality_desired_mate(N):
    ls = []
    for i in range(1, N):
        ls.append((randint(0,5), randint(0,5), randint(0,5), randint(0,5), randint(0,5), randint(0,5), "etc{0}".format(i)))
    return ls

def create_mating_season(N):
    ls = []
    for i in range(1, N):
        ls.append(("2018-05-2{0}".format(randint(1,9)), "2018-06-0{0}".format(randint(1,9))))
    return ls

def create_companions(N):
    ls = []
    for i in range(1, N):
        ls.append((i, "companion{0}".format(i), randint(1995, 2018)))
    return ls

def create_profiles(N):
    ls = []
    list_name = []
    for u in options:
        list_name.append(u)
    print(list_name)
    for i in range(1, N):
        j = randint(0, len(list_name)-1)
        k = randint(0, len(options[list_name[j]])-1)
        ls.append((i, "nickname{0}".format(i), list_name[j], options[list_name[j]][k], randint(10,30), "email".format(i)))
    return ls

def create_likes(N):
    ls = []
    for i in range(1, N):
        ls.append((i, randint(1, N-1)))
    return ls

def create_proposals(N):
    ls = []
    for i in range(1, N):
        ls.append((i, randint(1, N-1), False))
    return ls

def create_messages(N):
    ls = []
    for i in range(1, N):
        ls.append((i, randint(1, N-1), "message{0}".format(i), "2018-05-12T08:52:3{0}Z".format(randint(1,9))))
    return ls
