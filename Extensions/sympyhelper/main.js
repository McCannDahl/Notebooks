define([
    'base/js/namespace'
], function(Jupyter) {

    // Adds a cell above current cell (will be top if no cells)
    var sympy_helper_integral = function() {
        Jupyter.notebook.insert_cell_below('code').set_text(`integral`);
    };
    // Button to add default cell
    var defaultCellButton = function () {
        Jupyter.toolbar.add_buttons_group([
            Jupyter.keyboard_manager.actions.register ({
                'help': 'Integral',
                'icon' : 'icon-android',
                'handler': sympy_helper_integral
            }, 'sympy-helper-integral', 'Sympy Helper Integral')
        ])
    }
    // Run on start
    function load_ipython_extension() {
        defaultCellButton();
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});

