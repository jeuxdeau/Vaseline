from enumchoicefield import ChoiceEnum

class Size(ChoiceEnum):
    small = 'SMALL'
    medium = 'MEDIUM'
    large = 'LARGE'

class SizeDesiredMate(ChoiceEnum):
    small = 'SMALL'
    medium = 'MEDIUM'
    large = 'LARGE'
    no_matter = '상관없음'
