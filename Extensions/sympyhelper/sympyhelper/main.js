define([
    'base/js/namespace'
], function(Jupyter) {

    // Adds a cell above current cell (will be top if no cells)
    var sympy_helper_derivitive = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`
bob = Derivative(cos(x), x)
bob
bob.doit()
        `);
        check_for_imports();
    };
    var sympy_helper_divide = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`Rational(1, 2)`);
        check_for_imports();
    };
    var sympy_helper_equation = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`Eq(x + 1, 4)`);
        check_for_imports();
    };
    var sympy_helper_graph = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`
p = plot(x**2, (x, -5, 5))
t = symbols('t')
kathy = plot_parametric(cos(t), sin(t), (t, -5, 5), show=False)
kathy.show()
x, y = symbols('x y')
plot3d(x*y, (x, -5, 5), (y, -5, 5))
        `);
        check_for_imports();
    };
    var sympy_helper_integral = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`integrate(exp(-x), (x, 0, oo))`);
        check_for_imports();
    };
    var sympy_helper_limit = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`limit(sin(x)/x, x, 0)`);
        check_for_imports();
    };
    var sympy_helper_matrix = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`
M = Matrix([[1,2,3], [4,5,6]])
M
M[:, 2]
M.det()
M.inv()
M.norm()

eye(4)
zeros(3)
ones(2)

v1 = Matrix([1,2,3])
v2 = Matrix([4,5,6])
v1.cross(v2)
v1.dot(v2)
        `);
        check_for_imports();
    };
    var sympy_helper_root = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`integral`);
        check_for_imports();
    };
    var sympy_helper_xyz = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`x, y, z = symbols("x y z")`);
        check_for_imports();
    };
    var check_for_imports = function() {
        sympy_is_imported = false;
        Jupyter.notebook.get_cells().forEach(cell => {
            if(cell.input[0].innerText.includes('from sympy import *')) {
                sympy_is_imported = true;
            }
        });
        if (!sympy_is_imported) {
            import_sympy()
        }
    };
    var import_sympy = function() {
        Jupyter.notebook.get_cells().forEach(cell => {
            Jupyter.notebook.select_prev()
        });
        Jupyter.notebook.insert_cell_above('code').set_text(`
from IPython.core.interactiveshell import InteractiveShell
InteractiveShell.ast_node_interactivity = "all"
from sympy import *
from sympy.plotting import *
from sympy.matrices import *
init_printing()
        `);
        Jupyter.notebook.select_prev();
        Jupyter.notebook.execute_cell_and_select_below();
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

