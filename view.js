// Importation
const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');

function view_title()
{
    return chalk.green(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
};

function view_table(model)
{
    const {left_value} = model;
    const {left_unit} = model;
    const {right_value} = model;
    const {right_unit} = model;
    
    return [{
        'leftValue': left_value,
        'leftUnit': left_unit,
        'rightValue': right_value,
        'rightUnit': right_unit}
    ];
};