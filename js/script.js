// VARIABLES

stateName1 = document.getElementById("state-name-1");


// -----------------------------------------


// fetch("https://covid19-monitor-pro.p.rapidapi.com/coronavirus/cases_in_united_states_worldometers_latest.php", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "covid19-monitor-pro.p.rapidapi.com",
// 		"x-rapidapi-key": "1bdd105de1msh082bf89a915d1bep123081jsn62ec3c344148"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .then((data) => {
//   console.log(data);

// })
// .catch(err => {
// 	console.log(err);
// });

// window.onload = () => {
  // $(document).foundation();
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
    console.log(data[0]);


    // New York ------------------------------

    // New York overall info
    console.log(data[1]);
    // New York state name
    stateName1.textContent = data[1].state_name;
    console.log(data[1].state_name);
    // New York total cases
    
    console.log(data[1].total_cases);
    // New York new cases
    console.log(data[1].new_cases);
    // New York new deaths
    console.log(data[1].new_deaths);
    // New York active cases
    console.log(data[1].active_cases);
    // New York last date record
    console.log(data[1].record_date);


    // New Jersey ------------------------------

    // New Jersey overall info
    console.log(data[2]);
    // New Jersey state name
    console.log(data[2].state_name);
    // New Jersey total cases
    console.log(data[2].total_cases);
    // New Jersey new cases
    console.log(data[2].new_cases);
    // New Jersey new deaths
    console.log(data[2].new_deaths);
    // New Jersey active cases
    console.log(data[2].active_cases);
    // New Jersey last date record
    console.log(data[2].record_date);


     // Michigan ------------------------------

    // michigan overall info
    console.log(data[3]);
    // michigan state name
    console.log(data[3].state_name);
    // michigan total cases
    console.log(data[3].total_cases);
    // michigan new cases
    console.log(data[3].new_cases);
    // michigan new deaths
    console.log(data[3].new_deaths);
    // michigan active cases
    console.log(data[3].active_cases);
    // michigan last date record
    console.log(data[3].record_date);


     // California

    // California overall info
    console.log(data[4]);
    // California state name
    console.log(data[4].state_name);
    // California total cases
    console.log(data[4].total_cases);
    // California new cases
    console.log(data[4].new_cases);
    // California new deaths
    console.log(data[4].new_deaths);
    // California active cases
    console.log(data[4].active_cases);
    // California last date record
    console.log(data[4].record_date);


      // Lousiana ------------------------------

    // Lousiana overall info
    console.log(data[5]);
    // Lousiana state name
    console.log(data[5].state_name);
    // Lousiana total cases
    console.log(data[5].total_cases);
    // Lousiana new cases
    console.log(data[5].new_cases);
    // Lousiana new deaths
    console.log(data[5].new_deaths);
    // Lousiana active cases
    console.log(data[5].active_cases);
    // Lousiana last date record
    console.log(data[5].record_date);


     // Massachusetts ------------------------------

    // Massachusetts overall info
    console.log(data[6]);
    // Massachusetts state name
    console.log(data[6].state_name);
    // Massachusetts total cases
    console.log(data[6].total_cases);
    // Massachusetts new cases
    console.log(data[6].new_cases);
    // Massachusetts new deaths
    console.log(data[6].new_deaths);
    // Massachusetts active cases
    console.log(data[6].active_cases);
    // Massachusetts last date record
    console.log(data[6].record_date);


     // Pennsylvania ------------------------------

    // Pennsylvania overall info
    console.log(data[7]);
    // Pennsylvania state name
    console.log(data[7].state_name);
    // Pennsylvania total cases
    console.log(data[7].total_cases);
    // Pennsylvania new cases
    console.log(data[7].new_cases);
    // Pennsylvania new deaths
    console.log(data[7].new_deaths);
    // Pennsylvania active cases
    console.log(data[7].active_cases);
    // Pennsylvania last date record
    console.log(data[7].record_date);


     // Florida ------------------------------

    // Florida overall info
    console.log(data[8]);
    // Florida state name
    console.log(data[8].state_name);
    // Florida total cases
    console.log(data[8].total_cases);
    // Florida new cases
    console.log(data[8].new_cases);
    // Florida new deaths
    console.log(data[8].new_deaths);
    // Florida active cases
    console.log(data[8].active_cases);
    // Florida last date record
    console.log(data[8].record_date);


     // Illinois ------------------------------

    // Illinois overall info
    console.log(data[9]);
    // Illinois state name
    console.log(data[9].state_name);
    // Illinois total cases
    console.log(data[9].total_cases);
    // Illinois new cases
    console.log(data[9].new_cases);
    // Illinois new deaths
    console.log(data[9].new_deaths);
    // Illinois active cases
    console.log(data[9].active_cases);
    // Illinois last date record
    console.log(data[9].record_date);


     // Georgia ------------------------------

    // Georgia overall info
    console.log(data[10]);
    // Georgia state name
    console.log(data[10].state_name);
    // Georgia total cases
    console.log(data[10].total_cases);
    // Georgia new cases
    console.log(data[10].new_cases);
    // Georgia new deaths
    console.log(data[10].new_deaths);
    // Georgia active cases
    console.log(data[10].active_cases);
    // Georgia last date record
    console.log(data[10].record_date);


     // Texas ------------------------------

    // Texas overall info
    console.log(data[11]);
    // Texas state name
    console.log(data[11].state_name);
    // Texas total cases
    console.log(data[11].total_cases);
    // Texas new cases
    console.log(data[11].new_cases);
    // Texas new deaths
    console.log(data[11].new_deaths);
    // Texas active cases
    console.log(data[11].active_cases);
    // Texas last date record
    console.log(data[11].record_date);


     // Washington ------------------------------

    // Washington overall info
    console.log(data[12]);
    // Washington state name
    console.log(data[12].state_name);
    // Washington total cases
    console.log(data[12].total_cases);
    // Washington new cases
    console.log(data[12].new_cases);
    // Washington new deaths
    console.log(data[12].new_deaths);
    // Washington active cases
    console.log(data[12].active_cases);
    // Washington last date record
    console.log(data[12].record_date);


     // Connecticut ------------------------------

    // Connecticut overall info
    console.log(data[13]);
    // Connecticut state name
    console.log(data[13].state_name);
    // Connecticut total cases
    console.log(data[13].total_cases);
    // Connecticut new cases
    console.log(data[13].new_cases);
    // Connecticut new deaths
    console.log(data[13].new_deaths);
    // Connecticut active cases
    console.log(data[13].active_cases);
    // Connecticut last date record
    console.log(data[13].record_date);


     // Indiana ------------------------------

    // Indiana overall info
    console.log(data[14]);
    // Indiana state name
    console.log(data[14].state_name);
    // Indiana total cases
    console.log(data[14].total_cases);
    // Indiana new cases
    console.log(data[14].new_cases);
    // Indiana new deaths
    console.log(data[14].new_deaths);
    // Indiana active cases
    console.log(data[14].active_cases);
    // Indiana last date record
    console.log(data[14].record_date);


    // Colorodo ------------------------------

    // Colorodo overall info
    console.log(data[15]);
    // Colorodo state name
    console.log(data[15].state_name);
    // Colorodo total cases
    console.log(data[15].total_cases);
    // Colorodo new cases
    console.log(data[15].new_cases);
    // Colorodo new deaths
    console.log(data[15].new_deaths);
    // Colorodo active cases
    console.log(data[15].active_cases);
    // Colorodo last date record
    console.log(data[15].record_date);


    // Maryland ------------------------------

    // Maryland overall info
    console.log(data[16]);
    // Maryland state name
    console.log(data[16].state_name);
    // Maryland total cases
    console.log(data[16].total_cases);
    // Maryland new cases
    console.log(data[16].new_cases);
    // Maryland new deaths
    console.log(data[16].new_deaths);
    // Maryland active cases
    console.log(data[16].active_cases);
    // Maryland last date record
    console.log(data[16].record_date);


    // Ohio ------------------------------

    // Ohio overall info
    console.log(data[17]);
    // Ohio state name
    console.log(data[17].state_name);
    // Ohio total cases
    console.log(data[17].total_cases);
    // Ohio new cases
    console.log(data[17].new_cases);
    // Ohio new deaths
    console.log(data[17].new_deaths);
    // Ohio active cases
    console.log(data[17].active_cases);
    // Ohio last date record
    console.log(data[17].record_date);


    // Tennessee ------------------------------

    // Tennessee overall info
    console.log(data[18]);
    // Tennessee state name
    console.log(data[18].state_name);
    // Tennessee total cases
    console.log(data[18].total_cases);
    // Tennessee new cases
    console.log(data[18].new_cases);
    // Tennessee new deaths
    console.log(data[18].new_deaths);
    // Tennessee active cases
    console.log(data[18].active_cases);
    // Tennessee last date record
    console.log(data[18].record_date);


    // Virginia ------------------------------

    // Virginia overall info
    console.log(data[19]);
    // Virginia state name
    console.log(data[19].state_name);
    // Virginia total cases
    console.log(data[19].total_cases);
    // Virginia new cases
    console.log(data[19].new_cases);
    // Virginia new deaths
    console.log(data[19].new_deaths);
    // Virginia active cases
    console.log(data[19].active_cases);
    // Virginia last date record
    console.log(data[19].record_date);


    // North Carolina ------------------------------

    // North Carolina overall info
    console.log(data[20]);
    // North Carolina state name
    console.log(data[20].state_name);
    // North Carolina total cases
    console.log(data[20].total_cases);
    // North Carolina new cases
    console.log(data[20].new_cases);
    // North Carolina new deaths
    console.log(data[20].new_deaths);
    // North Carolina active cases
    console.log(data[20].active_cases);
    // North Carolina last date record
    console.log(data[20].record_date);


    // Missouri ------------------------------

    // Missouri overall info
    console.log(data[21]);
    // Missouri state name
    console.log(data[21].state_name);
    // Missouri total cases
    console.log(data[21].total_cases);
    // Missouri new cases
    console.log(data[21].new_cases);
    // Missouri new deaths
    console.log(data[21].new_deaths);
    // Missouri active cases
    console.log(data[21].active_cases);
    // Missouri last date record
    console.log(data[21].record_date);


    // Wisconsin ------------------------------

    // Wisconsin overall info
    console.log(data[22]);
    // Wisconsin state name
    console.log(data[22].state_name);
    // Wisconsin total cases
    console.log(data[22].total_cases);
    // Wisconsin new cases
    console.log(data[22].new_cases);
    // Wisconsin new deaths
    console.log(data[22].new_deaths);
    // Wisconsin active cases
    console.log(data[22].active_cases);
    // Wisconsin last date record
    console.log(data[22].record_date);


    // Arizona ------------------------------

    // Arizona overall info
    console.log(data[23]);
    // Arizona state name
    console.log(data[23].state_name);
    // Arizona total cases
    console.log(data[23].total_cases);
    // Arizona new cases
    console.log(data[23].new_cases);
    // Arizona new deaths
    console.log(data[23].new_deaths);
    // Arizona active cases
    console.log(data[23].active_cases);
    // Arizona last date record
    console.log(data[23].record_date);


     // South Carolina ------------------------------

    // South Carolina overall info
    console.log(data[24]);
    // South Carolina state name
    console.log(data[24].state_name);
    // South Carolina total cases
    console.log(data[24].total_cases);
    // South Carolina new cases
    console.log(data[24].new_cases);
    // South Carolina new deaths
    console.log(data[24].new_deaths);
    // South Carolina active cases
    console.log(data[24].active_cases);
    // South Carolina last date record
    console.log(data[24].record_date);


     // Alabama ------------------------------

    // Alabama overall info
    console.log(data[25]);
    // Alabama state name
    console.log(data[25].state_name);
    // Alabama total cases
    console.log(data[25].total_cases);
    // Alabama new cases
    console.log(data[25].new_cases);
    // Alabama new deaths
    console.log(data[25].new_deaths);
    // Alabama active cases
    console.log(data[25].active_cases);
    // Alabama last date record
    console.log(data[25].record_date);


     // Nevada ------------------------------

    // Nevada overall info
    console.log(data[26]);
    // Nevada state name
    console.log(data[26].state_name);
    // Nevada total cases
    console.log(data[26].total_cases);
    // Nevada new cases
    console.log(data[26].new_cases);
    // Nevada new deaths
    console.log(data[26].new_deaths);
    // Nevada active cases
    console.log(data[26].active_cases);
    // Nevada last date record
    console.log(data[26].record_date);


     // Mississippi ------------------------------

    // Mississippi overall info
    console.log(data[27]);
    // Mississippi state name
    console.log(data[27].state_name);
    // Mississippi total cases
    console.log(data[27].total_cases);
    // Mississippi new cases
    console.log(data[27].new_cases);
    // Mississippi new deaths
    console.log(data[27].new_deaths);
    // Mississippi active cases
    console.log(data[27].active_cases);
    // Mississippi last date record
    console.log(data[27].record_date);


     // Utah ------------------------------

    // Utah overall info
    console.log(data[28]);
    // Utah state name
    console.log(data[28].state_name);
    // Utah total cases
    console.log(data[28].total_cases);
    // Utah new cases
    console.log(data[28].new_cases);
    // Utah new deaths
    console.log(data[28].new_deaths);
    // Utah active cases
    console.log(data[28].active_cases);
    // Utah last date record
    console.log(data[28].record_date);


     // Oklahoma ------------------------------

    // Oklahoma overall info
    console.log(data[29]);
    // Oklahoma state name
    console.log(data[29].state_name);
    // Oklahoma total cases
    console.log(data[29].total_cases);
    // Oklahoma new cases
    console.log(data[29].new_cases);
    // Oklahoma new deaths
    console.log(data[29].new_deaths);
    // Oklahoma active cases
    console.log(data[29].active_cases);
    // Oklahoma last date record
    console.log(data[29].record_date);


     // Rhode Island ------------------------------

    // Rhode Island overall info
    console.log(data[30]);
    // Rhode Island state name
    console.log(data[30].state_name);
    // Rhode Island total cases
    console.log(data[30].total_cases);
    // Rhode Island new cases
    console.log(data[30].new_cases);
    // Rhode Island new deaths
    console.log(data[30].new_deaths);
    // Rhode Island active cases
    console.log(data[30].active_cases);
    // Rhode Island last date record
    console.log(data[30].record_date);


     // District of Columbia ------------------------------

    // District of Columbia overall info
    console.log(data[31]);
    // District of Columbia state name
    console.log(data[31].state_name);
    // District of Columbia total cases
    console.log(data[31].total_cases);
    // District of Columbia new cases
    console.log(data[31].new_cases);
    // District of Columbia new deaths
    console.log(data[31].new_deaths);
    // District of Columbia active cases
    console.log(data[31].active_cases);
    // District of Columbia last date record
    console.log(data[31].record_date);


     // Kentucky ------------------------------

    // Kentucky overall info
    console.log(data[32]);
    // Kentucky state name
    console.log(data[32].state_name);
    // Kentucky total cases
    console.log(data[32].total_cases);
    // Kentucky new cases
    console.log(data[32].new_cases);
    // Kentucky new deaths
    console.log(data[32].new_deaths);
    // Kentucky active cases
    console.log(data[32].active_cases);
    // Kentucky last date record
    console.log(data[32].record_date);


     // Oregon ------------------------------

    // Oregon overall info
    console.log(data[33]);
    // Oregon state name
    console.log(data[33].state_name);
    // Oregon total cases
    console.log(data[33].total_cases);
    // Oregon new cases
    console.log(data[33].new_cases);
    // Oregon new deaths
    console.log(data[33].new_deaths);
    // Oregon active cases
    console.log(data[33].active_cases);
    // Oregon last date record
    console.log(data[33].record_date);


     // Idaho ------------------------------

    // Idaho overall info
    console.log(data[34]);
    // Idaho state name
    console.log(data[34].state_name);
    // Idaho total cases
    console.log(data[34].total_cases);
    // Idaho new cases
    console.log(data[34].new_cases);
    // Idaho new deaths
    console.log(data[34].new_deaths);
    // Idaho active cases
    console.log(data[34].active_cases);
    // Idaho last date record
    console.log(data[34].record_date);


     // Minnesota ------------------------------

    // Minnesota overall info
    console.log(data[35]);
    // Minnesota state name
    console.log(data[35].state_name);
    // Minnesota total cases
    console.log(data[35].total_cases);
    // Minnesota new cases
    console.log(data[35].new_cases);
    // Minnesota new deaths
    console.log(data[35].new_deaths);
    // Minnesota active cases
    console.log(data[35].active_cases);
    // Minnesota last date record
    console.log(data[35].record_date);


     // Iowa ------------------------------

    // Iowa overall info
    console.log(data[36]);
    // Iowa state name
    console.log(data[36].state_name);
    // Iowa total cases
    console.log(data[36].total_cases);
    // Iowa new cases
    console.log(data[36].new_cases);
    // Iowa new deaths
    console.log(data[36].new_deaths);
    // Iowa active cases
    console.log(data[36].active_cases);
    // Iowa last date record
    console.log(data[36].record_date);


     // Delaware ------------------------------

    // Delaware overall info
    console.log(data[37]);
    // Delaware state name
    console.log(data[37].state_name);
    // Delaware total cases
    console.log(data[37].total_cases);
    // Delaware new cases
    console.log(data[37].new_cases);
    // Delaware new deaths
    console.log(data[37].new_deaths);
    // Delaware active cases
    console.log(data[37].active_cases);
    // Delaware last date record
    console.log(data[37].record_date);


     // Arkansas ------------------------------

    // Arkansas overall info
    console.log(data[38]);
    // Arkansas state name
    console.log(data[38].state_name);
    // Arkansas total cases
    console.log(data[38].total_cases);
    // Arkansas new cases
    console.log(data[38].new_cases);
    // Arkansas new deaths
    console.log(data[38].new_deaths);
    // Arkansas active cases
    console.log(data[38].active_cases);
    // Arkansas last date record
    console.log(data[38].record_date);


     // Kansas ------------------------------

    // Kansas overall info
    console.log(data[39]);
    // Kansas state name
    console.log(data[39].state_name);
    // Kansas total cases
    console.log(data[39].total_cases);
    // Kansas new cases
    console.log(data[39].new_cases);
    // Kansas new deaths
    console.log(data[39].new_deaths);
    // Kansas active cases
    console.log(data[39].active_cases);
    // Kansas last date record
    console.log(data[39].record_date);


     // New Mexico ------------------------------

    // New Mexico overall info
    console.log(data[40]);
    // New Mexico state name
    console.log(data[40].state_name);
    // New Mexico total cases
    console.log(data[40].total_cases);
    // New Mexico new cases
    console.log(data[40].new_cases);
    // New Mexico new deaths
    console.log(data[40].new_deaths);
    // New Mexico active cases
    console.log(data[40].active_cases);
    // New Mexico last date record
    console.log(data[40].record_date);


     // New Hampshire ------------------------------

    // New Hampshire overall info
    console.log(data[41]);
    // New Hampshire state name
    console.log(data[41].state_name);
    // New Hampshire total cases
    console.log(data[41].total_cases);
    // New Hampshire new cases
    console.log(data[41].new_cases);
    // New Hampshire new deaths
    console.log(data[41].new_deaths);
    // New Hampshire active cases
    console.log(data[41].active_cases);
    // New Hampshire last date record
    console.log(data[41].record_date);


     // Vermont ------------------------------

    // Vermont overall info
    console.log(data[42]);
    // Vermont state name
    console.log(data[42].state_name);
    // Vermont total cases
    console.log(data[42].total_cases);
    // Vermont new cases
    console.log(data[42].new_cases);
    // Vermont new deaths
    console.log(data[42].new_deaths);
    // Vermont active cases
    console.log(data[42].active_cases);
    // Vermont last date record
    console.log(data[42].record_date);


     // Maine ------------------------------

    // Maine overall info
    console.log(data[43]);
    // Maine state name
    console.log(data[43].state_name);
    // Maine total cases
    console.log(data[43].total_cases);
    // Maine new cases
    console.log(data[43].new_cases);
    // Maine new deaths
    console.log(data[43].new_deaths);
    // Maine active cases
    console.log(data[43].active_cases);
    // Maine last date record
    console.log(data[43].record_date);


     // Nebraska ------------------------------

    // Nebraska overall info
    console.log(data[44]);
    // Nebraska state name
    console.log(data[44].state_name);
    // Nebraska total cases
    console.log(data[44].total_cases);
    // Nebraska new cases
    console.log(data[44].new_cases);
    // Nebraska new deaths
    console.log(data[44].new_deaths);
    // Nebraska active cases
    console.log(data[44].active_cases);
    // Nebraska last date record
    console.log(data[44].record_date);


     // West Virgina ------------------------------

    // West Virgina overall info
    console.log(data[45]);
    // West Virgina state name
    console.log(data[45].state_name);
    // West Virgina total cases
    console.log(data[45].total_cases);
    // West Virgina new cases
    console.log(data[45].new_cases);
    // West Virgina new deaths
    console.log(data[45].new_deaths);
    // West Virgina active cases
    console.log(data[45].active_cases);
    // West Virgina last date record
    console.log(data[45].record_date);


     // Hawaii ------------------------------

    // Hawaii overall info
    console.log(data[46]);
    // Hawaii state name
    console.log(data[46].state_name);
    // Hawaii total cases
    console.log(data[46].total_cases);
    // Hawaii new cases
    console.log(data[46].new_cases);
    // Hawaii new deaths
    console.log(data[46].new_deaths);
    // Hawaii active cases
    console.log(data[46].active_cases);
    // Hawaii last date record
    console.log(data[46].record_date);


     // South Dakota ------------------------------

    // South Dakota overall info
    console.log(data[47]);
    // South Dakota state name
    console.log(data[47].state_name);
    // South Dakota total cases
    console.log(data[47].total_cases);
    // South Dakota new cases
    console.log(data[47].new_cases);
    // South Dakota new deaths
    console.log(data[47].new_deaths);
    // South Dakota active cases
    console.log(data[47].active_cases);
    // South Dakota last date record
    console.log(data[47].record_date);


     // Montana ------------------------------

    // Montana overall info
    console.log(data[48]);
    // Montana state name
    console.log(data[48].state_name);
    // Montana total cases
    console.log(data[48].total_cases);
    // Montana new cases
    console.log(data[48].new_cases);
    // Montana new deaths
    console.log(data[48].new_deaths);
    // Montana active cases
    console.log(data[48].active_cases);
    // Montana last date record
    console.log(data[48].record_date);


     // North Dakota ------------------------------

    // North Dakota overall info
    console.log(data[49]);
    // North Dakota state name
    console.log(data[49].state_name);
    // North Dakota total cases
    console.log(data[49].total_cases);
    // North Dakota new cases
    console.log(data[49].new_cases);
    // North Dakota new deaths
    console.log(data[49].new_deaths);
    // North Dakota active cases
    console.log(data[49].active_cases);
    // North Dakota last date record
    console.log(data[49].record_date);


     // Wyoming ------------------------------

    // Wyoming overall info
    console.log(data[50]);
    // Wyoming state name
    console.log(data[50].state_name);
    // Wyoming total cases
    console.log(data[50].total_cases);
    // Wyoming new cases
    console.log(data[50].new_cases);
    // Wyoming new deaths
    console.log(data[50].new_deaths);
    // Wyoming active cases
    console.log(data[50].active_cases);
    // Wyoming last date record
    console.log(data[50].record_date);












  })

  .catch(err => {
  console.log(err);
  });
// }

