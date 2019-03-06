export const auth = async (name, pass) => {
  const rawData = await fetch(
    `https://loft-taxi.glitch.me/auth?username=${name}&password=${pass}`
  );
  return await rawData.json();
};
export const getAddress = async () => {
  const rawData = await fetch(`https://loft-taxi.glitch.me/addressList`);
  return await rawData.json();
};
export const getCoords = async coords => {
  const { first, second } = coords;
  const rawData = await fetch(
    `https://loft-taxi.glitch.me/route?address1=${first}&address2=${second}`
  );
  return await rawData.json();
};

export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
