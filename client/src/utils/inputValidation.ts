export const firstnameValidation = {
    id: "firstname",
    label: "firstname",
    placeHolder: 'Enter your first name...',
    type: "text",
    name: 'firstname',
    validation: {
      required: { value: true, message: 'required' },
      minLength: { value: 3, message: 'min 3 characters' }
    }
};

export const lastnameValidation = {
    id: "lastname",
    label: "lastname",
    placeHolder: 'Enter your last name...',
    type: "text",
    name: 'lastname',
    validation: {
      required: { value: true, message: 'required' },
      minLength: { value: 3, message: 'min 3 characters' }
    }
};

type CheckEmailAvaliability = (email: string) => Promise<boolean>

export const emailValidation = (checkIfEmailExists: CheckEmailAvaliability) => ({
    id: "email",
    label: "email",
    placeHolder: 'Enter your email...',
    type: "text",
    name: 'email',
    validation: {
      required: { value: true, message: 'required' },
      pattern: {
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Invalid email address',
      },
      validate: async (value: string) => {
        const isEmailAvailable = await checkIfEmailExists(value);
        if (isEmailAvailable) {
          return 'Email already exists';
        }
      }
    }
  });

export const imgValidation = {
    id: "img",
    label: "img",
    placeHolder: 'Enter your img src...',
    type: "text",
    name: 'img',
    validation: {
      required: { value: true, message: 'required' },
    }
};

export const countryValidation = {
    id: "country",
    label: "country",
    placeHolder: 'Enter your country...',
    type: "text",
    name: 'country',
    validation: {
      required: { value: true, message: 'required' },
    }
  };

  export const cityValidation = {
    id: "city",
    label: "city",
    placeHolder: 'Enter your city...',
    type: "text",
    name: 'city',
    validation: {
      required: { value: true, message: 'required' },
    }
  };

  export const streetValidation = {
    id: "street",
    label: "street",
    placeHolder: 'Enter your Street...',
    type: "text",
    name: 'street',
    validation: {
      required: { value: true, message: 'required' },
    }
  };



