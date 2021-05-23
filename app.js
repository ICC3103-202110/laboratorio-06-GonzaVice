const {input_is_left, input_value, input_begin_unit, input_end_unit, visual} = require('./view');
const {init_model} = require('./model');
const {update} = require('./update');
const {printTable} = require('console-table-printer');

const state = {
    model: init_model,
    view_model: visual(init_model)
}


async function app(state, visual, update){
    while (true){
        const {model, view_model} = state;
        const {title, table} = view_model;

        //console.clear();
        console.log(title)
        printTable(table)
        
        const {choose_left} = await input_is_left(model);
        console.log(choose_left);
        const value = await input_value(model);
        console.log(value);
        const begin_unit = await input_begin_unit(model);
        console.log(begin_unit);
        const end_unit = await input_end_unit(model);
        console.log(end_unit);
        const updated_model = update(model, choose_left, value, begin_unit, end_unit);
        state = {
            ...state,
            model: updated_model,
            view_model: visual(updated_model)
        }
    }
}

app(state, visual, update);