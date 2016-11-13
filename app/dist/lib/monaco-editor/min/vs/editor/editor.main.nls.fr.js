/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.6.0(a43fe71b7f6e022d0d1bb2d0ef8fd4e31aa3f431)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.fr",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (s'est reproduit)"],"vs/base/browser/ui/findinput/findInput":["Utiliser une expression régulière","Mot entier","Respecter la casse","entrée"],"vs/base/browser/ui/inputbox/inputBox":["Erreur : {0}","Avertissement : {0}","Information : {0}"],"vs/base/common/errors":["{0}. Code d'erreur : {1}","Permission refusée (HTTP {0})","Permission refusée","{0} (HTTP {1} : {2})","{0} (HTTP {1})","Erreur de connexion inconnue ({0})","Une erreur de connexion inconnue s'est produite. Soit vous n'êtes plus connecté à Internet, soit le serveur auquel vous êtes connecté est hors connexion.","{0} : {1}","Une erreur inconnue s’est produite. Veuillez consulter le journal pour plus de détails.","Une erreur système s'est produite ({0})","Une erreur inconnue s’est produite. Veuillez consulter le journal pour plus de détails.","{0} ({1} erreurs au total)","Une erreur inconnue s’est produite. Veuillez consulter le journal pour plus de détails.","Non implémenté","Argument incorrect : {0}","Argument incorrect","État incorrect : {0}","État incorrect","Échec du chargement d'un fichier requis. Soit vous n'êtes plus connecté à Internet, soit le serveur auquel vous êtes connecté est hors connexion. Actualisez le navigateur pour réessayer.","Échec du chargement d'un fichier obligatoire. Redémarrez l'application pour réessayer. Détails : {0}"],"vs/base/common/keyCodes":["Windows","Contrôle","Maj","Alt","Commande","Windows","Ctrl","Maj","Alt","Commande","Windows"],"vs/base/common/severity":["Erreur","Avertissement","Informations"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}, sélecteur","sélecteur"],"vs/base/parts/quickopen/browser/quickOpenWidget":["Sélecteur rapide. Tapez pour réduire les résultats.","Sélecteur rapide"],"vs/base/parts/tree/browser/treeDefaults":["Réduire"],"vs/editor/common/config/commonEditorConfig":["Éditeur","Contrôle la famille de polices.","Contrôle l'épaisseur de police.","Contrôle la taille de police.","Contrôle la hauteur de ligne. Utilisez 0 pour calculer lineHeight à partir de fontSize.","Contrôle la visibilité des numéros de ligne","Contrôle la visibilité de la marge des glyphes","Colonnes où afficher les règles verticales","Caractères utilisés comme séparateurs de mots durant la navigation ou les opérations basées sur les mots","Nombre d'espaces correspondant à une tabulation. Ce paramètre est remplacé en fonction du contenu du fichier quand 'editor.detectIndentation' est activé.","'number' attendu. Notez que la valeur \"auto\" a été remplacée par le paramètre 'editor.detectIndentation'.","Des espaces sont insérés quand vous appuyez sur la touche Tab. Ce paramètre est remplacé en fonction du contenu du fichier quand 'editor.detectIndentation' est activé.","'boolean' attendu. Notez que la valeur \"auto\" a été remplacée par le paramètre 'editor.detectIndentation'.","Quand vous ouvrez un fichier, 'editor.tabSize' et 'editor.insertSpaces' sont détectés en fonction du contenu du fichier.","Contrôle si les sélections ont des angles arrondis","Contrôle si l'éditeur défile au-delà de la dernière ligne","Contrôle le nombre de caractères après lesquels l'éditeur effectue un retour automatique à la ligne suivante. Si vous affectez la valeur 0, le retour automatique à la ligne s'effectue en fonction de la largeur de la fenêtre d'affichage (retour automatique à la ligne). Si vous affectez la valeur -1, l'éditeur n'effectue jamais de retour automatique à la ligne.","Controls if lines should wrap. The lines will wrap at min(editor.wrappingColumn, viewportWidthInColumns).","Contrôle le retrait des lignes renvoyées. La valeur peut être 'none', 'same' ou 'indent'.","Multiplicateur à utiliser pour le 'deltaX' et le 'deltaY' des événements de défilement de la roulette de la souris","Contrôle si les suggestions rapides doivent s'afficher ou non pendant la saisie","Contrôle le délai en ms au bout duquel les suggestions rapides s'affichent","Active les indicateurs de paramètres","Contrôle si l'éditeur doit automatiquement fermer les crochets après les avoir ouverts","Contrôle si l'éditeur doit automatiquement mettre en forme la ligne après la saisie","Contrôle si les suggestions doivent s'afficher automatiquement durant la saisie de caractères de déclenchement","Contrôle si les suggestions peuvent être acceptées avec Entrée (en plus de Tab). Cela permet d'éviter toute ambiguïté entre l'insertion de nouvelles lignes et l'acceptation de suggestions.","Contrôle si les extraits de code s'affichent en même temps que d'autres suggestions, ainsi que leur mode de tri.","Activez les suggestions basées sur les mots.","Insérez les extraits de code quand leurs préfixes correspondent. Fonctionne mieux quand la fonctionnalité 'quickSuggestions' n'est pas activée.","Détermine si l'éditeur doit surligner les correspondances similaires à la sélection","Contrôle le nombre d'ornements pouvant s'afficher à la même position dans la règle d'aperçu","Contrôle le style d'animation du curseur. Valeurs possibles : 'blink', 'smooth', 'phase', 'expand' et 'solid'","Agrandir ou réduire la police de l'éditeur quand l'utilisateur fait tourner la roulette de la souris tout en maintenant la touche Ctrl enfoncée","Contrôle le style du curseur. Valeurs acceptées : 'block', 'line' et 'underline'","Active les ligatures de police","Contrôle si le curseur doit être masqué dans la règle d'aperçu.","Contrôle si l'éditeur doit restituer des espaces","Contrôle si l'éditeur doit afficher les caractères de contrôle","Contrôle si l'éditeur doit afficher les repères de mise en retrait","Controls whether the editor should render the current line highlight","Contrôle si l'éditeur affiche les indicateurs CodeLens","Contrôle si le pliage de code est activé dans l'éditeur","L'insertion et la suppression d'un espace blanc suit les taquets de tabulation","Supprimer l'espace blanc de fin inséré automatiquement","Garder les éditeurs d'aperçu ouverts même si l'utilisateur double-clique sur son contenu ou appuie sur la touche Échap.","Contrôle si l'éditeur de différences affiche les différences en mode côte à côte ou inline","Contrôle si l'éditeur de différences affiche les changements liés aux espaces blancs de début ou de fin comme des différences","Contrôle si le presse-papiers primaire Linux doit être pris en charge."],"vs/editor/common/config/defaultConfig":["Contenu d'éditeur"],"vs/editor/common/controller/cursor":["Exception inattendue pendant l'exécution de la commande."],"vs/editor/common/model/textModelWithTokens":["Le mode a échoué lors de la création de jetons de l’entrée."],"vs/editor/common/modes/modesRegistry":["Texte brut"],"vs/editor/common/services/bulkEdit":["Ces fichiers ont changé pendant ce temps : {0}"],"vs/editor/common/services/modeServiceImpl":["Ajoute des déclarations de langage.","ID du langage.","Alias de nom du langage.","Extensions de fichier associées au langage.","Noms de fichiers associés au langage.","Modèles Glob de noms de fichiers associés au langage.","Types MIME associés au langue.","Expression régulière correspondant à la première ligne d'un fichier du langage.","Chemin relatif d'un fichier contenant les options de configuration du langage.","Valeur vide pour 'contributes.{0}'","la propriété '{0}' est obligatoire et doit être de type 'string'","la propriété '{0}' peut être omise et doit être de type 'string[]'","la propriété '{0}' peut être omise et doit être de type 'string[]'","la propriété '{0}' peut être omise et doit être de type 'string'","la propriété '{0}' peut être omise et doit être de type 'string'","la propriété '{0}' peut être omise et doit être de type 'string[]'","la propriété '{0}' peut être omise et doit être de type 'string[]'","'contributes.{0}' non valide. Tableau attendu."],"vs/editor/common/services/modelServiceImpl":["[{0}] {1}","Mettez à jour vos paramètres : 'editor.detectIndentation' remplace 'editor.tabSize': \"auto\" ou 'editor.insertSpaces': \"auto\""],"vs/editor/contrib/carretOperations/common/carretOperations":["Déplacer le point d'insertion vers la gauche","Déplacer le point d'insertion vers la droite"],"vs/editor/contrib/clipboard/browser/clipboard":["Couper","Copier","Coller"],"vs/editor/contrib/comment/common/comment":["Activer/désactiver le commentaire de ligne","Ajouter le commentaire de ligne","Supprimer le commentaire de ligne","Activer/désactiver le commentaire de bloc"],"vs/editor/contrib/contextmenu/browser/contextmenu":["Afficher le menu contextuel de l'éditeur"],"vs/editor/contrib/find/browser/findWidget":["Rechercher","Rechercher","Correspondance précédente","Correspondance suivante","Rechercher dans la sélection","Fermer","Remplacer","Remplacer","Remplacer","Remplacer tout","Changer le mode de remplacement","Seuls les 999 premiers résultats sont mis en surbrillance. Cependant, toutes les opérations de recherche sont appliquées à l'ensemble du texte.","{0} sur {1}","Aucun résultat"],"vs/editor/contrib/find/common/findController":["Rechercher","Rechercher suivant","Rechercher précédent","Sélection suivante","Sélection précédente","Remplacer","Ajouter la sélection à la correspondance de recherche suivante","Ajouter la sélection à la correspondance de recherche précédente","Déplacer la dernière sélection vers la correspondance de recherche suivante","Déplacer la dernière sélection à la correspondance de recherche précédente","Sélectionner toutes les occurrences des correspondances de la recherche","Modifier toutes les occurrences"],"vs/editor/contrib/folding/browser/folding":["Déplier","Déplier de manière récursive","Plier","Plier de manière récursive","Plier tout","Déplier tout","Niveau de pli 1","Niveau de pli 2","Niveau de pli 3","Niveau de pli 4","Niveau de pli 5"],"vs/editor/contrib/format/common/formatActions":["Code de format"],"vs/editor/contrib/goToDeclaration/browser/goToDeclaration":[" – {0} définitions","Atteindre la définition","Ouvrir la définition sur le côté","Apercu de définition","Cliquez pour afficher les {0} définitions trouvées."],"vs/editor/contrib/gotoError/browser/gotoError":["Corrections suggérées : ","Correction suggérée : ","({0}/{1}) [{2}]","({0}/{1})","Accéder à l'erreur ou l'avertissement suivant","Accéder à l'erreur ou l'avertissement précédent"],"vs/editor/contrib/hover/browser/hover":["Afficher par pointage"],"vs/editor/contrib/hover/browser/modesContentHover":["Chargement..."],"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace":["Remplacer par la valeur précédente","Remplacer par la valeur suivante"],"vs/editor/contrib/indentation/common/indentation":["Convertir les retraits en espaces","Convertir les retraits en tabulations","Taille des tabulations configurée","Sélectionner la taille des tabulations pour le fichier actuel","Mettre en retrait avec des tabulations","Mettre en retrait avec des espaces","Détecter la mise en retrait à partir du contenu","Activer/désactiver Restituer l'espace","Activer/désactiver les caractères de contrôle"],"vs/editor/contrib/linesOperations/common/linesOperations":["Copier la ligne en haut","Copier la ligne en bas","Déplacer la ligne vers le haut","Déplacer la ligne vers le bas","Trier les lignes dans l'ordre croissant","Trier les lignes dans l'ordre décroissant","Découper l'espace blanc de fin","Supprimer la ligne","Mettre en retrait la ligne","Ajouter un retrait négatif à la ligne","Insérer une ligne au-dessus","Insérer une ligne sous"],"vs/editor/contrib/links/browser/links":["Cmd + clic pour suivre le lien","Ctrl + clic pour suivre le lien","Échec de l'ouverture de ce lien, car il n'est pas bien formé : {0}","Échec de l'ouverture de ce lien, car sa cible est manquante.","Ouvrir le lien"],"vs/editor/contrib/multicursor/common/multicursor":["Ajouter un curseur au-dessus","Ajouter un curseur en dessous","Créer plusieurs curseurs à partir des lignes sélectionnées"],"vs/editor/contrib/parameterHints/browser/parameterHints":["Indicateurs des paramètres Trigger"],"vs/editor/contrib/parameterHints/browser/parameterHintsWidget":["{0}, conseil"],"vs/editor/contrib/quickFix/browser/quickFix":["Correctif rapide"],"vs/editor/contrib/quickFix/browser/quickFixSelectionWidget":["{0}, suggestion de correction rapide","Chargement en cours...","Pas de suggestions de correctif.","Correctif rapide","{0}, accepté"],"vs/editor/contrib/quickOpen/browser/gotoLine":["Atteindre la ligne {0} et la colonne {1}","Atteindre la ligne {0}","Tapez un numéro de ligne à atteindre entre 1 et {0}","Tapez un numéro de colonne à atteindre entre 1 et {0}","Go to line {0}","Tapez un numéro de ligne, suivi par un signe deux-points facultatif et un numéro de colonne à atteindre","Atteindre la ligne..."],"vs/editor/contrib/quickOpen/browser/quickCommand":["{0}, commands","Tapez le nom de l'action que vous voulez exécuter","Palette de commandes"],"vs/editor/contrib/quickOpen/browser/quickOutline":["{0}, symbols","Tapez le nom de l'identificateur auquel vous voulez accéder","Atteindre le symbole...","symboles ({0})","modules ({0})","classes ({0})","interfaces ({0})","méthodes ({0})","fonctions ({0})","propriétés ({0})","variables ({0})","variables ({0})","constructeurs ({0})","appels ({0})"],"vs/editor/contrib/referenceSearch/browser/referenceSearch":[" – {0} références","Rechercher toutes les références"],"vs/editor/contrib/referenceSearch/browser/referencesController":["Chargement en cours..."],"vs/editor/contrib/referenceSearch/browser/referencesWidget":["Échec de la résolution du fichier.","{0} références","{0} référence","aperçu non disponible","Références","Aucun résultat","Références"],"vs/editor/contrib/rename/browser/rename":["Échec de l'exécution du renommage.","Renommer le symbole"],"vs/editor/contrib/rename/browser/renameInputField":["Renommez l'entrée. Tapez le nouveau nom et appuyez sur Entrée pour valider."],"vs/editor/contrib/rename/common/rename":["Aucun résultat."],"vs/editor/contrib/smartSelect/common/jumpToBracket":["Atteindre le crochet"],"vs/editor/contrib/smartSelect/common/smartSelect":["Développer la sélection","Réduire la sélection"],"vs/editor/contrib/suggest/browser/suggestController":["Trigger Suggest"],"vs/editor/contrib/suggest/browser/suggestWidget":["En savoir plus...{0}","{0}, suggestion, avec détails","{0}, suggestion","Précédent","Chargement en cours...","Pas de suggestions.","{0}, accepté","{0}, suggestion, avec détails","{0}, suggestion"],"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode":["Activer/désactiver l'utilisation de la touche Tab pour définir le focus"],"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap":["Afficher : activer/désactiver le retour automatique à la ligne"],"vs/editor/contrib/zoneWidget/browser/peekViewWidget":["Fermer"],"vs/languages/html/common/html.contribution":["HTML","Nombre maximal de caractères par ligne (0 = désactiver).","Liste des balises, séparées par des virgules, qui ne doivent pas être remises en forme. 'null' correspond par défaut à toutes les balises répertoriées à l'adresse https://www.w3.org/TR/html5/dom.html#phrasing-content.","Mettez en retrait les sections <head> et <body>.","Spécifie si les sauts de ligne existants qui précèdent les éléments doivent être conservés. Fonctionne uniquement devant les éléments, pas dans les balises, ni pour du texte.","Nombre maximal de sauts de ligne à conserver dans un bloc. Utilisez 'null' pour indiquer une valeur illimitée.","Mettez en forme et en retrait {{#foo}}, ainsi que {{/foo}}.","Finissez par un caractère de nouvelle ligne.","Liste de balises, séparées par une virgule, qui doivent être précédées d'une nouvelle ligne. 'null' prend par défaut la valeur \"head, body, /html\".","Configures if the built-in HTML language support suggests Angular V1 tags and properties.","Configures if the built-in HTML language support suggests Ionic tags, properties and values.","Configures if the built-in HTML language support suggests HTML5 tags, properties and values."],"vs/platform/configuration/common/configurationRegistry":["Ajoute des paramètres de configuration.","Résumé des paramètres. Cette étiquette va être utilisée dans le fichier de paramètres en tant que commentaire de séparation.","Description des propriétés de configuration.","s'il est défini, 'configuration.type' doit avoir la valeur 'object","'configuration.title' doit être une chaîne","'configuration.properties' doit être un objet"],"vs/platform/extensions/common/abstractExtensionService":["Échec de l'activation de l'extension '{1}'. Raison : dépendance '{0}' inconnue.","Échec de l'activation de l'extension '{1}'. Raison : échec de l'activation de la dépendance '{0}'.","Échec de l'activation de l'extension '{0}'. Raison : plus de 10 niveaux de dépendances (probablement une boucle de dépendance).","Échec de l'activation de l'extension '{0}' : {1}."],"vs/platform/extensions/common/extensionsRegistry":["Description d'extension vide obtenue","la propriété '{0}' est obligatoire et doit être de type 'string'","la propriété '{0}' est obligatoire et doit être de type 'string'","la propriété '{0}' est obligatoire et doit être de type 'string'","la propriété '{0}' est obligatoire et doit être de type 'object'","la propriété '{0}' est obligatoire et doit être de type 'string'","la propriété '{0}' peut être omise ou doit être de type 'string[]'","la propriété '{0}' peut être omise ou doit être de type 'string[]'","les propriétés '{0}' et '{1}' doivent être toutes les deux spécifiées ou toutes les deux omises","La propriété '{0}' peut être omise ou doit être de type 'string'","'main' ({0}) est censé être inclus dans le dossier ({1}) de l'extension. Cela risque de rendre l'extension non portable.","les propriétés '{0}' et '{1}' doivent être toutes les deux spécifiées ou toutes les deux omises","Nom d'affichage de l'extension utilisée dans la galerie VS Code.","Catégories utilisées par la galerie VS Code pour catégoriser l'extension.","Bannière utilisée dans le marketplace VS Code.","Couleur de la bannière de l'en-tête de page du marketplace VS Code.","Thème de couleur de la police utilisée dans la bannière.","Éditeur de l'extension VS Code.","Événements d'activation pour l'extension VS Code.","Dépendances envers d'autres extensions. L'identificateur d'une extension est toujours ${publisher}.${name}. Exemple : vscode.csharp.","Le script exécuté avant le package est publié en tant qu'extension VS Code.","Toutes les contributions de l'extension VS Code représentées par ce package."],"vs/platform/keybinding/browser/keybindingServiceImpl":["Voici d'autres commandes disponibles : ","Touche ({0}) utilisée. En attente de la seconde touche pour la pression simultanée...","La combinaison de touches ({0}, {1}) n'est pas une commande."],"vs/platform/message/common/message":["Fermer","Plus tard","Annuler"]});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.fr.js.map