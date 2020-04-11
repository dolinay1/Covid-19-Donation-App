// VARIABLES

// Color changing variables
accordionButtons = document.querySelector("accordion-item");

// USA Totals Variables
usaTotalCases = document.getElementById("usaTotalCases");
usaTotalDeaths = document.getElementById("TotalDeaths");
usaActiveCases = document.getElementById("TotalActiveCases");
usaNewCases = document.getElementById("newDailyCases");
newDeaths = document.getElementById("newDailyDeaths");
usaRecordDate = document.getElementById("usaLatestDate");

// 1st state variables
stateName1 = document.getElementById("state-name-1");
stateTotalCount1 = document.getElementById("state-total-1");
stateRecoveredCount1 = document.getElementById("state-recovered-1");
stateDeathCount1 = document.getElementById("state-death-1");
stateNewCases1 = document.getElementById("new-state-deaths-1");
stateNewDeaths1 = document.getElementById("new-state-cases-1");
// stateRecordDate1 = document.getElementById("state-record-date-1");

// 2nd state variables
stateName2 = document.getElementById("state-name-2");
stateTotalCount2 = document.getElementById("state-total-2");
stateRecoveredCount2 = document.getElementById("state-recovered-2");
stateDeathCount2 = document.getElementById("state-death-2");
stateNewCases2 = document.getElementById("new-state-deaths-2");
stateNewDeaths2 = document.getElementById("new-state-cases-2");
// stateRecordDate2 = document.getElementById("state-record-date-2");

// 3rd state variables
stateName3 = document.getElementById("state-name-3");
stateTotalCount3 = document.getElementById("state-total-3");
stateRecoveredCount3 = document.getElementById("state-recovered-3");
stateDeathCount3 = document.getElementById("state-death-3");
stateNewCases3 = document.getElementById("new-state-deaths-3");
stateNewDeaths3 = document.getElementById("new-state-cases-3");
// stateRecordDate3 = document.getElementById("state-record-date-3");

// 4th state variables
stateName4 = document.getElementById("state-name-4");
stateTotalCount4 = document.getElementById("state-total-4");
stateRecoveredCount4 = document.getElementById("state-recovered-4");
stateDeathCount4 = document.getElementById("state-death-4");
stateNewCases4 = document.getElementById("new-state-deaths-4");
stateNewDeaths4 = document.getElementById("new-state-cases-4");
// stateRecordDate4 = document.getElementById("state-record-date-4");

// 5th state variables
stateName5 = document.getElementById("state-name-5");
stateTotalCount5 = document.getElementById("state-total-5");
stateRecoveredCount5 = document.getElementById("state-recovered-5");
stateDeathCount5 = document.getElementById("state-death-5");
stateNewCases5 = document.getElementById("new-state-deaths-5");
stateNewDeaths5 = document.getElementById("new-state-cases-5");
// stateRecordDate5 = document.getElementById("state-record-date-5");

// 6th state variables
stateName6 = document.getElementById("state-name-6");
stateTotalCount6 = document.getElementById("state-total-6");
stateRecoveredCount6 = document.getElementById("state-recovered-6");
stateDeathCount6 = document.getElementById("state-death-6");
stateNewCases6 = document.getElementById("new-state-deaths-6");
stateNewDeaths6 = document.getElementById("new-state-cases-6");
// stateRecordDate6 = document.getElementById("state-record-date-6");

// 7th state variables
stateName7 = document.getElementById("state-name-7");
stateTotalCount7 = document.getElementById("state-total-7");
stateRecoveredCount7 = document.getElementById("state-recovered-7");
stateDeathCount7 = document.getElementById("state-death-7");
stateNewCases7 = document.getElementById("new-state-deaths-7");
stateNewDeaths7 = document.getElementById("new-state-cases-7");
// stateRecordDate7 = document.getElementById("state-record-date-7");

// 8th state variables
stateName8 = document.getElementById("state-name-8");
stateTotalCount8 = document.getElementById("state-total-8");
stateRecoveredCount8 = document.getElementById("state-recovered-8");
stateDeathCount8 = document.getElementById("state-death-8");
stateNewCases8 = document.getElementById("new-state-deaths-8");
stateNewDeaths8 = document.getElementById("new-state-cases-8");
// stateRecordDate8 = document.getElementById("state-record-date-8");

// 9th state variables
stateName9 = document.getElementById("state-name-9");
stateTotalCount9 = document.getElementById("state-total-9");
stateRecoveredCount9 = document.getElementById("state-recovered-9");
stateDeathCount9 = document.getElementById("state-death-9");
stateNewCases9 = document.getElementById("new-state-deaths-9");
stateNewDeaths9 = document.getElementById("new-state-cases-9");
// stateRecordDate9 = document.getElementById("state-record-date-9");

// 10th state variables
stateName10 = document.getElementById("state-name-10");
stateTotalCount10 = document.getElementById("state-total-10");
stateRecoveredCount10 = document.getElementById("state-recovered-10");
stateDeathCount10 = document.getElementById("state-death-10");
stateNewCases10 = document.getElementById("new-state-deaths-10");
stateNewDeaths10 = document.getElementById("new-state-cases-10");
// stateRecordDate10 = document.getElementById("state-record-date-10");

// 11th state variables
stateName11 = document.getElementById("state-name-11");
stateTotalCount11 = document.getElementById("state-total-11");
stateRecoveredCount11 = document.getElementById("state-recovered-11");
stateDeathCount11 = document.getElementById("state-death-11");
stateNewCases11 = document.getElementById("new-state-deaths-11");
stateNewDeaths11 = document.getElementById("new-state-cases-11");
// stateRecordDate11 = document.getElementById("state-record-date-11");

// 12th state variables
stateName12 = document.getElementById("state-name-12");
stateTotalCount12 = document.getElementById("state-total-12");
stateRecoveredCount12 = document.getElementById("state-recovered-12");
stateDeathCount12 = document.getElementById("state-death-12");
stateNewCases12 = document.getElementById("new-state-deaths-12");
stateNewDeaths12 = document.getElementById("new-state-cases-12");
// stateRecordDate12 = document.getElementById("state-record-date-12");

// 13th state variables
stateName13 = document.getElementById("state-name-13");
stateTotalCount13 = document.getElementById("state-total-13");
stateRecoveredCount13 = document.getElementById("state-recovered-13");
stateDeathCount13 = document.getElementById("state-death-13");
stateNewCases13 = document.getElementById("new-state-deaths-13");
stateNewDeaths13 = document.getElementById("new-state-cases-13");
// stateRecordDate13 = document.getElementById("state-record-date-13");

// 14th state variables
stateName14 = document.getElementById("state-name-14");
stateTotalCount14 = document.getElementById("state-total-14");
stateRecoveredCount14 = document.getElementById("state-recovered-14");
stateDeathCount14 = document.getElementById("state-death-14");
stateNewCases14 = document.getElementById("new-state-deaths-14");
stateNewDeaths14 = document.getElementById("new-state-cases-14");
// stateRecordDate14 = document.getElementById("state-record-date-14");


