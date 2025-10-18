import pygame, sys, random, os, time, datetime
from english_words import web2_words  # Liste de mots anglais (bibliothèque "english_words")

# Initialisation de Pygame
pygame.init() # Initialise Pygame

#  Taille de la fenêtre
WIDTH, HEIGHT = 600, 600  # Largeur et hauteur de la fenêtre
win = pygame.display.set_mode((WIDTH, HEIGHT))  # Crée la fenêtre de jeu
pygame.display.set_caption("Hangman by Yukimisu")  # Titre de la fenêtre

# Couleurs utilisées
PURPLE = (175, 22, 254)  # Violet (pour le stickman)
BLACK = (0, 0, 0)        # Noir
RED = (255, 0, 0)        # Rouge
GREEN = (0, 180, 0)      # Vert
WHITE = (255, 255, 255)  # Blanc

# Chargement des polices
font = pygame.font.SysFont(None, 48)       # Police principale du jeu
small_font = pygame.font.SysFont(None, 32) # Petite police pour les infos

#  Chargement de l'image de fond
bg = pygame.image.load("Background/ken.jpg")         # Image de fond
bg = pygame.transform.scale(bg, (WIDTH, HEIGHT))     # Mise à l’échelle à la taille de la fenêtre

# Fichier de sauvegarde du leaderboard
LEADERBOARD_FILE = "leaderboard.txt" # nom du fichier de sauvegarde

# --- Création de listes de mots selon la difficulté ---
easy_words = [w.lower() for w in web2_words if len(w) <= 4]          # mots faciles
medium_words = [w.lower() for w in web2_words if 5 <= len(w) <= 7]   # mots moyens
hard_words = [w.lower() for w in web2_words if len(w) > 7]           # mots difficiles

# Fonction pour choisir un mot selon la difficulté
def get_word(difficulty): # renvoie un mot aléatoire selon la difficulté
    if difficulty == "easy": # mots faciles
        return random.choice(easy_words) # renvoie un mot aléatoire de la liste des mots faciles
    elif difficulty == "medium": # mots moyens
        return random.choice(medium_words) # renvoie un mot aléatoire de la liste des mots moyens
    else:# mots difficiles
        return random.choice(hard_words) # renvoie un mot aléatoire de la liste des mots difficiles

# Fonction qui dessine le pendu selon le nombre d’erreurs
def draw_stickman(errors): # dessine le stickman selon le nombre d’erreurs
    if errors > 0:# Tête du stickman
        pygame.draw.circle(win, PURPLE, (300, 150), 30, 5)  # Tête du stickman
    if errors > 1:# Corps du stickman
        pygame.draw.line(win, PURPLE, (300, 180), (300, 300), 5)  # Corps
    if errors > 2:
        pygame.draw.line(win, PURPLE, (300, 200), (240, 250), 5)  # Bras gauche
    if errors > 3:
        pygame.draw.line(win, PURPLE, (300, 200), (360, 250), 5)  # Bras droit
    if errors > 4:
        pygame.draw.line(win, PURPLE, (300, 300), (250, 380), 5)  # Jambe gauche
    if errors > 5:
        pygame.draw.line(win, PURPLE, (300, 300), (350, 380), 5)  # Jambe droite

# Fonction pour enregistrer un score dans le leaderboard
def update_leaderboard(name, score): # met à jour le fichier leaderboard.txt
    # Ouvre le fichier leaderboard.txt en mode ajout ("a")
    with open(LEADERBOARD_FILE, "a") as f: # ouvre le fichier en mode ajout
        # Écrit : nom, score, date du jour
        f.write(f"{name},{score},{datetime.date.today()}\n") # écrit le nom, le score et la date dans le fichier

# Fonction pour lire et trier le leaderboard
def get_leaderboard(): # lit le fichier leaderboard.txt et renvoie une liste triée des scores
    scores = []  # liste vide pour stocker les scores
    if os.path.exists(LEADERBOARD_FILE):  # si le fichier existe
        with open(LEADERBOARD_FILE, "r") as f: # ouvre le fichier en mode lecture
            for line in f: # pour chaque ligne du fichier
                parts = line.strip().split(",")  # sépare les éléments (nom, score, date)
                if len(parts) == 3 and parts[1].isdigit():  # vérifie le format
                    scores.append((parts[0], int(parts[1]), parts[2]))  # ajoute à la liste
    # Trie les scores du plus grand au plus petit et garde les 5 premiers
    return sorted(scores, key=lambda x: x[1], reverse=True)[:5] # trie et garde les 5 meilleurs scores

