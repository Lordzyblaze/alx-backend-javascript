export default function guardrail(mathFunction) {
  const queue = [];
  let erres;
  try {
    erres = mathFunction();
  } catch (error) {
   erres = `Error: ${error.message}`;
  }
  queue.push(erres);
  queue.push('Guardrail was processed');

  return queue;
}
