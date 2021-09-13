export const formTypeFields =[
    {
      type: 'text',
      name: 'firstname',
      label: 'First Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'lastname',
      label: 'Last Name',
      value: '',
      required: true,
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      value: '',
      required: true,
    },
    {
        type: 'password',
        name: 'password',
        label: 'Password',
        value: '',
        required: true,
      },
      {
        type: 'dropdown',
        name: 'country',
        label: 'Country',
        value: 'in',
        required: true,
        options: [
          { key: 'in', label: 'India' },
          { key: 'us', label: 'USA' }
        ]
      },

    {
      type: 'radio',
      name: 'gender',
      label: 'Gender',
      value: 'male',
      required: true,
      options: [
        { key: 'male', label: 'Male' },
        { key: 'female', label: 'Female' }
      ]
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      value: '',
      required: true,
      options: [
        { key: 'f', label: 'Fishing' },
        { key: 'c', label: 'Cooking' }
      ]
    }
  ];