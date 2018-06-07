from enumchoicefield import ChoiceEnum

class Sex(ChoiceEnum):
    male = 'MALE'
    female = 'FEMALE'

class SexDesiredMate(ChoiceEnum):
    male = 'MALE'
    female = 'FEMALE'
    no_matter = '상관없음'
