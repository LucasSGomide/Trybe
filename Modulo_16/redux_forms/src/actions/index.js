export const TEXT_INPUT = 'TEXT_INPUT';

export const textInput = (name, value) => ({
  type: TEXT_INPUT,
  [name]: value,
});
