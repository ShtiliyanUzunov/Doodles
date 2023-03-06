import math
import random

#https://en.wikipedia.org/wiki/Monte_Carlo_method

sample_size = 100000

distances = []

for i in range(0, sample_size):
    x = random.random()
    y = random.random()
    distance = math.sqrt(x * x + y * y)
    distances.append(distance >= 1)

distances_true = [t for t in distances if t]
distances_false = [t for t in distances if not t]
print(f'PI approximation: {len(distances_false) / len(distances) * 4}')