// 15th state variables
stateName15 = document.getElementById("state-name-15");
stateTotalCount15 = document.getElementById("state-total-15");
stateRecoveredCount15 = document.getElementById("state-recovered-15");
stateDeathCount15 = document.getElementById("state-death-15");
stateNewCases15 = document.getElementById("new-state-deaths-15");
stateNewDeaths15 = document.getElementById("new-state-cases-15");
// stateRecordDate15 = document.getElementById("state-record-date-15");

// 16th state variables
stateName16 = document.getElementById("state-name-16");
stateTotalCount16 = document.getElementById("state-total-16");
stateRecoveredCount16 = document.getElementById("state-recovered-16");
stateDeathCount16 = document.getElementById("state-death-16");
stateNewCases16 = document.getElementById("new-state-deaths-16");
stateNewDeaths16 = document.getElementById("new-state-cases-16");
// stateRecordDate16 = document.getElementById("state-record-date-16");

// 17th state variables
stateName17 = document.getElementById("state-name-17");
stateTotalCount17 = document.getElementById("state-total-17");
stateRecoveredCount17 = document.getElementById("state-recovered-17");
stateDeathCount17 = document.getElementById("state-death-17");
stateNewCases17 = document.getElementById("new-state-deaths-17");
stateNewDeaths17 = document.getElementById("new-state-cases-17");
// stateRecordDate17 = document.getElementById("state-record-date-17");

// 18th state variables
stateName18 = document.getElementById("state-name-18");
stateTotalCount18 = document.getElementById("state-total-18");
stateRecoveredCount18 = document.getElementById("state-recovered-18");
stateDeathCount18 = document.getElementById("state-death-18");
stateNewCases18 = document.getElementById("new-state-deaths-18");
stateNewDeaths18 = document.getElementById("new-state-cases-18");
// stateRecordDate18 = document.getElementById("state-record-date-18");

// 19th state variables
stateName19 = document.getElementById("state-name-19");
stateTotalCount19 = document.getElementById("state-total-19");
stateRecoveredCount19 = document.getElementById("state-recovered-19");
stateDeathCount19 = document.getElementById("state-death-19");
stateNewCases19 = document.getElementById("new-state-deaths-19");
stateNewDeaths19 = document.getElementById("new-state-cases-19");
// stateRecordDate19 = document.getElementById("state-record-date-19");

// 20th state variables
stateName20 = document.getElementById("state-name-20");
stateTotalCount20 = document.getElementById("state-total-20");
stateRecoveredCount20 = document.getElementById("state-recovered-20");
stateDeathCount20 = document.getElementById("state-death-20");
stateNewCases20 = document.getElementById("new-state-deaths-20");
stateNewDeaths20 = document.getElementById("new-state-cases-20");
// stateRecordDate20 = document.getElementById("state-record-date-20");

// 21th state variables
stateName21 = document.getElementById("state-name-21");
stateTotalCount21 = document.getElementById("state-total-21");
stateRecoveredCount21 = document.getElementById("state-recovered-21");
stateDeathCount21 = document.getElementById("state-death-21");
stateNewCases21 = document.getElementById("new-state-deaths-21");
stateNewDeaths21 = document.getElementById("new-state-cases-21");
// stateRecordDate21 = document.getElementById("state-record-date-21");

// 22th state variables
stateName22 = document.getElementById("state-name-22");
stateTotalCount22 = document.getElementById("state-total-22");
stateRecoveredCount22 = document.getElementById("state-recovered-22");
stateDeathCount22 = document.getElementById("state-death-22");
stateNewCases22 = document.getElementById("new-state-deaths-22");
stateNewDeaths22 = document.getElementById("new-state-cases-22");
// stateRecordDate22 = document.getElementById("state-record-date-22");

// 23th state variables
stateName23 = document.getElementById("state-name-23");
stateTotalCount23 = document.getElementById("state-total-23");
stateRecoveredCount23 = document.getElementById("state-recovered-23");
stateDeathCount23 = document.getElementById("state-death-23");
stateNewCases23 = document.getElementById("new-state-deaths-23");
stateNewDeaths23 = document.getElementById("new-state-cases-23");
stateRecordDate23 = document.getElementById("state-record-date-23");

// 24th state variables
stateName24 = document.getElementById("state-name-24");
stateTotalCount24 = document.getElementById("state-total-24");
stateRecoveredCount24 = document.getElementById("state-recovered-24");
stateDeathCount24 = document.getElementById("state-death-24");
stateNewCases24 = document.getElementById("new-state-deaths-24");
stateNewDeaths24 = document.getElementById("new-state-cases-24");
stateRecordDate24 = document.getElementById("state-record-date-24");

// 25th state variables
stateName25 = document.getElementById("state-name-25");
stateTotalCount25 = document.getElementById("state-total-25");
stateRecoveredCount25 = document.getElementById("state-recovered-25");
stateDeathCount25 = document.getElementById("state-death-25");
stateNewCases25 = document.getElementById("new-state-deaths-25");
stateNewDeaths25 = document.getElementById("new-state-cases-25");
stateRecordDate25 = document.getElementById("state-record-date-25");

// 26th state variables
stateName26 = document.getElementById("state-name-26");
stateTotalCount26 = document.getElementById("state-total-26");
stateRecoveredCount26 = document.getElementById("state-recovered-26");
stateDeathCount26 = document.getElementById("state-death-26");
stateNewCases26 = document.getElementById("new-state-deaths-26");
stateNewDeaths26 = document.getElementById("new-state-cases-26");
stateRecordDate26 = document.getElementById("state-record-date-26");

// 27th state variables
stateName27 = document.getElementById("state-name-27");
stateTotalCount27 = document.getElementById("state-total-27");
stateRecoveredCount27 = document.getElementById("state-recovered-27");
stateDeathCount27 = document.getElementById("state-death-27");
stateNewCases27 = document.getElementById("new-state-deaths-27");
stateNewDeaths27 = document.getElementById("new-state-cases-27");
stateRecordDate27 = document.getElementById("state-record-date-27");

// 28th state variables
stateName28 = document.getElementById("state-name-28");
stateTotalCount28 = document.getElementById("state-total-28");
stateRecoveredCount28 = document.getElementById("state-recovered-28");
stateDeathCount28 = document.getElementById("state-death-28");
stateNewCases28 = document.getElementById("new-state-deaths-28");
stateNewDeaths28 = document.getElementById("new-state-cases-28");
stateRecordDate28 = document.getElementById("state-record-date-28");

// 29th state variables
stateName29 = document.getElementById("state-name-29");
stateTotalCount29 = document.getElementById("state-total-29");
stateRecoveredCount29 = document.getElementById("state-recovered-29");
stateDeathCount29 = document.getElementById("state-death-29");
stateNewCases29 = document.getElementById("new-state-deaths-29");
stateNewDeaths29 = document.getElementById("new-state-cases-29");
stateRecordDate29 = document.getElementById("state-record-date-29");

// 30th state variables
stateName30 = document.getElementById("state-name-30");
stateTotalCount30 = document.getElementById("state-total-30");
stateRecoveredCount30 = document.getElementById("state-recovered-30");
stateDeathCount30 = document.getElementById("state-death-30");
stateNewCases30 = document.getElementById("new-state-deaths-30");
stateNewDeaths30 = document.getElementById("new-state-cases-30");
stateRecordDate30 = document.getElementById("state-record-date-30");

