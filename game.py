import pygame
import sys

pygame.init()

#board
WIDTH, HEIGHT = 800,800
CUBE = WIDTH//8

#COLOURSSSSS
WHITE =(255,255,255)
BLACK = (0,0,0)
PURPLE = (64,4,148)
ACTIVE = (37,25,84)

#Game screen
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Chess")

#pieces
class Piece:
    def _init_(self,colour,type,image):
        self.colour = colour
        self.type = type
        self.image = pygame.image.load(image)
        self.image = pygame.transform.scale(self.image, (CUBE,CUBE))
        self.has_moved = False
        
        
#INITIALIZE
board = [[None for _ in range(8)] for _ in range(8)]
current_player = 'white'
selected_piece = None
selected_position = None

#PIECESS