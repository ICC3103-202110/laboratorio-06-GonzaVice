
function transform_value(value, begin_unit, end_unit)
{
    if(begin_unit == "Kelvin")
    {
        if(end_unit == "Kelvin")
        {
            return value;
        }
        else if(end_unit == "Celsius")
        {
            return (value - 273.15);
        }
        else
        {
            return ((value - 273.15)*(9/5) + 32);
        }
    }
    else if(begin_unit == "Celsius")
    {
        if(end_unit == "Kelvin")
        {
            return (value + 273.15);
        }
        else if(end_unit == "Celsius")
        {
            return value;
        }
        else
        {
            return ((value * (9/5)) + 32);
        }
    }
    else
    {
        if(end_unit == "Kelvin")
        {
            return (((value - 32) * 5/9) + 273.15);
        }
        else if(end_unit == "Celsius")
        {
            return ((value - 32) * 5/9);
        }
        else
        {
            return value;
        }
    }
}

function update(model, choose_left, value, begin_unit, end_unit)
{
    if(choose_left == true)
    {
        const transformed_value = transform_value(value, begin_unit, end_unit);
        return{
            ...model,
            choose_left: choose_left,
            left_value: value,
            left_unit: begin_unit,
            right_value: transformed_value,
            right_unit: end_unit
        }
    }
    else
    {
        const transformed_value = transform_value(value, begin_unit, end_unit);
        return{
            ...model,
            choose_left: choose_left,
            left_value: transformed_value,
            left_unit: end_unit,
            right_value: value,
            right_unit: begin_unit
        }
    }
};

// Exportation
module.exports = {
    update
}