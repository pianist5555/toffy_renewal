from django.core.management.base import BaseCommand, CommandError
from tfgame.models import Tfgame
import random

def randoms():
        random_numbers = []

        for i in range(3):
            random_number = random.randrange(1,58)
            if random.randrange(0,2) == 0:
                random_number = 0
            random_numbers.append(random_number)
            
        if sum(random_numbers) == 0:
            random_numbers[0] = random.randrange(1,58)

        return random_numbers

class Command(BaseCommand):
    def handle(self, *args, **options):
        for game in Tfgame.objects.all():
            number = randoms()
            game.tag1 = number[0]
            game.tag2 = number[1]
            game.tag3 = number[2]
            game.save()