// 31st state variables
stateName31 = document.getElementById("state-name-31");
stateTotalCount31 = document.getElementById("state-total-31");
stateRecoveredCount31 = document.getElementById("state-recovered-31");
stateDeathCount31 = document.getElementById("state-death-31");
stateNewCases31 = document.getElementById("new-state-deaths-31");
stateNewDeaths31 = document.getElementById("new-state-cases-31");
stateRecordDate31 = document.getElementById("state-record-date-31");

// 32nd state variables
stateName32 = document.getElementById("state-name-32");
stateTotalCount32 = document.getElementById("state-total-32");
stateRecoveredCount32 = document.getElementById("state-recovered-32");
stateDeathCount32 = document.getElementById("state-death-32");
stateNewCases32 = document.getElementById("new-state-deaths-32");
stateNewDeaths32 = document.getElementById("new-state-cases-32");
stateRecordDate32 = document.getElementById("state-record-date-32");

// 33rd state variables
stateName33 = document.getElementById("state-name-33");
stateTotalCount33 = document.getElementById("state-total-33");
stateRecoveredCount33 = document.getElementById("state-recovered-33");
stateDeathCount33 = document.getElementById("state-death-33");
stateNewCases33 = document.getElementById("new-state-deaths-33");
stateNewDeaths33 = document.getElementById("new-state-cases-33");
stateRecordDate33 = document.getElementById("state-record-date-33");

// 34th state variables
stateName34 = document.getElementById("state-name-34");
stateTotalCount34 = document.getElementById("state-total-34");
stateRecoveredCount34 = document.getElementById("state-recovered-34");
stateDeathCount34 = document.getElementById("state-death-34");
stateNewCases34 = document.getElementById("new-state-deaths-34");
stateNewDeaths34 = document.getElementById("new-state-cases-34");
stateRecordDate34 = document.getElementById("state-record-date-34");

// 35th state variables
stateName35 = document.getElementById("state-name-35");
stateTotalCount35 = document.getElementById("state-total-35");
stateRecoveredCount35 = document.getElementById("state-recovered-35");
stateDeathCount35 = document.getElementById("state-death-35");
stateNewCases35 = document.getElementById("new-state-deaths-35");
stateNewDeaths35 = document.getElementById("new-state-cases-35");
stateRecordDate35 = document.getElementById("state-record-date-35");

// 36th state variables
stateName36 = document.getElementById("state-name-36");
stateTotalCount36 = document.getElementById("state-total-36");
stateRecoveredCount36 = document.getElementById("state-recovered-36");
stateDeathCount36 = document.getElementById("state-death-36");
stateNewCases36 = document.getElementById("new-state-deaths-36");
stateNewDeaths36 = document.getElementById("new-state-cases-36");
stateRecordDate36 = document.getElementById("state-record-date-36");

// 37th state variables
stateName37 = document.getElementById("state-name-37");
stateTotalCount37 = document.getElementById("state-total-37");
stateRecoveredCount37 = document.getElementById("state-recovered-37");
stateDeathCount37 = document.getElementById("state-death-37");
stateNewCases37 = document.getElementById("new-state-deaths-37");
stateNewDeaths37 = document.getElementById("new-state-cases-37");
stateRecordDate37 = document.getElementById("state-record-date-37");

// 38th state variables
stateName38 = document.getElementById("state-name-38");
stateTotalCount38 = document.getElementById("state-total-38");
stateRecoveredCount38 = document.getElementById("state-recovered-38");
stateDeathCount38 = document.getElementById("state-death-38");
stateNewCases38 = document.getElementById("new-state-deaths-38");
stateNewDeaths38 = document.getElementById("new-state-cases-38");
stateRecordDate38 = document.getElementById("state-record-date-38");

// 39th state variables
stateName39 = document.getElementById("state-name-39");
stateTotalCount39 = document.getElementById("state-total-39");
stateRecoveredCount39 = document.getElementById("state-recovered-39");
stateDeathCount39 = document.getElementById("state-death-39");
stateNewCases39 = document.getElementById("new-state-deaths-39");
stateNewDeaths39 = document.getElementById("new-state-cases-39");
stateRecordDate39 = document.getElementById("state-record-date-39");

// 40th state variables
stateName40 = document.getElementById("state-name-40");
stateTotalCount40 = document.getElementById("state-total-40");
stateRecoveredCount40 = document.getElementById("state-recovered-40");
stateDeathCount40 = document.getElementById("state-death-40");
stateNewCases40 = document.getElementById("new-state-deaths-40");
stateNewDeaths40 = document.getElementById("new-state-cases-40");
stateRecordDate40 = document.getElementById("state-record-date-40");

// 41st state variables
stateName41 = document.getElementById("state-name-41");
stateTotalCount41 = document.getElementById("state-total-41");
stateRecoveredCount41 = document.getElementById("state-recovered-41");
stateDeathCount41 = document.getElementById("state-death-41");
stateNewCases41 = document.getElementById("new-state-deaths-41");
stateNewDeaths41 = document.getElementById("new-state-cases-41");
stateRecordDate41 = document.getElementById("state-record-date-41");

// 42nd state variables
stateName42 = document.getElementById("state-name-42");
stateTotalCount42 = document.getElementById("state-total-42");
stateRecoveredCount42 = document.getElementById("state-recovered-42");
stateDeathCount42 = document.getElementById("state-death-42");
stateNewCases42 = document.getElementById("new-state-deaths-42");
stateNewDeaths42 = document.getElementById("new-state-cases-42");
stateRecordDate42 = document.getElementById("state-record-date-42");

// 43rd state variables
stateName43 = document.getElementById("state-name-43");
stateTotalCount43 = document.getElementById("state-total-43");
stateRecoveredCount43 = document.getElementById("state-recovered-43");
stateDeathCount43 = document.getElementById("state-death-43");
stateNewCases43 = document.getElementById("new-state-deaths-43");
stateNewDeaths43 = document.getElementById("new-state-cases-43");
stateRecordDate43 = document.getElementById("state-record-date-43");

// 44th state variables
stateName44 = document.getElementById("state-name-44");
stateTotalCount44 = document.getElementById("state-total-44");
stateRecoveredCount44 = document.getElementById("state-recovered-44");
stateDeathCount44 = document.getElementById("state-death-44");
stateNewCases44 = document.getElementById("new-state-deaths-44");
stateNewDeaths44 = document.getElementById("new-state-cases-44");
stateRecordDate44 = document.getElementById("state-record-date-44");

// 45th state variables
stateName45 = document.getElementById("state-name-45");
stateTotalCount45 = document.getElementById("state-total-45");
stateRecoveredCount45 = document.getElementById("state-recovered-45");
stateDeathCount45 = document.getElementById("state-death-45");
stateNewCases45 = document.getElementById("new-state-deaths-45");
stateNewDeaths45 = document.getElementById("new-state-cases-45");
stateRecordDate45 = document.getElementById("state-record-date-45");