#  Menu principal
def main_menu(): # affiche le menu principal
    options = ["Start Game", "Leaderboard", "Quit"]  # choix du menu
    selected = 0  # option sélectionnée (0 = première)
    while True: # boucle infinie pour le menu
        win.blit(bg, (0, 0))  # affiche le fond
        title = font.render("HANGMAN", True, PURPLE) # titre du jeu
        win.blit(title, (220, 100))  # affiche le titre

        # Affiche les options du menu
        for i, opt in enumerate(options): # pour chaque option
            color = PURPLE if i == selected else BLACK  # met la couleur violette sur la sélection
            txt = font.render(opt, True, color) # rend le texte
            win.blit(txt, (210, 220 + i * 60))  # position des boutons
        pygame.display.update() # met à jour l’affichage

        # Gestion des événements clavier
        for event in pygame.event.get(): # boucle sur les événements
            if event.type == pygame.QUIT:  # fermeture de la fenêtre
                pygame.quit() # quitte Pygame
                sys.exit() # quitte le programme
            elif event.type == pygame.KEYDOWN: # si une touche est pressée
                if event.key == pygame.K_UP:     # flèche haut → remonte
                    selected = (selected - 1) % len(options) # change la sélection
                elif event.key == pygame.K_DOWN: # flèche bas → descend
                    selected = (selected + 1) % len(options) # change la sélection
                elif event.key == pygame.K_RETURN: # entrée → choix validé
                    return options[selected] # renvoie l’option choisie

# Menu de choix de difficulté
def select_difficulty(): # choix de la difficulté
    options = ["Easy", "Medium", "Hard"] # 3 niveaux de difficulté
    selected = 0 # option sélectionnée (0 = facile)
    while True: # boucle infinie pour le menu
        win.blit(bg, (0, 0)) # affiche le fond
        title = font.render("Select Difficulty", True, BLACK) # titre
        win.blit(title, (150, 120)) # affiche le titre

        # Affiche les 3 difficultés
        for i, opt in enumerate(options): # pour chaque option
            color = PURPLE if i == selected else BLACK # couleur violette sur la sélection
            txt = font.render(opt, True, color) # rend le texte
            win.blit(txt, (230, 200 + i * 60)) # position des boutons
        pygame.display.update() # met à jour l’affichage

        # Navigation clavier
        for event in pygame.event.get(): # boucle sur les événements
            if event.type == pygame.QUIT: # fermeture de la fenêtre
                pygame.quit() # quitte Pygame
                sys.exit() # quitte le programme
            elif event.type == pygame.KEYDOWN: # si une touche est pressée
                if event.key == pygame.K_UP: # flèche haut → remonte
                    selected = (selected - 1) % len(options) # change la sélection
                elif event.key == pygame.K_DOWN: # flèche bas → descend
                    selected = (selected + 1) % len(options) # change la sélection
                elif event.key == pygame.K_RETURN: # entrée → choix validé
                    return options[selected].lower()  # renvoie "easy", "medium" ou "hard"

# Affichage du leaderboard
def show_leaderboard(): # affiche le classement des scores
    scores = get_leaderboard()  # récupère les scores
    win.blit(bg, (0, 0)) # affiche le fond
    title = font.render("Leaderboard", True, BLACK) # titre
    win.blit(title, (200, 80)) # affiche le titre

    # Affiche les scores (top 5)
    for i, (name, score, date) in enumerate(scores): # pour chaque score
        line = small_font.render(f"{i+1}. {name} - {score} pts ({date})", True, BLACK) # rend le texte
        win.blit(line, (150, 160 + i * 40)) # position des scores

    # Message pour revenir au menu
    exit_text = small_font.render("Press SPACE to go back", True, RED) # message de retour
    win.blit(exit_text, (170, 500)) # position du message
    pygame.display.update() # met à jour l’affichage

    # Attente d’une touche pour revenir au menu
    waiting = True # boucle d’attente
    while waiting:# boucle d’attente
        for event in pygame.event.get(): # boucle sur les événements
            if event.type == pygame.QUIT or (event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE):# fermeture ou espace
                waiting = False # sort de la boucle

