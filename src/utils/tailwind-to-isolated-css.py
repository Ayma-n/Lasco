# The purpose of this script is to dynamically output a CSS that applies to an isolated component.
# If there are changes, Tailwind re-renders the output CSS.
# Then, it is converted to SCSS and the wrapping class is added to the file.
# Sass then processes the new SCSS file and outputs a CSS where the styling is only defined for the wrapping class.
# TODO: make it work with multiple wrapping classes

import time
import os
wrappingClass = input("Name of Wrapping CSS Class: ")

componentPath = "src/components/" + wrappingClass + ".js"
oldComponentCode = "" #What is this for?

def updateOutputCSS():
    os.system("npx tailwindcss -i src/tailwind/manual.css -o src/intermediary.css")
    os.system("cp src/intermediary.css src/intermediary.scss")

    with open("src/intermediary.scss", "r") as f:
        plainSCSS = f.read()

    newSCSS = "#" + wrappingClass + "{" + plainSCSS + "}"

    with open("src/output.scss", "a") as f:
        f.write(newSCSS);

    os.system("sass src/output.scss:src/output.css")
    time.sleep(2)
    print("Output CSS updated")

while True:
    with open(componentPath, "r") as f:
        componentCode = f.read()
    if componentCode != oldComponentCode:
        updateOutputCSS()
        oldComponentCode = componentCode
    time.sleep(0.1)