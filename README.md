# WINK-vscode-extension
VScode extension for SCs language support 

# Notes for developers (for me)
1. I will split project by 2 git submodules after the development is completed. 
2. I will add webpack config.
3. It is a bad idea to generate JS implementation of the ANTLR parser. You need to add some configuration to link JS files from TS and JS files from ANTLR. Maybe this issue can be solved by webpack, but this is a waste of time, as it provides nearly no benefits. 