# Jeu principal
def play_game(difficulty): # lance une partie
    word = get_word(difficulty)  # mot aléatoire
    guessed = []  # lettres devinées
    wrong = []    # lettres fausses
    max_errors = 6  # nombre d’erreurs autorisées
    start_time = time.time()  # début du timer
    time_limit = 60  # durée = 1 minute
    name = "Player"  # nom par défaut
    score = 0        # score initial

    running = True # boucle de jeu
    while running: # boucle de jeu
        win.blit(bg, (0, 0)) # affiche le fond

        # Gestion du timer
        elapsed = int(time.time() - start_time) # temps écoulé
        remaining = max(0, time_limit - elapsed) # temps restant
        timer_text = small_font.render(f"Time left: {remaining}s", True, BLACK) # texte du timer
        win.blit(timer_text, (400, 30)) # affiche le timer

        # Affiche le mot partiellement découvert
        display_word = " ".join([c if c in guessed else "_" for c in word]) # mot avec _ pour les lettres non devinées
        text = font.render(display_word, True, BLACK) # rend le texte
        win.blit(text, (100, 500)) # affiche le mot

        # Affiche les lettres incorrectes
        wrong_text = small_font.render("Wrong: " + " ".join(wrong), True, RED) # lettres fausses
        win.blit(wrong_text, (150, 550)) # affiche les lettres fausses

        # Dessine le pendu selon le nombre d’erreurs
        draw_stickman(len(wrong))# dessine le stickman

        # Vérifie la victoire
        if all(c in guessed for c in word): # si toutes les lettres sont devinées
            win_text = font.render("You Win!", True, GREEN) # message de victoire
            win.blit(win_text, (220, 250)) # affiche le message
            score = max(0, (time_limit - elapsed) * 10 - len(wrong) * 5)  # calcul du score
            update_leaderboard(name, int(score))  # enregistre le score
            pygame.display.update() # met à jour l’affichage
            pygame.time.wait(3000) # attend 3 secondes
            return # quitte la partie

        #  Vérifie la défaite
        elif len(wrong) >= max_errors or remaining <= 0: # si trop d’erreurs ou temps écoulé
            lose_text = font.render(f"You Lose! ({word})", True, RED) # message de défaite
            win.blit(lose_text, (150, 250)) # affiche le message
            pygame.display.update() # met à jour l’affichage
            pygame.time.wait(3000) # attend 3 secondes
            return # quitte la partie

        pygame.display.update() # met à jour l’affichage

        # Gestion des événements clavier
        for event in pygame.event.get(): # boucle sur les événements
            if event.type == pygame.QUIT: # fermeture de la fenêtre
                pygame.quit() # quitte Pygame
                sys.exit() # quitte le programme
            elif event.type == pygame.KEYDOWN:# si une touche est pressée
                if event.unicode.isalpha():  # si c’est une lettre
                    letter = event.unicode.lower() # lettre en minuscule
                     # si la lettre n’a pas déjà été devinée
                    if letter not in guessed and letter not in wrong: # si la lettre n’a pas déjà été devinée
                        if letter in word: # lettre correcte
                            guessed.append(letter) # ajoute à la liste des bonnes lettres
                        else:# lettre incorrecte
                            wrong.append(letter) # ajoute à la liste des mauvaises lettres

# Boucle principale
while True: # boucle principale
    choice = main_menu()  # ouvre le menu principal

    if choice == "Start Game": # démarre une partie
        difficulty = select_difficulty()  # choix de la difficulté
        play_game(difficulty)    # lance le jeu
    elif choice == "Leaderboard":
        show_leaderboard()  # affiche le classement
    elif choice == "Quit":
        pygame.quit() # quitte Pygame
        sys.exit() # quitte le programme

