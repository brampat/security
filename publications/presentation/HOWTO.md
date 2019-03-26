# Start

This directory holds slide-decks on Security & Privacy for use in Secure Programming Awareness trainings


## Slide-decks
How to create and use slide-decks created in RevealJS and Markdown format

### Quickstart

Start webserver with (needs Python):

```python
python -m SimpleHTTPServer 8000
```

Open [localhost](http://localhost:8000) on port 8000


## Details

The index.html page initiates all RevealJS files needed and loads a markdown file formatted to display a RevealJS slide-deck.
You can reference another slide-deck in this line of code:

```$html
<section data-markdown="./README.md" data-separator="^\n---\n$" data-separator-vertical="^\n--\n$" data-separator-notes="^-- Notes --"></section>
```