// 46th state variables
stateName46 = document.getElementById("state-name-46");
stateTotalCount46 = document.getElementById("state-total-46");
stateRecoveredCount46 = document.getElementById("state-recovered-46");
stateDeathCount46 = document.getElementById("state-death-46");
stateNewCases46 = document.getElementById("new-state-deaths-46");
stateNewDeaths46 = document.getElementById("new-state-cases-46");
stateRecordDate46 = document.getElementById("state-record-date-46");

// 47th state variables
stateName47 = document.getElementById("state-name-47");
stateTotalCount47 = document.getElementById("state-total-47");
stateRecoveredCount47 = document.getElementById("state-recovered-47");
stateDeathCount47 = document.getElementById("state-death-47");
stateNewCases47 = document.getElementById("new-state-deaths-47");
stateNewDeaths47 = document.getElementById("new-state-cases-47");
stateRecordDate47 = document.getElementById("state-record-date-47");

// 48th state variables
stateName48 = document.getElementById("state-name-48");
stateTotalCount48 = document.getElementById("state-total-48");
stateRecoveredCount48 = document.getElementById("state-recovered-48");
stateDeathCount48 = document.getElementById("state-death-48");
stateNewCases48 = document.getElementById("new-state-deaths-48");
stateNewDeaths48 = document.getElementById("new-state-cases-48");
stateRecordDate48 = document.getElementById("state-record-date-48");

// 49th state variables
stateName49 = document.getElementById("state-name-49");
stateTotalCount49 = document.getElementById("state-total-49");
stateRecoveredCount49 = document.getElementById("state-recovered-49");
stateDeathCount49 = document.getElementById("state-death-49");
stateNewCases49 = document.getElementById("new-state-deaths-49");
stateNewDeaths49 = document.getElementById("new-state-cases-49");
stateRecordDate49 = document.getElementById("state-record-date-49");

// 50th state variables
stateName50 = document.getElementById("state-name-50");
stateTotalCount50 = document.getElementById("state-total-50");
stateRecoveredCount50 = document.getElementById("state-recovered-50");
stateDeathCount50 = document.getElementById("state-death-50");
stateNewCases50 = document.getElementById("new-state-deaths-50");
stateNewDeaths50 = document.getElementById("new-state-cases-50");
stateRecordDate50 = document.getElementById("state-record-date-50");





// -----------------------------------------


