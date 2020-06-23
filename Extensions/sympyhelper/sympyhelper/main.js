define([
    'base/js/namespace'
], function(Jupyter) {

    // Adds a cell above current cell (will be top if no cells)
    var sympy_helper_derivitive = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`integral`);
    };
    var sympy_helper_divide = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`integral`);
    };
    var sympy_helper_equation = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`integral`);
    };
    var sympy_helper_graph = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`integral`);
    };
    var sympy_helper_integral = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`integral`);
    };
    var sympy_helper_limit = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`integral`);
    };
    var sympy_helper_matrix = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`integral`);
    };
    var sympy_helper_root = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`integral`);
    };
    var sympy_helper_xyz = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`integral`);
    };
    // Button to add default cell
    var defaultCellButton = function () {
        Jupyter.toolbar.add_buttons_group([
            Jupyter.keyboard_manager.actions.register ({
                'help': 'derivitive',
                'icon' : 'icon-derivitive',
                'handler': sympy_helper_derivitive
            }, 'sympy-helper-derivitive', 'Sympy Helper derivitive'),
            Jupyter.keyboard_manager.actions.register ({
                'help': 'divide',
                'icon' : 'icon-divide',
                'handler': sympy_helper_divide
            }, 'sympy-helper-divide', 'Sympy Helper divide'),
            Jupyter.keyboard_manager.actions.register ({
                'help': 'equation',
                'icon' : 'icon-equation',
                'handler': sympy_helper_equation
            }, 'sympy-helper-equation', 'Sympy Helper equation'),
            Jupyter.keyboard_manager.actions.register ({
                'help': 'graph',
                'icon' : 'icon-graph',
                'handler': sympy_helper_graph
            }, 'sympy-helper-graph', 'Sympy Helper graph'),
            Jupyter.keyboard_manager.actions.register ({
                'help': 'Integral',
                'icon' : 'icon-integral',
                'handler': sympy_helper_integral
            }, 'sympy-helper-integral', 'Sympy Helper Integral'),
            Jupyter.keyboard_manager.actions.register ({
                'help': 'limit',
                'icon' : 'icon-limit',
                'handler': sympy_helper_limit
            }, 'sympy-helper-limit', 'Sympy Helper limit'),
            Jupyter.keyboard_manager.actions.register ({
                'help': 'matrix',
                'icon' : 'icon-matrix',
                'handler': sympy_helper_matrix
            }, 'sympy-helper-matrix', 'Sympy Helper matrix'),
            Jupyter.keyboard_manager.actions.register ({
                'help': 'root',
                'icon' : 'icon-root',
                'handler': sympy_helper_root
            }, 'sympy-helper-root', 'Sympy Helper root'),
            Jupyter.keyboard_manager.actions.register ({
                'help': 'xyz',
                'icon' : 'icon-xyz',
                'handler': sympy_helper_xyz
            }, 'sympy-helper-xyz', 'Sympy Helper xyz')
        ]);
    }
    // Run on start
    function load_ipython_extension() {
        defaultCellButton();
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});

