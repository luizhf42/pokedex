const input = document.querySelector("#input");

const formatInput = () => {
  let formattedInput = input.value;

  formattedInput = formattedInput.trim();
  formattedInput = formattedInput.replace(" ", "-");
  formattedInput = formattedInput.toLowerCase();

  return formattedInput;
};

export { input, formatInput };