fetch("https://covid19-monitor-pro.p.rapidapi.com/coronavirus/cases_in_united_states_worldometers_latest.php", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "covid19-monitor-pro.p.rapidapi.com",
    "x-rapidapi-key": "1bdd105de1msh082bf89a915d1bep123081jsn62ec3c344148"
  }
})

  .then(response => response.json())

  .then((data) => {
    console.log(data);
    // us overall info
    

    // USA Totals
    // USA Totals Cases
    usaTotalCases.textContent = data[0].total_cases;

    // USA Active Cases
    usaActiveCases.textContent = data[0].active_cases

    // USA Total Deaths
    usaTotalDeaths.textContent = data[0].total_deaths;

    // USA New Daily Cases
    usaNewCases.textContent = data[0].new_cases;

    // USA New Daily Deaths
    newDeaths.textContent = data[0].new_deaths;

    // USA Last Date Updated
    usaRecordDate.textContent = data[0].record_date.substr(5, 5).replace("-", "/") + "/2020";

    // New York ------------------------------

    // New York overall info

    // New York state name
    stateName1.textContent = data[1].state_name;

    // New York total cases
    stateTotalCount1.textContent = data[1].total_cases;

    // New York new cases
    stateNewCases1.textContent = data[1].new_cases;

    // New York new deaths
    stateNewDeaths1.textContent = data[1].new_deaths;

    // New York active cases
    stateDeathCount1.textContent = data[1].total_deaths;

    // New York last date record
    // stateRecordDate1.textContent = data[1].record_date.substr(5, 5).replace("-","/") + "/2020";



    // New Jersey ------------------------------

    // New Jersey state name
    stateName2.textContent = data[2].state_name;

    // New Jersey total cases
    stateTotalCount2.textContent = data[2].total_cases;

    // New Jersey new cases
    stateNewCases2.textContent = data[2].new_cases;

    // New Jersey new deaths
    stateNewDeaths2.textContent = data[2].new_deaths;

    // New Jersey active cases
    stateDeathCount2.textContent = data[2].total_deaths;

    // New Jersey last date record
    // stateRecordDate2.textContent = data[2].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Michigan ------------------------------

    // Michigan state name
    stateName3.textContent = data[3].state_name;

    // Michigan total cases
    stateTotalCount3.textContent = data[3].total_cases;

    // Michigan new cases
    stateNewCases3.textContent = data[3].new_cases;

    // Michigan new deaths
    stateNewDeaths3.textContent = data[3].new_deaths;

    // Michigan active cases
    stateDeathCount3.textContent = data[3].total_deaths;

    // Michigan last date record
    // stateRecordDate3.textContent = data[3].record_date.substr(5, 5).replace("-","/") + "/2020";


    // California

    // California state name ------------------------------
    stateName4.textContent = data[4].state_name;

    // California total cases
    stateTotalCount4.textContent = data[4].total_cases;

    // California new cases
    stateNewCases4.textContent = data[4].new_cases;

    // California new deaths
    stateNewDeaths4.textContent = data[4].new_deaths;

    // California active cases
    stateDeathCount4.textContent = data[4].total_deaths;

    // California last date record
    // stateRecordDate4.textContent = data[4].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Louisiana ------------------------------

    // Louisiana state name
    stateName5.textContent = data[5].state_name;

    // Louisiana total cases
    stateTotalCount5.textContent = data[5].total_cases;

    // Louisiana new cases
    stateNewCases5.textContent = data[5].new_cases;

    // Louisiana new deaths
    stateNewDeaths5.textContent = data[5].new_deaths;

    // Louisiana active cases
    stateDeathCount5.textContent = data[5].total_deaths;

    // Louisiana last date record
    // stateRecordDate5.textContent = data[5].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Massachusetts ------------------------------

    // Massachusetts state name
    stateName6.textContent = data[6].state_name;

    // Massachusetts total cases
    stateTotalCount6.textContent = data[6].total_cases;

    // Massachusetts new cases
    stateNewCases6.textContent = data[6].new_cases;

    // Massachusetts new deaths
    stateNewDeaths6.textContent = data[6].new_deaths;

    // Massachusetts active cases
    stateDeathCount6.textContent = data[6].total_deaths;

    // Massachusetts last date record
    // stateRecordDate6.textContent = data[6].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Pennsylvania ------------------------------

    // Pennsylvania state name
    stateName7.textContent = data[7].state_name;

    // Pennsylvania total cases
    stateTotalCount7.textContent = data[7].total_cases;

    // Pennsylvania new cases
    stateNewCases7.textContent = data[7].new_cases;

    // Pennsylvania new deaths
    stateNewDeaths7.textContent = data[7].new_deaths;

    // Pennsylvania active cases
    stateDeathCount7.textContent = data[7].total_deaths;

    // Pennsylvania last date record
    // stateRecordDate7.textContent = data[7].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Florida ------------------------------

    // Florida state name
    stateName8.textContent = data[8].state_name;

    // Florida total cases
    stateTotalCount8.textContent = data[8].total_cases;

    // Florida new cases
    stateNewCases8.textContent = data[8].new_cases;

    // Florida new deaths
    stateNewDeaths8.textContent = data[8].new_deaths;

    // Florida active cases
    stateDeathCount8.textContent = data[8].total_deaths;

    // Florida last date record
    // stateRecordDate8.textContent = data[8].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Illinois ------------------------------

    // Illinois state name
    stateName9.textContent = data[9].state_name;

    // Illinois total cases
    stateTotalCount9.textContent = data[9].total_cases;

    // Illinois new cases
    stateNewCases9.textContent = data[9].new_cases;

    // Illinois new deaths
    stateNewDeaths9.textContent = data[9].new_deaths;

    // Illinois active cases
    stateDeathCount9.textContent = data[9].total_deaths;

    // Illinois last date record
    // stateRecordDate9.textContent = data[9].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Georgia ------------------------------

    // Georgia state name
    stateName10.textContent = data[10].state_name;

    // Georgia total cases
    stateTotalCount10.textContent = data[10].total_cases;

    // Georgia new cases
    stateNewCases10.textContent = data[10].new_cases;

    // Georgia new deaths
    stateNewDeaths10.textContent = data[10].new_deaths;

    // Georgia active cases
    stateDeathCount10.textContent = data[10].total_deaths;

    // Georgia last date record
    // stateRecordDate10.textContent = data[10].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Texas ------------------------------

    // Texas state name
    stateName11.textContent = data[11].state_name;

    // Texas total cases
    stateTotalCount11.textContent = data[11].total_cases;

    // Texas new cases
    stateNewCases11.textContent = data[11].new_cases;

    // Texas new deaths
    stateNewDeaths11.textContent = data[11].new_deaths;

    // Texas active cases
    stateDeathCount11.textContent = data[11].total_deaths;

    // Texas last date record
    // stateRecordDate11.textContent = data[11].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Washington ------------------------------

    // Washington state name
    stateName12.textContent = data[12].state_name;

    // Washington total cases
    stateTotalCount12.textContent = data[12].total_cases;

    // Washington new cases
    stateNewCases12.textContent = data[12].new_cases;

    // Washington new deaths
    stateNewDeaths12.textContent = data[12].new_deaths;

    // Washington active cases
    stateDeathCount12.textContent = data[12].total_deaths;

    // Washington last date record
    //  stateRecordDate12.textContent = data[12].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Connecticut ------------------------------

    // Connecticut state name
    stateName13.textContent = data[13].state_name;

    // Connecticut total cases
    stateTotalCount13.textContent = data[13].total_cases;

    // Connecticut new cases
    stateNewCases13.textContent = data[13].new_cases;

    // Connecticut new deaths
    stateNewDeaths13.textContent = data[13].new_deaths;

    // Connecticut active cases
    stateDeathCount13.textContent = data[13].total_deaths;

    // Connecticut last date record
    //  stateRecordDate13.textContent = data[13].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Indiana ------------------------------

    // Indiana state name
    stateName14.textContent = data[14].state_name;

    // Indiana total cases
    stateTotalCount14.textContent = data[14].total_cases;

    // Indiana new cases
    stateNewCases14.textContent = data[14].new_cases;

    // Indiana new deaths
    stateNewDeaths14.textContent = data[14].new_deaths;

    // Indiana active cases
    stateDeathCount14.textContent = data[14].total_deaths;

    // Indiana last date record
    // stateRecordDate14.textContent = data[14].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Colorodo ------------------------------

    // Colorodo state name
    stateName15.textContent = data[15].state_name;

    // Colorodo total cases
    stateTotalCount15.textContent = data[15].total_cases;

    // Colorodo new cases
    stateNewCases15.textContent = data[15].new_cases;

    // Colorodo new deaths
    stateNewDeaths15.textContent = data[15].new_deaths;

    // Colorodo active cases
    stateDeathCount15.textContent = data[15].total_deaths;

    // Colorodo last date record
    //  stateRecordDate15.textContent = data[15].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Maryland ------------------------------

    // Maryland state name
    stateName16.textContent = data[16].state_name;

    // Maryland total cases
    stateTotalCount16.textContent = data[16].total_cases;

    // Maryland new cases
    stateNewCases16.textContent = data[16].new_cases;

    // Maryland new deaths
    stateNewDeaths16.textContent = data[16].new_deaths;

    // Maryland active cases
    stateDeathCount16.textContent = data[16].total_deaths;

    // Maryland last date record
    // stateRecordDate16.textContent = data[16].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Ohio ------------------------------

    // Ohio state name
    stateName17.textContent = data[17].state_name;

    // Ohio total cases
    stateTotalCount17.textContent = data[17].total_cases;

    // Ohio new cases
    stateNewCases17.textContent = data[17].new_cases;

    // Ohio new deaths
    stateNewDeaths17.textContent = data[17].new_deaths;

    // Ohio active cases
    stateDeathCount17.textContent = data[17].total_deaths;

    // Ohio last date record
    // stateRecordDate17.textContent = data[17].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Tennessee ------------------------------

    // Tennessee state name
    stateName18.textContent = data[18].state_name;

    // Tennessee total cases
    stateTotalCount18.textContent = data[18].total_cases;

    // Tennessee new cases
    stateNewCases18.textContent = data[18].new_cases;

    // Tennessee new deaths
    stateNewDeaths18.textContent = data[18].new_deaths;

    // Tennessee active cases
    stateDeathCount18.textContent = data[18].total_deaths;

    // Tennessee last date record
    // stateRecordDate18.textContent = data[18].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Virginia ------------------------------

    // Virginia state name
    stateName19.textContent = data[19].state_name;

    // Virginia total cases
    stateTotalCount19.textContent = data[19].total_cases;

    // Virginia new cases
    stateNewCases19.textContent = data[19].new_cases;

    // Virginia new deaths
    stateNewDeaths19.textContent = data[19].new_deaths;

    // Virginia active cases
    stateDeathCount19.textContent = data[19].total_deaths;

    // Virginia last date record
    // stateRecordDate19.textContent = data[19].record_date.substr(5, 5).replace("-","/") + "/2020";


    // North Carolina ------------------------------

    // North Carolina state name
    stateName20.textContent = data[20].state_name;

    // North Carolina total cases
    stateTotalCount20.textContent = data[20].total_cases;

    // North Carolina new cases
    stateNewCases20.textContent = data[20].new_cases;

    // North Carolina new deaths
    stateNewDeaths20.textContent = data[20].new_deaths;

    // North Carolina active cases
    stateDeathCount20.textContent = data[20].total_deaths;

    // North Carolina last date record
    // stateRecordDate20.textContent = data[20].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Missouri ------------------------------

    // Missouri Carolina state name
    stateName21.textContent = data[21].state_name;

    // Missouri Carolina total cases
    stateTotalCount21.textContent = data[21].total_cases;

    // Missouri Carolina new cases
    stateNewCases21.textContent = data[21].new_cases;

    // Missouri Carolina new deaths
    stateNewDeaths21.textContent = data[21].new_deaths;

    // Missouri Carolina active cases
    stateDeathCount21.textContent = data[21].total_deaths;

    // Missouri Carolina last date record
    // stateRecordDate21.textContent = data[21].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Wisconsin ------------------------------

    // Wisconsin state name
    stateName22.textContent = data[22].state_name;

    // Wisconsin total cases
    stateTotalCount22.textContent = data[22].total_cases;

    // Wisconsin new cases
    stateNewCases22.textContent = data[22].new_cases;

    // Wisconsin new deaths
    stateNewDeaths22.textContent = data[22].new_deaths;

    // Wisconsin active cases
    stateDeathCount22.textContent = data[22].total_deaths;

    // Wisconsin last date record
    // stateRecordDate22.textContent = data[22].record_date.substr(5, 5).replace("-","/") + "/2020";

    // Arizona ------------------------------

    // Arizona state name
    stateName23.textContent = data[23].state_name;

    // Arizona total cases
    stateTotalCount23.textContent = data[23].total_cases;

    // Arizona new cases
    stateNewCases23.textContent = data[23].new_cases;

    // Arizona new deaths
    stateNewDeaths23.textContent = data[23].new_deaths;

    // Arizona active cases
    stateDeathCount23.textContent = data[23].total_deaths;

    // Arizona last date record
    // stateRecordDate23.textContent = data[23].record_date.substr(5, 5).replace("-","/") + "/2020";


    // South Carolina ------------------------------

    // South Carolina state name
    stateName24.textContent = data[24].state_name;

    // South Carolina total cases
    stateTotalCount24.textContent = data[24].total_cases;

    // South Carolina new cases
    stateNewCases24.textContent = data[24].new_cases;

    // South Carolina new deaths
    stateNewDeaths24.textContent = data[24].new_deaths;

    // South Carolina active cases
    stateDeathCount24.textContent = data[24].total_deaths;

    // South Carolina last date record
    // stateRecordDate24.textContent = data[24].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Alabama ------------------------------

    // Alabama state name
    stateName25.textContent = data[25].state_name;

    // Alabama total cases
    stateTotalCount25.textContent = data[25].total_cases;

    // Alabama new cases
    stateNewCases25.textContent = data[25].new_cases;

    // Alabama new deaths
    stateNewDeaths25.textContent = data[25].new_deaths;

    // Alabama active cases
    stateDeathCount25.textContent = data[25].total_deaths;

    // Alabama last date record
    // stateRecordDate25.textContent = data[25].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Nevada ------------------------------

    // Nevada state name
    stateName26.textContent = data[26].state_name;

    // Nevada total cases
    stateTotalCount26.textContent = data[26].total_cases;

    // Nevada new cases
    stateNewCases26.textContent = data[26].new_cases;

    // Nevada new deaths
    stateNewDeaths26.textContent = data[26].new_deaths;

    // Nevada active cases
    stateDeathCount26.textContent = data[26].total_deaths;

    // Nevada last date record
    //  stateRecordDate26.textContent = data[26].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Mississippi ------------------------------

    // Mississippi state name
    stateName27.textContent = data[27].state_name;

    // Mississippi total cases
    stateTotalCount27.textContent = data[27].total_cases;

    // Mississippi new cases
    stateNewCases27.textContent = data[27].new_cases;

    // Mississippi new deaths
    stateNewDeaths27.textContent = data[27].new_deaths;

    // Mississippi active cases
    stateDeathCount27.textContent = data[27].total_deaths;

    // Mississippi last date record
    // stateRecordDate27.textContent = data[27].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Utah ------------------------------

    // Utah state name
    stateName28.textContent = data[28].state_name;

    // Utah total cases
    stateTotalCount28.textContent = data[28].total_cases;

    // Utah new cases
    stateNewCases28.textContent = data[28].new_cases;

    // Utah new deaths
    stateNewDeaths28.textContent = data[28].new_deaths;

    // Utah active cases
    stateDeathCount28.textContent = data[28].total_deaths;

    // Utah last date record
    // stateRecordDate28.textContent = data[28].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Oklahoma ------------------------------

    // Oklahoma state name
    stateName29.textContent = data[29].state_name;

    // Oklahoma total cases
    stateTotalCount29.textContent = data[29].total_cases;

    // Oklahoma new cases
    stateNewCases29.textContent = data[29].new_cases;

    // Oklahoma new deaths
    stateNewDeaths29.textContent = data[29].new_deaths;

    // Oklahoma active cases
    stateDeathCount29.textContent = data[29].total_deaths;

    // Oklahoma last date record
    //  stateRecordDate29.textContent = data[29].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Rhode Island ------------------------------

    // Rhode Island state name
    stateName30.textContent = data[30].state_name;

    // Rhode Island total cases
    stateTotalCount30.textContent = data[30].total_cases;

    // Rhode Island new cases
    stateNewCases30.textContent = data[30].new_cases;

    // Rhode Island new deaths
    stateNewDeaths30.textContent = data[30].new_deaths;

    // Rhode Island active cases
    stateDeathCount30.textContent = data[30].total_deaths;

    // Rhode Island last date record
    //  stateRecordDate30.textContent = data[30].record_date.substr(5, 5).replace("-","/") + "/2020";


    // District of Columbia ------------------------------

    // District of Columbia state name
    stateName31.textContent = data[31].state_name;

    // District of Columbia total cases
    stateTotalCount31.textContent = data[31].total_cases;

    // District of Columbia new cases
    stateNewCases31.textContent = data[31].new_cases;

    // District of Columbia new deaths
    stateNewDeaths31.textContent = data[31].new_deaths;

    // District of Columbia active cases
    stateDeathCount31.textContent = data[31].total_deaths;

    // District of Columbia last date record
    //  stateRecordDate31.textContent = data[31].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Kentucky ------------------------------

    // Kentucky state name
    stateName32.textContent = data[32].state_name;

    // Kentucky total cases
    stateTotalCount32.textContent = data[32].total_cases;

    // Kentucky new cases
    stateNewCases32.textContent = data[32].new_cases;

    // Kentucky new deaths
    stateNewDeaths32.textContent = data[32].new_deaths;

    // Kentucky active cases
    stateDeathCount32.textContent = data[32].total_deaths;

    // Kentucky last date record
    // stateRecordDate32.textContent = data[32].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Oregon ------------------------------

    // Oregon state name
    stateName33.textContent = data[33].state_name;

    // Oregon total cases
    stateTotalCount33.textContent = data[33].total_cases;

    // Oregon new cases
    stateNewCases33.textContent = data[33].new_cases;

    // Oregon new deaths
    stateNewDeaths33.textContent = data[33].new_deaths;

    // Oregon active cases
    stateDeathCount33.textContent = data[33].total_deaths;

    // Oregon last date record
    // stateRecordDate33.textContent = data[33].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Idaho ------------------------------

    // Idaho state name
    stateName34.textContent = data[34].state_name;

    // Idaho total cases
    stateTotalCount34.textContent = data[34].total_cases;

    // Idaho new cases
    stateNewCases34.textContent = data[34].new_cases;

    // Idaho new deaths
    stateNewDeaths34.textContent = data[34].new_deaths;

    // Idaho active cases
    stateDeathCount34.textContent = data[34].total_deaths;

    // Idaho last date record
    //  stateRecordDate34.textContent = data[34].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Minnesota ------------------------------

    // Minnesota state name
    stateName35.textContent = data[35].state_name;

    // Minnesota total cases
    stateTotalCount35.textContent = data[35].total_cases;

    // Minnesota new cases
    stateNewCases35.textContent = data[35].new_cases;

    // Minnesota new deaths
    stateNewDeaths35.textContent = data[35].new_deaths;

    // Minnesota active cases
    stateDeathCount35.textContent = data[35].total_deaths;

    // Minnesota last date record
    //  stateRecordDate35.textContent = data[35].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Iowa ------------------------------

    // Iowa state name
    stateName36.textContent = data[36].state_name;

    // Iowa total cases
    stateTotalCount36.textContent = data[36].total_cases;

    // Iowa new cases
    stateNewCases36.textContent = data[36].new_cases;

    // Iowa new deaths
    stateNewDeaths36.textContent = data[36].new_deaths;

    // Iowa active cases
    stateDeathCount36.textContent = data[36].total_deaths;

    // Iowa last date record
    //  stateRecordDate36.textContent = data[36].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Delaware ------------------------------

    // Delaware state name
    stateName37.textContent = data[37].state_name;

    // Delaware total cases
    stateTotalCount37.textContent = data[37].total_cases;

    // Delaware new cases
    stateNewCases37.textContent = data[37].new_cases;

    // Delaware new deaths
    stateNewDeaths37.textContent = data[37].new_deaths;

    // Delaware active cases
    stateDeathCount37.textContent = data[37].total_deaths;

    // Delaware last date record
    //  stateRecordDate37.textContent = data[37].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Arkansas ------------------------------

    // Arkansas state name
    stateName38.textContent = data[38].state_name;

    // Arkansas total cases
    stateTotalCount38.textContent = data[38].total_cases;

    // Arkansas new cases
    stateNewCases38.textContent = data[38].new_cases;

    // Arkansas new deaths
    stateNewDeaths38.textContent = data[38].new_deaths;

    // Arkansas active cases
    stateDeathCount38.textContent = data[38].total_deaths;

    // Arkansas last date record
    //  stateRecordDate38.textContent = data[38].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Kansas ------------------------------

    // Kansas state name
    stateName39.textContent = data[39].state_name;

    // Kansas total cases
    stateTotalCount39.textContent = data[39].total_cases;

    // Kansas new cases
    stateNewCases39.textContent = data[39].new_cases;

    // Kansas new deaths
    stateNewDeaths39.textContent = data[39].new_deaths;

    // Kansas active cases
    stateDeathCount39.textContent = data[39].total_deaths;

    // Kansas last date record
    //  stateRecordDate39.textContent = data[39].record_date.substr(5, 5).replace("-","/") + "/2020";


    // New Mexico ------------------------------

    // New Mexico state name
    stateName40.textContent = data[40].state_name;

    // New Mexico total cases
    stateTotalCount40.textContent = data[40].total_cases;

    // New Mexico new cases
    stateNewCases40.textContent = data[40].new_cases;

    // New Mexico new deaths
    stateNewDeaths40.textContent = data[40].new_deaths;

    // New Mexico active cases
    stateDeathCount40.textContent = data[40].total_deaths;

    // New Mexico last date record
    // stateRecordDate40.textContent = data[40].record_date.substr(5, 5).replace("-","/") + "/2020";


    // New Hampshire ------------------------------

    // New Hampshire state name
    stateName41.textContent = data[41].state_name;

    // New Hampshire total cases
    stateTotalCount41.textContent = data[41].total_cases;

    // New Hampshire new cases
    stateNewCases41.textContent = data[41].new_cases;

    // New Hampshire new deaths
    stateNewDeaths41.textContent = data[41].new_deaths;

    // New Hampshire active cases
    stateDeathCount41.textContent = data[41].total_deaths;

    // New Hampshire last date record
    //  stateRecordDate41.textContent = data[41].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Vermont ------------------------------

    // Vermont state name
    stateName42.textContent = data[42].state_name;

    // Vermont total cases
    stateTotalCount42.textContent = data[42].total_cases;

    // Vermont new cases
    stateNewCases42.textContent = data[42].new_cases;

    // Vermont new deaths
    stateNewDeaths42.textContent = data[42].new_deaths;

    // Vermont active cases
    stateDeathCount42.textContent = data[42].total_deaths;

    // Vermont last date record
    //  stateRecordDate42.textContent = data[42].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Maine ------------------------------

    // Maine state name
    stateName43.textContent = data[43].state_name;

    // Maine total cases
    stateTotalCount43.textContent = data[43].total_cases;

    // Maine new cases
    stateNewCases43.textContent = data[43].new_cases;

    // Maine new deaths
    stateNewDeaths43.textContent = data[43].new_deaths;

    // Maine active cases
    stateDeathCount43.textContent = data[43].total_deaths;

    // Maine last date record
    //  stateRecordDate43.textContent = data[43].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Nebraska ------------------------------

    // Nebraska state name
    stateName44.textContent = data[44].state_name;

    // Nebraska total cases
    stateTotalCount44.textContent = data[44].total_cases;

    // Nebraska new cases
    stateNewCases44.textContent = data[44].new_cases;

    // Nebraska new deaths
    stateNewDeaths44.textContent = data[44].new_deaths;

    // Nebraska active cases
    stateDeathCount44.textContent = data[44].total_deaths;

    // Nebraska last date record
    // stateRecordDate44.textContent = data[44].record_date.substr(5, 5).replace("-","/") + "/2020";


    // West Virgina ------------------------------

    // West Virgina state name
    stateName45.textContent = data[45].state_name;

    // West Virgina total cases
    stateTotalCount45.textContent = data[45].total_cases;

    // West Virgina new cases
    stateNewCases45.textContent = data[45].new_cases;

    // West Virgina new deaths
    stateNewDeaths45.textContent = data[45].new_deaths;

    // West Virgina active cases
    stateDeathCount45.textContent = data[45].total_deaths;

    // West Virgina last date record
    //  stateRecordDate45.textContent = data[45].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Hawaii ------------------------------

    // Hawaii state name
    stateName46.textContent = data[46].state_name;

    // Hawaii total cases
    stateTotalCount46.textContent = data[46].total_cases;

    // Hawaii new cases
    stateNewCases46.textContent = data[46].new_cases;

    // Hawaii new deaths
    stateNewDeaths46.textContent = data[46].new_deaths;

    // Hawaii active cases
    stateDeathCount46.textContent = data[46].total_deaths;

    // Hawaii last date record
    // stateRecordDate46.textContent = data[46].record_date.substr(5, 5).replace("-","/") + "/2020";


    // South Dakota ------------------------------

    // South Dakota state name
    stateName47.textContent = data[47].state_name;

    // South Dakota total cases
    stateTotalCount47.textContent = data[47].total_cases;

    // South Dakota new cases
    stateNewCases47.textContent = data[47].new_cases;

    // South Dakota new deaths
    stateNewDeaths47.textContent = data[47].new_deaths;

    // South Dakota active cases
    stateDeathCount47.textContent = data[47].total_deaths;

    // South Dakota last date record
    //  stateRecordDate47.textContent = data[47].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Montana ------------------------------

    // Montana state name
    stateName48.textContent = data[48].state_name;

    // Montana total cases
    stateTotalCount48.textContent = data[48].total_cases;

    // Montana new cases
    stateNewCases48.textContent = data[48].new_cases;

    // Montana new deaths
    stateNewDeaths48.textContent = data[48].new_deaths;

    // Montana active cases
    stateDeathCount48.textContent = data[48].total_deaths;

    // Montana last date record
    //  stateRecordDate48.textContent = data[48].record_date.substr(5, 5).replace("-","/") + "/2020";


    // North Dakota ------------------------------

    // North Dakota state name
    stateName49.textContent = data[49].state_name;

    // North Dakota total cases
    stateTotalCount49.textContent = data[49].total_cases;

    // North Dakota new cases
    stateNewCases49.textContent = data[49].new_cases;

    // North Dakota new deaths
    stateNewDeaths49.textContent = data[49].new_deaths;

    // North Dakota active cases
    stateDeathCount49.textContent = data[49].total_deaths;

    // North Dakota last date record
    //  stateRecordDate49.textContent = data[49].record_date.substr(5, 5).replace("-","/") + "/2020";


    // Wyoming ------------------------------

    // Wyoming state name
    stateName50.textContent = data[50].state_name;

    // Wyoming total cases
    stateTotalCount50.textContent = data[50].total_cases;

    // Wyoming new cases
    stateNewCases50.textContent = data[50].new_cases;

    // Wyoming new deaths
    stateNewDeaths50.textContent = data[50].new_deaths;

    // Wyoming active cases
    stateDeathCount50.textContent = data[50].total_deaths;

    // Wyoming last date record
    //  stateRecordDate50.textContent = data[50].record_date.substr(5, 5).replace("-","/") + "/2020";




    // if (totalValue > 10000) {
    //   totalDiv.classList.add("severe");
      
    // } else if ((totalValue < 10000 && totalValue > 5000)){
    //   totalDiv.classList.add("high");
      
    // } else if ((totalValue < 5000 && totalValue > 2500)){
    //   totalDiv.classList.add("medium");
      
    // } else if ((totalValue < 2500 && totalValue > 1000)) {
    // totalDiv.classList.add("low");

    // } else if ((totalValue > 1000)) {
    // totalDiv.classList.add("very-low");
    // }
    // Color changing function

    totals = document.querySelector(".totals")
    

    console.log(totals.value)

    
     if (data.total_cases > 10000) {
        //  change red
        accordionButtons.style.backgroundColor = "rgb(219, 26, 26)";
        accordionButtons.style.color = "rgba(253, 253, 253, 0.801);";

     } else if (data.total_cases < 10000 && data.total_cases > 5000) {
        // change orange
        accordionButtons.style.backgroundColor = "rgb(219, 99, 30)";
        accordionButtons.style.color = "rgba(253, 253, 253, 0.801);";

     } else if (data.total_cases < 5000 && data.total_cases > 2500) {
        //  change yellow
        accordionButtons.style.backgroundColor = "rgb(243, 224, 55)";
        accordionButtons.style.color = "rgba(253, 253, 253, 0.801);";

     } else if (data.total_cases < 2500 && data.total_cases > 1000) {
        //  change green
        accordionButtons.style.backgroundColor = "rgb(121, 173, 36)";
        accordionButtons.style.color = "rgba(253, 253, 253, 0.801);";

     } else if (data.total_cases > 1000) {
      //  change green
      accordionButtons.style.backgroundColor = "rgb(176, 224, 97)";
      accordionButtons.style.color = "rgba(253, 253, 253, 0.801);";

   }
     


  })

  .catch(err => {
    console.log(err);
  });
