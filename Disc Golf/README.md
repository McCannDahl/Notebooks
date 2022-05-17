# Notebooks
This is collection of awesome jupyter notebooks made by McCann. These notbooks are hosted by Volia here https://voila-notebooks.herokuapp.com/

## Quickstart
- create a virtual environment `python3 -m venv myvenv`
- activate virtual environment `source myvenv/bin/activate` if non-windows or `.\myvenv\Scripts\Activate` if powershell
- clone frispy `git clone https://github.com/tmcclintock/FrisPy.git`, install dependancies `pip install -r ../../temp2/FrisPy/requirements.txt`, then install it `cd ../../temp2/FrisPy` & `python setup.py install`
- link virtual environment to jupyter `ipython kernel install --user --name=myvenv`
- install/upgrade needed packages with `pip install --upgrade --force-reinstall -r requirements.txt` or `pip install _____`
- run jupyter lab `juptyer-lab` and navigate here `http://localhost:8888/lab`
- or run jupyter notebook `jupyter notebook`
- select the virtual environment kernel

![image](https://user-images.githubusercontent.com/19883817/158938210-311dc121-ab91-4572-b876-d3edda67387f.png)

7. for widgets to work correctly you may need to install this extension `jupyter nbextension enable --py --sys-prefix widgetsnbextension`
