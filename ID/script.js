function generateRandomID(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generateLetterID(length, caseType = "mixed") {
  let letters = '';
  if (caseType === "upper") {
    letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else if (caseType === "lower") {
    letters = 'abcdefghijklmnopqrstuvwxyz';
  } else {
    letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  }
  let result = '';
  for (let i = 0; i < length; i++) {
    result += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return result;
}

function generateNumberID(length) {
  const numbers = '0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return result;
}

function generateUUID() {
  let template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return template.replace(/[xy]/g, function(c) {
    let r = Math.random() * 16 | 0;
    let v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function generateID() {
  const type = document.getElementById('type').value;
  let id = '';

  if (type === 'random') {
    id = generateRandomID(8);
  } else if (type === 'floweruuid') {
    id = 'Flower_r4sr0-' + generateUUID();
  } else if (type === 'letter') {
    id = generateLetterID(8, "mixed"); // Change to "upper" or "lower" if you want
  } else if (type === 'number') {
    id = generateNumberID(8);
  }

  document.getElementById('output').textContent = id;
}