// _______________________________________
  // CHARITY SEARCH BY CITY OR ZIP

window.onload = () => { const submitButton = document.querySelector("#submitBtn") 
submitButton.addEventListener("click", submit) }
function submit(event) {
  event.preventDefault();
  const searchTerm = document.querySelector("#inputSearchedTerm"); 
  let results = document.querySelector("#results"); 
  results.innerHTML = ""; 
  let searchparams = ""; 
  const numbers = "1234567890";
  
  // checking to see if the search term is city 
  if (numbers.indexOf(searchTerm.value[0]) === -1) { searchparams = "&city=" + searchTerm.value; } 
  else { searchparams = "&zip=" + searchTerm.value; } 
  let searchFilter = '&search="medical", "health", "mental"'

  let url = "https://api.data.charitynavigator.org/v2/Organizations?app_id=f9ce292a&app_key=f0df724ada7935a5f444907c85fad917" + searchFilter 
  url += searchparams;

  fetch(url).then(response => response.json())
  .then(data => {
    console.log(data)

    for (let i = 0; i < data.length; i++) {
      const charity = data[i]; 
      const name = charity.charityName; 
      let website = charity.websiteURL; 
      let type = charity.irsClassification.nteeType;

      let address = charity.mailingAddress.streetAddress1 + ",&nbsp" + charity.mailingAddress.city + ",&nbsp" + charity.mailingAddress.stateOrProvince + ",&nbsp" + charity.mailingAddress.postalCode;
      let weburl = website
      if (!website) { website = "" 
      weburl = "" } 
      if (!type) { type = "" } 
      if (!address) { address = "" }


      const card = document.createElement("div"); 
      card.className = "callout"; 
      card.innerHTML = ` <h4>${name}</h4> 
      <p><a href="${weburl}" target="_blank">${website}</a></p><br>
       <p style="text-transform: uppercase">${address}</p> 
       <h9 style ="color: gray">${type}</h9> ` 
       results.append(card);
    }



  })
}


