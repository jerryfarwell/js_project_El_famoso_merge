Projets : El famoso merge
  
El famoso merge
Tu vas faire un bon vieux merge sort.

1. Introduction
Hier, tu as pu implémenter 4 algorithmes de tri (tri à bulle, tri par sélection, tri par insertion et tri rapide). Aujourd'hui, nous allons voir l'un des plus classiques.

Nous allons te demander de faire un tri fusion (merge sort). Ce dernier devra être fait en récursif (🤯). L'avantage est que c'est un problème classique enseigné dans toutes les écoles de code sérieuses qui se respectent, et dire que tu sais faire "un merge en récursif" te fera passer de "élève d'un bootcamp lambda" à "dév qui a fait une vraie école".

2. Le projet
C'est simple, implémente un merge sort. C'est quoi un merge ? Nous te laissons trouver sur le net ton explication préférée ;)

Je te conseille de tester ton algorithme avec plusieurs tableaux : un tableau déjà trié, un tableau très petit (3 nombres) et un tableau très grand (100 nombres). Tu devrais pouvoir constater des résultats cohérents avec les complexités dont on a parlé hier.

3. Rendu attendu
Un fichier JS que l'on peut exécuter en lui donnant en paramètre le nom d'un fichier contenant une liste de nombres. Il affichera dans la console le nom de l'algorithme utilisé, suivi du nombre de comparaisons effectuées, puis le tableau résultant de la sortie de ton algorithme !

$ cat list.txt
48 -2 6 12 0 -4

$ node monProgramme.js list.txt
Tri fusion: X comparaisons - [-4, -2, 0, 6, 12, 48]
Projets : Algorithmes, encore
  
Algorithmes, encore
Tu vas faire des algorithmes concrets en essayant d'optimiser des parcours de listes.

1. Introduction
Tu viens de passer deux jours à faire des algorithmes abstraits qui permettent de trier des listes. C'est cool, mais à quoi cela sert, étant donné que sort existe déjà dans les fonctions de base de tous les langages ? Eh bien, nous allons te demander de réaliser des algorithmes optimisés pour des besoins précis d'entreprises.

Dans ce projet, nous allons te proposer deux sujets, trois niveaux de difficulté pour chaque sujet. Les deux premiers niveaux de difficulté feront office de mise en bouche, puis le dernier te demandera de sortir papiers, crayons, et de réfléchir à la façon dont tu vas affronter le problème.

Ce sont des sujets que l'on peut retrouver typiquement en test technique dans les entreprises les plus prestigieuses de la Tech. Si tu les réussis, tu peux commencer à postuler à Google, Facebook, Netflix. La classe, non ?

2. Le projet
Ces exercices sont une sélection (adaptée à ton niveau) d'exercices choisis parmi les milliers que proposent Daily Coding Problem, un excellent site pour s'entraîner quotidiennement sur des exercices d'ingénierie informatique.

2.1. Sujet 1
Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.

Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.

2.2. Sujet 2
Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.

Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest. Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.

2.3. Exercices
Voici les 6 exercices.

2.3.1. Exercice 1
Résous le sujet 1 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

2.3.2. Exercice 2
Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

2.3.3. Exercice 3
Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

2.3.4. Exercice 4
Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

2.3.5. Exercice 5
Résous le sujet 1 en ne faisant qu'un seul passage sur ta liste.

Si tu réussis cet exercice, sache qu'il a été posé en entretien par Google. Tu peux postuler à Google. La classe, non ?

2.3.6. Exercice 6
Résous le sujet 2 en ne faisant qu'un seul passage sur ta liste.

Si tu réussis cet exercice, sache qu'il a été posé en entretien par Mailchimp. Tu peux postuler à Mailchimp. La classe, non ?