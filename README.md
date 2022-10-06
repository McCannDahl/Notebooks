# Notebooks
This is collection of awesome jupyter notebooks made by McCann. These notbooks are hosted by Volia here https://voila-notebooks.herokuapp.com/

## Quickstart
1. create a virtual environment `python3 -m venv myvenv`
2. activate virtual environment `source myvenv/bin/activate` if non-windows or `.\myvenv\Scripts\Activate` if powershell
3. link virtual environment to jupyter `ipython kernel install --user --name=myvenv`
4. install/upgrade needed packages with `pip install --upgrade --force-reinstall -r requirements.txt` or `pip install _____` (you may need to install frispy manually)
5. run jupyter lab `juptyer-lab` and navigate here `http://localhost:8888/lab`
6. select the virtual environment kernel

![image](https://user-images.githubusercontent.com/19883817/158938210-311dc121-ab91-4572-b876-d3edda67387f.png)

7. for widgets to work correctly you may need to install this extension `jupyter nbextension enable --py --sys-prefix widgetsnbextension`

## Quickstart 2
1. `source myvenv/bin/activate`
1. `jupyter notebook`
2. `voila`

## Install extensions on Anaconda for Jupyter notebooks
`conda install -c conda-forge jupyter_contrib_nbextensions`

## Issues with Frispy
Frispy 1.1.0 for some reason can't be installed via pip. To install it, clone the repo and run `python .\setup.py install`