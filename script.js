const chapters = {
    accueil: {
        title: "Bienvenue sur OCaml Facile",
        content: `
            <div class="welcome-message">
                <h1>Bienvenue sur OCaml Facile</h1>
                <div class="welcome-content">
                    <p>
                        Salut tout le monde,
                    </p>
                    <p>
                        Ce tutoriel suit principalement l'architecture du cours dispensé à l'UMBB par Monsieur Chabani, en reprenant ses exercices de TP et en y ajoutant d'autres exercices complémentaires pour renforcer votre compréhension.
                    </p>
                    
                    <p class="recommendation">
                        Bon courage pour vos révisions !<br>
                        Et n'hésitez pas à partager ce site avec vos camarades !
                    </p>
                </div>
            </div>
            
            <div class="summary">
                <h3>Organisation du Cours</h3>
                <p>Ce site suit la progression pédagogique du cours de M. Chabani :</p>
                <ul>
                    <li><strong>Types de Base</strong> - Les fondamentaux d'OCaml</li>
                    <li><strong>Opérateurs</strong> - Les opérations sur les différents types</li>
                    <li><strong>Fonctions</strong> - Définition et utilisation des fonctions</li>
                    <li><strong>Récursivité</strong> - Fonctions récursives et pattern matching</li>
                    <li><strong>Enregistrements</strong> - Structures de données complexes</li>
                    <li><strong>Types Sommes</strong> - Types algébriques et unions</li>
                    <li><strong>Listes</strong> - Manipulation des listes en OCaml</li>
                    <li><strong>Annexes</strong> - Compléments et références</li>
                </ul>
            </div>
        `
    },
 installation: {
        title: "Installation d'OCaml",
        summary: "OCaml peut être installé sur différents systèmes d'exploitation. Voici les méthodes recommandées pour Linux, Windows et Mac OS.",
        installation: {
            linux: {
                title: "Installation sur Linux",
                steps: [
                    {
                        title: "Méthode 1: Utiliser le gestionnaire de paquets",
                        content: `
                            <p>Sur les distributions basées sur Debian/Ubuntu :</p>
                            <pre><code>sudo apt update
sudo apt install ocaml ocamlbuild opam</code></pre>
                            
                            <p>Sur les distributions basées sur Red Hat/Fedora :</p>
                            <pre><code>sudo dnf install ocaml ocaml-ocamlbuild opam</code></pre>
                            
                            <p>Sur Arch Linux :</p>
                            <pre><code>sudo pacman -S ocaml ocaml-build opam</code></pre>
                        `
                    },
                    {
                        title: "Méthode 2: Utiliser OPAM (Recommandé)",
                        content: `
                            <p>OPAM est le gestionnaire de paquets officiel pour OCaml.</p>
                            <pre><code># Installer OPAM
bash -c "sh <(curl -fsSL https://raw.githubusercontent.com/ocaml/opam/master/shell/install.sh)"

# Initialiser OPAM
opam init

# Mettre à jour les paquets
opam update

# Installer OCaml
opam switch create 4.14.0
eval $(opam env)</code></pre>
                        `
                    },
                    {
                        title: "Vérification de l'installation",
                        content: `
                            <p>Vérifiez que OCaml est correctement installé :</p>
                            <pre><code>ocaml --version</code></pre>
                            <p>Vous devriez voir quelque chose comme : <code>The OCaml toplevel, version 4.14.0</code></p>
                        `
                    }
                ]
            },
            windows: {
                title: "Installation sur Windows",
                steps: [
                    {
                        title: "Méthode 1: Installer OCaml sur Windows",
content: `
    <p>La méthode recommandée pour Windows en 2025 :</p>
    <ol>
        <li>Téléchargez l'installateur depuis <a href="https://ocaml.org/install#windows" target="_blank" rel="noopener noreferrer">le site officiel OCaml</a></li>
        <li>Exécutez l'installateur avec les droits administrateur</li>
        <li>Suivez les instructions de l'assistant d'installation</li>
        <li>Redémarrez votre session Windows</li>
    </ol>
    <div class="note">
        <strong>Alternative :</strong> Si l'installateur ne fonctionne pas, utilisez WSL (Windows Subsystem for Linux) et suivez la méthode Linux.
    </div>
`
                    },
                    {
                        title: " WSL (Windows Subsystem for Linux)",
                        content: `
                            <p>Cette méthode vous permet d'exécuter un environnement Linux sur Windows :</p>
                            <pre><code># Dans WSL (Ubuntu par exemple)
sudo apt update
sudo apt install ocaml opam
opam init
eval $(opam env)</code></pre>
                        `
                    }
                ]
            },
            mac: {
                title: "Installation sur Mac OS",
                steps: [
                    {
                        title: "Utiliser Homebrew",
                        content: `
                            <p>Installez d'abord Homebrew :</p>
                            <pre><code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code></pre>
                            
                            <p>Puis installez OCaml et OPAM :</p>
                            <pre><code>brew install ocaml opam</code></pre>
                        `
                    }
                ]
            }
        },
        examples: [
            {
                title: "Test de l'installation",
                code: `# Lancez OCaml :
ocaml
# Tapez ensuite :
print_string "OCaml est installé !\\n";;
# Pour quitter :
# Ctrl + D`
            }
        ]
    },
    types: {
        title: "Types de Base en OCaml",
        summary: "OCaml dispose de plusieurs types de base pour représenter les données. Comprendre ces types est fondamental pour écrire des programmes corrects.",
        theory: [
            {
                title: "Les nombres entiers (int)",
                content: `
                    <p>Les entiers représentent des nombres entiers positifs ou négatifs :</p>
                    <pre><code>let x = 42;;
let y = -15;;
let grand_nombre = 1_000_000;;  (* On peut utiliser des _ pour la lisibilité *)</code></pre>
                    
                    <div class="note">
                        <strong>ATTENTION :</strong> Les entiers ont une limite. Si vous travaillez avec de très grands nombres, utilisez plutôt les flottants (float).
                    </div>
                `
            },
            {
                title: "Les nombres réels (float)",
                content: `
                    <p>Les flottants représentent des nombres réels avec une virgule décimale :</p>
                    <pre><code>let pi = 3.14;;
let temperature = -2.5;;
let scientifique = 1.23e-4;;  (* Notation scientifique *)</code></pre>
                    
                    <div class="note">
                        <strong>ATTENTION CRUCIALE :</strong> Pour définir un float, on utilise UN POINT et non pas UNE VIRGULE !<br>
                        <code>3.14</code> est correct ❤️<br>
                        <code>3,14</code> est incorrect 💀
                    </div>
                    
                    <div class="culture">
                        <strong>CULTURE G :</strong> Cette notation provient de la syntaxe anglaise des nombres décimaux.<br>
                        Exemple : ( ✅ CORRECT - notation point pour les float *)
 <pre><code>let taille = 1.75;;
let prix = 9.99;;
let temperature = -2.5;;</code></pre>

( ❌ INCORRECT - virgule provoque une erreur *)
 <pre><code>let taille_erreur = 1,75;;</code></pre>   (* Ceci crée un TUPLE (1, 75) ! *)
let prix_erreur = 9,99;;     (* Tuple (9, 99) *)
                    </div>
                `
            },
            {
                title: "Les caractères (char)",
                content: `
                    <p>Les caractères représentent un seul caractère Unicode :</p>
                    <pre><code>let lettre = 'z';;
let arobase = '@';;
let espace = ' ';;
let guillemet = '\\'';;  (* Le backslash permet d'échapper les caractères spéciaux *)</code></pre>
                    
                    <div class="note">
                        <strong>RÈGLE IMPORTANTE :</strong> 
                        <ul>
                            <li>On utilise les apostrophes simples <code>''</code></li>
                            <li>Un char contient exactement UN caractère entre les apostrophes</li>
                            <li>Il existe 256 caractères ASCII étendus</li>
                        </ul>
                    </div>
                    
                    <p><strong>Différence cruciale :</strong></p>
                    <pre><code>let caractere = 'a';;   (* Type : char *)
let chaine = "a";;     (* Type : string *)</code></pre>
                `
            },
            {
                title: "Les chaînes de caractères (string)",
                content: `
                    <p>Les strings représentent des séquences de caractères :</p>
                    <pre><code>let bonjour = "Bonjour le monde!";;
let vide = "";;
let special = "Ligne 1\\nLigne 2";;  (* \\n pour nouvelle ligne *)</code></pre>
                    
                    <p><strong>Concaténation de strings :</strong></p>
                    <pre><code>let nom = "Dupont";;
let prenom = "Jean";;
let complet = prenom ^ " " ^ nom;;  (* "Jean Dupont" *)</code></pre>
                `
            },

            {
                title: "Les booléens (bool)",
                content: `
                    <p>Les booléens ont deux valeurs possibles :</p>
                    <pre><code>let vrai = true;;
let faux = false;;
let resultat = (5 > 3);;  (* true *)</code></pre>
                `
            },
             {
                title: "Le type n-uplets",
                content: `
                    <p>Le n-uplet est une variable composée de plusieurs variables élémentaires ;
- Il se construit avec une virgule qui sépare les variables, et des parenthèses à leurs
extrêmes.
Terminologie selon le nombre d'éléments :

2 éléments → duplet ou paire

3 éléments → triplet

4 éléments → quadruplet

etc.</p>
                    <pre><code>Let lettre_a = (‘a’, 1) ;;
Let cours = ("OCaml", ’O’, ’C’, ’a’, ’m’, ’l’) ;;
</code></pre>
             
                `
            },
             {
                title: "Déclaration Locale avec let...in",
                content: `
                    <p>Quand vous avez besoin d'une variable temporaire à l'intérieur d'une expression, utilisez let...in :</p>
                    <pre><code>let nom_variable = valeur in expression</code></pre>
                    
                    <h1>Caractéristiques :</h1><p>

La variable n'existe que dans l'expression qui suit in

Elle devient inaccessible après l'évaluation

Parfait pour les calculs intermédiaires
</p>
<pre><code>(* Calcul simple avec variable temporaire *)
let x = 2 in x + 2;;
(* - : int = 4 *)

(* Affichage avec chaîne intermédiaire *)
let chaine = "OCaml" in print_string ("J'utilise " ^ chaine ^ ".\n");;
(* Affiche: J'utilise OCaml. *)
(* - : unit = () *)

(* ATTENTION : la variable n'existe plus après *)
x;;
(* Error: Unbound value x *)
chaine;;
(* Error: Unbound value chaine *)</code></pre>
                `
            },
            
            {
                title: "Le type unit",
                content: `
                    <p>Le type unit représente l'absence de valeur utile :</p>
                    <pre><code>let rien = ();;
let () = print_string "Hello";;  (* Les fonctions d'affichage retournent () *)</code></pre>
                    
                    <p>Utilisé principalement pour les fonctions qui ont des effets de bord (affichage, modification) mais ne retournent pas de résultat significatif.</p>
                `
            }
        ],
        examples: [
            {
                title: "Conversions entre types",
                code: `(* Conversion entre int et float *)
let entier = 5;;
let flottant = float_of_int entier;;  (* 5.0 *)
let nouvel_entier = int_of_float 3.14;;  (* 3 *)

(* Conversion entre char et int *)
let code_a = int_of_char 'a';;  (* 97 *)
let char_65 = char_of_int 65;;  (* 'A' *)

(* Conversion string et autres *)
let texte_nombre = string_of_int 42;;  (* "42" *)
let nombre_texte = int_of_string "123";;  (* 123 *)`
            }
        ]
    },

    
    operateurs: {
        title: "Opérateurs en OCaml",
        summary: "OCaml utilise des opérateurs différents selon les types. Il est crucial de connaître ces distinctions pour éviter les erreurs courantes.",
        theory: [
            {
                title: "Opérateurs arithmétiques pour les entiers (int)",
                content: `
                    <table>
                        <tr>
                            <th>Opérateur</th>
                            <th>Description</th>
                            <th>Exemple</th>
                            <th>Résultat</th>
                        </tr>
                        <tr>
                            <td><code>+</code></td>
                            <td>Addition</td>
                            <td><code>5 + 3</code></td>
                            <td><code>8</code></td>
                        </tr>
                        <tr>
                            <td><code>-</code></td>
                            <td>Soustraction</td>
                            <td><code>10 - 4</code></td>
                            <td><code>6</code></td>
                        </tr>
                        <tr>
                            <td><code>*</code></td>
                            <td>Multiplication</td>
                            <td><code>6 * 7</code></td>
                            <td><code>42</code></td>
                        </tr>
                        <tr>
                            <td><code>/</code></td>
                            <td>Division entière</td>
                            <td><code>15 / 4</code></td>
                            <td><code>3</code></td>
                        </tr>
                        <tr>
                            <td><code>mod</code></td>
                            <td>Modulo (reste)</td>
                            <td><code>15 mod 4</code></td>
                            <td><code>3</code></td>
                        </tr>
                    </table>
                `
            },
            {
                title: "Opérateurs arithmétiques pour les flottants (float)",
                content: `
                    <div class="note"><strong>ATTENTION :</strong> Les opérateurs pour les float sont DIFFÉRENTS de ceux pour les int !
                    </div>
                    
                    <table>
                        <tr>
                            <th>Opérateur</th>
                            <th>Description</th>
                            <th>Exemple</th>
                            <th>Résultat</th>
                        </tr>
                        <tr>
                            <td><code>+.</code></td>
                            <td>Addition</td>
                            <td><code>5.0 +. 3.0</code></td>
                            <td><code>8.0</code></td>
                        </tr>
                        <tr>
                            <td><code>-.</code></td>
                            <td>Soustraction</td>
                            <td><code>10.0 -. 4.0</code></td>
                            <td><code>6.0</code></td>
                        </tr>
                        <tr>
                            <td><code>*.</code></td>
                            <td>Multiplication</td>
                            <td><code>6.0 *. 7.0</code></td>
                            <td><code>42.0</code></td>
                        </tr>
                        <tr>
                            <td><code>/.</code></td>
                            <td>Division</td>
                            <td><code>15.0 /. 4.0</code></td>
                            <td><code>3.75</code></td>
                        </tr>
                    </table>
                    
                    <div class="error-example">
                        <strong>ERREUR FRÉQUENTE :</strong>
                        <pre><code>let erreur = 5 + 3.0;;   (* ERREUR : types incompatibles *)
let correct = 5 + int_of_float 3.0;;  (* Conversion explicite *)</code></pre>
                    </div>
                `
            },
            {
                title: "Opérateurs de comparaison",
                content: `
                    <p>Les opérateurs de comparaison fonctionnent avec tous les types :</p>
                    <table>
                        <tr>
                            <th>Opérateur</th>
                            <th>Description</th>
                            <th>Exemple</th>
                        </tr>
                        <tr>
                            <td><code>=</code></td>
                            <td>Égalité</td>
                            <td><code>5 = 5</code> → <code>true</code></td>
                        </tr>
                        <tr>
                            <td><code><></code></td>
                            <td>Différence</td>
                            <td><code>5 <> 3</code> → <code>true</code></td>
                        </tr>
                        <tr>
                            <td><code><</code></td>
                            <td>Inférieur</td>
                            <td><code>3 < 5</code> → <code>true</code></td>
                        </tr>
                        <tr>
                            <td><code><=</code></td>
                            <td>Inférieur ou égal</td>
                            <td><code>5 <= 5</code> → <code>true</code></td>
                        </tr>
                        <tr>
                            <td><code>></code></td>
                            <td>Supérieur</td>
                            <td><code>5 > 3</code> → <code>true</code></td>
                        </tr>
                        <tr>
                            <td><code>>=</code></td>
                            <td>Supérieur ou égal</td>
                            <td><code>5 >= 5</code> → <code>true</code></td>
                        </tr>
                    </table>
                `
            },
            {
                title: "Opérateurs logiques",
                content: `
                    <table>
                        <tr>
                            <th>Opérateur</th>
                            <th>Description</th>
                            <th>Exemple</th>
                            <th>Résultat</th>
                        </tr>
                        <tr>
                            <td><code>&&</code></td>
                            <td>ET logique</td>
                            <td><code>true && false</code></td>
                            <td><code>false</code></td>
                        </tr>
                        <tr>
                            <td><code>||</code></td>
                            <td>OU logique</td>
                            <td><code>true || false</code></td>
                            <td><code>true</code></td>
                        </tr>
                        <tr>
                            <td><code>not</code></td>
                            <td>NON logique</td>
                            <td><code>not true</code></td>
                            <td><code>false</code></td>
                        </tr>
                    </table>
                `
            }
        ],
        examples: [
            {
                title: "Exemples d'opérations",
                code: `(* Opérations sur les entiers *)
let a = (15 / 4) * 4 + (15 mod 4);;  (* 15 *)

(* Opérations sur les flottants *)
let b = (15.0 /. 4.0) *. 4.0;;  (* 15.0 *)

(* Comparaisons *)
let test1 = (5 > 3) && (2.0 <= 4.0);;  (* true *)
let test2 = not (("hello" = "world") || false);;  (* true *)

(* Conversion nécessaire pour mélanger types *)
let mixte = float_of_int 5 +. 3.14;;  (* 8.14 *)`
            }
        ]
    },

    fonctions: {
    title: "Fonctions en OCaml",
    summary: "Les fonctions sont le cœur de la programmation fonctionnelle. En OCaml, ce sont des valeurs de première classe que vous pouvez manipuler comme n'importe quelle autre donnée.",
    theory: [
        {
            title: "Définition et Syntaxe",
            content: `
                <p>En OCaml, on définit une fonction avec le mot-clé <code>let</code> :</p>
                
                <div class="note">
                    <strong>Deux syntaxes équivalentes :</strong>
                </div>
                
                <pre><code>(* Syntaxe classique *)
let nom_fonction parametre1 parametre2 = expression

(* Syntaxe lambda *)
let nom_fonction = fun parametre1 parametre2 -> expression</code></pre>
                
                <p><strong>Exemples concrets :</strong></p>
                <pre><code>let carre x = x * x
let somme a b = a + b
let saluer nom = "Bonjour " ^ nom ^ " !"</code></pre>
                
                <div class="note">
                    <strong>CARACTÉRISTIQUES FONDAMENTALES :</strong>
                    <ul>
                        <li>Pas de parenthèses autour des paramètres (sauf pour gérer la priorité)</li>
                        <li>Pas de mot-clé <code>return</code> - la dernière expression est automatiquement retournée</li>
                        <li>Une fonction est une expression qui retourne une valeur</li>
                        <li>Les fonctions peuvent être passées en paramètres et retournées par d'autres fonctions</li>
                    </ul>
                </div>
            `
        },
        {
            title: "Typage des Fonctions",
            content: `
                <p>OCaml infère automatiquement les types des fonctions. Comprendre les signatures est essentiel :</p>
                
                <pre><code>let somme x y = x + y;;
(* val somme : int -> int -> int *)</code></pre>
                
                <div class="culture">
                    <strong>📚 Lecture des signatures :</strong><br>
                    <code>int -> int -> int</code> signifie :<br>
                    "Prend un int, puis un int, et retourne un int"
                </div>
                
                <p><strong>Déchiffrons ensemble :</strong></p>
                <pre><code>let compose f g x = f (g x);;
(* val compose : ('a -> 'b) -> ('c -> 'a) -> 'c -> 'b *)

let est_pair n = (n mod 2 = 0);;
(* val est_pair : int -> bool *)

let affiche_et_retourne x = 
  print_int x; 
  x;;
(* val affiche_et_retourne : int -> int *)</code></pre>
                
                <div class="warning">
                    <strong>💡 Important :</strong> Le dernier type dans la signature est toujours le type de retour !
                </div>
            `
        },
        {
            title: "Types Polymorphes et Variables de Type",
            content: `
                <p>OCaml utilise des variables de type pour les fonctions génériques :</p>
                
                <pre><code>let identite x = x;;
(* val identite : 'a -> 'a = <fun> *)

let egal x y = x = y;;
(* val egal : 'a -> 'a -> bool *)

let premier (x, y) = x;;
(* val premier : 'a * 'b -> 'a *)</code></pre>
                
                <div class="note">
                    <strong>Variables de type :</strong>
                    <ul>
                        <li><code>'a</code>, <code>'b</code>, <code>'c</code> : types quelconques</li>
                        <li>Même lettre = même type contraint</li>
                        <li>Lettres différentes = types potentiellement différents</li>
                    </ul>
                </div>
                
                <p><strong>Exemples d'utilisation :</strong></p>
                <pre><code>(* 'a peut être int, string, float, etc. *)
identite 5;;        (* int -> int *)
identite "hello";;  (* string -> string *)
identite true;;     (* bool -> bool *)

(* Contraintes de type *)
egal 3 5;;          (* valide : int -> int -> bool *)
egal "a" "b";;      (* valide : string -> string -> bool *)
egal 3 "a";;        (* ERREUR : types incompatibles *)</code></pre>
            `
        },
        {
            title: "Appel de Fonctions",
            content: `
                <p>L'appel de fonction en OCaml est simple mais puissant :</p>
                
                <pre><code>(* Appels simples *)
carre 2;;           (* 4 *)
somme 3 5;;         (* 8 *)
saluer "imane";;    (* "salut imane" *)</code></pre>
                
                <div class="note">
                    <strong>Règles d'appel :</strong>
                    <ul>
                        <li>Pas de parenthèses autour des arguments</li>
                        <li>Application de gauche à droite</li>
                        <li>Les parenthèses servent uniquement à gérer les priorités</li>
                    </ul>
                </div>
                
                <p><strong>Attention aux pièges :</strong></p>
                <pre><code>(* CORRECT *)
f (g x) y     = f(g(x), y)

(* INCORRECT - interprété différemment *)
f g x y       = f(g, x, y)

(* Application partielle *)
let ajouter_5 = somme 5;;
ajouter_5 3;;  (* 8 - car somme 5 3 *)</code></pre>
            `
        },
        {
            title: "Fonctions d'Ordre Supérieur",
            content: `
                <p>Les fonctions peuvent prendre d'autres fonctions en paramètres :</p>
                
                <pre><code>(* Fonction qui applique une fonction deux fois *)
let appliquer_deux_fois f x = f (f x)

(* Utilisation avec fonction anonyme *)
appliquer_deux_fois (fun x -> x + 1) 5;;  (* 7 *)

(* Composition de fonctions *)
let composer f g x = f (g x)

let carre_plus_un = composer (fun x -> x + 1) (fun x -> x * x)
carre_plus_un 3;;  (* (3²) + 1 = 10 *)</code></pre>
                
                <div class="culture">
                    <strong>🎯 Fonctions d'ordre supérieur :</strong><br>
                    Ce sont des fonctions qui :
                    <ul>
                        <li>Prendent d'autres fonctions en paramètres</li>
                        <li>Retournent des fonctions comme résultat</li>
                        <li>Les deux à la fois</li>
                    </ul>
                </div>
            `
        },
        {
            title: "Fonctions sans Paramètres",
            content: `
                <p>Les fonctions sans paramètres utilisent le type <code>unit</code> :</p>
                
                <pre><code>(* Définition *)
let dire_bonjour () = 
  print_string "Bonjour !\\n"

(* Appel OBLIGATOIRE avec () *)
dire_bonjour ();;  (* Affiche "Bonjour !" *)

(* Exemple plus complexe *)
let interaction () =
  print_string "Comment tu t'appelles ? ";
  let nom = read_line () in
  print_string ("Enchanté, " ^ nom ^ " !\\n")

interaction ();;  (* Lance l'interaction *)</code></pre>
                
                <div class="warning">
                    <strong>⚠️ Attention :</strong> 
                    <code>dire_bonjour</code> sans parenthèses référence la fonction elle-même, 
                    <code>dire_bonjour ()</code> l'exécute !
                </div>
            `
        }
    ],
    examples: [
        {
            title: "Fonctions Mathématiques Utiles",
            code: `(* Calcul de moyenne *)
let moyenne a b c = (a + b + c) / 3

(* Puissance entière *)
let rec puissance x n =
  if n = 0 then 1
  else x * puissance x (n - 1)

(* Maximum de deux valeurs *)
let max a b = if a > b then a else b

(* Test de parité *)
let est_pair n = (n mod 2 = 0)
let est_impair n = (n mod 2 = 1)

(* Conversion température *)
let celsius_vers_fahrenheit celsius = celsius *. 9.0 /. 5.0 +. 32.0

(* Utilisations *)
let moy = moyenne 10 15 20;;    (* 15 *)
let pui = puissance 2 8;;       (* 256 *)
let temp = celsius_vers_fahrenheit 25.0;;  (* 77.0 *)`
        },
        {
             title: "Fonctions Prédéfinies Utiles",
            code: ` fonctions d'entrée/sortie 
print_char;;      (* char -> unit *)
print_string;;    (* string -> unit *)
print_int;;       (* int -> unit *)
print_float;;     (* float -> unit *)
print_endline;;   (* string -> unit *)
print_newline;;   (* unit -> unit *)

read_line;;       (* unit -> string *)
read_int;;        (* unit -> int *)
read_float;;      (* unit -> float *)
read_char;;       (* unit -> char *)

(* Exemples d'utilisation *)
print_string "Bonjour ";;
print_endline "Monde !";;
print_int 42;;
print_newline ();;

print_string "Entrez votre nom : ";;
let nom = read_line () in
print_endline ("Bonjour " ^ nom ^ " !");;

print_string "Entrez votre âge : ";;
let age = read_int () in
print_endline ("Vous avez " ^ string_of_int age ^ " ans");; 
                <p><strong>Exemples d'utilisation :</strong></p>
                <pre><code>(* Affichage *)
print_string "Bonjour ";;
print_endline "Monde !";;
print_int 42;;
print_newline ();;

(* Saisie *)
print_string "Entrez votre nom : ";;
let nom = read_line () in
print_endline ("Bonjour " ^ nom ^ " !");;

print_string "Entrez votre âge : ";;
let age = read_int () in
print_endline ("Vous avez " ^ string_of_int age ^ " ans");;</code></pre> 
   <div class="warning">
                    <strong>⚠️ Important :</strong>
                    <ul>
                        <li><code>read_int</code> et <code>read_float</code> peuvent échouer si l'entrée n'est pas valide</li>
                        <li><code>print_newline ()</code> nécessite <code>()</code> car c'est une fonction sans paramètre</li>
                        <li>Pour afficher plusieurs types ensemble, utilisez les fonctions de conversion : <code>string_of_int</code>, <code>string_of_float</code>, etc.</li>
                    </ul>
                </div>
                <div class="culture">
                    <strong>💡 Astuces pratiques :</strong><br>
                    Pour éviter les erreurs avec <code>read_int</code> :
                    <pre><code>let lire_entier_sur () =
  try 
    read_int ()
  with Failure _ ->
    print_endline "Erreur : entrez un nombre valide";
    0  (* valeur par défaut *)</code></pre>
                </div>
            `
        },
        
        {
            title: "Fonctions sur les Chaînes",
            code: `(* Inversion de chaîne *)
let inverser_chaine s =
  let rec aux i acc =
    if i < 0 then acc
    else aux (i - 1) (acc ^ String.make 1 s.[i])
  in
  aux (String.length s - 1) ""

(* Comptage de mots simples *)
let compter_mots phrase =
  let mots = String.split_on_char ' ' phrase in
  List.length mots

(* Formatage de message *)
let message_bienvenue nom age =
  "Bonjour " ^ nom ^ ", vous avez " ^ string_of_int age ^ " ans !"

(* Tests *)
let inverse = inverser_chaine "ocaml";;    (* "lmaco" *)
let mots = compter_mots "hello world";;    (* 2 *)
let msg = message_bienvenue "Alice" 25;;   (* "Bonjour Alice, vous avez 25 ans !" *)`
        },
        
    ]
},


recursivite: {
    title: "Récursion et pattern matching",
    summary: "La récursivité est la pierre angulaire de la programmation fonctionnelle. Combinée au pattern matching, elle permet de résoudre des problèmes complexes de manière élégante et expressive.",
    theory: [
        {
            title: "Fonctions Récursives avec rec",
            content: `
                <p>En OCaml, les fonctions récursives nécessitent le mot-clé <code>rec</code> :</p>
                
                <pre><code>(* FACTORIELLE - version classique *)
let rec factorielle n =
  if n <= 1 then 1
  else n * factorielle (n - 1)

(* FIBONACCI - double récursion *)
let rec fibo n =
  if n <= 1 then n
  else fibo (n - 1) + fibo (n - 2)</code></pre>
                
                <div class="note">
                    <strong>Pourquoi <code>rec</code> ?</strong><br>
                    Par défaut, une fonction ne peut pas s'appeler elle-même. 
                    Le mot-clé <code>rec</code> lève cette restriction et permet l'appel récursif.
                </div>
                
                <p><strong>Récursion sur les listes :</strong></p>
                <pre><code>(* Longueur d'une liste *)
let rec longueur lst =
  match lst with
  | [] -> 0
  | _ :: reste -> 1 + longueur reste

(* Somme des éléments *)
let rec somme_liste lst =
  match lst with
  | [] -> 0
  | tete :: queue -> tete + somme_liste queue</code></pre>
            `
        },
        {
            title: "Pattern Matching (Filtrage)",
            content: `
                <p>Le pattern matching permet de décomposer les valeurs selon leur structure :</p>
                
                <div class="note">
                    <strong>Deux syntaxes équivalentes :</strong>
                </div>
                
                <pre><code>(* Syntaxe avec function *)
let f = function
  | motif1 -> expression1
  | motif2 -> expression2

(* Syntaxe avec match...with *)
let f x = match x with
  | motif1 -> expression1
  | motif2 -> expression2</code></pre>
                
                <p><strong>Exemples concrets :</strong></p>
                <pre><code>(* Gestion d'un menu *)
let traiter_choix choix =
  match choix with
  | 1 -> "Option 1 sélectionnée"
  | 2 -> "Option 2 sélectionnée"
  | 3 -> "Option 3 sélectionnée"
  | _ -> "Option invalide"

(* Extraction depuis un tuple *)
let coordonnees (x, y, z) =
  match (x, y, z) with
  | (0, 0, 0) -> "Origine"
  | (x, 0, 0) -> "Sur l'axe X"
  | (0, y, 0) -> "Sur l'axe Y"
  | _ -> "Point quelconque"</code></pre>
            `
        },
        {
            title: "Pattern Matching Avancé",
            content: `
                <p>Le pattern matching peut être combiné avec des gardes et des motifs complexes :</p>
                
                <pre><code>(* Avec conditions (guards) *)
let categoriser_age age =
  match age with
  | a when a < 0 -> "Âge invalide"
  | a when a < 18 -> "Mineur"
  | a when a < 65 -> "Adulte"
  | _ -> "Senior"

(* Pattern matching sur plusieurs arguments *)
let comparer a b =
  match (a, b) with
  | (0, 0) -> "Les deux sont nuls"
  | (0, _) -> "Premier est nul"
  | (_, 0) -> "Second est nul"
  | (x, y) when x = y -> "Égaux"
  | (x, y) when x > y -> "Premier plus grand"
  | _ -> "Second plus grand"

(* Déstructuration de listes *)
let rec afficher_liste = function
  | [] -> print_string "[]"
  | [x] -> print_int x
  | x :: xs -> 
      print_int x; 
      print_string " :: "; 
      afficher_liste xs</code></pre>
                
                <div class="culture">
                    <strong>🎯 Motif _ (joker) :</strong><br>
                    Le underscore <code>_</code> signifie "n'importe quelle valeur" et est utilisé 
                    quand on n'a pas besoin de la valeur correspondante.
                </div>
            `
        },
        {
            title: "Récursivité Terminale",
            content: `
                <p>La récursion terminale évite l'accumulation d'appels et optimise la mémoire :</p>
                
                <pre><code>(* Factorielle - version NON terminale *)
let rec factorielle n =
  if n <= 1 then 1
  else n * factorielle (n - 1)  (* Appel NON terminal *)

(* Factorielle - version TERMINALE *)
let factorielle_terminale n =
  let rec aux n acc =
    if n <= 1 then acc
    else aux (n - 1) (n * acc)  (* Appel terminal *)
  in
  aux n 1</code></pre>
                
                <div class="note">
                    <strong>Comment reconnaître la récursivité terminale ?</strong>
                    <ul>
                        <li>L'appel récursif est la DERNIÈRE opération</li>
                        <li>On utilise un accumulateur pour porter le résultat</li>
                        <li>Pas d'opération en attente après l'appel récursif</li>
                    </ul>
                </div>
                
                <p><strong>Comparaison Fibonacci :</strong></p>
                <pre><code>(* Version naïve - exponentielle *)
let rec fibo_naif n =
  match n with
  | 0 -> 0
  | 1 -> 1
  | _ -> fibo_naif (n-1) + fibo_naif (n-2)

(* Version terminale - linéaire *)
let fibo_terminal n =
  let rec aux n a b =
    if n = 0 then a
    else aux (n-1) b (a+b)
  in
  aux n 0 1</code></pre>
            `
        }
    ],
    examples: [
        {
            title: "Algorithmes Récursifs Classiques",
            code: `(* Recherche dans une liste *)
let rec appartient x = function
  | [] -> false
  | tete :: queue -> tete = x || appartient x queue

(* Inversion de liste *)
let rec inverser = function
  | [] -> []
  | tete :: queue -> inverser queue @ [tete]

(* Version terminale plus efficace *)
let inverser_terminal lst =
  let rec aux acc = function
    | [] -> acc
    | tete :: queue -> aux (tete :: acc) queue
  in
  aux [] lst

(* Map personnalisé *)
let rec map f = function
  | [] -> []
  | tete :: queue -> f tete :: map f queue

(* Filtrage personnalisé *)
let rec filter f = function
  | [] -> []
  | tete :: queue -> 
      if f tete then tete :: filter f queue
      else filter f queue

(* Tests *)
let liste = [1; 2; 3; 4; 5]
let inverse = inverser_terminal liste;;    (* [5; 4; 3; 2; 1] *)
let carres = map (fun x -> x * x) liste;;  (* [1; 4; 9; 16; 25] *)
let pairs = filter (fun x -> x mod 2 = 0) liste;;  (* [2; 4] *)`
        },
        {
            title: "Pattern Matching Complexe",
            code: `(* Arbre binaire *)
type 'a arbre = 
  | Vide 
  | Noeud of 'a * 'a arbre * 'a arbre

(* Parcours récursif avec pattern matching *)
let rec hauteur = function
  | Vide -> 0
  | Noeud(_, g, d) -> 1 + max (hauteur g) (hauteur d)

let rec compter_feuilles = function
  | Vide -> 0
  | Noeud(_, Vide, Vide) -> 1
  | Noeud(_, g, d) -> compter_feuilles g + compter_feuilles d

(* Gestion d'expressions arithmétiques *)
type expression =
  | Nombre of int
  | Plus of expression * expression
  | Moins of expression * expression
  | Fois of expression * expression

let rec evaluer = function
  | Nombre n -> n
  | Plus(g, d) -> evaluer g + evaluer d
  | Moins(g, d) -> evaluer g - evaluer d
  | Fois(g, d) -> evaluer g * evaluer d

(* Exemple : (2 + 3) * 4 *)
let expr = Fois(Plus(Nombre 2, Nombre 3), Nombre 4)
let resultat = evaluer expr;;  (* 20 *)`
        }
    ]
},
    recursivite: {
        title: "Récursivité et Filtrage",
        summary: "La récursivité est fondamentale en OCaml. Combinée au filtrage (pattern matching), elle permet de résoudre des problèmes complexes de manière élégante.",
        theory: [
            {
                title: "Fonctions récursives",
                content: `
                    <p>Pour les fonctions récursives, on utilise <code>let rec</code> :</p>
                    <pre><code>let rec factorielle n =
  if n <= 1 then 1
  else n * factorielle (n - 1)</code></pre>
                    
                    <div class="note">
                        <strong>POURQUOI <code>rec</code> ?</strong><br>
                        En OCaml, par défaut, une fonction ne peut pas s'appeler elle-même. Le mot-clé <code>rec</code> lève cette restriction.
                    </div>
                `
            },
            {
                title: "Filtrage (Pattern Matching)",
                content: `
                    <p>Le filtrage permet de décomposer les valeurs selon leur structure :</p>
                    
                    <p><strong>Avec <code>function</code> :</strong></p>
                    <pre><code>let f = function
  | motif1 -> expression1
  | motif2 -> expression2
  | ...</code></pre>
                    
                    <p><strong>Avec <code>match ... with</code> :</strong></p>
                    <pre><code>let f x = match x with
  | motif1 -> expression1
  | motif2 -> expression2
  | ...</code></pre>
                    
                    <p><strong>Exemple avec les listes :</strong></p>
                    <pre><code>let rec longueur liste =
  match liste with
  | [] -> 0
  | _ :: reste -> 1 + longueur reste</code></pre>
                `
            }
        ],
        examples: [
            {
                title: "Exemples de récursivité et filtrage",
                code: `(* Factorielle avec filtrage *)
let rec factorielle n =
  match n with
  | 0 -> 1
  | 1 -> 1
  | _ -> n * factorielle (n - 1)

(* Fibonacci *)
let rec fibonacci n =
  match n with
  | 0 -> 0
  | 1 -> 1
  | _ -> fibonacci (n-1) + fibonacci (n-2)

(* Somme des éléments d'une liste *)
let rec somme_liste lst =
  match lst with
  | [] -> 0
  | tete :: queue -> tete + somme_liste queue

(* Test des fonctions *)
let f5 = factorielle 5;;      (* 120 *)
let fib10 = fibonacci 10;;    (* 55 *)
let total = somme_liste [1;2;3;4];;  (* 10 *)`
            }
        ]
    },
lists: {
  title: "Les Listes",
  summary: "Manipulation des listes en OCaml : construction, parcours, fonctions usuelles, opérateurs, récursivité et exemples.",

  theory: [
    {
      title: "Définition et caractéristiques",
      content: `
        <p>Une liste contient au minimum 0 élément</p>
        <p>Voilà une liste d'entiers :</p>
        <pre><code>let liste1 = [0;1;2;3;4;5;6;7;8;9;10];;
val liste1 : int list = [0;1;2;3;4;5;6;7;8;9;10]</code></pre>

        <p>Il n'y a que des entiers dedans.</p>

        <p>Et voici une liste de caractères :</p>
        <pre><code>let liste2 = ['a';'b';'c';'d';'e';'f';'g'];;</code></pre>
        <p>Il n'y a que des caractères dedans.</p>

        <div class="note">
          <strong>Règle :</strong> une liste peut contenir un très grand nombre d'éléments mais ces éléments doivent tous être du même type.
        </div>
      `
    },
    {
      title: "Opérateurs de listes",
      content: `
        <p><strong>::</strong> (cons) – ajoute un élément en tête :</p>
        <pre><code>let liste1 = ['c';'a';'m';'l'];;
let liste2 = 'o'::liste1;;
val liste2 : char list = ['o';'c';'a';'m';'l']</code></pre>

        <p><strong>@</strong> (concat) – concatène deux listes :</p>
        <pre><code>let liste1 = [-3;-2;-1];;
let liste2 = [1;2;3];;
let liste3 = liste1 @ liste2;;
val liste3 : int list = [-3;-2;-1;1;2;3]</code></pre>

        <div class="note">
          <code>::</code> ne s'utilise qu'avec un élément et une liste du même type.<br>
          <code>@</code> ne s'utilise qu'avec deux listes du même type.
        </div>
      `
    },
    {
      title: "Fonction d'affichage",
      content: `
        <p>Si vous compilez et exécutez (<code>ocamlc</code> et <code>./a.out</code>) vous ne verrez pas s'afficher ces deux listes. Je vais vous donner la fonction permettant d'afficher une liste d'entier :</p>

        <pre><code>let rec print_list l = match l with
  | [] -> ()
  | e::f -> print_int e; print_string " "; print_list f;;</code></pre>

        <p>Utilisation :</p>
        <pre><code>print_list [1;2;3;4;5;6;7;8;9;10];;</code></pre>
        <p>On obtient :</p>
        <pre><code>1 2 3 4 5 6 7 8 9 10</code></pre>

        <div class="note">
          Cette fonction prend en paramètre une liste d'<code>int</code>. Si vous voulez afficher une liste de <code>char</code>, il vous suffit de changer <code>print_int e</code> par <code>print_char e</code>.<br>
          Vous n'avez pas besoin de comprendre cette fonction pour l'instant, je vous la donne juste pour que vous vous en serviez. Vous la comprendrez tous un peu plus tard !
        </div>
      `
    },
    {
      title: "List.hd et List.tl",
      content: `
        <p>Deux fonctions sur les listes à connaître absolument : <strong>List.hd</strong> et <strong>List.tl</strong> (hd pour head et tl pour tail).</p>

        <p><strong>List.hd</strong> renvoie la "tête" de la liste (le premier élément) :</p>
        <pre><code>print_int (List.hd [1;2;3]);;
1</code></pre>

        <p><strong>List.tl</strong> renvoie la "queue" de la liste (la liste sans le premier élément) :</p>
        <pre><code>print_list (List.tl [1;2;3]);;
2 3</code></pre>

        <div class="warning">
          Ces deux fonctions <strong>échouent</strong> si la liste est vide !
        </div>

        <p>Ces deux fonctions n'ont pas la même signature :</p>
        <pre><code>List.hd;;
- : 'a list -> 'a

List.tl;;
- : 'a list -> 'a list</code></pre>

        <div class="culture">
          <strong>CULTURE G :</strong> <code>List.hd</code> renvoie un seul élément, <code>List.tl</code> renvoie une liste d'éléments.
        </div>
      `
    },
    {
      title: "Fonctions prédéfinies du module List",
      content: `
        <table>
          <thead>
            <tr><th>Fonction</th><th>Utilité</th><th>Exemple</th></tr>
          </thead>
          <tbody>
            <tr><td><code>List.length</code></td><td>Longueur</td><td><code>List.length [4.;5.;9.;23.;33.;32.]</code> → <code>6</code></td></tr>
            <tr><td><code>List.mem</code></td><td>Appartenance</td><td><code>List.mem 3 [3;5;7]</code> → <code>true</code></td></tr>
            <tr><td><code>List.map</code></td><td>Transformation</td><td><code>let f x = x - 1 in List.map f [12;23;45;89]</code> → <code>[11;22;44;88]</code></td></tr>
            <tr><td><code>List.for_all</code></td><td>Teste un prédicat</td><td><code>let g x = x > 0 in List.for_all g [56;123;90;67;32;-4;6]</code> → <code>false</code></td></tr>
            <tr><td><code>List.sort</code></td><td>Tri</td><td><code>let h x y = y - x in List.sort h [12;23;45;89]</code> → <code>[89;45;23;12]</code></td></tr>
            <tr><td><code>List.rev</code></td><td>Miroir</td><td><code>let miroir liste = List.rev liste in miroir [0;1;2;3;4;5;6;7;8;9]</code> → <code>[9;8;7;6;5;4;3;2;1;0]</code></td></tr>
          </tbody>
        </table>
      `
    },
    {
      title: "Match with sur les listes (part 2)",
      content: `
        <p>Vous vous souvenez bien sûr du <code>match with</code> ? Parce qu'on en a besoin pour les fonctions récursives qui utilisent les listes...</p>

        <pre><code>let rec longueur_liste l = match l with
  | []    -> 0 (* Si la liste est vide, alors la longueur est 0 *)
  | t::q  -> 1 + longueur_liste q;; (* Sinon on ajoute 1 et on rappelle la fonction avec la "queue" *)</code></pre>

        <p>Explications :</p>
        <ul>
          <li><code>[]</code> : on regarde si la liste est vide, si c'est le cas on renvoie 0 (cas d'arrêt).</li>
          <li><code>t::q</code> : on décompose la liste en tête <code>t</code> et queue <code>q</code>. À chaque récursion, on oublie <code>t</code>, on ajoute 1 et on rappelle la fonction avec <code>q</code>.</li>
        </ul>

        <div class="note">
          Dans le <code>match</code>, vous choisissez de décomposer avec les lettres que vous voulez. Avec <code>t</code> et <code>q</code> vous ne serez pas perdu (tête et queue).
        </div>

        <p>Test :</p>
        <pre><code>print_string "La liste [1;2;3;4;5;6] contient ";;
print_int (longueur_liste [1;2;3;4;5;6]);;
print_string " éléments.";;</code></pre>
        <p>Résultat :</p>
        <pre><code>La liste [1;2;3;4;5;6] contient 6 éléments.</code></pre>
      `
    },
    {
      title: "Exécution pas à pas de longueur_liste",
      content: `
        <p>Calculons <code>longueur_liste [1;2;3]</code> :</p>
        <pre><code>longueur_liste [1;2;3]
= 1 + longueur_liste [2;3]              (car [1;2;3] = 1::[2;3])
= 1 + 1 + longueur_liste [3]            (car [2;3] = 2::[3])
= 1 + 1 + 1 + longueur_liste []         (car [3] = 3::[])
= 1 + 1 + 1 + 0                         (car [] est vide)
= 3</code></pre>

        <div class="note">
          <strong>Cas d'arrêt :</strong> quand la liste est vide <code>[]</code> on renvoie 0 (logique).<br>
          <strong>Paramètre variant :</strong> on rappelle la fonction avec la queue de la liste.
        </div>
      `
    },
    {
      title: "Version sans match with",
      content: `
        <p>Voici la même fonction <code>longueur_liste</code> qui n'utilise pas de <code>match with</code> :</p>

        <pre><code>let rec longueur_liste l =
  if l = [] then 0
  else 1 + longueur_liste (List.tl l);;</code></pre>

        <div class="culture">
          <strong>CULTURE G :</strong> Cette version est plus courte, mais moins "OCaml-style". Le <code>match with</code> est plus lisible, plus sûr, et plus rapide.
        </div>
      `
    }
  ],

  examples: [
    {
      title: "Fonctions maison",
      code: `(* Affichage récursif *)
let rec print_list = function
  | []    -> ()
  | e::f  -> print_int e; print_string " "; print_list f;;

print_list [1;2;3;4];;   (* 1 2 3 4 *)

(* Recherche d’un élément *)
let rec appartient x = function
  | []    -> false
  | h::t  -> x = h || appartient x t;;

appartient 5 [1;2;5;8];;  (* true *)`
    },
    {
      title: "Utilisation des fonctions standards",
      code: `let nombres = [10; 4; 7; 2] in
let doubles = List.map (fun x -> x * 2) nombres in
let pairs   = List.filter (fun x -> x mod 2 = 0) doubles in
List.rev pairs;;        (* [28; 8; 20] *)`
    }
  ]
},
    enregistrements: {
        title: "Enregistrements",
        summary: "Les enregistrements permettent de regrouper plusieurs données de types différents dans une seule structure.",
        theory: [
            {
                title: "Définition d'un type enregistrement",
                content: `
                    <p>On doit d'abord déclarer le type :</p>
                    <pre><code>type personne = {
  nom : string;
  age : int;
  email : string
}</code></pre>
                    
                    <div class="note">
                        <strong>POINTS IMPORTANTS :</strong>
                        <ul>
                            <li>Le type doit être déclaré avant utilisation</li>
                            <li>Tous les champs doivent être initialisés</li>
                            <li>Les champs sont immuables par défaut(non modifiables)</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Création et utilisation",
                content: `
                    <p><strong>Création d'un enregistrement :</strong></p>
                    <pre><code>let etudiant = {
  nom = "Dupont";
  age = 20;
  email = "dupont@email.com"
}</code></pre>
                    
                    <p><strong>Accès aux champs :</strong></p>
                    <pre><code>let nom_etudiant = etudiant.nom
let age_etudiant = etudiant.age</code></pre>
                    
                    <p><strong>Création avec certains champs modifiables  ( donc ON UTILISE le mot-clé mutable sert à rendre un champ MODIFIABLE. ):</strong></p>
                    <pre><code>type compte = {
  proprietaire : string;
  mutable solde : float
}

let mon_compte = {
  proprietaire = "Mohamed";
  solde = 1000.0
}

mon_compte.solde <- 1500.0  (* Modification autorisée *)</code></pre>

                    <p><strong>2ème méthode : créer une nouvelle valeur au lieu de modifier l’ancienne :</strong></p>
                    <p>.Prendre un enregistrement existant <br>
. Créer un NOUVEL enregistrement<br>
. En gardant les mêmes champs <br>
. Sauf celui que tu veux changer <br>

OCaml préfère cette méthode (programmation fonctionnelle = pas de modification, on crée de nouvelles valeurs mais l'autre est plus pratique).</p>
                    <pre><code>let incrementeAge etudiant =
  {
    nom = etudiant.nom;
    prenom = etudiant.prenom;
    age = etudiant.age + 1;
    annee = etudiant.annee
  };;
</code></pre>
<h2>Que fait cette fonction?</h2>
<p>
.Elle prend un étudiant → etudiant <br>

.Elle crée un nouveau étudiant (appelons-le "B")<br>

.B a les mêmes champs que A<br>

.Mais l’âge est augmenté de 1 <br>

Donc :

.A reste inchangé<br>

.B est une nouvelle valeur</p>
                    <p><strong>Utilisation :</strong></p>
                        <pre><code>let etudiant1 = {nom = "Ali"; prenom = "bou"; age = 20; annee = 2};;
    let etudiant2 = incrementeAge etudiant1;;
    (* etudiant1.age est toujours 20 *)
(* etudiant2.age est 21 *) (*L’original n’a PAS changé mais  Le nouveau a été modifié.*)
</code></pre>
                `
                
            },{
            
                title: "Enregistrements récursifs",
                content: `
                    <p><strong>Tu peux mettre un enregistrement dans un autre, comme :</strong></p>
                    <pre><code>type t_note = { maths : float; programmation : float; assiduite : float }

type t_etudiant = {
  nom : string;
  prenom : string;
  age : int;
  annee : int;
  note : t_note;
}
</code></pre>
<p><strong>Accès aux champs :</strong></p>
 <pre><code>let moi = {nom = "KuK"; prenom = "KuK"; age = 20; annee = 1; note =
  {maths = 5.; programmation = 18.; assiduite = 12.} };;
  moi.note.maths  (* Accède à la note de maths *) : float = 5.
</code></pre>
                `
            }
        ],
        examples: [
            {
                title: "Exemples complets avec enregistrements",
                code: `(* Définition d'un type livre *)
type livre = {
  titre : string;
  auteur : string;
  annee : int;
  mutable emprunte : bool
}

(* Création d'instances *)
let livre1 = {
  titre = "OCaml pour les nuls";
  auteur = "Jean Dupont";
  annee = 2023;
  emprunte = false
}

let livre2 = {
  titre = "Algorithmique avancée";
  auteur = "Marie Martin";
  annee = 2022;
  emprunte = true
}

(* Fonction utilisant les enregistrements *)
let description livre =
  livre.titre ^ " par " ^ livre.auteur ^ " (" ^ string_of_int livre.annee ^ ")"

(* Modification *)
let emprunter livre =
  livre.emprunte <- true

(* Utilisation *)
let desc1 = description livre1;;
emprunter livre1;;`
            }
        ]
    },

    types_sommes: {
        title: "Types Sommes",
        summary: "Les types sommes (ou types algébriques) permettent de définir des types qui peuvent avoir plusieurs formes alternatives.",
        theory: [
            {
                title: "Définition de types sommes",
                content: `
                    <p>Les types sommes utilisent le mot-clé <code>type</code> avec des constructeurs :</p>
                      <p><strong>Les jours de la semaine :</strong></p>
                                  <pre><code>type jour = 
  | Lundi 
  | Mardi 
  | Mercredi 
  | Jeudi 
  | Vendredi 
  | Samedi 
  | Dimanche  ;; (*Lundi, Mardi, Mercredi sont des constructeurs*)</code></pre>
  <h3>Constructeurs avec arguments</h3>
                    <p>Chaque constructeur peut avoir des arguments associés<br>
                     donc Tu peux donner des valeurs aux constructeurs :</p>
                    <pre><code>type t_note =
  | Maths of float
  | Programmation of float ;;</code></pre>
                     <h4>utilisation :</h4>
                    <pre><code>let note1 = Maths 15.0;;</code></pre>
                    <p><strong>autre exemple:</strong></p>
                   <pre><code>type figure =
  | Cercle of float          (* rayon *)
  | Rectangle of float * float  (* largeur * hauteur *)
  | Carre of float ;;  (* côté *)
  (*utilisation*)        
  let f1 = Carre 5.0;;
let f2 = Rectangle (3.0, 4.5);;
</code></pre>
                       <div class="note"><strong>ATTENTION :</strong> <p>Chaque constructeur doit commencer par une majuscule<br>Une variable de ce type prend UN seul de ces constructeurs</p>
                       </div>
                `
            },
            {
                title: "Utilisation avec filtrage",
                content: `
                    <p>On utilise le pattern matching pour traiter les différents cas :</p>
                    <pre><code>let aire figure =
  match figure with
  | Cercle r -> 3.14159 *. r *. r
  | Rectangle (l, h) -> l *. h
  | Carre c -> c *. c;;

let jour_suivant j =
  match j with
  | Lundi -> Mardi
  | Mardi -> Mercredi
  | Mercredi -> Jeudi
  | Jeudi -> Vendredi
  | Vendredi -> Samedi
  | Samedi -> Dimanche
  | Dimanche -> Lundi;;</code></pre>
                `
            }
        ],
        examples: [
            {
                title: "Exemples avancés de types sommes",
                code: `(* Type pour les expressions arithmétiques *)
type expression =
  | Nombre of int
  | Plus of expression * expression
  | Moins of expression * expression
  | Fois of expression * expression;;

(* Évaluation récursive *)
let rec evaluer expr =
  match expr with
  | Nombre n -> n
  | Plus (g, d) -> evaluer g + evaluer d
  | Moins (g, d) -> evaluer g - evaluer d
  | Fois (g, d) -> evaluer g * evaluer d;;

(* Exemple : (2 + 3) * 4 *)
let expr_exemple = Fois (Plus (Nombre 2, Nombre 3), Nombre 4);;
let resultat = evaluer expr_exemple;;  (* 20 *)

(* Type option pour gérer l'absence de valeur *)
let trouver_premier_pair liste =
  let rec chercher = function
    | [] -> None
    | tete :: queue -> if tete mod 2 = 0 then Some tete else chercher queue
  in
  chercher liste;;

let test1 = trouver_premier_pair [1; 3; 5; 2; 7];;  (* Some 2 *)
let test2 = trouver_premier_pair [1; 3; 5];;         (* None *)`
            }
        ]
    },


 arbre_binaire: {
    title: "Arbres Binaires en OCaml",
    summary: "Structure de données fondamentale : chaque nœud possède au plus deux enfants. Nous verrons leur définition, propriétés, parcours et applications classiques.",
    theory: [
        {
            title: "Définition et type OCaml",
            content: `
                <p>Un arbre binaire est soit :</p>
                <ul>
                    <li>vide,</li>
                    <li>ou un nœud contenant une valeur et deux sous-arbres (gauche et droit).</li>
                </ul>
                <p>Déclaration directe en OCaml :</p>
                <pre><code>type 'a arbre_binaire =
  | Vide
  | Noeud of 'a * 'a arbre_binaire * 'a arbre_binaire</code></pre>
                <div class="note">
                    <strong>Remarque :</strong> le type est <strong>polymorphe</strong> (<code>'a</code>) : on peut créer des arbres d’entiers, de chaînes, d’enregistrements, etc.
                </div>
            `
        },
        {
            title: "Propriétés essentielles",
            content: `
                <table>
                    <tr><th>Propriété</th><th>Définition</th><th>Formule / Remarque</th></tr>
                    <tr>
                        <td><strong>Hauteur</strong></td>
                        <td>Nombre maximal d’arêtes depuis la racine jusqu’à une feuille.</td>
                        <td><code>let rec hauteur = function
   | Vide -> 0                   
   | Noeud(_, g, d) -> 1 + max (hauteur g) (hauteur d)</code></td>                  
                    </tr>
                    <tr>
                        <td><strong>Taille</strong></td>
                        <td>Nombre total de nœuds.</td>
                        <td><code>let rec taille = function
  | Vide -> 0
  | Noeud(_, g, d) -> 1 + taille g + taille d

</code></td>
                    </tr>
                    <tr>
                        <td><strong>Nombre de feuilles</strong></td>
                        <td>Nombre de nœuds sans enfants.</td>
                        <td><code>let rec nbre_feuilles = function
  | Vide -> 0
  | Noeud(_, Vide, Vide) -> 1
  | Noeud(_, g, d) -> nbre_feuilles g + nbre_feuilles d</code></td>
                    </tr>
                </table>
            `
        },
        {
            title: "Parcours classiques (récursifs)",
            content: `
                <ul>
                    <li><strong>Préfixe</strong> : racine → gauche → droit</li>
                    <li><strong>Infixe</strong> : gauche → racine → droit</li>
                    <li><strong>Postfixe</strong> : gauche → droit → racine</li>
                </ul>
                <pre><code>let rec prefixe = function
  | Vide -> []
  | Noeud(x, g, d) -> x :: prefixe g @ prefixe d

let rec infixe = function
  | Vide -> []
  | Noeud(x, g, d) -> infixe g @ [x] @ infixe d

let rec postfixe = function
  | Vide -> []
  | Noeud(x, g, d) -> postfixe g @ postfixe d @ [x]</code></pre>
            `
        },
        {
            title: "Arbre binaire de recherche (ABR) – mini intro",
            content: `
                <p>Un <strong>ABR</strong> impose l’ordre :</p>
                <ul>
                    <li>tous les éléments du sous-arbre gauche sont <strong>inférieurs</strong> à la racine ;</li>
                    <li>tous les éléments du sous-arbre droit sont <strong>supérieurs</strong> à la racine.</li>
                </ul>
                <pre><code>let rec insere x = function
  | Vide -> Noeud(x, Vide, Vide)
  | Noeud(y, g, d) ->
      if x < y then Noeud(y, insere x g, d)
      else if x > y then Noeud(y, g, insere x d)
      else Noeud(y, g, d)  (* doublon : on garde y *)</code></pre>
                <div class="culture">
                    Cette propriété permet un <strong>recherche efficace</strong> en O(h) où h est la hauteur.
                </div>
            `
        }
    ],
    examples: [
        {
            title: "Construction et parcours",
            code: `(* arbre exemple :
         1
       /   \
      2     3
     / \   /
    4   5 6
*)
let arbre_ex =
  Noeud(1,
    Noeud(2,
      Noeud(4, Vide, Vide),
      Noeud(5, Vide, Vide)),
    Noeud(3,
      Noeud(6, Vide, Vide),
      Vide))

let () =
  Printf.printf "Préfixe : %s\\n"
    (String.concat " " (List.map string_of_int (prefixe arbre_ex)));
  Printf.printf "Feuilles : %d\\n"
    (nb_feuilles arbre_ex);
  Printf.printf "Hauteur : %d\\n"
    (hauteur arbre_ex)`
        },
        {
            title: "Recherche du maximum",
            code: `let rec max_arbre = function
  | Vide -> failwith "arbre vide"
  | Noeud(x, Vide, Vide) -> x
  | Noeud(x, g, d) -> max x (max (max_arbre g) (max_arbre d))

(* variante avec accumulateur *)
let max_arbre_term a =
  let rec aux acc = function
    | Vide -> acc
    | Noeud(x, g, d) ->
        let new_acc = max acc x in
        aux (aux new_acc g) d
  in
  match a with
  | Vide -> failwith "arbre vide"
  | Noeud(x, _, _) -> aux x a`
        }
    ],
    exercises: [
        {
            question: "Écrire une fonction <code>miroir : 'a arbre_binaire -> 'a arbre_binaire</code> qui retourne l’arbre symétrique.",
            difficulty: "easy",
            solution: `let rec miroir = function
  | Vide -> Vide
  | Noeud(x, g, d) -> Noeud(x, miroir d, miroir g)`
        },
        {
            question: "Compter les nœuds internes (non feuilles).",
            difficulty: "medium",
            solution: `let rec noeuds_internes = function
  | Vide | Noeud(_, Vide, Vide) -> 0
  | Noeud(_, g, d) -> 1 + noeuds_internes g + noeuds_internes d`
        },
        {
            question: "Vérifier si un arbre est un ABR (ordre strict : gauche < racine < droit).",
            difficulty: "hard",
            solution: `let est_abr arbre =
  let rec check = function
    | Vide -> true
    | Noeud(x, g, d) ->
        let max_g = max_arbre g in
        let min_d = min_arbre d in
        (g = Vide || max_g < x) &&
        (d = Vide || min_d > x) &&
        check g && check d
  in
  check arbre`
        }
    ]
},
    annexes: {
        title: "Annexes et Références",
        summary: "Cette section contient des informations complémentaires, des astuces et des références utiles pour la programmation OCaml.",
        theory: [
            {
                title: "Bonnes pratiques",
                content: `
                    <ul>
                        <li><strong>Nommage :</strong> Utilisez des noms significatifs en snake_case</li>
                        <li><strong>Indentation :</strong> Respectez l'indentation pour la lisibilité</li>
                        <li><strong>Commentaires :</strong> Utilisez <code>(* ... *)</code> pour les commentaires</li>
                        <li><strong>Types :</strong> Laissez OCaml inférer les types quand c'est possible</li>
                        <li><strong>Récursivité :</strong> Préférez la récursivité aux boucles impératives</li>
                    </ul>
                `
            },
            {
                title: "Erreurs courantes",
                content: `
                    <div class="error-example">
                        <strong>Mélange int/float :</strong>
                        <pre><code>let erreur = 5 + 3.0;;        (* ERREUR *)
let correct = 5 + int_of_float 3.0;;</code></pre>
                    </div>
                    
                    <div class="error-example">
                        <strong>Oubli de rec :</strong>
                        <pre><code>let factorielle n =           (* ERREUR si récursive *)
  if n <= 1 then 1 else n * factorielle (n-1)

let rec factorielle n =       (* CORRECT *)
  if n <= 1 then 1 else n * factorielle (n-1)</code></pre>
                    </div>
                    
                    <div class="error-example">
                        <strong>Mauvais opérateurs :</strong>
                        <pre><code>let erreur = 5.0 + 3.0;;      (* ERREUR *)
let correct = 5.0 +. 3.0;;    (* CORRECT *)</code></pre>
                    </div>
                `
            }
        ]
    },
    serie1: {
        title: "Série 1 - Introduction et Prise en Main",
        summary: "Cette première série d'exercices permet de se familiariser avec la syntaxe de base d'OCaml, les types de données élémentaires et les premières expressions.",
        exercises: [
            {
                question: "Testez les expressions suivantes dans l'interpréteur OCaml et observez les résultats :",
                difficulty: "easy",
                solution: `(* Les résultats attendus *)
5 ;;                    (* int = 5 *)
5. ;;                   (* float = 5. *)
'a' ;;                  (* char = 'a' *)
"bonjour" ;;            (* string = "bonjour" *)
true ;;                 (* bool = true *)
(10, 'a') ;;            (* int * char = (10, 'a') *)
[1; 2; 7; 5; 7] ;;     (* int list = [1; 2; 7; 5; 7] *)
1.1e+2 ;;               (* float = 110. *)
cos 3.14 ;;             (* float = -0.999999... *)`
            },
            {
                question: "Évaluez les expressions avec variables et opérations :",
                difficulty: "easy",
                solution: `let x = 5 ;;
let y = 10 ;;
x + y ;;                (* int = 15 *)
y - x ;;                (* int = 5 *)
let a = "bonjour" ;;
let b = " les M1" ;;
a ^ b ;;                (* string = "bonjour les M1" *)
1 = 2 ;;                (* bool = false *)`
            },
            {
                question: "Manipulation des types et conversions :",
                difficulty: "medium",
                solution: `let l1 = [] ;;              (* 'a list = [] *)
let l2 = [1.; 7.; 2.5] ;;  (* float list = [1.; 7.; 2.5] *)
let n = (1, 2.) ;;       (* int * float = (1, 2.) *)
floor(1.6) ;;            (* float = 1. *)
int_of_float(5.1) ;;     (* int = 5 *)
char_of_int(65) ;;       (* char = 'A' *)
float_of_int(5) ;;       (* float = 5. *)
int_of_char('5') ;;      (* int = 53 *)
ceil(1.5) ;;             (* float = 2. *)`
            },
            {
                question: "Expressions complexes et priorités :",
                difficulty: "medium",
                solution: `1 - 2 ;;                    (* int = -1 *)
1 - 2 - 3 ;;              (* int = -4 *)
1 - (-2) ;;               (* int = 3 *)
1 > 2 - 1 ;;              (* bool = false *)
"hello world".[6] ;;      (* char = 'w' *)
Char.code 'a' ;;          (* int = 97 *)`
            },
            
        ]
    },
    serie2: {
        title: "Série 2 - Fonctions et Applications",
        summary: "Cette série se concentre sur la définition et l'utilisation des fonctions, ainsi que sur la compréhension des types de fonctions.",
        exercises: [
            {
                question: "Écrivez une fonction qui prend deux entiers et retourne leur somme",
                difficulty: "easy",
                solution: `let somme a b = a + b
(* Type : int -> int -> int *)`
            },
            {
                question: "Écrivez une fonction qui prend un couple d'entiers et retourne leur somme",
                difficulty: "easy",
                solution: `let somme_couple (a, b) = a + b
(* Type : int * int -> int *)`
            },
            {
                question: "Écrivez une fonction qui prend deux entiers et retourne le minimum des deux",
                difficulty: "easy",
                solution: `let min a b = if a < b then a else b
(* Type : int -> int -> int *)`
            },
            {
                question: "Écrivez une fonction qui prend trois réels et retourne leur moyenne",
                difficulty: "easy",
                solution: `let moyenne a b c = (a +. b +. c) /. 3.0
(* Type : float -> float -> float -> float *)`
            },
            {
                question: "Pour chaque type de fonction, trouvez un exemple :",
                difficulty: "hard",
                solution: `(* int -> int -> int -> bool *)
let entre x y z = x <= y && y <= z

(* int -> bool *)
let est_positif x = x > 0

(* float -> float -> int *)
let compare_float a b = if a < b then -1 else if a > b then 1 else 0

(* int -> float -> string *)
let format_nombre i f = string_of_int i ^ " et " ^ string_of_float f

(* int -> (int -> int) -> int *)
let appliquer x f = f x

(* (int -> bool) -> int -> bool *)
let verifier predicat x = predicat x

(* ('a -> 'b) -> 'a -> 'b *)
let appliquer_fonction f x = f x

(* ('a -> 'b) -> 'a list -> 'b list *)
let map f liste = List.map f liste

(* ('a -> bool) -> 'a list -> bool *)
let existe predicat liste = List.exists predicat liste

(* int -> (int -> int) *)
let ajouter_n n = fun x -> x + n`
            },
            {
                question: "Écrivez une fonction qui calcule la somme des valeurs d'une fonction f entre n et m",
                difficulty: "medium",
                solution: `let rec somme_intervalle n m f =
  if n > m then 0
  else f n + somme_intervalle (n + 1) m f

(* Exemple d'utilisation *)
let carre x = x * x
let resultat = somme_intervalle 1 5 carre  (* 1² + 2² + 3² + 4² + 5² = 55 *)`
            }
        ]
    },
    serie3: {
        title: "Série 3 - Listes et Nombres Rationnels",
        summary: "Cette série aborde la manipulation des listes et la création d'un système de nombres rationnels avec opérations et normalisation.",
        exercises: [
            {
                question: "Définir une fonction abss qui calcule la valeur absolue d'un nombre entier",
                difficulty: "easy",
                solution: `let abss x = if x < 0 then -x else x
(* Type : int -> int *)`
            },
            {
                question: "Définir une fonction pgcd qui calcule le plus grand commun diviseur de deux nombres entiers",
                difficulty: "medium",
                solution: `let rec pgcd a b =
  let a = abss a in
  let b = abss b in
  if b = 0 then a
  else pgcd b (a mod b)
(* Type : int -> int -> int *)`
            },
            {
                question: "Écrire une fonction norm qui normalise une fraction (num, den)",
                difficulty: "medium",
                solution: `let norm (num, den) =
  let d = pgcd num den in
  let num_norm = num / d in
  let den_norm = den / d in
  if den_norm < 0 then (-num_norm, -den_norm)
  else (num_norm, den_norm)
(* Type : int * int -> int * int *)`
            },
            {
                question: "Définir les fonctions somme et produit pour les fractions",
                difficulty: "hard",
                solution: `let somme_frac (a, b) (c, d) =
  norm (a * d + c * b, b * d)

let produit_frac (a, b) (c, d) =
  norm (a * c, b * d)
(* Types : int * int -> int * int -> int * int *)`
            },
            {
                question: "Implémentez les fonctions de manipulation de listes :",
                difficulty: "medium",
                solution: `(* nième élément d'une liste *)
let rec nieme liste n =
  match liste with
  | [] -> failwith "Liste trop courte"
  | hd :: tl -> if n = 0 then hd else nieme tl (n-1)

(* longueur d'une liste *)
let rec lg liste =
  match liste with
  | [] -> 0
  | _ :: tl -> 1 + lg tl

(* concaténation de deux listes *)
let rec concat liste1 liste2 =
  match liste1 with
  | [] -> liste2
  | hd :: tl -> hd :: concat tl liste2

(* inversion d'une liste *)
let rec inverse liste =
  match liste with
  | [] -> []
  | hd :: tl -> concat (inverse tl) [hd]

(* aplatissement d'une liste de listes *)
let rec applatti liste =
  match liste with
  | [] -> []
  | hd :: tl -> concat hd (applatti tl)

(* dernier élément d'une liste non vide *)
let rec dernier liste =
  match liste with
  | [x] -> x
  | _ :: tl -> dernier tl
  | [] -> failwith "Liste vide"

(* test d'appartenance *)
let rec appartient x liste =
  match liste with
  | [] -> false
  | hd :: tl -> hd = x || appartient x tl

(* zip de deux listes *)
let rec zip liste1 liste2 =
  match liste1, liste2 with
  | [], _ -> []
  | _, [] -> []
  | hd1 :: tl1, hd2 :: tl2 -> (hd1, hd2) :: zip tl1 tl2`
            }
        ]
    },
    serie4: {
        title: "Série 4 - Types Personnalisés et Arbres Binaires",
        summary: "Cette série explore la création de types personnalisés (jours de la semaine) et la manipulation d'arbres binaires avec leurs différents parcours.",
        exercises: [
            {
                question: "Définir un type jour représentant les 7 jours de la semaine",
                difficulty: "easy",
                solution: `type jour = Lundi | Mardi | Mercredi | Jeudi | Vendredi | Samedi | Dimanche`
            },
            {
                question: "Écrire la fonction jour_suivant qui renvoie le jour suivant",
                difficulty: "easy",
                solution: `let jour_suivant j =
  match j with
  | Lundi -> Mardi
  | Mardi -> Mercredi
  | Mercredi -> Jeudi
  | Jeudi -> Vendredi
  | Vendredi -> Samedi
  | Samedi -> Dimanche
  | Dimanche -> Lundi`
            },
            {
                question: "Écrire les fonctions est_weekend et jour_de_travail",
                difficulty: "easy",
                solution: `let est_weekend j =
  match j with
  | Vendredi | Samedi -> true
  | _ -> false

let jour_de_travail j =
  not (est_weekend j)`
            },
            {
                question: "Écrire la fonction jours_travail qui filtre une liste de jours",
                difficulty: "medium",
                solution: `let rec jours_travail jours =
  match jours with
  | [] -> []
  | hd :: tl -> if jour_de_travail hd then hd :: jours_travail tl else jours_travail tl`
            },
            {
                question: "Écrire la fonction avance_jours qui avance de n jours",
                difficulty: "medium",
                solution: `let rec avance_jours j n =
  if n = 0 then j
  else avance_jours (jour_suivant j) (n - 1)`
            },
            {
                question: "Écrire la fonction jours_entre qui liste les jours entre deux dates",
                difficulty: "hard",
                solution: `let rec jours_entre_debut fin liste =
  if debut = fin then [debut]
  else debut :: jours_entre (jour_suivant debut) fin

let jours_entre j1 j2 = jours_entre j1 j2 []`
            },
            {
                question: "Écrire la fonction compte_jours qui compte les occurrences",
                difficulty: "hard",
                solution: `let rec compte_jours jours =
  let rec compter j liste =
    match liste with
    | [] -> 0
    | hd :: tl -> if hd = j then 1 + compter j tl else compter j tl
  in
  let tous_jours = [Lundi; Mardi; Mercredi; Jeudi; Vendredi; Samedi; Dimanche] in
  List.map (fun j -> (j, compter j jours)) tous_jours`
            },
            {
                question: "Proposer un type pour les arbres binaires",
                difficulty: "easy",
                solution: `type 'a arbre =
  | Vide
  | Noeud of 'a * 'a arbre * 'a arbre`
            },
            {
                question: "Écrire les fonctions pour les arbres binaires",
                difficulty: "medium",
                solution: `(* Taille d'un arbre *)
let rec taille arbre =
  match arbre with
  | Vide -> 0
  | Noeud(_, g, d) -> 1 + taille g + taille d

(* Nombre de feuilles *)
let rec nbre_feuilles arbre =
  match arbre with
  | Vide -> 0
  | Noeud(_, Vide, Vide) -> 1
  | Noeud(_, g, d) -> nbre_feuilles g + nbre_feuilles d

(* Hauteur d'un arbre *)
let rec hauteur arbre =
  match arbre with
  | Vide -> 0
  | Noeud(_, g, d) -> 1 + max (hauteur g) (hauteur d)

(* Parcours préfixe *)
let rec parcours_prefixe arbre =
  match arbre with
  | Vide -> []
  | Noeud(v, g, d) -> v :: parcours_prefixe g @ parcours_prefixe d

(* Parcours infixe *)
let rec parcours_infixe arbre =
  match arbre with
  | Vide -> []
  | Noeud(v, g, d) -> parcours_infixe g @ [v] @ parcours_infixe d

(* Parcours suffixe *)
let rec parcours_suffixe arbre =
  match arbre with
  | Vide -> []
  | Noeud(v, g, d) -> parcours_suffixe g @ parcours_suffixe d @ [v]`
            }
        ]
    },


    telechargements: {
    title: "📥 Téléchargement des Séries PDF",
    summary: "Téléchargez toutes les séries d'exercices au format PDF pour travailler hors ligne.",
    content: `
        <div class="pdf-downloads">
            <h1>Téléchargement des Séries PDF</h1>
            
            <div class="pdf-grid">
                <!-- Série 1 -->
                <div class="pdf-card">
                    <div class="pdf-card-header">
                        <h3>Série 1</h3>
                        <span class="pdf-badge">8 exercices</span>
                    </div>
                    <p class="pdf-description">Introduction et prise en main d'OCaml</p>
                    <div class="pdf-links">
                        <a href="pdf/Serie1.pdf" class="pdf-link" download>
                            <span class="pdf-icon"></span>
                            <span>Télécharger le PDF</span>
                        </a>
                    </div>
                </div>
                
                <!-- Série 2 -->
                <div class="pdf-card">
                    <div class="pdf-card-header">
                        <h3>Série 2</h3>
                        <span class="pdf-badge">7 exercices</span>
                    </div>
                    <p class="pdf-description">Fonctions et applications</p>
                    <div class="pdf-links">
                        <a href="pdf/Serie2.pdf" class="pdf-link" download>
                            <span class="pdf-icon"></span>
                            <span>Télécharger le PDF</span>
                        </a>
                    </div>
                </div>
                
                <!-- Série 3 -->
                <div class="pdf-card">
                    <div class="pdf-card-header">
                        <h3>Série 3</h3>
                        <span class="pdf-badge">10 exercices</span>
                    </div>
                    <p class="pdf-description">Listes et nombres rationnels</p>
                    <div class="pdf-links">
                        <a href="pdf/Serie3.pdf" class="pdf-link" download>
                            <span class="pdf-icon"></span>
                            <span>Télécharger le PDF</span>
                        </a>
                    </div>
                </div>
                
                <!-- Série 4 -->
                <div class="pdf-card">
                    <div class="pdf-card-header">
                        <h3>Série 4</h3>
                        <span class="pdf-badge">9 exercices</span>
                    </div>
                    <p class="pdf-description">Types personnalisés et arbres binaires</p>
                    <div class="pdf-links">
                        <a href="pdf/Serie4.pdf" class="pdf-link" download>
                            <span class="pdf-icon"></span>
                            <span>Télécharger le PDF</span>
                        </a>
                    </div>
                </div>
            </div>
            <!-- Série 5 -->
                <div class="pdf-card">
                    <div class="pdf-card-header">
                        <h3>Série 5 et 6 </h3>
                    </div>
                    <p class="pdf-description">paradigme logique</p>
                    <div class="pdf-links">
                        <a href="pdf/Serie5et6.pdf" class="pdf-link" download>
                            <span class="pdf-icon"></span>
                            <span>Télécharger le PDF</span>
                        </a>
                    </div>
                </div>
            </div>
            <!-- Série 6 -->
                <div class="pdf-card">
                    <div class="pdf-card-header">
                        <h3>Corrigé_serie5_ParadigmesProgrammation</h3>
                        <span class="pdf-badge">9 exercices</span>
                    </div>
                    <p class="pdf-description">Corrigé_serie ParadigmesProgrammation</p>
                    <div class="pdf-links">
                        <a href="pdf/Corrigé_serie5_ParadigmesProgrammation.pdf" class="pdf-link" download>
                            <span class="pdf-icon"></span>
                            <span>Télécharger le PDF</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    `
},
    // Ajoutez ces chapitres à la fin de l'objet chapters
casse_tete: {
    title: "Exercices Casse-Tête - Défi OCaml",
    summary: "Une collection d'exercices stimulants pour maîtriser OCaml. Essayez de les résoudre par vous-même avant de consulter les solutions !",
    theory: [
        {
            title: "Conseils pour réussir",
            content: `
                <div class="note">
                    <strong>Méthodologie recommandée :</strong>
                    <ul>
                        <li>Lisez attentivement l'énoncé et comprenez le problème</li>
                        <li>Écrivez d'abord les cas de base (conditions d'arrêt)</li>
                        <li>Testez votre fonction avec des valeurs simples</li>
                        <li>Utilisez le pattern matching pour gérer les différents cas</li>
                        <li>Pensez récursif ! C'est le cœur de la programmation fonctionnelle</li>
                    </ul>
                </div>
            `
        }
    ],
    exercises: [
        {
            category: "Calculs Mathématiques",
            items: [
                {
                    title: "Suite de Fibonacci (Double Récursivité)",
                    question: "Implémentez la suite de Fibonacci où fibo(n) = fibo(n-1) + fibo(n-2) avec fibo(0)=0 et fibo(1)=1",
                    hint: "Identifiez les deux conditions d'arrêt et traduisez directement la formule mathématique",
                    difficulty: "medium"
                },
                {
                    title: "Décomposition en Facteurs Premiers",
                    question: "Décomposez un nombre en ses facteurs premiers. Exemple : 1024 → [2;2;2;2;2;2;2;2;2;2]",
                    hint: "Utilisez un accumulateur pour stocker les facteurs et divisez successivement par les nombres premiers",
                    difficulty: "hard"
                },
                {
                    title: "Conversion entre Bases Numériques",
                    question: "Convertissez un nombre d'une base b vers une base b'. Implémentez d'abord de_b_en_10, puis de_10_en_b, et enfin de_b_en_b2",
                    hint: "Pour de_b_en_10, utilisez la position des chiffres et les puissances de la base",
                    difficulty: "hard"
                },
                {
                    title: "Nombres Parfaits",
                    question: "Vérifiez si un nombre est parfait (somme de ses diviseurs propres = lui-même). Exemple : 6 = 1 + 2 + 3",
                    hint: "Calculez la somme de tous les diviseurs stricts et comparez avec le nombre original",
                    difficulty: "medium"
                },
                   {
                    title: "Nombre de chiffres dans un nombre",
                    question: "Cette fonction prend en paramètre un entier et renvoie le nombre de chiffre(s) qui le compose(nt) exemple:nb_chiffre 9999 est 4",
                    hint: "- Pensez à la division entière d'un entier par 10.",
                    difficulty: "medium"
                },
                 {
                    title: "Nombres de Diviseurs",
                    question: "Cette fonction doit renvoyer le nombre total de diviseurs d'un entier naturel. exemple: nb_diviseurs 15 est 4 ",
                    hint: "- a est un diviseur de b ssi le reste de la division de b par a est nul. On ne fera que la version terminale",
                    difficulty: "medium"
                },
                  {
            title: "Coefficients Binomiaux",
            question: "Calculez les coefficients binomiaux C(n, k) de manière récursive et avec mémoïsation",
            hint: "Utilisez la formule C(n,k) = C(n-1,k-1) + C(n-1,k) avec C(n,0)=C(n,n)=1",
            difficulty: "medium"
        },
        {
            title: "Suite de Syracuse",
            question: "Générez la suite de Syracuse pour un nombre donné et trouvez le temps de vol",
            hint: "Si n pair → n/2, si impair → 3n+1. S'arrête à 1",
            difficulty: "easy"
        },
        {
            title: "Nombres de Armstrong",
            question: "Trouvez tous les nombres de Armstrong (égal à la somme des cubes de ses chiffres) dans un intervalle",
            hint: "Séparez les chiffres, calculez la somme des puissances et comparez",
            difficulty: "medium"
        }
            ]
        },
        {
            category: "Manipulation de Listes",
            items: [
                {
                    title: "Tri par Minimum Successif",
                    question: "Triez une liste en trouvant récursivement le minimum et en le plaçant en tête du résultat",
                    hint: "Combinez les fonctions de recherche de minimum et de suppression d'élément",
                    difficulty: "medium"
                },
                {
                    title: "Tri à Bulle",
                    question: "Implémentez le tri à bulle sur une liste en échangeant les éléments adjacents mal ordonnés",
                    hint: "Créez d'abord une fonction pour faire un passage complet, puis répétez jusqu'à ce que la liste soit triée",
                    difficulty: "hard"
                },
                {
                    title: "List4All (Map Personnalisé)",
                    question: "Créez votre propre fonction map qui applique une fonction à tous les éléments d'une liste",
                    hint: "Utilisez le pattern matching et la récursivité pour traiter tête et queue",
                    difficulty: "easy"
                },
                {
                    title: "Éléments Communs de Deux Listes",
                    question: "Trouvez les éléments communs à deux listes (sans doublons dans le résultat)",
                    hint: "Pour chaque élément de la première liste, vérifiez s'il appartient à la seconde",
                    difficulty: "medium"
                },{
                   title: "Regroupement par Clé",
            question: "Groupez les éléments d'une liste de paires par leur première composante",
            hint: "Utilisez une table de hachage ou triez puis regroupez les éléments consécutifs avec la même clé",
            difficulty: "medium"}
        
            ]
        },{
    category: "Récursivité Avancée",
    items: [
        {
            title: "Tours de Hanoï",
            question: "Résolvez le problème des Tours de Hanoï pour n disques",
            hint: "Déplacez n-1 disques vers le pivot, puis le plus grand, puis n-1 disques vers la destination",
            difficulty: "hard"
        },
        {
            title: "Génération de Permutations",
            question: "Générez toutes les permutations d'une liste",
            hint: "Pour chaque élément, générez récursivement les permutations du reste et insérez l'élément à chaque position",
            difficulty: "hard"
        },
        {
            title: "Sous-ensembles",
            question: "Générez tous les sous-ensembles d'un ensemble",
            hint: "Pour chaque élément, soit on l'inclut, soit on ne l'inclut pas",
            difficulty: "medium"
        },
        {
            title: "Combinaisons",
            question: "Générez toutes les combinaisons de k éléments parmi n",
            hint: "Soit on prend le premier élément et on choisit k-1 parmi les n-1 restants, soit on ne le prend pas et on choisit k parmi n-1",
            difficulty: "medium"
        }
    ]
},    
        {
            category: "Algorithmes Avancés",
            items: [
                {
                    title: "Analyse de Fréquence des Lettres",
                    question: "Comptez le nombre d'occurrences de chaque caractère dans une chaîne",
                    hint: "Transformez la string en liste de chars, puis utilisez un accumulateur pour compter",
                    difficulty: "medium"
                },
                {
                    title: "Jeu de Rôle Textuel",
                    question: "Créez un système simple de jeu de rôle avec personnages, races, classes et quêtes",
                    hint: "Utilisez des types sommes pour les races et classes, et des enregistrements pour les personnages",
                    difficulty: "hard"
                },
                {
                    title: "Estimation de π par Méthode Monte Carlo",
                    question: "Estimez π en générant des points aléatoires dans un carré et en comptant ceux dans le quart de cercle",
                    hint: "Le rapport points_dans_cercle / points_totaux ≈ π/4",
                    difficulty: "hard"
                },
                {
                    title: "Évaluation d'Expressions Logiques",
                    question: "Créez un évaluateur d'expressions booléennes avec AND, OR, NOT et des constantes",
                    hint: "Définissez un type somme pour les expressions et utilisez le pattern matching pour l'évaluation",
                    difficulty: "medium"
                },
                  {
            title: "Tours de Hanoï",
            question: "Résolvez le problème des Tours de Hanoï pour n disques",
            hint: "Déplacez n-1 disques vers le pivot, puis le plus grand, puis n-1 disques vers la destination",
            difficulty: "hard"
        },
        {
            title: "Génération de Permutations",
            question: "Générez toutes les permutations d'une liste",
            hint: "Pour chaque élément, générez récursivement les permutations du reste et insérez l'élément à chaque position",
            difficulty: "hard"
        },
        {
            title: "Sous-ensembles",
            question: "Générez tous les sous-ensembles d'un ensemble",
            hint: "Pour chaque élément, soit on l'inclut, soit on ne l'inclut pas",
            difficulty: "medium"
        },
        {
            title: "Combinaisons",
            question: "Générez toutes les combinaisons de k éléments parmi n",
            hint: "Soit on prend le premier élément et on choisit k-1 parmi les n-1 restants, soit on ne le prend pas et on choisit k parmi n-1",
            difficulty: "medium"
        }
            ]
        }
    ]
},


corrections: {
    title: "Corrections Détaillées des Exercices",
    summary: "Solutions complètes avec explications pas à pas. Essayez vraiment de résoudre les exercices par vous-même avant de regarder les solutions !",
    theory: [
        {
            title: "Comment aborder les corrections",
            content: `
                <div class="warning">
                    <strong>⚠️ AVERTISSEMENT :</strong>
                    <p>Ne consultez ces solutions qu'en dernier recours ! La vraie apprentissage vient de la lutte avec les problèmes.</p>
                    <p>Si vous êtes bloqué :</p>
                    <ul>
                        <li>Relisez l'énoncé attentivement</li>
                        <li>Testez avec des petits exemples sur papier</li>
                        <li>Écrivez les types que vous voulez pour votre fonction</li>
                        <li>Demandez de l'aide pendant les tutorats</li>
                    </ul>
                </div>
            `
        }
    ],
    solutions: [
        {
            category: "Solutions des Calculs Mathématiques",
            items: [
                {
                    title: "Fibonacci (Version Terminale Optimisée)",
                    problem: "Suite de Fibonacci en récursivité terminale",
                    solution: `let fibo n =
    let rec aux n acc1 acc2 =
        if n = 0 then acc2
        else aux (n-1) acc2 (acc1 + acc2)
    in aux n 1 0

(* Explication :
   - acc1 représente fibo(n-1)
   - acc2 représente fibo(n-2)
   - À chaque appel, on décale les valeurs
   - Complexité : O(n) au lieu de O(2^n) pour la version classique *)`
                },
                {
                    title: "Décomposition en Facteurs Premiers",
                    problem: "Décomposer un nombre en facteurs premiers",
                    solution: `let facteurs_premiers n =
    let rec decomposer n facteur acc =
        if n = 1 then acc
        else if n mod facteur = 0 then 
            decomposer (n / facteur) facteur (facteur :: acc)
        else decomposer n (facteur + 1) acc
    in List.rev (decomposer n 2 [])

(* Exemple : facteurs_premiers 45 = [3; 3; 5] *)
(* Explication :
   - On commence avec le plus petit facteur premier (2)
   - Si n est divisible, on ajoute le facteur et on continue
   - Sinon on passe au facteur suivant
   - On inverse à la fin pour avoir l'ordre croissant *)`
                },
                {
                    title: "Conversion de Bases",
                    problem: "Convertir entre différentes bases numériques",
                    solution: `(* De base b vers base 10 *)
let de_b_en_10 nombre base =
    let rec aux n mult acc =
        if n = 0 then acc
        else aux (n / 10) (mult * base) (acc + (n mod 10) * mult)
    in aux nombre 1 0

(* De base 10 vers base b *)
let de_10_en_b nombre base =
    let rec aux n acc =
        if n = 0 then (if acc = [] then [0] else acc)
        else aux (n / base) ((n mod base) :: acc)
    in aux nombre []

(* Conversion générale *)
let de_b_en_b2 nombre base_depart base_arrivee =
    de_10_en_b (de_b_en_10 nombre base_depart) base_arrivee`
                },{
            title: "Coefficients Binomiaux",
            problem: "Calculer C(n, k) récursivement avec mémoïsation",
            solution: `(* Version récursive naïve *)
let rec binom_naif n k =
    if k = 0 || k = n then 1
    else binom_naif (n - 1) (k - 1) + binom_naif (n - 1) k

(* Version avec mémoïsation *)
let binom_memo n k =
    let cache = Hashtbl.create 100 in
    let rec aux n k =
        if k = 0 || k = n then 1
        else
            try Hashtbl.find cache (n, k)
            with Not_found ->
                let result = aux (n - 1) (k - 1) + aux (n - 1) k in
                Hashtbl.add cache (n, k) result;
                result
    in
    if k < 0 || k > n then 0
    else aux n k

(* Version programmation dynamique (triangle de Pascal) *)
let binom_dp n k =
    if k < 0 || k > n then 0
    else if k = 0 || k = n then 1
    else
        let dp = Array.make_matrix (n + 1) (k + 1) 0 in
        for i = 0 to n do
            for j = 0 to min i k do
                if j = 0 || j = i then
                    dp.(i).(j) <- 1
                else
                    dp.(i).(j) <- dp.(i - 1).(j - 1) + dp.(i - 1).(j)
            done
        done;
        dp.(n).(k)

(* Test *)
let c_5_2 = binom_memo 5 2  (* 10 *)
let c_10_3 = binom_dp 10 3  (* 120 *)`
        },
        {
            title: "Suite de Syracuse",
            problem: "Générer la suite et trouver le temps de vol",
            solution: `let syracuse n =
    let rec aux current acc =
        if current = 1 then List.rev (1 :: acc)
        else
            let next = if current mod 2 = 0 then current / 2 else 3 * current + 1 in
            aux next (current :: acc)
    in
    aux n []

let temps_vol n =
    let rec aux current count =
        if current = 1 then count
        else
            let next = if current mod 2 = 0 then current / 2 else 3 * current + 1 in
            aux next (count + 1)
    in
    aux n 0

let altitude_maximale n =
    let rec aux current max_val =
        if current = 1 then max max_val 1
        else
            let next = if current mod 2 = 0 then current / 2 else 3 * current + 1 in
            aux next (max max_val current)
    in
    aux n n

(* Version avec accumulation des résultats *)
let analyse_syracuse n =
    let rec aux current suite temps alt_max =
        if current = 1 then 
            (List.rev (1 :: suite), temps, alt_max)
        else
            let next = if current mod 2 = 0 then current / 2 else 3 * current + 1 in
            aux next (current :: suite) (temps + 1) (max alt_max current)
    in
    aux n [] 0 n

(* Tests *)
let suite_6 = syracuse 6        (* [6; 3; 10; 5; 16; 8; 4; 2; 1] *)
let vol_6 = temps_vol 6         (* 8 *)
let alt_6 = altitude_maximale 6 (* 16 *)`
        },
        {
            title: "Nombres de Armstrong",
            problem: "Trouver les nombres de Armstrong dans un intervalle",
            solution: `let est_armstrong n =
    let chiffres = 
        let rec aux x acc =
            if x = 0 then acc
            else aux (x / 10) (x mod 10 :: acc)
        in
        if n = 0 then [0] else aux n []
    in
    let k = List.length chiffres in
    let somme = List.fold_left (fun acc chiffre -> 
        acc + int_of_float (float_of_int chiffre ** float_of_int k)
    ) 0 chiffres in
    somme = n

let nombres_armstrong min max =
    let rec aux current acc =
        if current > max then List.rev acc
        else if est_armstrong current then
            aux (current + 1) (current :: acc)
        else
            aux (current + 1) acc
    in
    aux min []

(* Version optimisée avec prédéfinition des puissances *)
let nombres_armstrong_opt min max =
    let results = ref [] in
    for n = min to max do
        let chiffres = ref [] in
        let temp = ref n in
        while !temp > 0 do
            chiffres := (!temp mod 10) :: !chiffres;
            temp := !temp / 10
        done;
        
        let k = List.length !chiffres in
        let somme = ref 0 in
        List.iter (fun chiffre ->
            somme := !somme + int_of_float (float_of_int chiffre ** float_of_int k)
        ) !chiffres;
        
        if !somme = n then results := n :: !results
    done;
    List.rev !results

(* Test *)
let armstrong_3_chiffres = nombres_armstrong 100 999
(* [153; 370; 371; 407] *)

let armstrong_4_chiffres = nombres_armstrong 1000 9999  
(* [1634; 8208; 9474] *)`
        }
                
            ]
        },
        {
            category: "Solutions des Manipulations de Listes",
            items: [
                {
                    title: "Tri par Minimum Successif",
                    problem: "Trier une liste en trouvant récursivement le minimum",
                    solution: `let tri_minimum liste =
    let rec trouver_min lst current_min =
        match lst with
        | [] -> current_min
        | x :: xs -> 
            if x < current_min then trouver_min xs x
            else trouver_min xs current_min
    
    let rec supprimer element lst =
        match lst with
        | [] -> []
        | x :: xs -> 
            if x = element then xs
            else x :: supprimer element xs
    
    let rec trier lst =
        match lst with
        | [] -> []
        | _ ->
            let min_val = trouver_min lst (List.hd lst) in
            min_val :: trier (supprimer min_val lst)
    
    in trier liste`
                },
                {
                    title: "Map Personnalisé (List4All)",
                    problem: "Implémenter sa propre fonction map",
                    solution: `let rec list4all f liste =
    match liste with
    | [] -> []
    | x :: xs -> f x :: list4all f xs

(* Version terminale *)
let list4all_terminal f liste =
    let rec aux lst acc =
        match lst with
        | [] -> List.rev acc
        | x :: xs -> aux xs (f x :: acc)
    in aux liste []

(* Types polymorphes :
   list4all : ('a -> 'b) -> 'a list -> 'b list
   Cela fonctionne pour n'importe quels types 'a et 'b *)`
                },
                {
                    title: "Éléments Communs",
                    problem: "Trouver l'intersection de deux listes",
                    solution: `let elements_communs liste1 liste2 =
    let rec appartient x lst =
        match lst with
        | [] -> false
        | y :: ys -> x = y || appartient x ys
    
    let rec intersection lst1 lst2 acc =
        match lst1 with
        | [] -> List.rev acc
        | x :: xs ->
            if appartient x lst2 && not (appartient x acc) then
                intersection xs lst2 (x :: acc)
            else
                intersection xs lst2 acc
    
    in intersection liste1 liste2 []`
                },
                {    title: "Nombre de Chiffre dans un Nombre",
                    problem: "trouver le nombre de chiffre(s) qui compose(nt) un entier",
                    solution: `let rec nb_chiffres x =
  if x / 10 = 0 then 1
  else 1 + nb_chiffres (x/10);;`},
{                    title: "Nombre de Diviseurs",
                    problem: "renvoyer le nombre total de diviseurs d'un entier naturel",
                 solution: `let rec nbdiv x div =
  if div = 1 then 1
  else if (x mod div) = 0 then 1 + (nbdiv x (div-1))
  else (nbdiv x (div-1)) ;;`}
            ]
        },
        {
    category: "Corrections - Récursivité Avancée",
    items: [
        {
            title: "Tours de Hanoï",
            problem: "Résoudre le problème pour n disques",
            solution: `let hanoi n =
    let rec aux n source intermediaire destination moves =
        if n = 1 then
            (source, destination) :: moves
        else
            let moves1 = aux (n - 1) source destination intermediaire moves in
            let moves2 = (source, destination) :: moves1 in
            aux (n - 1) intermediaire source destination moves2
    in
    aux n 'A' 'B' 'C' []

(* Version qui retourne aussi le nombre de coups *)
let hanoi_complet n =
    let rec aux n source intermediaire destination moves count =
        if n = 1 then
            ((source, destination) :: moves, count + 1)
        else
            let (moves1, count1) = aux (n - 1) source destination intermediaire moves count in
            let (moves2, count2) = ((source, destination) :: moves1, count1 + 1) in
            aux (n - 1) intermediaire source destination moves2 count2
    in
    let (moves, count) = aux n 'A' 'B' 'C' [] 0 in
    (List.rev moves, count)

(* Affichage des solutions *)
let afficher_hanoi n =
    let moves = hanoi n in
    List.iteri (fun i (src, dest) ->
        Printf.printf "Coup %d: Déplacer de %c vers %c\\n" (i + 1) src dest
    ) moves

(* Test *)
let solution_3_disques = hanoi 3
(* [('A', 'C'); ('A', 'B'); ('C', 'B'); ('A', 'C'); ('B', 'A'); ('B', 'C'); ('A', 'C')] *)

let (_, nb_coups) = hanoi_complet 3  (* 7 coups *)`
        },
        {
            title: "Génération de Permutations",
            problem: "Générer toutes les permutations d'une liste",
            solution: `let permutations lst =
    let rec insérer x = function
        | [] -> [[x]]
        | y :: ys as liste ->
            (x :: liste) :: (List.map (fun zs -> y :: zs) (insérer x ys))
    in
    let rec aux = function
        | [] -> [[]]
        | x :: xs ->
            List.concat (List.map (insérer x) (aux xs))
    in
    aux lst

(* Version avec accumulateur (plus efficace) *)
let permutations_tail lst =
    let rec insérer x lst acc =
        match lst with
        | [] -> (x :: []) :: acc
        | y :: ys ->
            let nouvelle_insertion = x :: lst in
            let autres_insertions = List.map (fun zs -> y :: zs) (insérer x ys []) in
            nouvelle_insertion :: (autres_insertions @ acc)
    in
    let rec aux restant acc =
        match restant with
        | [] -> acc
        | x :: xs ->
            let nouvelles_permutations = 
                List.concat (List.map (fun perm -> insérer x perm []) acc)
            in
            aux xs nouvelles_permutations
    in
    aux lst [[]]

(* Génération des permutations avec indices *)
let permutations_indices n =
    let rec aux restant acc =
        if restant = [] then [acc]
        else
            List.concat (List.map (fun i ->
                let reste = List.filter (fun j -> j <> i) restant in
                aux reste (i :: acc)
            ) restant)
    in
    aux (List.init n (fun i -> i)) [] 
    |> List.map List.rev

(* Tests *)
let perms_abc = permutations ['a'; 'b'; 'c']
(* [['a'; 'b'; 'c']; ['a'; 'c'; 'b']; ['b'; 'a'; 'c']; 
    ['b'; 'c'; 'a']; ['c'; 'a'; 'b']; ['c'; 'b'; 'a']] *)

let perms_3 = permutations_indices 3
(* [[0; 1; 2]; [0; 2; 1]; [1; 0; 2]; [1; 2; 0]; [2; 0; 1]; [2; 1; 0]] *)`
        },
        {
            title: "Sous-ensembles",
            problem: "Générer tous les sous-ensembles d'un ensemble",
            solution: `let sous_ensembles lst =
    let rec aux = function
        | [] -> [[]]
        | x :: xs ->
            let sous_ensembles_restants = aux xs in
            sous_ensembles_restants @ (List.map (fun sous -> x :: sous) sous_ensembles_restants)
    in
    aux lst

(* Version avec accumulateur (tail-recursive) *)
let sous_ensembles_tail lst =
    let rec aux restant acc =
        match restant with
        | [] -> acc
        | x :: xs ->
            let nouveaux_sous_ensembles = 
                List.fold_left (fun acc_actuel sous ->
                    (x :: sous) :: acc_actuel
                ) acc acc
            in
            aux xs nouveaux_sous_ensembles
    in
    aux lst [[]]

(* Sous-ensembles de taille k *)
let sous_ensembles_taille k lst =
    let rec aux k restant acc =
        if k = 0 then [acc]
        else match restant with
            | [] -> []
            | x :: xs ->
                let avec_x = aux (k - 1) xs (x :: acc) in
                let sans_x = aux k xs acc in
                avec_x @ sans_x
    in
    if k < 0 || k > List.length lst then []
    else aux k lst [] 
    |> List.map List.rev

(* Test *)
let sous_ens_abc = sous_ensembles ['a'; 'b'; 'c']
(* [[]; ['c']; ['b']; ['b'; 'c']; ['a']; ['a'; 'c']; ['a'; 'b']; ['a'; 'b'; 'c']] *)

let sous_ens_taille_2 = sous_ensembles_taille 2 ['a'; 'b'; 'c']
(* [['a'; 'b']; ['a'; 'c']; ['b'; 'c']] *)`
        },
        {
            title: "Combinaisons",
            problem: "Générer toutes les combinaisons de k éléments parmi n",
            solution: `(* Version récursive directe *)
let combinaisons k lst =
    if k = 0 then [[]]
    else match lst with
        | [] -> []
        | x :: xs ->
            let avec_x = List.map (fun comb -> x :: comb) (combinaisons (k - 1) xs) in
            let sans_x = combinaisons k xs in
            avec_x @ sans_x

(* Version avec génération des indices *)
let combinaisons_indices n k =
    let rec aux debut k acc =
        if k = 0 then [acc]
        else
            let resultat = ref [] in
            for i = debut to n - 1 do
                let combinaisons_restantes = aux (i + 1) (k - 1) (i :: acc) in
                resultat := combinaisons_restantes @ !resultat
            done;
            !resultat
    in
    if k < 0 || k > n then []
    else aux 0 k [] 
    |> List.map List.rev

(* Version optimisée avec mémoïsation *)
let combinaisons_memo n k =
    let cache = Hashtbl.create 100 in
    let rec aux n k =
        if k = 0 || k = n then 1
        else if k > n then 0
        else
            try Hashtbl.find cache (n, k)
            with Not_found ->
                let result = aux (n - 1) (k - 1) + aux (n - 1) k in
                Hashtbl.add cache (n, k) result;
                result
    in
    aux n k

(* Génération systématique *)
let toutes_combinaisons n =
    let rec aux k acc =
        if k > n then acc
        else aux (k + 1) (combinaisons_indices n k @ acc)
    in
    aux 0 []

(* Tests *)
let comb_3_2 = combinaisons 2 [1; 2; 3]  (* [[1; 2]; [1; 3]; [2; 3]] *)
let nb_comb_5_2 = combinaisons_memo 5 2   (* 10 *)
let toutes_comb_3 = toutes_combinaisons 3 
(* [[]; [0]; [1]; [2]; [0;1]; [0;2]; [1;2]; [0;1;2]] *)`
        }
    ]
},
        {
            category: "Solutions des Algorithmes Avancés",
            items: [
                {
                    title: "Analyse de Fréquence des Lettres",
                    problem: "Compter les occurrences de chaque caractère",
                    solution: `let frequence_lettres chaine =
    let rec compter_caracteres lst compteur =
        match lst with
        | [] -> compteur
        | c :: reste ->
            let nouveau_compteur =
                if List.mem_assoc c compteur then
                    (c, (List.assoc c compteur) + 1) ::
                    (List.remove_assoc c compteur)
                else
                    (c, 1) :: compteur
            in compter_caracteres reste nouveau_compteur
    
    let liste_caracteres = 
        let rec aux i acc =
            if i < 0 then acc
            else aux (i-1) (chaine.[i] :: acc)
        in aux (String.length chaine - 1) []
    
    in compter_caracteres liste_caracteres []`
                },
                {
                    title: "Jeu de Rôle Textuel",
                    problem: "Système simple de jeu de rôle",
                    solution: `(* Types pour le jeu *)
type race = Humain | Elf | Nain | Orc
type classe = Guerrier | Mage | Voleur | Archer
type personnage = {
    nom: string;
    niveau: int;
    pv: int;
    race: race;
    classe: classe;
    mutable xp: int
}

(* Création d'un personnage *)
let creer_personnage nom race classe = {
    nom = nom;
    niveau = 1;
    pv = 100;
    race = race;
    classe = classe;
    xp = 0
}

(* Système de combat simple *)
let combat attaquant defenseur =
    let degats = Random.int 20 + 10 in
    let defenseur = { defenseur with pv = defenseur.pv - degats } in
    (attaquant, defenseur, degats)

(* Quête avec choix *)
let rec quete personnage etape =
    match etape with
    | 1 -> 
        print_string "Vous arrivez à un croisement. Choisissez (1=Gauche, 2=Droite): ";
        let choix = read_line() in
        if choix = "1" then 
            let nouveau_pers = { personnage with xp = personnage.xp + 50 } in
            quete nouveau_pers 2
        else
            quete personnage 3
    | 2 -> 
        print_endline "Bon chemin! Vous gagnez 50 XP.";
        personnage
    | 3 -> 
        print_endline "Mauvais choix. Fin de la quête.";
        personnage
    | _ -> personnage`
                },
                {
                    title: "Estimation de π",
                    problem: "Estimer π par la méthode Monte Carlo",
                    solution: `let estimer_pi nb_points =
    let points_dans_cercle = ref 0 in
    
    for i = 1 to nb_points do
        let x = Random.float 1.0 in
        let y = Random.float 1.0 in
        if x *. x +. y *. y <= 1.0 then
            incr points_dans_cercle
    done;
    
    4.0 *. (float_of_int !points_dans_cercle) /. (float_of_int nb_points)

(* Version fonctionnelle pure *)
let estimer_pi_fonctionnel nb_points =
    let rec generer_points n dans_cercle =
        if n = 0 then dans_cercle
        else
            let x = Random.float 1.0 in
            let y = Random.float 1.0 in
            let nouveau_dans_cercle = 
                if x *. x +. y *. y <= 1.0 then dans_cercle + 1
                else dans_cercle
            in generer_points (n-1) nouveau_dans_cercle
    
    let dans_cercle = generer_points nb_points 0 in
    4.0 *. (float_of_int dans_cercle) /. (float_of_int nb_points)`
                }
            ]
        }
    ]
}

};


// Éléments DOM
const themeToggle = document.getElementById('themeToggle');
const chapterLinks = document.querySelectorAll('.sidebar a');
const chapterContent = document.getElementById('chapterContent');

// Gestion du mode sombre
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀' : '☽';
    
    // Sauvegarder la préférence
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Navigation entre chapitres
chapterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Mettre à jour la navigation active
        chapterLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Charger le contenu du chapitre
        const chapterId = link.getAttribute('data-chapter');
        loadChapter(chapterId);
        
        // Sauvegarder le chapitre actif
        localStorage.setItem('activeChapter', chapterId);
    });
});

// Charger un chapitre
function loadChapter(chapterId) {
    const chapter = chapters[chapterId];
    if (!chapter) return;
    
    let html = '';
    
    // Contenu spécial pour la page d'accueil
    if (chapterId === 'accueil') {
        html = chapter.content;
    } 
    else if (chapterId === 'casse_tete') {
        html = `
            <h1 class="chapter-title">${chapter.title}</h1>
            <div class="summary">
                <h3>Défis OCaml</h3>
                <p>${chapter.summary}</p>
            </div>
            ${chapter.theory.map(section => `
                <div class="theory">
                    <h3>${section.title}</h3>
                    <div class="theory-content">${section.content}</div>
                </div>
            `).join('')}
            ${chapter.exercises.map(category => `
                <div class="exercise-category">
                    <h4>${category.category}</h4>
                    ${category.items.map(exercise => `
                        <div class="exercise-item-detailed">
                            <h5>${exercise.title}</h5>
                            <p><strong>Énoncé :</strong> ${exercise.question}</p>
                            <div class="hint">
                                <strong>Indice :</strong> ${exercise.hint}
                            </div>
                            <span class="exercise-difficulty ${exercise.difficulty}">${exercise.difficulty}</span>
                        </div>
                    `).join('')}
                </div>
            `).join('')}
        `;
    } 
    // Section pour les corrections
    else if (chapterId === 'corrections') {
        html = `
            <h1 class="chapter-title">${chapter.title}</h1>
            <div class="summary">
                <h3>Solutions Complètes</h3>
                <p>${chapter.summary}</p>
            </div>
            ${chapter.theory.map(section => `
                <div class="theory">
                    <h3>${section.title}</h3>
                    <div class="theory-content">${section.content}</div>
                </div>
            `).join('')}
            ${chapter.solutions.map(category => `
                <div class="solution-category">
                    <h4>${category.category}</h4>
                    ${category.items.map(solution => `
                        <div class="solution-item">
                            <h5>${solution.title}</h5>
                            <div class="problem-statement">
                                <strong>Problème :</strong> ${solution.problem}
                            </div>
                            <div class="solution-code">
                                <pre><code>${solution.solution}</code></pre>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `).join('')}
        `;
    }
    else if (chapterId === 'telechargements') {
    html = `
        <h1 class="chapter-title">${chapter.title}</h1>
        <div class="summary">
            <h3>Résumé</h3>
            <p>${chapter.summary}</p>
        </div>
        ${chapter.content}
    `;
}
   
    else {
        html = `
            <h1 class="chapter-title">${chapter.title}</h1>
            <div class="summary">
                <h3>Résumé</h3>
                <p>${chapter.summary}</p>
            </div>
        `;
        
        // Section d'installation (si disponible)
        if (chapter.installation) {
            html += `
                <div class="installation">
                    <h3>Guide d'installation</h3>
                    <div class="installation-tabs">
                        <button class="installation-tab active" data-os="linux">Linux</button>
                        <button class="installation-tab" data-os="windows">Windows</button>
                        <button class="installation-tab" data-os="mac">Mac OS</button>
                    </div>
                    <div class="installation-content active" id="linux-content">
                        <h4>${chapter.installation.linux.title}</h4>
                        ${chapter.installation.linux.steps.map((step, index) => `
                            <div class="step">
                                <div class="step-title">
                                    <span class="step-number">${index + 1}</span>
                                    ${step.title}
                                </div>
                                <div class="step-content">${step.content}</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="installation-content" id="windows-content">
                        <h4>${chapter.installation.windows.title}</h4>
                        ${chapter.installation.windows.steps.map((step, index) => `
                            <div class="step">
                                <div class="step-title">
                                    <span class="step-number">${index + 1}</span>
                                    ${step.title}
                                </div>
                                <div class="step-content">${step.content}</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="installation-content" id="mac-content">
                        <h4>${chapter.installation.mac.title}</h4>
                        ${chapter.installation.mac.steps.map((step, index) => `
                            <div class="step">
                                <div class="step-title">
                                    <span class="step-number">${index + 1}</span>
                                    ${step.title}
                                </div>
                                <div class="step-content">${step.content}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // Section théorie (si disponible)
        if (chapter.theory) {
            html += `<div class="theory"><h3>Théorie</h3>`;
            chapter.theory.forEach(section => {
                html += `
                    <div class="theory-section">
                        <h4>${section.title}</h4>
                        <div class="theory-content">${section.content}</div>
                    </div>
                `;
            });
            html += `</div>`;
        }
        
        // Ajouter les exemples
        if (chapter.examples && chapter.examples.length > 0) {
            html += `<div class="example"><h3>Exemples</h3>`;
            chapter.examples.forEach(example => {
                html += `
                    <div class="example-item">
                        <h4>${example.title}</h4>
                        <pre><code>${example.code}</code></pre>
                    </div>
                `;
            });
            html += `</div>`;
        }
        
        // Ajouter les exercices
        if (chapter.exercises && chapter.exercises.length > 0) {
            html += `<div class="exercise"><h3>Exercices</h3>`;
            chapter.exercises.forEach((exercise, index) => {
                html += `
                    <div class="exercise-item">
                        <p><strong>Exercice ${index + 1}:</strong> ${exercise.question}</p>
                        <span class="exercise-difficulty ${exercise.difficulty}">${exercise.difficulty}</span>
                        <button class="solution-toggle" data-index="${index}">Voir la solution</button>
                        <div class="solution-content" id="solution-${index}">
                            <pre><code>${exercise.solution}</code></pre>
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
        }
    }
    
    chapterContent.innerHTML = html;
    
    // Ajouter les écouteurs d'événements pour les solutions
    document.querySelectorAll('.solution-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            const solution = document.getElementById(`solution-${index}`);
            solution.classList.toggle('show');
            button.textContent = solution.classList.contains('show') ? 'Cacher la solution' : 'Voir la solution';
        });
    });
    
    // Ajouter les écouteurs d'événements pour les onglets d'installation
    if (chapter.installation) {
        document.querySelectorAll('.installation-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const os = tab.getAttribute('data-os');
                
                // Mettre à jour les onglets actifs
                document.querySelectorAll('.installation-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Mettre à jour le contenu actif
                document.querySelectorAll('.installation-content').forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(`${os}-content`).classList.add('active');
            });
        });
    }
}

// Charger les préférences utilisateur au démarrage
function loadUserPreferences() {
    // Mode sombre
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀';
    }
    
    // Chapitre actif
    const activeChapter = localStorage.getItem('activeChapter') || 'accueil';
    document.querySelector(`[data-chapter="${activeChapter}"]`).classList.add('active');
    loadChapter(activeChapter);
}

// Initialisation

document.addEventListener('DOMContentLoaded', loadUserPreferences);










