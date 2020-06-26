
# How to add this extension to Jupyter
1) find extensions folder
```
jupyter contrib nbextensions install
```
Look at the `Installing ....` not the `up to date ....`  
2) copy sympyhelper/ to the extensions folder  
The end result should look like this:
```
C:\Users\bob\anaconda3\envs\math with sympy\Lib\site-packages\jupyter_contrib_nbextensions\nbextensions\sympyhelper
----------main.js
----------description.yaml
----------README.md
```
3) run `jupyter contrib nbextensions install`
3) find the `.jupyter` folder by running 'jupyter --config-dir'
4) copy the 'custom' folder in 'custom css' to the `.jupyter` foler
```
~/.jupyter/custom
----------custom.css
----------fonts/
```
5) now start jupyter and you should see the new actions populate on the toolbar

![img](version1.PNG)


# Custom icons for Jupyter
1) Find .png on google
2) download it and crop it
3) use https://www.pngtosvg.com/ to turn it into a .svg
4) upload all .svg to https://icomoon.io/app/#
5) download & unzip & rename folder to custom
6) run `jupyter --config-dir` to find location of custom styles folder
7) move custom font folder to the .jupyter folder
8) rename style.css to custom.css
The end result should look like this:
```
~/.jupyter/custom
----------custom.css
----------fonts/
```

helpful tutorial on creating own font and adding it
https://mediatemple.net/blog/design-creative/creating-implementing-icon-font-tutorial/
