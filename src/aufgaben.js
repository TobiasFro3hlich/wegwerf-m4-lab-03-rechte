export function aufgabeAnlegen(titel) {
  const sauber = String(titel ?? "").trim();
  if (sauber === "") throw new Error("Titel darf nicht leer sein");
  return { titel: sauber, erledigt: false };
}

export function erledigen(aufgabe) {
  return { ...aufgabe, erledigt: true };
}
