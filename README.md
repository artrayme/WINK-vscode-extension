# WINK-vscode-extension
VScode extension for SCs language support. Original project - [vs-code-ostis](https://github.com/ostis-dev/vs-code-ostis)

# Features
1. SCs highlighting 
2. SCs snippets
3. Autocompletion (simple provider)
4. Load SCs to sc-machine 
5. Open sc-web (also with uploaded SCs)

# How to use 
The description can be found in the original project. 
But there are some new features. You need to run ostis for them.
Important note: Use ctrl+shift+p to open the VScode command finder.

1. Upload active SCs to sc-machine and check it using sc-web.
Open any file with the correct SCs code and open the command finder.
Find the command "Save current SCs to the connected sc-machine" and click on it. 
Your SCs will be downloaded to the sc-machine and a new window with SCg will open in VScode.
<p align="center">
  <img src="./images/uploadSCs.png" alt="drawing"/>
</p>

2. Unload loaded SCs.
Open the loaded(!!!) SCs. 
Find the command "Delete current SCs from the connected sc-machine" and click on it.
Your SCs will be deleted from the sc-machine. But this function is not really needed, because when you load SCs again, it will automatically be deleted and loaded again.
And it will also automatically close the sc-web window for deleted SCs.
<p align="center">
  <img src="./images/unloadSCs.png" alt="drawing"/>
</p>

3. Upload all SCs files from your project.
Find the command "Save all scs files from the open project to sc-machine".
You will then be able to find all your entities in sc-machine. You can use sc-web in VScode or in the browser.

4. Unload all loaded SCs from sc-machine.
Find the command "Delete all SCs from the connected sc-machine".
This will delete all previously downloaded SCs from the sc-machine. 


<!-- # Notes for developers (for me)
1. I will split project by 2 git submodules after the development is completed. 
2. I will add webpack config.
3. It is a bad idea to generate JS implementation of the ANTLR parser. You need to add some configuration to link JS files from TS and JS files from ANTLR. Maybe this issue can be solved by webpack, but this is a waste of time, as it provides nearly no benefits.  -->

