const validate = (input) => {
    let error = {};
    if (!input.name) {
      error.name = "";
    } else if (!/[\s\w\:]{1,15}$/.test(input.name)) {
      error.name =
        "Too long";
    }

    if (!input.image) {
      error.description = "image required";
    } else if (!/(https?:\/\/.*\.(?:png|jpg))/i.test(input.description)) {
      error.description =
        "Must be a url image, from https in png or jpg format";
    }

    if (input.attack <= 0 && input.atk > 100 ) {
      error.atk = "attack must be between 0 and 100";
    } 

    if (input.defense <= 0 && input.atk > 100 ) {
      error.atk = "defense must be between 0 and 100";
    }

    return error;
  };

  export default validate