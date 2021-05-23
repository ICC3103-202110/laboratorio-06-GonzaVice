
function transform_value(value, begin_unit, end_unit)
{
    console.log(begin_unit);
    if(begin_unit == 'Kelvin')
    {
        //console.log("Comenzó en K");
        if(end_unit == 'Kelvin')
        {
            new_value = value;
            //return value;
        }
        else if(end_unit == 'Celsius')
        {
            new_value = (value - 273.15);
            //return (value - 273.15);
        }
        else
        {
            new_value = ((value - 273.15)*(9/5) + 32);
            //return ((value - 273.15)*(9/5) + 32);
        }
    }
    else if(begin_unit == 'Celsius')
    {
        //console.log("Comenzó en C")
        if(end_unit == 'Kelvin')
        {
            new_value = (value + 273.15);
            //return (value + 273.15);
        }
        else if(end_unit == 'Celsius')
        {
            new_value = value;
            //return value;
        }
        else
        {
            new_value = ((value * (9/5)) + 32);
            //return ((value * (9/5)) + 32);
        }
    }
    else
    {
        //console.log("Comenzó en F")
        if(end_unit == 'Kelvin')
        {
            new_value = (((value - 32) * 5/9) + 273.15)
            //return (((value - 32) * 5/9) + 273.15);
        }
        else if(end_unit == 'Celsius')
        {
            new_value = ((value - 32) * 5/9);
            //return ((value - 32) * 5/9);
        }
        else
        {
            new_value = value;
            //return value;
        }
    }
    //console.log(new_value)
    return new_value;
}

function update(model, choose_left, value, begin_unit, end_unit)
{
    if(choose_left == true)
    {
        //console.log("Fue a la izquierda");
        const transformed_value = transform_value(value, begin_unit, end_unit);
        //console.log(transformed_value);
        return{
            ...model,
            choose_left: choose_left,
            left_value: value,
            left_unit: begin_unit,
            right_value: transformed_value,
            right_unit: end_unit,
        }
    }
    else
    {
        console.log("Fue a la derecha");
        const transformed_value = transform_value(value, begin_unit, end_unit);
        console.log(transformed_value);
        return{
            ...model,
            choose_left: choose_left,
            left_value: transformed_value,
            left_unit: end_unit,
            right_value: value,
            right_unit: begin_unit,
        }
    }
};

// Exportation
module.exports = {
    update
}