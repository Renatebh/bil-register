const inputs = [
  {
    id: 1,
    name: "firstName",
    type: "text",
    placeholder: "Navn",
    errorMessage: "Navn må fylles ut",
    required: true
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    placeholder: "Etternavn",
    errorMessage: "Etternavn må fylles ut",
    required: true
  },
  {
    id: 3,
    name: "age",
    type: "number",
    placeholder: "Alder",
    errorMessage: "Alder må fylles ut",
    required: true
  },
  {
    id: 4,
    name: "carsOwned",
    type: "text",
    placeholder: "Bilmodel",
    errorMessage: "Du må fylle ut bilmodel",
    required: true
  }
];

export default inputs;
