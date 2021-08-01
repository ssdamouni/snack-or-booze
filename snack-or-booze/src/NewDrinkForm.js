import React, { useState } from "react";
import SnackOrBoozeApi from "./Api";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import uuid from "uuid/v4";

/** Form for creating a new item to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

  function NewDrinkForm() {
    async function addMenuItem(payload){
      const res = await SnackOrBoozeApi.addDrink(payload)
      console.log(res);
    }
    const [formData, setFormData] = useState({
      id: "",
      name: "",
      description: "",
      recipe: "",
      serve: ""
    });

  /** Send {name, quantity} to parent
   *    & clear form. */

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  
  const getData = evt => {
    evt.preventDefault();
    addMenuItem({ ...formData, id: uuid() });
    setFormData({ name: "", description: "", recipe: "", serve: "" });
  };
  /** render form */

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>
            What new Drink do you want?
          </CardTitle>
          <CardText>
            Your imagination is the limit for booze...
          </CardText>
            <form onSubmit={getData}>
              <label htmlFor="name">Name of Item:</label>
              <input
                type="string"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <label htmlFor="description">Description:</label>
              <input
                type="string"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />

              <label htmlFor="recipe">Color:</label>
              <input
                id="recipe"
                name="recipe"
                value={formData.recipe}
                onChange={handleChange}
              />

              <label htmlFor="serve">Color:</label>
              <input
                id="serve"
                name="serve"
                value={formData.serve}
                onChange={handleChange}
              />

            
              <button>Add a new drink!</button>
            </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default NewDrinkForm;
