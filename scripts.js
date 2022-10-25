/** Lágmark bolla sem má velja. */
const MIN_NUM_OF_CUPS = 2;

/** Hámark bolla sem má velja. */
const MAX_NUM_OF_CUPS = 10;

/** Fjöldi spilaðra leikja. */
let played = 0;

/** Fjöldi unnra leikja. */
let won = 0;

/** Fjöldi stiga. */
let points = 0;

/**
 * Athugar hvort gefin tala sé á bilinu [min, max].
 *
 * @param {string | number} numAsString Tala sem á að athuga.
 * @param {number} min Lágmark sem tala má vera.
 * @param {number} max Hámark sem tala má vera.
 * @returns `true` ef tala er innan bils, annars `false`.
 */
function isValidNum(numAsString, min, max) {
  min = MIN_NUM_OF_CUPS;
  max = MAX_NUM_OF_CUPS;
  if (isNaN(numAsString)) {
    return false;
  }

  if (min > numAsString || numAsString > max) {
    return false;
  }

  return true;
}
console.assert(isValidNum(3) === true, `3 er valid tala`);
console.assert(isValidNum(25) === false, `25 er ekki valid tala`);
console.assert(isValidNum(1) === false, `1 er ekki valid tala`);
function isValidChoice(numAsString, min, max) {
  min = MIN_NUM_OF_CUPS;
  max = numOfCups;
  if (isNaN(numAsString)) {
    return false;
  }
}

/**
 * Nær í gisk frá notanda.
 *
 * @param {number} numOfCups Heildar fjöldi bolla.
 * @returns `null` ef notandi hætti við, annars vali notanda sem tölu.
 */
function getChoice(numOfCups) {
  if (numOfCups === null) {
    return false;
  }
  return true;
}

/**
 * Skilar tölu af handahófi á bilinu [min, max].
 *
 * @param {number} min Lágmark bils.
 * @param {number} max Hámark bils.
 * @returns Tala af handahófi á bili [min, max].
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Spilum leik.
 */
function play() {
  do {
    const numOfCups = prompt(`Hve marga bolla?
Verður að vera gildi á bilinu [${MIN_NUM_OF_CUPS}, ${MAX_NUM_OF_CUPS}].
Þú færð N-1 fyrir að finna bolta í N bollum.
Ýttu á cancel eða ESC til að hætta.`);

    // Ýtt á ESC/Cancel
    if (numOfCups === null) {
      return;
    }
    if (!isValidNum(numOfCups)) {
      console.error(`${numOfCups} er ekki löglegt gildi. `);
      return;
    }
    const max = numOfCups;
    const min = 1;
    const choice = prompt(`hvaða bolla veluru af ${numOfCups}?`);
    const choiceNumber = Number.parseInt(choice, 10);
    const slembi = randomNumber(min, max);

    if (choiceNumber == slembi) {
      point = max - 1;
      points += max - 1;
      won += 1;
      alert(`Rétt! þú færð ${point} stig`);
    } else {
      alert(`Rangt! boltinn var undir ${slembi}`);
    }
    played += 1;
  } while (confirm(`spila aftur?`));
}

/**
 * Birtir stöðu spilara.
 */
function games() {
  if (played == 0) {
    console.log(`þú hefur ekki spilað neina leiki`);
  } else {
    console.log(
      `Leikir spilaðir: ${played}. Unnir leikir: ${won}. Stig: ${points}.`
    );
  }
  /* TODO útfæra */
}
