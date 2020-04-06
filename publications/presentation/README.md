# Start

This directory holds slide-decks on Security & Privacy for use in Secure Programming Awareness trainings


## Slide-decks

The slide-deck is written in Markdown and started with an HTML page that loads RevealJS and the appropriate Markdown files.
You can create or customize your own slidedeck by creating a customized version of the ```index.html``` page and the mark-down files listed in that file.

## Quickstart

### Customize the slide-deck:

* Copy the ```index.html``` page to your your own ```page.html```
* Remove any Markdown pages you don't want to cover in your presentation.
* Edit the presentation's agenda accordingly in ```introduction.md```

### Starting the presentation

* Install [RevealJS](https://github.com/hakimel/reveal.js/releases) so that there is a sub-folder ```presentation/revealjs``` containing these folders with RevealJS's sources:
  * css
  * js
  * lib
  * plugin etc.
* Start webserver with Python3 (preferred):

```python
python3 -m http.server
```

* Or Python2 (deprecated)
The old Python 2 way of doing this is:

```python
python -m SimpleHTTPServer 8000
```

* Open [localhost](http://localhost:8000) on port 8000
* On that page, enter key ```S``` for speaker-notes

## Details

The ```index.html``` page loads all RevealJS files needed and loads Markdown files formatted to display a RevealJS slide-deck.
You can reference another slide-deck (section) in this line of code:

```$html
<section data-markdown="./README.md" data-separator="^\n---\n$" data-separator-vertical="^\n--\n$" data-separator-notes="^-- Notes --"></section>
```

In this line, we control how RevealJS should read page-ends and section-ends. ```data-separator``` controls the section-end (next section is to the right) and ```data-separator-vertical``` controls page-end (next page is down). The ```data-separator-notes``` directive enables you to add speaker-notes that are displayed on the separate speaker-notes window (opened with key ```S```).