// Severity color function
    
// TIME DEPENDENT COLOR CHANGES -----------------------

const total = document.querySelector(".totals");

console.log(stateTotalCount1.textContent);





// // set a variable to all divs with the row class
// const totalDiv = $("div.totals");
// // create a variable with the value of the current our using Moment.js
// let totalValue = total.value;

// // user Array.from to create an array from the rows which we are iterating through with the forEach method
// Array.from(totalDivs).forEach(function(totalDiv) {
// // here the specific ids set one each row is set to the variable rowId
// let
// totalId = total.id,
// if (totalId) {
// // store the parsed row id into the rowHour variable
// totalRow = parseInt(totalId);
//   }
//   if (totalRow) {
// // We compare the row id to current hour, and the specific row to the correct "color" class
// // Used vanilla javascript as it was too difficult to use jquery change the row parameter
//       if (totalValue > 10000) {
//         totalDiv.classList.add("severe");
        
//       } else if ((totalValue < 10000 && totalValue > 5000)){
//         totalDiv.classList.add("high");
        
//       } else if ((totalValue < 5000 && totalValue > 2500)){
//         totalDiv.classList.add("medium");
        
//       } else if ((totalValue < 2500 && totalValue > 1000)) {
//       totalDiv.classList.add("low");

//       } else if ((totalValue > 1000)) {
//       totalDiv.classList.add("very-low");
//       }

//   }
// });


// $("div.totals").each(function() {
//   $(this).html() < 10000 ? $(this).css('color', 'red') : null;

  // ($(this).html() >= 5000 && $(this).html() < 45) ? $(this).css('color', 'green'): null;

  // $(this).html() >= 2000 ? $(this).css('color', 'yellow') : null;
// });

