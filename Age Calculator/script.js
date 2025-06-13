const birthdateInput = document.getElementById('birthdate');

const calculateButton = document.getElementById('calculate');
const resultParagraph = document.querySelector('p');

calculateButton.addEventListener('click', () => {
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();
    if (isNaN(birthdate.getTime())){
        resultParagraph.textContent = 'Please entern a valid date. ';

    }
    else{
    const ageInMilliseconds = today - birthdate;
    const ageInSeconds = ageInMilliseconds /1000;
    const ageInMiniutes = ageInSeconds / 60;
    const ageInHours = ageInMiniutes / 60;
    const ageInDays = ageInHours / 24;

    const ageInYears = Math.floor(ageInDays / 365.25); // considering leap years
    const remainingDays = Math.floor(ageInDays % 365.25);
    const remainingMonths = Math.floor(remainingDays / 30.44); // average days in a month
    const finalDays = Math.floor(remainingDays % 30.44);
    resultParagraph.textContent = `You are ${ageInYears} years, ${remainingMonths} months, and ${finalDays} days old.`;
    }



});